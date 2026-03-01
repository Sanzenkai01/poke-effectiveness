# Pokémon Type Effectiveness Chart

Site estático para GitHub Pages mostrando a efetividade dos tipos Pokémon, agora com ícones modernos e interatividade aprimorada.

## Como usar
- Clique em um tipo para ver contra quais outros ele é eficiente, quais são fortes contra ele, e veja linhas animadas conectando os tipos.
- Na lista de resultados, clique em qualquer ícone para expandir a cadeia (ex: clique em um tipo vulnerável para ver suas relações).
- Pressione `Esc` para resetar os destaques.
- Alternância de tema claro/escuro com o botão 🌓 no cabeçalho (preferência é lembrada).

## Hospedagem
1. Crie um repositório no GitHub.
2. Copie os arquivos para o repositório.
3. Nas configurações, habilite o GitHub Pages apontando para a branch `main` ou `gh-pages`.

Este site é totalmente estático e não requer backend. Ícones gerados automaticamente com um script Python (`make_icons.py`), armazenados em `icons/`. O visual dos botões foi inspirado nos símbolos coloridos da imagem de referência. O layout usa efeitos de **neumorfismo**, sombras suaves, gradientes e transições para uma aparência mais moderna. Os botões foram redesenhados para se destacarem no tema escuro, garantindo ótima visibilidade.
---
Desenvolvido com HTML, CSS e JavaScript simples.