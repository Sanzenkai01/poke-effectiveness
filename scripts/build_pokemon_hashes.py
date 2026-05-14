#!/usr/bin/env python3
"""
Gera hashes perceptuais (pHash) para as imagens em /pokemons
Saída: scripts/pokemon_hashes.json

Uso:
  python scripts/build_pokemon_hashes.py
"""
from pathlib import Path
import json
import sys

try:
    from PIL import Image
    import imagehash
except Exception as exc:
    print("Dependências não encontradas. Rode: pip install -r scripts/requirements.txt")
    raise


ROOT = Path(__file__).resolve().parents[1]
POKEMON_DIR = ROOT / 'pokemons'
OUT_FILE = Path(__file__).resolve().parent / 'pokemon_hashes.json'


def build_hashes():
    if not POKEMON_DIR.exists():
        print(f"Diretório não encontrado: {POKEMON_DIR}")
        sys.exit(1)

    images = sorted(POKEMON_DIR.glob('*.png'))
    data = {}

    for img in images:
        try:
            h = imagehash.phash(Image.open(img))
            data[img.name] = str(h)
            print(f"{img.name}: {str(h)}")
        except Exception as e:
            print(f"Erro ao processar {img}: {e}")

    with open(OUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"Hashes gravados em {OUT_FILE}")


if __name__ == '__main__':
    build_hashes()
