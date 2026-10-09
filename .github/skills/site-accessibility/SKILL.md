---
name: site-accessibility
description: "Revise ou corrija acessibilidade e usabilidade de teclado no Pstory Utilities, incluindo semântica, foco, formulários, contraste e movimento reduzido."
---

# Acessibilidade prática

- Inspecione o fluxo solicitado com teclado: ordem de foco, visibilidade do foco, operação de controles, Escape/fechamento e retorno de foco em diálogos/menus.
- Confira nomes acessíveis, rótulos e instruções de campos, semântica de botões/links, relações entre abas e painéis e anúncios de estados dinâmicos.
- Não dependa só de cor para comunicar estado. Verifique zoom/reflow e controles em largura móvel.
- Respeite `prefers-reduced-motion`; não remova animações globalmente se o fluxo existente já oferece tratamento específico.
- Preserve textos e atributos necessários a leitores de tela. Corrija a origem sem adicionar ARIA redundante a elementos nativos.
- Mantenha a aparência e os padrões de foco/feedback já estabelecidos. Em páginas novas, use controles e componentes acessíveis existentes; não crie um padrão visual isolado para estados acessíveis.
- Teste o comportamento real no navegador quando disponível; inspeção estática sozinha não demonstra conformidade.

Faça a menor correção que resolva a barreira identificada e valide o fluxo e as rotas afetadas. Antes de testar uma instância local no navegador, siga o procedimento de limpeza de cache e sincronização das abas em `Sanzenkai_Skills`; ao modificar código do site, aplique também o checklist de build/cache. Registre limitações de testes automatizados ou manuais sem declarar conformidade WCAG sem avaliação adequada.
