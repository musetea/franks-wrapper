const SPRITE_IMAGE_W = 941;
const SPRITE_IMAGE_H = 680;

const MIN_FRAME_X = 0; 
const MAX_FRAME_X = 3;

export class Bird{
    constructor(x, y, width, height, img){
        this.x = x;
        this.y = y;
        this.width = SPRITE_IMAGE_W/20;
        this.height = SPRITE_IMAGE_H/20;
        this.image = img;

        this.vy = 0;
        this.weight = 1;
        this.frameX= 0;
      
    
    };

    right(){
        return this.x + this.width;
    }
    bottom(){
        return this.y + this.height;
    }

    update(width, height, angle, spacePress, frame){
        let curve = Math.sign(angle) * 20;
        if(this.y > height - (this.height  * 3) + curve){
            this.y = height - (this.height * 3) + curve;
            this.vy = 0;
        }
        else{
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy;
        }
        if(this.y < 0 + this.height){
            this.y = 0 + this.height;
            this.vy = 0;
        }

        if(spacePress && this.y > this.height * 3){
            this.flap(frame);
        }
    }


    draw(ctx){
        //ctx.fillStyle='red';
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        // console.log(ctx, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, 
            this.frameX * SPRITE_IMAGE_W,
            0, SPRITE_IMAGE_W, SPRITE_IMAGE_H, 
            this.x -20, this.y -12, this.width * 1.7, this.height * 1.7);
    }

    flap(frame){ 
        this.vy -=2;   
        if(this.frameX >= MAX_FRAME_X) this.frameX = MIN_FRAME_X;
        else if(frame%2 === 0) this.frameX++;
    }
};