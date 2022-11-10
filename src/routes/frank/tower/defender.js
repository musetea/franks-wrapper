import { end_hydrating } from 'svelte/internal';
import { CellSize, CellGap, DefenderHeath } from './lib';
import { FONT_FAMILY, FONT_SIZE } from './lib';
import { Projectile } from './projectile';
const OFFSET_Y = 10;

const bullet = new Image();
bullet.src = `/tower/${'bullet.png'}`;


export class Defender{
    constructor(x, y, defenderType){
        this.x = x;
        this.y = y;
        this.width = CellSize - (CellGap*2);
        this.height = CellSize - (CellGap*2);
        this.shooting = false;
        this.shootingNow = false;
        this.health = DefenderHeath;
        this.projectiles = [];
        this.timer = 0;
        this.defenderName = defenderType.name;
        this.frameX = 0;
        this.frameY = 0;
        this.defenderImage = defenderType.image;
        this.minFrameX = 0;
        this.maxFrameX = defenderType.len;
        this.spriteWidth = defenderType.width;
        this.spriteHeight = defenderType.height;
        console.log(this);
    }

    update(frame){

        if(frame % 10 === 0 && this.shooting){
            if(this.frameX < this.maxFrameX -1) this.frameX++;
            else this.frameX = this.minFrameX;
            if(this.frameX === 15) this.shootingNow = true;
            else this.shootingNow = false;
        }

        if(this.shooting && this.shootingNow){
            this.shootingNow = false;
            //this.timer++;
            //if(this.timer % 100 === 0){
            return new Projectile(this.x, this.y, bullet);
            //}
            return undefined;
        }else{
            this.timer = 0;
        }
    }

    draw(ctx){
        // ctx.fillStyle = 'blue';
        // ctx.fillRect(this.x, this.y, this.width, this.height);

        ctx.drawImage(this.defenderImage, 
            this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight,
            this.x, this.y + OFFSET_Y, this.width, this.height);

        this.drawHealth(ctx);
    }

    drawHealth(ctx){
        ctx.fillStyle = 'gold';
        ctx.font = `${FONT_SIZE}px ${FONT_FAMILY}`;
        const str = String(Math.floor(this.health));
        const x = this.x + 20;
        const y = this.y + 20;
        ctx.fillText(str, x, y);
    };

    // 프로젝 타일 
    handleProjectiles(ctx, canvasWidth){
        for(let i=0; i<this.projectiles.length; i++){

            // 업데이트 및 화며출력 
            this.projectiles[i].update();
            this.projectiles[i].draw(ctx);

            // 체크
            if(this.projectiles[i] && this.projectiles[i].x > (canvasWidth - CellSize)){
                this.projectiles.splice(i, 1);
                i--;
            }
        }
    }
}