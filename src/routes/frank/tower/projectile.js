const WIDTH = 25;
const HEIGHT = 25;
const OFFSET_X = 70;
const OFFSET_Y = 30;


export class Projectile{
    constructor(x, y, bulletImage){
        this.x = x + OFFSET_X;
        this.y = y + OFFSET_Y;
        this.width = WIDTH;
        this.height = HEIGHT;
        this.power = 20;
        this.speed = 5;
        this.image = bulletImage;
        console.log(this);
    }

    update(){
        this.x += this.speed;
    }

    draw(ctx){
        // ctx.fillStyle = 'black';
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
        // ctx.fill();
        // ctx.closePath();
        ctx.drawImage(this.image, 0,0, 47,47, 
            this.x, this.y, this.width, this.height);
    }
};