const tileAnimationDuration = 200;

function animateTileMovement(tile, startX, startY, endX, endY) {
    tile.style.transition = `transform ${tileAnimationDuration}ms ease`;
    tile.style.transform = `translate(${endX}px, ${endY}px)`;
    
    setTimeout(() => {
        tile.style.transition = '';
        tile.style.transform = '';
    }, tileAnimationDuration);
}

function animateTileMerge(tile, startX, startY, endX, endY) {
    tile.style.transition = `background-color ${tileAnimationDuration}ms ease, transform ${tileAnimationDuration}ms ease`;
    tile.style.transform = `translate(${endX}px, ${endY}px)`;
    
    setTimeout(() => {
        tile.style.backgroundColor = getMergedTileColor(tile);
        tile.style.transition = '';
        tile.style.transform = '';
    }, tileAnimationDuration);
}

function getMergedTileColor(tile) {
    const value = parseInt(tile.innerText, 10);
    switch (value) {
        case 2: return '#eee4da';
        case 4: return '#ede0c8';
        case 8: return '#f2b179';
        case 16: return '#f59563';
        case 32: return '#f67c5f';
        case 64: return '#f67c5f';
        case 128: return '#f9f86e';
        case 256: return '#f9f86e';
        case 512: return '#edcf72';
        case 1024: return '#edcf72';
        case 2048: return '#edc53f';
        default: return '#cdc1b4';
    }
}

export { animateTileMovement, animateTileMerge };