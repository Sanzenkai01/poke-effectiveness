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

## Memória de tarefa e conclusão

- Se o pedido tiver mais de um requisito, etapa, página ou resultado, transforme cada item pedido em uma checklist curta de aceite antes de implementar; registre dependências e validações necessárias, não apenas arquivos a editar.
- Atualize o estado dos itens ao longo do trabalho. Ao mudar de fase ou recuperar contexto compactado, releia o pedido original e reconcilie cada requisito com alterações reais, diff e resultados dos testes. Preserve decisões e pendências concretas; não marque como feito um item apenas planejado.
- Não pare após a primeira parte funcional: implemente todas as partes solicitadas, valide cada uma proporcionalmente ao risco e revise a checklist completa antes de finalizar. Se uma etapa falhar, tente corrigir ou usar outra verificação apropriada; se permanecer bloqueada, identifique o impedimento e o trabalho não concluído claramente.
- Mantenha o registro proporcional ao escopo: uma checklist no contexto/todo da sessão é suficiente para tarefas comuns. Não crie arquivos de plano ou diário no repositório, nem alegue memória persistente entre conversas quando ela não estiver disponível; só persista decisões de projeto em documentação se isso fizer parte do pedido.
- **Finalize de forma explícita:** após concluir a checklist, testes e revisão do diff, envie o resumo final e encerre o turno; use a ação explícita de conclusão do host (por exemplo, `task_complete`) se estiver disponível. Não continue raciocinando, planejando ou fazendo chamadas depois da resposta final. Não reporte sucesso se requisitos permanecerem pendentes.

## Teste local no navegador e cache

Sempre que o usuário pedir para testar o site localmente no navegador, antes de avaliar o resultado:

1. Identifique a URL/origem local do site e as outras instâncias/abas abertas do mesmo projeto que estejam visíveis nas ferramentas de navegador desta sessão. Origem inclui protocolo, host e porta; `127.0.0.1:8001` e `127.0.0.1:8002` são origens distintas.
2. Para cada origem do projeto que será usada no teste, limpe apenas o Cache Storage dessa origem e desregistre os service workers dessa origem com a ferramenta de navegador disponível. Não limpe cookies, `localStorage`, `sessionStorage`, permissões ou dados de outros sites; só limpe estado persistido adicional se o pedido de teste exigir redefinir esse estado.
3. Recarregue as abas/instâncias abertas do mesmo site para que não continuem exibindo o documento ou worker antigo; faça recarga forçada quando a ferramenta permitir. Então abra/valide a rota local pedida e observe erros de rede/console quando disponíveis.
4. Se outra aba/origem não estiver exposta ou não houver ferramenta para limpar Cache Storage/service workers ou forçar recarga, não alegue que ela foi limpa: teste as instâncias acessíveis e informe objetivamente o que precisa ser recarregado manualmente.
5. Não feche abas, não encerre processos/servidores e não limpe caches globais do navegador. Se já houver um servidor local do projeto utilizável, prefira-o em vez de iniciar uma cópia numa porta diferente; nunca mate processos pelo nome.

## Implementar ou alterar páginas

- **Padrão visual é invariável por default:** reproduza o design existente para todas as páginas, inclusive novas. Só altere a identidade ou redesenhe quando o pedido solicitar. Uma feature nova pode introduzir conteúdo e controles, não um sistema visual novo.
- Em página nova, reutilize navegação, shell/loader, componentes e estilos da tela análoga; acrescente somente os elementos necessários. Mantenha as convenções de rota, nomes, arquivos, localização pt-BR e metadados existentes.
- Prefira tokens CSS e classes/componentes compartilhados. Antes de acrescentar CSS, procure regras/tokens existentes e estilos por página; evite estilos inline, overrides globais, valores visuais duplicados e seletor amplo que vaze para outras rotas.
- Construa o fluxo inteiro, incluindo carregamento, resultado, lista vazia, entrada inválida e erro recuperável quando aplicável. Valide os dados no limite de entrada, mostre falhas reais e não use fallback que pareça sucesso.
- Use HTML semântico e controles nativos; forneça rótulos, foco visível, teclado e nomes acessíveis. Não dependa exclusivamente de cor, posição, hover ou ícones para comunicar significado.
- Faça primeiro a menor mudança completa e coesa. Separe refatorações, dependências e limpeza que não sejam necessárias ao pedido; não duplique lógica/dados nem amplie escopo sem motivo documentado.

