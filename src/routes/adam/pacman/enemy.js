export default class Enemy{
    constructor(x, y, size, velocity, tileMap){
        this.x = x;
        this.y = y;
        this.tileSize = size;
        this.velocity = velocity;
        this.tileMap = tileMap;
        console.log(this);
    }

    update(ctx){
        if(!ctx) return;

        this.$draw(ctx);
    }

    $draw(ctx){
        //ctx.drawImage()
    }
}