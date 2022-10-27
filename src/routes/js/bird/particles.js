export class Particle {
    constructor(x, y, hue){
        this.x = x;
        this.y = y;
        this.size = Math.random() * 7 + 3;
        this.speedY = (Math.random() * 1 ) - 0.5;
        this.color =`hsla(${hue}, 100%, 50%, 0.8)`;

        //console.log(this.x, this,y, this.size, this.speedY, this.color);
    }
    
    update(gameSpeed){
        this.x -= gameSpeed;
        this.y += this.speedY;

    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
};