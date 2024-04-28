

function Plane(){
    
    //добавить текстуру
    this.texture = 0;

    this.spawn = function(pos_x, pos_y, canvas){

        this.ctx = canvas.getContext('2d');

        this.ctx.drawImage(imgBitmap, pos_x, pos_y)

    }

    this.death = function() {

    }



}
