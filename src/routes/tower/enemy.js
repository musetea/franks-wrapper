import { CellGap, CellSize, EnemyHeath, FONT_FAMILY, FONT_SIZE } from './lib';

const MIN_SPEED = 0.2;
const MAX_SPEED = 0.4;

export class Enemy{
    constructor(w, verticalPosition){
        this.x = w;
        this.y = verticalPosition;
        this.width = CellSize - CellGap*2;
        this.height = CellSize - CellGap*2;
        this.speed = Math.random() * MIN_SPEED + MAX_SPEED;
        this.movement = this.speed;
        this.health = EnemyHeath;
        this.maxHealth = this.health;
        //console.log('Enemy', this.x, this.y, this.movement, this.maxHealth);
    }

    update(){
        this.x -= this.movement;
    }

    draw(ctx){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);

        this.displayHealth(ctx);
    }
    displayHealth(ctx){
        ctx.fillStyle = 'black';
        ctx.font = `${FONT_SIZE}px ${FONT_FAMILY}`;
        const str = `${Math.floor(this.health)}`;
        ctx.fillText(str, this.x + 25, this.y + FONT_SIZE);
    }
}