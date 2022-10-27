

export class Character{
    constructor(){
        this.width = 103.0625;
        this.height = 113.125;
        this.frameX=0;
        this.frameY=0;
        this.x=0;
        this.y=0;
        this.speed = (Math.random() * 1.5) + 3.5;
        this.action = 'up';
    }

   

    draw(ctx, width, height){
        this.drawSprite(ctx, 
            this.frameX * spriteWidth,
            this.frameY * spriteHeight,
            spriteWidth, spriteHeight,
            this.x, this.y, spriteWidth, spriteHeight
        );

        this.update(width, height);
    };

    drawSprite(ctx, sx, sy, sw, sh, dx, dy, dw, dh){
        ctx.drawImage(this.image,
            sx, sy, sw, sh,
            dx, dy, dw, dh
        );
    };
}