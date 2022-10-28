const WIDTH = 10;
const HEIGHT = 10;
const OFFSET_X = 70;
const OFFSET_Y = 50;

export class Projectile{
    constructor(x, y){
        this.x = x + OFFSET_X;
        this.y = y + OFFSET_Y;
        this.width = WIDTH;
        this.height = HEIGHT;
        this.power = 20;
        this.speed = 5;
    }

    update(){
        this.x += this.speed;
    }

    draw(ctx){
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
        ctx.fill();
    }
};