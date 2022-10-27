const OFFSET = 20;

export class Obstracle {
    constructor(width,height, hue){
        this.top = (Math.random() * height/3) + OFFSET;
        this.bottom = (Math.random() * height/3) + OFFSET;
        this.x = width; // 앞쪽에서 
        this.width = 20;
        this.color = `hsl(${hue}, 100%, 50%)`;
        this.counted =false;
    }

    right(){
        return this.x + this.width;
    }

    update(gameSpeed, birdX){
        this.x -= gameSpeed;
        if(!this.counted && this.x < birdX){
            this.counted = true;
            return true;
        } 
        else return false;
    }

    draw(ctx, height){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.fillRect(this.x, height - this.bottom, this.width, this.bottom);
    }
};