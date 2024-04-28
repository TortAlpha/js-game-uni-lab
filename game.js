
const canvas = document.getElementById('canvas');
const width = 4800;
const height = 800;

canvas.width = width;
canvas.height = height;

let gameMap = new GameMap(canvas);

// function updateGame() {
    
//     requestAnimationFrame(updateGame);
// }
gameMap.drawMap();

//updateGame();