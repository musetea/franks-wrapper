export default class Ghost{
    static speed = 2;
    constructor({position, velocity, color='red'}){
        this.position = position;
        this.velocity = velocity;
        this.color = color;
        this.radius = 15;
        this.prevCollisions = [];
        this.speed = 2;
    };

    update(context){
        this.$draw(context);
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    $draw(c){
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }
}