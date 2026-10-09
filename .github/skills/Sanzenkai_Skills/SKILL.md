---
name: Sanzenkai_Skills
description: "Implemente e evolua páginas e funções do Pstory Utilities com práticas de engenharia sênior. Preserve o padrão visual atual em páginas existentes e novas, salvo pedido explícito de redesign."
---

# Engenharia de qualidade para o site

## Antes de editar

1. Traduza o pedido em comportamento observável e critérios de aceite; identifique a rota, os usuários/estados afetados e as restrições explícitas.
2. Siga o fluxo real da rota até o HTML, inicialização, handlers, dados e estilos. Busque símbolos e referências e leia trechos pequenos; `script.js` e as folhas de estilo são grandes.
3. Identifique se a tela é um painel do shell, uma página HTML independente ou uma rota que carrega o shell. Verifique deep links, parâmetros de URL, navegação, estado persistido, carregamento e erros antes de mudar contratos.
4. Localize uma tela existente análoga e observe a versão atual do layout, hierarquia, tipografia, cores, espaçamento, componentes e estados responsivos. Preserve-a como baseline visual.

## Implementar ou alterar páginas

- **Padrão visual é invariável por default:** reproduza o design existente para todas as páginas, inclusive novas. Só altere a identidade ou redesenhe quando o pedido solicitar. Uma feature nova pode introduzir conteúdo e controles, não um sistema visual novo.
- Em página nova, reutilize navegação, shell/loader, componentes e estilos da tela análoga; acrescente somente os elementos necessários. Mantenha as convenções de rota, nomes, arquivos, localização pt-BR e metadados existentes.
- Prefira tokens CSS e classes/componentes compartilhados. Antes de acrescentar CSS, procure regras/tokens existentes e estilos por página; evite estilos inline, overrides globais, valores visuais duplicados e seletor amplo que vaze para outras rotas.
- Construa o fluxo inteiro, incluindo carregamento, resultado, lista vazia, entrada inválida e erro recuperável quando aplicável. Valide os dados no limite de entrada, mostre falhas reais e não use fallback que pareça sucesso.
- Use HTML semântico e controles nativos; forneça rótulos, foco visível, teclado e nomes acessíveis. Não dependa exclusivamente de cor, posição, hover ou ícones para comunicar significado.
- Faça primeiro a menor mudança completa e coesa. Separe refatorações, dependências e limpeza que não sejam necessárias ao pedido; não duplique lógica/dados nem amplie escopo sem motivo documentado.

## Validação e revisão

1. Rode primeiro o teste/validador mais próximo da mudança. Alterações em rota, shell, inicialização ou carregamento também exigem `scripts/smoke_routes.js` contra servidor HTTP local. Alterações visuais devem ser comparadas com a página análoga em viewport desktop e móvel no navegador, quando disponível.
2. Confira uma regressão por categoria aplicável: fluxo funcional, rota/deep link, persistência, responsividade, teclado/acessibilidade, carregamento/erro e consumidores de dados compartilhados.
3. Leia o diff final: remova mudanças acidentais, CSS redundante e incompatibilidades. Execute quaisquer verificações adicionais se o risco ou o resultado indicar necessidade.
4. Informe evidências reais, comandos e limitações. Diferencie o que foi testado do que foi apenas inspecionado; não declare equivalência visual ou acessibilidade validada sem conferir.

## Invariantes

- Servir por HTTP local, não `file://`, pois a aplicação usa `fetch()`.
- Preservar deep links e parâmetros de rota; a raiz redireciona e as páginas internas podem carregar `app.html` pelo `route-loader.js`.
- Tratar conteúdo de usuário e dados remotos como não confiáveis; usar APIs seguras de DOM ou o escaping já padronizado, nunca concatenar conteúdo não confiável em HTML.
- Não desabilitar mensagens de erro, estados vazios, retry ou alternativas acessíveis existentes para fazer um teste passar.
- Respeitar `prefers-reduced-motion`, preferências visuais persistidas e layout móvel existentes.
- Evitar reformatar arquivos grandes ou misturar limpeza não relacionada à correção.

Leia `references/project-map.md` apenas quando a tarefa exigir uma visão ampla dos módulos; para uma correção localizada, a busca por referências no código é suficiente.