## Cache e identificação da build

- Para toda alteração de código publicada no site (funcionalidade, correção ou página nova), incremente **uma vez por tarefa coesa** o número sequencial mostrado no rodapé do shell em `app.html`; preserve o formato `Desenvolvido por Liniko<br>Build vNNNN - AAAA` e atualize o ano quando a build mudar de ano. A referência atual no repositório é `Build v1030 - 2026`, portanto a próxima alteração de código deve usar `Build v1031 - 2026`.
- Atualize `?v=` apenas nos arquivos realmente modificados e nos pontos centrais que precisam apontar para eles. Para uma página independente, limite o bump ao HTML e aos recursos dessa página; para recursos compartilhados do shell, atualize a referência central em `app.html` e a entrada correspondente de `sw.js` (`APP_SHELL`), quando presente. Não altere os cache-busters de todas as páginas de rota só porque um recurso compartilhado mudou ou porque uma versão está sendo padronizada.
- Antes de editar referências, trace quem carrega o recurso. Atualize uma página consumidora somente se ela própria mudou ou se precisa comprovadamente buscar uma nova versão do recurso; não propague um bump global por conveniência. Se a alteração em um carregador compartilhado realmente exigir atualizar vários consumidores, limite a lista aos consumidores afetados e justifique essa abrangência no resumo. Se mudar `app.html`, confira também `APP_SHELL_VERSION` em `route-loader.js`; se mudar `route-loader.js`, faça bump apenas nos HTMLs consumidores que precisem obter essa nova versão.
- Não confunda o rótulo da build com o identificador/cache runtime do service worker: `sw.js` calcula normalmente o cache pela hash de `APP_SHELL`. Preserve esse mecanismo; atualize `APP_SHELL` e seus URLs versionados somente para assets relevantes. Só faça bump manual de fallback/versão fixa do cache se o comportamento e os consumidores encontrados exigirem.
- Não incremente o número da build, nem altere assets servidos, em tarefas exclusivamente de documentação, instruções do agente/skills ou análise sem edição. Nunca reescreva mudanças preexistentes de outro autor; leia o estado atual e atualize somente as referências necessárias.

## Validação e revisão

1. Rode primeiro o teste/validador mais próximo da mudança. Alterações em rota, shell, inicialização ou carregamento também exigem `scripts/smoke_routes.js` contra servidor HTTP local. Para teste manual local no navegador, aplique antes o procedimento de limpeza de cache e sincronização das instâncias acima. Não faça checagem mobile por padrão; valide a responsividade quando solicitada ou quando a mudança afetar especificamente o layout responsivo.
2. Confira uma regressão por categoria aplicável: fluxo funcional, rota/deep link, persistência, responsividade, teclado/acessibilidade, carregamento/erro e consumidores de dados compartilhados.
3. Confirme no diff que o número da build foi incrementado uma vez e que não restaram referências antigas nos arquivos/páginas que precisam buscar os assets alterados. Confira também que páginas não modificadas não receberam bumps em massa. Leia o diff final: remova mudanças acidentais, CSS redundante e incompatibilidades. Execute quaisquer verificações adicionais se o risco ou o resultado indicar necessidade.
4. Informe evidências reais, comandos e limitações. Diferencie o que foi testado do que foi apenas inspecionado; não declare equivalência visual ou acessibilidade validada sem conferir.

## Invariantes

- Servir por HTTP local, não `file://`, pois a aplicação usa `fetch()`.
- Preservar deep links e parâmetros de rota; a raiz redireciona e as páginas internas podem carregar `app.html` pelo `route-loader.js`.
- Tratar conteúdo de usuário e dados remotos como não confiáveis; usar APIs seguras de DOM ou o escaping já padronizado, nunca concatenar conteúdo não confiável em HTML.
- Não desabilitar mensagens de erro, estados vazios, retry ou alternativas acessíveis existentes para fazer um teste passar.
- Respeitar `prefers-reduced-motion`, preferências visuais persistidas e layout móvel existentes.
- Evitar reformatar arquivos grandes ou misturar limpeza não relacionada à correção.

Leia `references/project-map.md` apenas quando a tarefa exigir uma visão ampla dos módulos; para uma correção localizada, a busca por referências no código é suficiente.
