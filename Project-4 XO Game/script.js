const cell = document.querySelectorAll(".cell");
const statusBar = document.querySelector("#status");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 8],
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "x";
let running = false;

initial();

function initial() {
    cell.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusBar.textContent = "${currentPlayer}'s Turn";
}
function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");
    if (options[cellIndex] != "" || !running) {
        return;
    }
    updateCell(this, cellIndex);
    changePlayer();
    checkWinner();
}
function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer() {
    currentPlayer = (currentPlayer == "x") ? "o" : "x";
    statusBar.textContent = "${currentPlayer}'s Turn";
}
function checkWinner() {

}
function restartGame() {

}
