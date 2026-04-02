# Poke Effectiveness

Aplicacao estatica para consultar efetividade de tipos Pokemon e utilitarios do servidor, como:

- calculadora de treinamento
- calculadora de catch
- combinacoes de fosseis
- recomendacoes para Bosses
- painel de streamers

## Como rodar

Como o projeto usa `fetch()` e pode registrar service worker, abra por HTTP local em vez de `file://`.

Exemplo com Python:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Estrutura principal

- `index.html`: pagina principal e estrutura das abas
- `script.js`: logica principal da aplicacao
- `styles.css`: estilos globais
- `types.json`: dados de efetividade, imunidades e resistencias
- `bosses/bosses.js`: dados e interface do modulo Bosses
- `sw.js`: service worker para cache offline quando habilitado

## Manutencao

- Os dados de tipos ficam em `types.json`. Se esse arquivo falhar ao carregar, a interface mostra uma mensagem de erro e permite tentar novamente.
- O service worker esta desabilitado por padrao em `script.js`. Ative apenas quando quiser publicar com cache revisado.
- Nao deixe credenciais de API no front-end. Consultas sensiveis devem passar por backend ou funcao serverless.

## Limpeza do repositorio

- Arquivos temporarios locais devem seguir o padrao `tmp_*` e ficam ignorados pelo `.gitignore`.
- Se precisar validar scripts rapidamente, prefira ferramentas locais e nao commite esses arquivos auxiliares.
