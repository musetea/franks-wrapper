import { Fish } from './fish';

const RADIUS = 50;
const FISH_WIDTH = 498;
const FISH_HEIGHT = 327;
const LENE_WIDTH = 0.2;

export default class Player{
    constructor(canvas){
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.radius = RADIUS;   // 반경
        this.angle= 0;          // 각도

        this.frame  = 0;
        this.frameX = 0;
        this.frameY = 0;

        this.spriteWidth = FISH_WIDTH;
        this.spriteHeight = FISH_HEIGHT;

        this.speed = 25;

        this.leftFish = new Fish('/bubble/fish_left.png').fish();
        this.rightFish = new Fish('/bubble/fish_right.png').fish();

        this.lived = 10;
    }

    decrease(){
        this.lived--;
    }

    /**
     * 
     * @param {*} mouse 마우스정보 
     */
    update(mouse){
    
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;

        // 각도계산 (방향)
        const theta = Math.atan2(dy, dx);
        this.angle = theta;

        if(mouse.x != this.x){
            this.x -= dx/this.speed;
        }
        if(mouse.y != this.y){
            this.y -= dy/this.speed;
        }
    };

    displayLive(ctx){
        ctx.fillStyle='black';
        ctx.fillText(`life: ${this.lived}`, 10,60);
    }

    draw(ctx, mouse){
        if(mouse.click){
            ctx.lineWidth = LENE_WIDTH;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
        this.displayLive(ctx);
        // 
        // ctx.fillStyle = 'white';
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2);
        // ctx.fill();
        // ctx.closePath();
        // ctx.fillRect(this.x, this.y, this.radius, 10);

        // 영역변환
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        if(this.x >= mouse.x) {
            ctx.drawImage(this.leftFish, 
                this.frameX * this.spriteWidth, 
                this.frameY * this.spriteHeight,
                this.spriteWidth, this.spriteHeight,
                0 - 60, 
                0 - 45, 
                this.spriteWidth/4, this.spriteHeight/4);
        }
        else{
            ctx.drawImage(this.rightFish, 
                this.frameX * this.spriteWidth, 
                this.frameY * this.spriteHeight,
                this.spriteWidth, this.spriteHeight,
                0 - 60, 
                0 - 45, 
                this.spriteWidth/4, this.spriteHeight/4);
        }

        ctx.restore();
    };
};