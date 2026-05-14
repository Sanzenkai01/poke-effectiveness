#!/usr/bin/env python3
"""
Busca a imagem do status (opcional via Instaloader), identifica o Pokémon por pHash
e atualiza o bloco `hoopaPortalTickerConfig` em `bosses/bosses.js`.

Uso (exemplos):
  # identificando de um arquivo local
  python scripts/story_boss_importer.py --image /caminho/para/status.jpg

  # tentando baixar stories com instaloader (requer instalação e credenciais)
  python scripts/story_boss_importer.py --instagram-target someuser --login-user myuser --login-pass mypass

Configuração recomendada:
  pip install -r scripts/requirements.txt

Observações:
  - O script depende de `scripts/pokemon_hashes.json`. Rode `build_pokemon_hashes.py` antes.
  - Atualiza `bosses/bosses.js` substituindo o bloco `hoopaPortalTickerConfig` para modo 'daily'.
"""
from pathlib import Path
import argparse
import json
import re
import sys
import logging

try:
    from PIL import Image
    import imagehash
except Exception:
    print("Dependências não encontradas. Rode: pip install -r scripts/requirements.txt")
    raise


ROOT = Path(__file__).resolve().parents[1]
HASHES_FILE = Path(__file__).resolve().parent / 'pokemon_hashes.json'
BUS_FILE = ROOT / 'bosses' / 'bosses.js'


def load_hashes():
    if not HASHES_FILE.exists():
        print(f"Hashes não encontrados: {HASHES_FILE}. Rode build_pokemon_hashes.py")
        sys.exit(1)
    with open(HASHES_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data


def compute_phash(path):
    return imagehash.phash(Image.open(path))


def find_best_matches(phash, hashes, top=5):
    results = []
    for name, hexhash in hashes.items():
        try:
            other = imagehash.hex_to_hash(hexhash)
            dist = phash - other
            results.append((name, dist))
        except Exception:
            continue
    results.sort(key=lambda x: x[1])
    return results[:top]


def update_hoopa_ticker(boss_names, file_path=BUS_FILE):
    text = file_path.read_text(encoding='utf-8')
    pattern = re.compile(r"const\s+hoopaPortalTickerConfig\s*=\s*\{(.*?)\};", re.S)
    m = pattern.search(text)
    if not m:
        raise RuntimeError('Não foi possível localizar hoopaPortalTickerConfig em ' + str(file_path))

    inner = m.group(1)

    prefix = 'Os Hoopa Portais de hoje sao:'
    cm = ''
    pm = re.search(r"prefix\s*:\s*['\"]([^'\"]*)['\"]", inner)
    if pm:
        prefix = pm.group(1)
    cm_m = re.search(r"customMessage\s*:\s*['\"]([^'\"]*)['\"]", inner)
    if cm_m:
        cm = cm_m.group(1)

    def js_quote(s):
        return "'" + s.replace("\\", "\\\\").replace("'", "\\'") + "'"

    bosses_js_list = ', '.join(js_quote(b) for b in boss_names)
    new_block = (
        "const hoopaPortalTickerConfig = {\n"
        f"  mode: 'daily',\n"
        f"  bosses: [{bosses_js_list}],\n"
        f"  prefix: {js_quote(prefix)},\n"
        f"  customMessage: {js_quote(cm)}\n"
        "};"
    )

    new_text = pattern.sub(new_block, text, count=1)
    file_path.write_text(new_text, encoding='utf-8')
    print(f"Atualizado {file_path} com bosses: {boss_names}")


def fetch_latest_story_with_instaloader(target_username, login_user=None, login_pass=None, out_dir=None):
    try:
        import instaloader
    except Exception:
        raise RuntimeError('Instaloader não instalado. Rode: pip install instaloader')

    L = instaloader.Instaloader(dirname_pattern=out_dir or 'tmp_story', download_videos=False, save_metadata=False)
    if login_user and login_pass:
        L.login(login_user, login_pass)

    profile = instaloader.Profile.from_username(L.context, target_username)
    stories = L.get_stories(userids=[profile.userid])
    latest_item = None
    for story in stories:
        for item in story.get_items():
            if latest_item is None or item.date_utc > latest_item.date_utc:
                latest_item = item

    if latest_item is None:
        raise RuntimeError('Nenhuma story encontrada para o usuário')

    # salva em out_dir
    saved = L.download_storyitem(latest_item, target=out_dir or 'tmp_story')
    # encontra arquivo mais recente em out_dir
    d = Path(out_dir or 'tmp_story')
    files = sorted([p for p in d.rglob('*') if p.suffix.lower() in ['.jpg', '.jpeg', '.png']], key=lambda p: p.stat().st_mtime, reverse=True)
    if not files:
        raise RuntimeError('Falha ao salvar story')
    return files[0]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--image', help='Caminho para imagem local do status')
    parser.add_argument('--instagram-target', help='Username alvo para baixar story')
    parser.add_argument('--login-user', help='Instaloader login user (opcional)')
    parser.add_argument('--login-pass', help='Instaloader login pass (opcional)')
    parser.add_argument('--threshold', type=int, default=12, help='Máxima distância Hamming aceitável (menor = mais parecido)')
    parser.add_argument('--top', type=int, default=5, help='Quantos resultados mostrar')
    parser.add_argument('--auto-update', action='store_true', help='Atualiza automaticamente bosses/bosses.js quando confiança alta')

    args = parser.parse_args()

    if not args.image and not args.instagram_target:
        print('Forneça --image ou --instagram-target')
        sys.exit(1)

    # se não existir hashes, solicitar execução
    hashes = load_hashes()

    image_path = None
    if args.image:
        image_path = Path(args.image)
        if not image_path.exists():
            print('Imagem não encontrada:', image_path)
            sys.exit(1)
    else:
        try:
            image_path = fetch_latest_story_with_instaloader(args.instagram_target, args.login_user, args.login_pass, out_dir='tmp_story')
            print('Story salva em', image_path)
        except Exception as e:
            print('Erro ao baixar story:', e)
            sys.exit(1)

    phash = compute_phash(image_path)
    print('phash input:', str(phash))

    matches = find_best_matches(phash, hashes, top=args.top)
    print('Matches:')
    for name, dist in matches:
        print(f"  {name}  (dist={dist})")

    best_name, best_dist = matches[0]
    readable_name = Path(best_name).stem.replace('-', ' ').replace('_', ' ')

    if best_dist <= args.threshold:
        print(f"Combinação encontrada: {readable_name} (dist={best_dist})")
        if args.auto_update:
            update_hoopa_ticker([readable_name])
        else:
            print('Use --auto-update para gravar automaticamente em bosses/bosses.js')
    else:
        print('Confiança baixa — nenhum update realizado.')


if __name__ == '__main__':
    main()
