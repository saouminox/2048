export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function hasAvailableMoves(grid) {
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 0) {
                return true;
            }
            if (col < grid[row].length - 1 && grid[row][col] === grid[row][col + 1]) {
                return true;
            }
            if (row < grid.length - 1 && grid[row][col] === grid[row + 1][col]) {
                return true;
            }
        }
    }
    return false;
}

export function cloneGrid(grid) {
    return grid.map(row => row.slice());
}