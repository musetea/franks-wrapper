import { CellSize, DefenderHeath } from './lib';


export class Defender{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = CellSize;
        this.height = CellSize;
        this.shooting =false;
        this.health = DefenderHeath;
        this.projectiles = [];
        this.timer = 0;
    }

    draw(ctx){
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.drawHealth(ctx);
    }

    drawHealth(ctx){
        ctx.fillStyle = 'gold';
        ctx.font = '20px Arial';
        ctx.fillText(Math.floor(this.health), this.x, this.y);
    }
}