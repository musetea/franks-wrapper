const FRAMX_X = 18;

export default class Mandrake{
    
    constructor(canvasWidth, canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.scale = 2;
        this.image = document.getElementById('mandrake');
        this.spriteWidth = 256;
        this.spriteHeight = 256;
        
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;

        this.x = this.canvasWidth/2 - this.width * this.scale / 2;
        this.y = this.canvasHeight/2 - this.height * this.scale / 2;

        this.minFrame = 0;
        this.maxFrame = 355;
        this.frame = 0;
        this.frameX = 0; 
        this.frameY = 0;

    }

    draw(context){
        context.drawImage(this.image,
            this.frameX * this.spriteWidth, 
            this.frameY * this.spriteHeight, 
            this.spriteWidth, this.spriteHeight,
            this.x, this.y, 
            this.width * this.scale, 
            this.height * this.scale);
    }
    update(){
        // if(this.frameX < 17){
        //     this.frameX++;
        // }
        // else{
        //     this.frameX = 0;
        // }
        if(this.frame < this.maxFrame) this.frame++;
        else this.frame = this.minFrame;
        this.frameX = this.frame % FRAMX_X;
        this.frameY = Math.floor(this.frame / FRAMX_X);
    };

    setAnimation(newMinFrame, newMaxFrame){
        this.minFrame = newMinFrame;
        this.maxFrame = newMaxFrame;
        this.frame = this.minFrame;
    }
};