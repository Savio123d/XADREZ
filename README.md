# Tabuleiro de Xadrez Interativo com JavaScript

## 📝 Descrição
Este é um projeto simples que renderiza um tabuleiro de xadrez completo no navegador utilizando apenas HTML, CSS e JavaScript puro. O objetivo é demonstrar a manipulação do DOM para criar elementos dinamicamente e adicionar interatividade básica.

## ⚙️ Principais Funcionalidades
- **Renderização Dinâmica do Tabuleiro**: O tabuleiro 8x8 é gerado via JavaScript, não sendo necessário criar 64 `divs` manualmente no HTML.
- **Posicionamento de Peças**: As peças de xadrez (pretas e brancas) são inseridas em suas posições iniciais usando caracteres Unicode.
- **Interatividade de Peça**: Como exemplo de interatividade, uma peça específica (o peão preto em d7) pode ser movida para uma posição aleatória na tela ao ser clicada.

## 💻 Tecnologias e Linguagens Utilizadas
- **HTML5**: Estrutura base da página.
- **CSS3**: Estilização do tabuleiro, das casas e das peças.
- **JavaScript (Vanilla)**: Lógica para a criação do tabuleiro, posicionamento das peças e interatividade de clique.

## 📁 Estrutura de Pastas e Arquivos
O projeto está organizado da seguinte forma:
```
/
├── CSS/
│   └── style.css
├── JS/
│   └── script.js
└── index.html
```
- `index.html`: Arquivo principal que estrutura a página.
- `CSS/style.css`: Folha de estilos para o tabuleiro e seus componentes.
- `JS/script.js`: Script responsável por toda a lógica e interatividade do projeto.

## ▶️ Passo a Passo de Execução
Para visualizar o projeto, basta seguir os passos abaixo:
1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em qualquer navegador de sua preferência (Chrome, Firefox, etc.).
3. O tabuleiro de xadrez será exibido na tela.

## 💡 Exemplo de Uso
Ao abrir o `index.html`, você verá um tabuleiro de xadrez padrão. Clique no peão preto localizado na quarta coluna (coluna 'd') da segunda fileira para vê-lo se mover para uma posição aleatória na tela.
