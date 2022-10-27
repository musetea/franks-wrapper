
export default class Background{
    constructor(src, width, height){
        this.image = new Image();
        this.image.src = src;

        this.width = width;
        this.height = height;

        this.BG = {
            x1:0, 
            x2: width,
            y:0,
            width:width,
            height:height
        };
    }

    draw(ctx, gameSpeed){
        this.BG.x1 -= gameSpeed;
        if(this.BG.x1 < -this.BG.width) this.BG.x1 = this.BG.width;

        this.BG.x2 -= gameSpeed;
        if(this.BG.x2 < -this.BG.width) this.BG.x2 = this.BG.width;
        ctx.drawImage(this.image, this.BG.x1, this.BG.y, this.BG.width, this.BG.height);
        ctx.drawImage(this.image, this.BG.x2, this.BG.y, this.BG.width, this.BG.height);
    }
}