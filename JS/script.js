const pecas = [
    "\u2656", "\u2658", "\u2657", "\u2655", "\u2654", "\u2657", "\u2658", "\u2656",
    "\u2659", "\u2659", "\u2659", "\u2659", "\u2659", "\u2659", "\u2659", "\u2659",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "\u265F", "\u265F", "\u265F", "\u265F", "\u265F", "\u265F", "\u265F", "\u265F",
    "\u265C", "\u265E", "\u265D", "\u265B", "\u265A", "\u265D", "\u265E", "\u265C"
];

const tabuleiro = document.getElementById("board");

for (let i = 0; i < 64; i++) {
    let casa = document.createElement("div");
    casa.classList.add("casa", (Math.floor(i / 8) + i) % 2 === 0 ? "branca" : "preta");
    casa.innerHTML = pecas[i];
    tabuleiro.appendChild(casa);
}