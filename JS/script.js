const tabuleiro = document.getElementById('tabuleiro');

const pecas = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
];

for (let linha = 0; linha < 8; linha++) {
    for (let coluna = 0; coluna < 8; coluna++) {
        const casa = document.createElement("div");
        casa.classList.add("casa");

        const cor = (linha + coluna) % 2 === 0 ? "clara" : "escura";
        casa.classList.add(cor);

        const peca = pecas[linha][coluna];
        casa.innerHTML = peca;

        if (linha === 1 && coluna === 3) {
            casa.id = "pecaMovel";
        }

        tabuleiro.appendChild(casa);
    }
}

document.addEventListener("click", function (event) {
    const peca = document.getElementById("pecaMovel");
    if (event.target === peca) {
        let x = Math.random() * (window.innerWidth - peca.clientWidth);
        let y = Math.random() * (window.innerHeight - peca.clientHeight);
        peca.classList.add("movel");
        peca.style.left = x + "px";
        peca.style.top = y + "px";
    }
});
