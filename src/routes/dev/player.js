const spriteWidth = 103.0625;
const spriteHeight = 113.125;
const FRAME_MAX_X = 13;
// const ACTIONS = ['up', 'top right', 'right', 'down right', 'down', 'jump' ];
const ACTIONS = ['up', 'right',  'down', 'jump' ];


export class Player{
    constructor(src){

        this.image = src;
        
        this.x = 0;
        this.y = 0;
        this.speed = 2;
        let action = Math.floor(Math.random() * ACTIONS.length);
        this.action = ACTIONS[0];
        console.log(this.action);
        this.frameX=0;
        switch(this.action){
            case 'up':      
                this.frameY=0;  
                this.minFrame = 4;
                this.maxFrame = 15;
                this.y = 100;
                break;
            case 'left':    
                this.frameY=1;  
                this.minFrame = 0;
                this.maxFrame = 14;
                
                break;
            case 'right':   
                this.frameY=3;  
                this.frameX=3;
                this.minFrame = 3;
                this.maxFrame = 10;
                break;
            case 'down':    
                this.frameY=6;  
                this.minFrame = 1;
                this.maxFrame = 13;
                break;
            case 'jump':    this.frameY=7;  
                this.minFrame = 0;
                this.maxFrame = 9;
                break;
        }
        

    }

    

    update(width, height){

        if(this.frameX < this.maxFrame) this.frameX++;
        else this.frameX = this.minFrame;


        this.move(width, height);
    }

    move(width, height){

        switch(this.action){
            case 'right': 
                if(this.x < (width + spriteWidth)) this.x += this.speed;
                else this.x = 0 - spriteWidth;
                break;

            case 'left':
                if(this.x < 0) this.x = width - spriteWidth; 
                else this.x -= this.speed;
                break;
            case 'up':
                if(this.y < (0 - this.height)) {
                    this.y = height + this.height;
                }
                else this.y -= this.speed;
                break;
            case 'down': 
                if(this.y < (height + spriteHeight)) this.y += this.speed;
                else this.y = 0 - spriteHeight;
                break;
            case 'jump': break;
        }

    
    }




    drawSprite(ctx, sx, sy, sw, sh, dx, dy, dw, dh){
        ctx.drawImage(this.image,
            sx, sy, sw, sh,
            dx, dy, dw, dh
            );
    };

    draw(ctx, width, height){
        this.drawSprite(ctx, 
            this.frameX * spriteWidth,
            this.frameY * spriteHeight,
            spriteWidth, spriteHeight,
            this.x, this.y, spriteWidth, spriteHeight
        );

        this.update(width, height);
    };
}

