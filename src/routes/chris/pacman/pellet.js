export default class Pellet{
    constructor({position}){
        this.position = position;
        this.radius = 4;
    }

    update(ctx){
        this.draw(ctx);
    }
    draw(c){
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        c.fillStyle="white";
        c.fill();
        c.closePath();
    }
};