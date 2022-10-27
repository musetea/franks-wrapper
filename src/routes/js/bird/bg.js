
export class Background {
    constructor(bg, BG){
        this.image = new Image();
        this.image.src = bg;
        this.BG = BG;
    }

    draw(ctx, gameSpeed){
        if(this.BG.x1 <= -this.BG.width + gameSpeed) this.BG.x1 = this.BG.width;
        else this.BG.x1 -= gameSpeed;
        if(this.BG.x2 <= -this.BG.width + gameSpeed) this.BG.x2 = this.BG.width;
        else this.BG.x2 -= gameSpeed;

        
        ctx.drawImage(this.image, this.BG.x1, this.BG.y, this.BG.width, this.BG.height);
        ctx.drawImage(this.image, this.BG.x2, this.BG.y, this.BG.width, this.BG.height);
    }

}