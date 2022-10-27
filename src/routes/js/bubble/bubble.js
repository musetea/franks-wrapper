

export default class Bubble{
    constructor(width, hegiht, image){
        this.x = Math.random() * width;
        this.y = hegiht + Math.random() * hegiht;

        this.radius = 50;
        this.speed = Math.random() * 5 + 1;
        this.distance;
        this.counted = false;

        this.soundType = Math.random() < .5  ? 'sound1' : 'sound2'; 
        this.image = image;
        

    }
    update(player){
        this.y -= this.speed;

        // 거리체크 
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance = Math.sqrt(dx*dx + dy*dy);
    }

    draw(ctx){
        // ctx.fillStyle = 'blue';
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // ctx.fill();
        // ctx.closePath();

        ctx.drawImage(this.image, 
            this.x - 65, 
            this.y - 65, 
            this.radius * 2.6, this.radius * 2.6);
    }
}