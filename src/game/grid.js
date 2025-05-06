const GRID_SIZE = 4;

class Grid {
    constructor() {
        this.grid = this.createGrid();
        this.addRandomTile();
        this.addRandomTile();
    }

    createGrid() {
        return Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(0));
    }

    addRandomTile() {
        const emptyTiles = [];
        for (let row = 0; row < GRID_SIZE; row++) {
            for (let col = 0; col < GRID_SIZE; col++) {
                if (this.grid[row][col] === 0) {
                    emptyTiles.push({ row, col });
                }
            }
        }

        if (emptyTiles.length > 0) {
            const { row, col } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
            this.grid[row][col] = Math.random() < 0.9 ? 2 : 4;
        }
    }

    render() {
        const gridContainer = document.getElementById('grid');
        gridContainer.innerHTML = '';

        this.grid.forEach(row => {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row');

            row.forEach(value => {
                const tileDiv = document.createElement('div');
                tileDiv.classList.add('tile');
                tileDiv.textContent = value !== 0 ? value : '';
                rowDiv.appendChild(tileDiv);
            });

            gridContainer.appendChild(rowDiv);
        });
    }
}

export default Grid;