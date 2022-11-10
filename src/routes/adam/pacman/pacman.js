import MovingDirection from './movingDirection';

const Rotation = {
    right:0,
    down:1,
    left:2,
    up:3,
}
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

        this.animatonTimerDef = 10;
        this.animatonTimer = null;

        this.rotation = Rotation.right;
        this.waka = undefined;

        document.addEventListener('keydown', this.$keyDown);
        document.addEventListener('keyup', this.$keyUp);
        console.log(this);
    }

    setPacmanImages(images){
        this.pacmanImages = images;
    };

    setWakaSound(sound){
        this.waka = sound;
    };


    update(ctx){
        this.$move();
        this.$animate();
        this.$eatDot();
        this.$draw(ctx);
    };

    $draw(ctx){
        if(this.pacmanImages.length <= 0)   return;
        const size = this.tileSize/2;
        ctx.save();
        ctx.translate(this.x+size, this.y+size);  // 원점이동 
        const angle = (this.rotation * 90 * Math.PI) / 180;
        ctx.rotate(angle);

        ctx.drawImage(this.pacmanImages[this.pacmanImageIndex], -size, -size, this.tileSize, this.tileSize);
        ctx.restore();
       
        // ctx.drawImage(this.pacmanImages[this.pacmanImageIndex],
        //     this.x, 
        //     this.y, 
        //     this.tileSize, 
        //     this.tileSize); 

    };

    $move(){
        if(this.currentMovingDirection !== this.requestedMovingDirection){
            if(Number.isInteger(this.x / this.tileSize) &&
                Number.isInteger(this.y / this.tileSize)){

                    if(!this.tileMap.didCollideWithEnvironment(
                        this.x, 
                        this.y, 
                        this.requestedMovingDirection)){
                            this.currentMovingDirection = this.requestedMovingDirection;
                        }

            }
        }
        // 현재벽돌인지 체크 
        if(this.tileMap.didCollideWithEnvironment(this.x, this.y, this.currentMovingDirection)){
            this.animatonTimer = null;
            this.pacmanImageIndex = 1;
            return;
        }
        else if(this.currentMovingDirection != null && this.animatonTimer == null){
            this.animatonTimer = this.animatonTimerDef;
        }

        switch(this.currentMovingDirection){
            case MovingDirection.up:
                this.y -= this.velocity;
                this.rotation = Rotation.up;
                break;
            case MovingDirection.down:
                this.y += this.velocity;
                this.rotation = Rotation.down;
                break;
            case MovingDirection.left:
                this.x -= this.velocity;
                this.rotation = Rotation.left;
                break;
            case MovingDirection.right:
                this.x += this.velocity;
                this.rotation = Rotation.right;
                break;
        }
    };

    $animate = () =>{
        if(this.animatonTimer == null){
            return;
        }
        this.animatonTimer--;
        if(this.animatonTimer == 0){
            this.animatonTimer = this.animatonTimerDef;
            this.pacmanImageIndex++;
            if(this.pacmanImageIndex == this.pacmanImages.length){
                this.pacmanImageIndex = 0;
            }
        }
    };

    $eatDot(){
        if(this.tileMap.eatDot(this.x, this.y)){
            // YELLOW DOT SOUND
            //this.waka && this.waka.play();
            // console.log(this.waka);
        }
    }
    
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
            case 37: // left
                if(this.currentMovingDirection == MovingDirection.right){
                    this.currentMovingDirection = MovingDirection.left;
                }
                this.requestedMovingDirection = MovingDirection.left;
                break;
            case 39: // right
                if(this.currentMovingDirection == MovingDirection.left){
                    this.currentMovingDirection = MovingDirection.right;
                }
                this.requestedMovingDirection = MovingDirection.right;
                break;
        }
    }
    $keyUp = (e) => {

    }
}