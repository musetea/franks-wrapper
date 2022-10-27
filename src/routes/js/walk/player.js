const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;


class StarWars{
    constructor(image, name){
        this.image = image;
        this.name = name;
        this.x = 0;
        this.y = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.moving = false;

        this.minFrameX = 0;
        this.maxFrameX = 3;

        this.selected = false;
    }

    drawSprite(ctx){
        ctx.drawImage(this.image, 
            this.frameX * this.width, 
            this.frameY * this.height, 
            this.width, this.height,
            this.x, this.y, this.width, this.height);
    }

    draw(ctx){
        if(this.selected) ctx.fillStyle='red';
        else ctx.fillStyle="black";
        ctx.fillText(this.name, this.x - this.width/4, this.y);
        this.drawSprite(ctx)
    }

    setXY(x, y){
        this.x = x;
        this.y = y;
    }

}


export default class Player extends StarWars {
    constructor(image, width, height, name){
        super(image, name)
        this.width = width;
        this.height = height;
        this.speed = 2;
    };

    walking(keys, width, height){
        if(!this.selected) return;
        if(keys[LEFT]){
            if(this.x > 0 - this.width/2 ){
                this.x -= this.speed;
                this.moving = true;
            }
            this.frameY= 1;
        }
        if(keys[RIGHT]){
            if(this.x < width-this.width/2){
                this.x += this.speed;
                this.moving = true;
            }
            this.frameY = 2;
        }
        if(keys[UP]){
            let top = 92;
            if(this.x < 254 ) {
                top = 144;
            }
            if(this.y > top- this.height/2){
                this.y -= this.speed;
                this.moving = true;
            }
            this.frameY = 3;
        }
        if(keys[DOWN]){
            if(this.y < height-this.height){
                this.y += this.speed;
                this.moving = true;
            }
            this.frameY = 0;
        }
        if(this.moving){
            if(this.frameX < this.maxFrameX) this.frameX++;
            else this.frameX = this.minFrameX;
        }
    }

};