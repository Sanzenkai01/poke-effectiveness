# Automação diária — configuração

Siga estes passos para habilitar o workflow que roda todo dia às 12:00 (America/Sao_Paulo) e atualiza `bosses/bosses.js` automaticamente.

1) Adicione secrets no GitHub (Settings → Secrets and variables → Actions):
   - `INSTAGRAM_USER` — usuário que fará login (ex: `selflessbot`).
   - `INSTAGRAM_PASS` — senha do usuário (recomenda-se usar uma conta usada apenas para automação).

2) Verifique se os arquivos `scripts/build_pokemon_hashes.py` e `scripts/story_boss_importer.py` existem no repositório (já incluídos).

3) Teste localmente antes de confiar na automação:
```powershell
python -m pip install -r scripts/requirements.txt
python scripts/build_pokemon_hashes.py
python scripts/story_boss_importer.py --image C:\caminho\para\status.jpg --auto-update
```

4) Teste o workflow manualmente no GitHub (Aba Actions → selecione "Daily Instagram Boss Import" → Run workflow).

5) Logs e troubleshooting:
   - O workflow irá instalar dependências, gerar pHash para as imagens em `/pokemons`, baixar o último story do usuário `pstoryonline` usando `instaloader`, identificar o Pokémon por pHash e atualizar `bosses/bosses.js` quando a confiança for suficiente.
   - Se o step de fetch do story falhar por 2FA ou bloqueio, verifique se a conta `selflessbot` consegue visualizar as stories do target manualmente.

6) Observações de segurança:
   - Não compartilhe `INSTAGRAM_PASS` publicamente; use os Secrets do GitHub.
   - Para maior segurança, é possível criar e usar um sessionfile do Instaloader em vez de senha, mas isso requer passos adicionais para upload seguro do arquivo.

Se quiser, eu posso: (A) criar os secrets por você (se você me der permissão para acessar o repositório), (B) gerar um PR com o workflow (se preferir revisar antes), ou (C) ativar imediatamente o workflow (já commitado). O que prefere?
