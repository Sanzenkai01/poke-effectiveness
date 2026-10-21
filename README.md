# Poke Effectiveness

Aplicacao estatica para consultar efetividade de tipos Pokemon e utilitarios do servidor, como:

- calculadora de treinamento
- calculadora de catch
- combinacoes de fosseis
- recomendacoes para Bosses
- painel de streamers

## Como rodar

Como o projeto usa `fetch()` e pode registrar service worker, abra por HTTP local em vez de `file://`.

Exemplo com o servidor SPA deste repositorio:

```bash
python serve_spa.py 8001
```

Depois acesse `http://127.0.0.1:8001`.

## Estrutura principal

- `index.html`: pagina principal e estrutura das abas
- `script.js`: logica principal da aplicacao
- `styles.css`: estilos globais
- `types.json`: dados de efetividade, imunidades e resistencias
- `js/`: modulos compartilhados do site
- `js/pokemon-search.js`: normalizacao e priorizacao da busca compartilhada de Pokemon
- `scripts/`: validadores, automacoes e utilitarios de manutencao
- `bosses/bosses.html`: conteudo do painel principal de Bosses
- `bosses/bosses.js`: dados e comportamento do modulo Bosses
- `sw.js`: service worker para cache offline quando habilitado

## Convencoes de organizacao

- Pastas de paginas publicas tambem definem URLs; mantenha seus nomes e caminhos estaveis ou crie redirecionamentos antes de mover uma rota.
- Mantenha os arquivos especificos de cada pagina juntos na pasta da rota canonica: `index.html` preserva a URL publica, enquanto o conteudo parcial do painel e seu CSS usam o nome do modulo (por exemplo, `tipos/effectiveness.html` para `/tipos`).
- O shell declara `data-panel-fragment-path` em `app.html` e carrega os parciais sob demanda; quando o nome do painel diferir da rota, esse atributo aponta explicitamente para a pasta da pagina. Nao renomeie pastas publicas sem preservar os deep links e aliases existentes.
- Recursos compartilhados permanecem em `js/`, `styles.css` e `wiki-theme.css`; controladores globais nao devem ser duplicados dentro das pastas de rota.
- `script.js` ainda concentra logica legada; extraia novas funcionalidades em modulos de dominio pequenos, sem dividir o arquivo por tamanho apenas.
- Mantenha dados e imagens junto do dominio que os consome, salvo quando houver um catalogo compartilhado claro.
- Scripts de validacao e manutencao ficam em `scripts/`; arquivos temporarios e logs locais nao devem ficar na raiz nem ser versionados.

## Manutencao

- Os dados de tipos ficam em `types.json`. Se esse arquivo falhar ao carregar, a interface mostra uma mensagem de erro e permite tentar novamente.
- O service worker esta desabilitado por padrao em `script.js`. Ative apenas quando quiser publicar com cache revisado.
- Nao deixe credenciais de API no front-end. Consultas sensiveis devem passar por backend ou funcao serverless.
- Validacoes uteis antes de publicar:

```bash
node scripts/validate_panel_assets.js
node scripts/validate_catalog_data.js
node scripts/validate_boss_registry.js
node scripts/smoke_routes.js http://127.0.0.1:8001
```

## Limpeza do repositorio

- Arquivos temporarios locais devem seguir o padrao `tmp_*` ou ficar em `tmp/`; ambos ficam ignorados pelo `.gitignore`.
- Utilitarios locais para consultar o catalogo de Pokemon ficam em `scripts/` e resolvem os dados a partir do proprio arquivo.
- Se precisar validar scripts rapidamente, prefira ferramentas locais e nao commite esses arquivos auxiliares.
