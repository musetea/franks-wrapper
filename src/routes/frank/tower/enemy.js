import { CellGap, CellSize, EnemyHeath, FONT_FAMILY, FONT_SIZE } from './lib';

const MIN_SPEED = 0.2;
const MAX_SPEED = 0.4;

export class Enemy{
    constructor(w, verticalPosition, enemyType){
        this.x = w;
        this.y = verticalPosition;
        this.width = CellSize  - CellGap*2;
        this.height = CellSize - CellGap*2;
        this.speed = Math.random() * MIN_SPEED + MAX_SPEED;
        this.movement = this.speed;
        this.health = EnemyHeath;
        this.maxHealth = this.health;
        this.enemyType = enemyType.name;
        this.frameX = 0;
        this.frameY = 0;
        this.minFrameX = 0;
        this.enemyImage = enemyType.image;
        this.maxFrameX = enemyType.len;
        this.spriteWidth = enemyType.width;
        this.spriteHeight = enemyType.height;
        console.log('Enemy', this.x, this.y, this.movement, this.maxHealth, this.enemyImage);
        
    }

    update(frame){
        this.x -= this.movement;
                
        if(frame % 10 === 0){
            if(this.frameX < this.maxFrameX-1) this.frameX++;
            else this.frameX = this.minFrameX;
        }
    }

    draw(ctx){
        // ctx.fillStyle = 'red';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.enemyImage, 
            this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight,
            this.x, this.y, this.width 
            + 10, this.height);
        this.displayHealth(ctx);
    }
    displayHealth(ctx){
        ctx.fillStyle = 'black';
        ctx.font = `${FONT_SIZE}px ${FONT_FAMILY}`;
        const str = `${Math.floor(this.health)}`;
        ctx.fillText(str, this.x + 25, this.y + FONT_SIZE);
    }
}