# Pokémon Type Effectiveness Chart

Site estático para GitHub Pages mostrando a efetividade dos tipos Pokémon, agora com ícones modernos, interatividade aprimorada e várias melhorias de acessibilidade e usabilidade.

## Como usar
- Clique em um tipo para ver contra quais outros ele é eficiente. Você pode selecionar até dois tipos simultaneamente para visualizar efetividades combinadas (multiplicadores 2×/4× são indicados); use o botão 🔄 ou `Esc` para resetar. Cores significam força, resistência, fraqueza, imunidade ou neutralidade — veja a legenda fixa acima do gráfico (valores neutros são esmaecidos). A última seleção é lembrada ao recarregar.
- Use as setas ou Tab/Shift+Tab para navegar entre os tipos e pressione `Enter` para selecionar/deselecionar.
- No painel de informações, clique em qualquer ícone para continuar a sequência.
- A busca permite correspondência "fuzzy" com destaque das letras correspondentes no nome e filtra conforme digita.
- Pressione `Esc` para resetar os destaques.
- Alternância de tema claro/escuro com o botão 🌓 no cabeçalho (preferência é lembrada).
- Botão 🔗 copia um link direto para o estado atual (tipos selecionados) para compartilhar.
- Botão 🖨️ abre diálogo de impressão para salvar/printar o gráfico.
- A página funciona offline como PWA e pode ser instalada em dispositivos móveis. Usuários são avisados quando uma nova versão é detectada pelo service worker.
- **Nova aba "Calculadora de Treinamento"**: selecione a faixa de nível e escolha se o alvo é um Pokémon normal ou shiny. A escolha altera o tipo de plate exibido (comum para normal, brilhante para shiny) e mostra os detalhes de blocos de 30 para shining plates. Ao mudar a faixa, o sistema automaticamente calcula quantos *itens do elemento*, *itens característicos* e *pedras do elemento* são necessários para as plates comuns daquela faixa. Golden coins continuam os mesmos. Campos adicionais permitem calcular materiais elementais para plates comuns e brilhantes.
- **Aba "Fósseis" integrada**: o minijogo de fósseis foi incorporado como uma aba no mesmo SPA. Cada ícone exibe seu nome abaixo e, ao selecionar um fóssil, os demais recebem um efeito de opacidade indicando se há combinação possível. O resultado permanece visível por alguns segundos (triplado em relação à versão anterior) e há uma legenda fixa informando que reviver um Pokémon custa **50K**. Ao gerar o resultado, miniaturas dos dois fósseis usados são mostradas. A seção inclui uma galeria de Pokémons obtidos, que, ao clicar, revelam os fósseis correspondentes, o DNA necessário e o custo. Textos, nomes e instruções são localizados em PT/EN.
- **Nova aba "Calculadora de Catchs"**: permite escolher entre Elemental, Story ou Ultra Ball (com imagens em `balls/`), selecionar o nível do Pokémon, e ver quantas balls são necessárias e quanto custarão – resultado destacado em caixa colorida. O log de balls usadas é processado para mostrar gastos, quantidades e o que ainda falta para completar a captura. Há também cálculo simples de preço de cards (sem nome) com imagem `card.png`.
- **Nova aba "Catch Calculator"**: sistema interativo para estimar quantidade e custo de pokébolas necessárias para capturar um Pokémon de determinado nível. O usuário seleciona dentre Ball Elemental, Story Ball ou Ultra Ball (com preços fixos) e escolhe o nível (5,20,30,...,Ace). A calculadora mostra o número de bolas e o custo correspondente. Há campo para inserir um log de partidas (texto contendo quantias gastas e o número de cada bola); o sistema extrai os valores e calcula o gasto total. Além disso há um pequeno módulo para calcular preço de cards inserindo nome, preço unitário e quantidade. Todas as funcionalidades são localizadas e ajustam-se ao tema do site.

## Desenvolvimento local

Para testar o site no seu computador basta servir os arquivos estáticos com qualquer servidor HTTP simples. Por exemplo:

```bash
# Python 3 (porta 8000 por padrão)
python -m http.server 8000
# ou, se preferir node/npm
npx http-server -c-1 .
```

Abra `http://localhost:8000` (ou a porta escolhida) no navegador e as mudanças nos arquivos serão refletidas após recarregar a página.

## Testes

No diretório raíz existe um pequeno script de verificação de dados que pode ser executado com Node.js:

```bash
node tests/test.js
```

Ele valida a estrutura de `types.json` e garante consistência básica.

1. Crie um repositório no GitHub.
2. Copie os arquivos para o repositório.
3. Nas configurações, habilite o GitHub Pages apontando para a branch `main` ou `gh-pages`.

Este site é totalmente estático e não requer backend. Ícones gerados automaticamente com um script Python (`make_icons.py`), armazenados em `icons-type/`. O visual dos botões foi inspirado nos símbolos coloridos da imagem de referência. O layout usa efeitos de **neumorfismo**, sombras suaves, gradientes e transições para uma aparência mais moderna. Os botões foram redesenhados para se destacarem no tema escuro, garantindo ótima visibilidade.

Recentemente adicionamos um botão de idioma (EN/PT) e fazemos uso da biblioteca GSAP para animações sutis de carregamento e transição de elementos, contribuindo para um visual mais dinâmico sem sobrecarregar a experiência. O código verifica a presença de GSAP e cai para transições CSS simples se a biblioteca não puder ser carregada, garantindo que todas as abas e funcionalidades continuam funcionando mesmo offline.
---
Desenvolvido com HTML, CSS e JavaScript simples.