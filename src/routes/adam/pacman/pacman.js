import MovingDirection from './movingDirection';

export default class Pacman{
    constructor(x, y, size, velocity, tileMap){
        this.x = x;
        this.y = y; 
        this.tileSize = size;
        this.velocity = velocity;
        this.tileMap = tileMap;
        this.pacmanImages = [];
        this.pacmanImageIndex = 0;

        this.currentMovingDirection = null;
        this.requestedMovingDirection = null;

        document.addEventListener('keydown', this.$keyDown);
        document.addEventListener('keyup', this.$keyUp);
        console.log(this);
    }

    setPacmanImages(images){
        this.pacmanImages = images;
    }

    update(ctx){
        this.$draw(ctx);
    };

    $draw(ctx){
        if(this.pacmanImages.length <= 0)   return;

        ctx.drawImage(this.pacmanImages[this.pacmanImageIndex],
            this.x, 
            this.y, 
            this.tileSize, 
            this.tileSize);
    };
    
    $keyDown = (e) =>{
        switch(e.keyCode){
            case 38: // up
                if(this.currentMovingDirection == MovingDirection.down){
                    this.currentMovingDirection = MovingDirection.up;
                }
                this.requestedMovingDirection = MovingDirection.up;
                break;
            case 40: // down
                if(this.currentMovingDirection == MovingDirection.up){
                    this.currentMovingDirection = MovingDirection.down;
                }
                this.requestedMovingDirection = MovingDirection.down;
                break;
        }
    }
    $keyUp = (e) => {

    }
}