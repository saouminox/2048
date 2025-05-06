const gameContainer = document.getElementById('game-container');
let board;
let score = 0;

function init() {
    board = createBoard();
    renderBoard();
    addEventListeners();
    generateNewTile();
    generateNewTile();
}

function createBoard() {
    return Array.from({ length: 4 }, () => Array(4).fill(0));
}

function renderBoard() {
    gameContainer.innerHTML = '';
    board.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        row.forEach(value => {
            const tileDiv = document.createElement('div');
            tileDiv.classList.add('tile');
            tileDiv.textContent = value !== 0 ? value : '';
            rowDiv.appendChild(tileDiv);
        });
        gameContainer.appendChild(rowDiv);
    });
}

function generateNewTile() {
    const emptyTiles = [];
    board.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            if (value === 0) {
                emptyTiles.push({ row: rowIndex, col: colIndex });
            }
        });
    });
    if (emptyTiles.length > 0) {
        const { row, col } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
        board[row][col] = Math.random() < 0.9 ? 2 : 4;
        renderBoard();
    }
}

function addEventListeners() {
    document.addEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
    switch (event.key) {
        case 'ArrowUp':
            moveTiles('up');
            break;
        case 'ArrowDown':
            moveTiles('down');
            break;
        case 'ArrowLeft':
            moveTiles('left');
            break;
        case 'ArrowRight':
            moveTiles('right');
            break;
    }
}

function moveTiles(direction) {
    // Logic for moving tiles based on the direction
    // Update the board and score accordingly
    // Call renderBoard() and generateNewTile() after moving
}

init();