import { CellSize, CellGap, DefenderHeath } from './lib';
import { FONT_FAMILY, FONT_SIZE } from './lib';
import { Projectile } from './projectile';

export class Defender{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = CellSize - (CellGap*2);
        this.height = CellSize - (CellGap*2);
        this.shooting =false;
        this.health = DefenderHeath;
        this.projectiles = [];
        this.timer = 0;
    }

    update(){
        if(this.shooting){
            this.timer++;
            if(this.timer % 100 === 0){
                return new Projectile(this.x, this.y);
            }
            return undefined;
        }else{
            this.timer = 0;
        }
    }

    draw(ctx){
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.drawHealth(ctx);
    }

    drawHealth(ctx){
        ctx.fillStyle = 'gold';
        ctx.font = `${FONT_SIZE}px ${FONT_FAMILY}`;
        const str = String(Math.floor(this.health));
        const x = this.x + 25;
        const y = this.y + 30;
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