
const MAP_HEIGHT = 800;
const MAP_WIDTH = 4800;

class Terrain {

    constructor() {

    
    }

    draw(ctx) {

        let last_coordinates = [0, 0]
    
        ctx.beginPath();
        ctx.moveTo(0, MAP_HEIGHT - 100);
        last_coordinates[0] = 0;
        last_coordinates[1] = MAP_HEIGHT - 100;
        
        //взлетная площадка
        last_coordinates[0] += 20
        last_coordinates[1] -= 50
        ctx.lineTo(last_coordinates[0], last_coordinates[1]);
        
        last_coordinates[0] += 400
        last_coordinates[1] -= 15
        ctx.lineTo(last_coordinates[0], last_coordinates[1]);

        last_coordinates[0] += 50
        last_coordinates[1] += 110
        ctx.lineTo(last_coordinates[0], last_coordinates[1])
        
        //основной ландшафт
        last_coordinates[0] += 150
        last_coordinates[1] += 0
        ctx.lineTo(last_coordinates[0], last_coordinates[1])

        last_coordinates[0] += 150
        last_coordinates[1] -= 250
        ctx.lineTo(last_coordinates[0], last_coordinates[1])

        last_coordinates[0] += 150
        last_coordinates[1] -= 100
        ctx.lineTo(last_coordinates[0], last_coordinates[1])

        last_coordinates[0] += 150
        last_coordinates[1] -= 0
        ctx.lineTo(last_coordinates[0], last_coordinates[1])

        last_coordinates[0] += 150
        last_coordinates[1] -= 200
        ctx.lineTo(last_coordinates[0], last_coordinates[1])
        

        ctx.stroke();
    }

}

class GameMap {

    constructor(canvas){

        this.ctx = canvas.getContext('2d');
        this.terrain = new Terrain();
    }

    drawMap() {
        
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(0, 0, MAP_WIDTH, MAP_HEIGHT)
        this.terrain.draw(this.ctx)
        
    }

}