# Mapa de navegação e responsabilidades do Sanzenkai

Visão resumida para orientar a exploração; confirme os nomes, o conteúdo atual e o carregamento no código antes de alterar um fluxo.

## Entrada e shell

- `index.html`: interpreta atalhos/parâmetros e redireciona à ferramenta correspondente.
- `app.html`: shell, navegação, estado inicial e placeholders dos painéis.
- `route-loader.js`: carrega o shell para páginas de rota.
- `script.js`: controlador legado compartilhado e lógica de várias ferramentas. É grande; busque símbolos e limites de função antes de abrir trechos.
- `styles.css` e `wiki-theme.css`: estilos globais e de apresentação.

## Padrão visual e novas páginas

- Trate a interface atualmente publicada e a tela existente mais próxima como referência visual. A solicitação de uma funcionalidade ou página nova não autoriza, por si só, um redesign.
- Reutilize o shell, navegação, hierarquia, tokens CSS, componentes e convenções responsivas existentes. Confirme no código a rota e o padrão análogo antes de criar HTML ou estilos.
- As duas folhas CSS são extensas e contêm estilos globais e de módulos. Pesquise tokens/seletores relevantes antes de editar; limite novos estilos à página/componente e evite overrides globais ou estilos inline.
- Preserve o visual atual por padrão; só desvie dele mediante pedido explícito. Quando não for possível reproduzir um padrão existente, registre a lacuna e escolha a solução mais próxima, sem criar uma linguagem visual alternativa.

## Ferramentas e conteúdo

Os painéis do shell cobrem consulta de tipos, fósseis, treinamento/boost, captura, bosses e recomendações, Pokédex, times e construção de times/caçadas, mapas, pesca, clãs, profissões, missões/operações policiais, Rotom Phone, fragmentação shiny, passe de batalha, streamers e conteúdo da comunidade. Várias rotas também têm páginas HTML próprias; confirme se a rota é um fragmento do shell ou uma página independente antes de editar.

## Dados e automações

- `types.json` e outros JSONs/catalogadores alimentam a interface. Localize o consumidor antes de modificar o formato dos dados.
- `bosses/` contém recomendações e catálogo de bosses; `js/` contém módulos compartilhados, entre eles os de streamers, visitas e recomendações.
- `scripts/validate_catalog_data.js` e `scripts/validate_boss_registry.js` verificam catálogos; `scripts/smoke_routes.js` verifica rotas servidas.
- `.github/workflows/` mantém rotinas de atualização de conteúdo e status. Mudanças em formatos compartilhados podem afetar automações e site: verifique ambos.

## Roteiro para uma auditoria ampla

1. Enumerar rotas públicas e painéis a partir de `index.html`, `app.html` e páginas HTML, sem assumir que diretórios têm comportamento idêntico.
2. Seguir cada interação até controlador, dados e integrações; registrar para cada ferramenta entrada, resultado, estado vazio/erro e persistência, quando houver.
3. Usar servidor HTTP e smoke test para validar rotas. Testar interações e visual responsivo no navegador quando disponíveis.
4. Priorizar erros que impeçam tarefas, links/rotas quebrados, dados incorretos, teclado/leitores de tela, layout móvel e custo de carregamento. Anexar evidência e impacto, sem afirmar cobertura não realizada.
