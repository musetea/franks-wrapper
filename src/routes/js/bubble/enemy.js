import { getDistance } from '../../../lib/lib';

const OFFSET_X = 50;
const OFFSET_Y = 60;


export default class Enemy{
    constructor(width, height, image){
        this.width = width;
        this.height = height;
        this.image = image;

        this.distance;

        this.init();
        
        this.radius = 60;
        this.frame = 0;
        this.frameX = 0; 
        this.frameY= 0;

        this.spriteWidth = 418;
        this.spriteHeight = 397;

    }
    init(){
        this.x = this.width + 200;
        this.y = Math.random() * ( this.height - 150) + 90;
        this.speed = Math.random() * 2 + 2;
    }

    draw(ctx){
        // ctx.fillStyle = 'red';
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // ctx.fill();
        // ctx.closePath();

        ctx.drawImage(this.image, 
            this.frameX * this.spriteWidth, 
            this.frameY * this.spriteHeight,
            this.spriteWidth, this.spriteHeight,
            this.x - OFFSET_X, 
            this.y - OFFSET_Y, 
            this.spriteWidth/4, 
            this.spriteHeight/3.5);
    }

    update(gameFrame, player){
        this.x -= this.speed;

        this.distance = getDistance(this.x, this.y, player.x, player.y);

        if(this.x < 0 - this.radius * 2){
            this.init();
        }

        if(gameFrame % 5 == 0){
            this.frame++;

            // X 
            if(this.frame >= 12) this.frame = 0;
            if(this.frame == 3 || this.frame ==7 || this.frame || 11)   this.frameX = 0;
            else this.frameX++;
                
            // Y
            if(this.frame < 3) this.frameY= 0;
            else if(this.frame < 7) this.frameY = 1;
            else if(this.frame < 11) this.frameY = 2;
            else this.frameY = 0;
            
        }

        
    }
};