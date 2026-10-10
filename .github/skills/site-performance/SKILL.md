---
name: site-performance
description: "Investigue e otimize desempenho percebido, carregamento, trabalho de JavaScript ou imagens do Pstory Utilities sem regressões funcionais."
---

# Desempenho sem regressões

1. Identifique e meça o custo no fluxo e dispositivo/rede relevantes antes de otimizar; diferencie hipótese de gargalo observado. Preserve a hierarquia visual e os estados responsivos enquanto otimiza.
2. Examine a cadeia de rota e carregamento: shell, CSS, scripts, dados, imagens e dependências remotas. Localize referências; não leia ou reescreva arquivos gigantes integralmente.
3. Prefira reduzir trabalho e payload no caminho inicial, carregar recursos sob demanda e evitar recomputação, mantendo fallback e estados de erro.
4. Para mudanças em carregamento compartilhado/cache, verifique deep links, navegação entre painéis, recarga e atualização offline/service worker, se aplicável. Antes de testes locais no navegador, siga a limpeza por origem e recarregue as instâncias abertas conforme `Sanzenkai_Skills`.
5. Ao publicar alteração de código, siga `Sanzenkai_Skills` para atualizar somente os cache-busters dos arquivos/páginas modificados e das referências centrais necessárias, sem bump em massa de rotas não afetadas, e incrementar uma vez a build do rodapé. Compare a mesma métrica antes/depois quando possível e rode os validadores relevantes. Não declare ganho sem medida nem remova recurso necessário por tamanho.

Evite micro-otimizações sem evidência, novas dependências e alterações de versão/cache que não correspondam ao recurso alterado. Não sacrifique consistência visual, acessibilidade ou clareza de estados por um ganho não medido.
