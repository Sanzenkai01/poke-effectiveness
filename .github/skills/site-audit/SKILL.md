---
name: site-audit
description: "Audite a experiência, rotas e funções do Pstory Utilities; encontre lacunas de UX, erros funcionais e prioridades. Use quando pedirem análise ampla, revisão de qualidade ou o que falta no site."
---

# Auditoria do site

Use `.github/skills/Sanzenkai_Skills/references/project-map.md` para começar uma auditoria ampla. Não trate o mapa como prova da implementação atual.

1. Defina o escopo pela solicitação; para “o site todo”, inventarie rotas e funções públicas primeiro. Trate o design visual existente como baseline da auditoria, não como convite para redesenhar.
2. Siga a trilha **entrada → ação do usuário → lógica → dados/serviços → resultado/erro**. Para cada função verifique estados inicial, vazio, inválido, carregando e falha.
3. Priorize fluxos pelo impacto no usuário e frequência. Evite ler arquivos grandes integralmente; use busca por rota, seletor, evento ou símbolo e leia apenas o contexto necessário.
4. Compare páginas e interações com o padrão visual local (shell, telas análogas, tokens, espaçamento, tipografia, estados de foco) e verifique responsividade em tamanhos de tela representativos quando o navegador local estiver disponível. Para uma possível página nova, avalie se ela se integra ao padrão já estabelecido.
5. Separe achados confirmados de hipóteses e itens não testados. Cite arquivo e trecho/função, impacto, prioridade e próximo passo.
6. Use os validadores e smoke test documentados no `README.md` quando forem relevantes. Não marque cobertura de navegador, teclado ou viewport que não tenha sido exercitada.

Não altere código durante uma auditoria apenas diagnóstica. Não liste problemas hipotéticos como bugs confirmados, nem recomende uma reescrita geral sem evidência.

## Relato conciso

Comece pelos bloqueadores e riscos altos. Agrupe ocorrências repetidas por causa, não por arquivo. Em seguida resuma cobertura, pendências e o próximo passo de maior valor; evite transcrever o mapa do projeto.
