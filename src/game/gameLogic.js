const GRID_SIZE = 4;
const INITIAL_TILES = 2;
const TILE_VALUES = [2, 4];

let grid = [];
let score = 0;
let hasMergedThisMove = [];

function initGame() {
    grid = createEmptyGrid();
    addRandomTile();
    addRandomTile();
    updateGameState();
}

function createEmptyGrid() {
    return Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(0));
}

function addRandomTile() {
    const emptyTiles = [];
    for (let row = 0; row < GRID_SIZE; row++) {
        for (let col = 0; col < GRID_SIZE; col++) {
            if (grid[row][col] === 0) {
                emptyTiles.push({ row, col });
            }
        }
    }
    if (emptyTiles.length > 0) {
        const { row, col } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
        grid[row][col] = TILE_VALUES[Math.floor(Math.random() * TILE_VALUES.length)];
    }
}

function updateGameState() {
    // Update the UI and score display
}

function move(direction) {
    resetMergeFlags();
    let moved = false;

    switch (direction) {
        case 'up':
            for (let col = 0; col < GRID_SIZE; col++) {
                moved |= moveColumn(col);
            }
            break;
        case 'down':
            for (let col = 0; col < GRID_SIZE; col++) {
                moved |= moveColumn(col, true);
            }
            break;
        case 'left':
            for (let row = 0; row < GRID_SIZE; row++) {
                moved |= moveRow(row);
            }
            break;
        case 'right':
            for (let row = 0; row < GRID_SIZE; row++) {
                moved |= moveRow(row, true);
            }
            break;
    }

    if (moved) {
        addRandomTile();
        updateGameState();
    }
}

function moveColumn(col, reverse = false) {
    const tiles = [];
    for (let row = 0; row < GRID_SIZE; row++) {
        tiles.push(grid[reverse ? GRID_SIZE - 1 - row : row][col]);
    }
    const { newTiles, moved } = mergeTiles(tiles);
    for (let row = 0; row < GRID_SIZE; row++) {
        grid[reverse ? GRID_SIZE - 1 - row : row][col] = newTiles[row];
    }
    return moved;
}

function moveRow(row, reverse = false) {
    const tiles = grid[row].slice();
    if (reverse) tiles.reverse();
    const { newTiles, moved } = mergeTiles(tiles);
    grid[row] = reverse ? newTiles.reverse() : newTiles;
    return moved;
}

function mergeTiles(tiles) {
    const newTiles = [];
    let moved = false;

    for (let i = 0; i < GRID_SIZE; i++) {
        if (tiles[i] === 0) {
            newTiles.push(0);
            continue;
        }

        if (i < GRID_SIZE - 1 && tiles[i] === tiles[i + 1] && !hasMergedThisMove[i]) {
            newTiles.push(tiles[i] * 2);
            score += tiles[i] * 2;
            hasMergedThisMove[i] = true;
            moved = true;
            i++; // Skip the next tile
        } else {
            newTiles.push(tiles[i]);
        }
    }

    while (newTiles.length < GRID_SIZE) {
        newTiles.push(0);
    }

    return { newTiles, moved };
}

function resetMergeFlags() {
    hasMergedThisMove = Array(GRID_SIZE).fill(false);
}

export { initGame, move, grid, score };