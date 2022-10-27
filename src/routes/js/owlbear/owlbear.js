export default class Owlbear {
    constructor(game){
        this.game = game;
        this.spriteWidth = 200;
        this.spriteHeight = 200;
        this.x = 200;
        this.y = 200;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.frameX = 0;
        this.frameY = 3;
        this.maxFrame = 30;
        this.speedX = 0;
        this.speedY = 0;
        this.maxSpeed = 2;
        this.image = document.getElementById('owlbear');
        console.log(this.image);
        
        this.fps = 60;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        console.log(this.fps, this.frameInterval, this.frameTimer);
    }

    draw(context){
        // context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, 
            this.frameX * this.spriteWidth, 
            this.frameY * this.spriteHeight, 
            this.spriteWidth, this.spriteHeight,
            this.x, this.y, this.width, this.height);
    };

    setSpeed(speedX, speedY){
        this.speedX = speedX;
        this.speedY = speedY;
    }

    update(deltaTime){
        if(this.game.lastKey == 'PArrowLeft'){
            this.setSpeed(-this.maxSpeed, 0);
            this.frameY = 3;
        }
        else if(this.game.lastKey == 'RArrowLeft' && this.speedX < 0){
            this.setSpeed(0, 0);
            this.frameY = 2;
        }
        else if(this.game.lastKey == "PArrowRight"){
            this.setSpeed(this.maxSpeed, 0);
            this.frameY = 5;
        }
        else if(this.game.lastKey == "RArrowRight" && this.speedX > 0){
            this.setSpeed(0, 0);
            this.frameY = 4;
        }
        else if(this.game.lastKey == 'PArrowUp'){
            this.setSpeed(0, -this.maxSpeed * 0.6);
            this.frameY = 7;
        }
        else if(this.game.lastKey == 'RArrowUp' && this.speedY < 0){
            this.setSpeed(0, 0);
            this.frameY = 6;
        }
        else if(this.game.lastKey == 'PArrowDown'){
            this.setSpeed(0, this.maxSpeed * 0.6);
            this.frameY = 1;
        }
        else if(this.game.lastKey == 'RArrowDown' && this.speedY > 0){
            this.setSpeed(0, 0);
            this.speedY = 0;
        }
        else{
            this.setSpeed(0,0);
        }
        this.x += this.speedX;
        this.y += this.speedY;

        // 수평영역 
        if(this.x < 0){
            this.x = 0;
        }
        else if(this.x > this.game.width - this.width){
            this.x = this.game.width - this.width;
        }
        // 수직영역 
        if(this.y < this.game.topMargin){
            this.y = this.game.topMargin;
        }
        else if(this.y > this.game.height - this.height){
            this.y = this.game.height - this.height;
        }

        // if(this.frameTimer > this.frameInterval){
        //     // FRMA X
        //     /*if(this.frameX < this.maxFrame){
        //         this.frameX++;
        //     }
        //     else{
        //         this.frameX = 0;
        //     }*/
        //     this.frameX < this.maxFrame ? this.frameX++
        //                                 : this.frameX = 0;
        //     this.frameTimer = 0;
        // }
        // else{
        //     this.frameTimer += deltaTime;
        // }
        if(this.frameX < this.maxFrame){
            this.frameX++;
        }
        else{
            this.frameX = 0;
        }
        
    }
};
