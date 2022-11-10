import MovingDirection, {randomMovingDirection} from './movingDirection';
const IMAGE_INDEX = {
    normal:0,
    scared:1,
    scared2:2
};

export default class Enemy{
    constructor(x, y, size, velocity, tileMap){
        this.x = x;
        this.y = y;
        this.tileSize = size;
        this.velocity = velocity;
        this.tileMap = tileMap;
        this.images = [];
        this.image = undefined;
        this.movingDirection = randomMovingDirection();
        this.timerDef = this.$random(1,10);
        this.timer = this.timerDef;

        this.expireTimerDef = 10;
        this.expireTimer = this.expireTimerDef;

        console.log(this);
    };

    setImages(images){
        this.images = images;
        this.image = this.images[IMAGE_INDEX.normal];
    }

    /**
     * 충동체크 
     * @param {*} pacman 
     * @returns 
     */
    collideWith(pacman){
        const size = this.tileSize /2;
        if(this.x < pacman.x + size &&
            this.x + size > pacman.x &&
            this.y < pacman.y + size &&
            this.y + size > pacman.y ){
                return true;
            }
        else{
            return false;
        }
    }

    update(ctx, pause, pacman){
        if(!ctx) return;
        if(!pause){
            this.$move();
            this.$changeDirection();
        }
        this.$setImage(pacman);
        this.$draw(ctx);
    };

    $random(min, max){
        return Math.floor(
            Math.random() * (max - min + 1 )) + min
        ;
    };

    $move(){
        if(!this.tileMap.didCollideWithEnvironment(this.x, this.y, this.movingDirection)){
            switch(this.movingDirection){
                case MovingDirection.up: 
                    this.y -= this.velocity;
                    break;
                case MovingDirection.down: 
                    this.y += this.velocity;
                    break;
                case MovingDirection.left:
                    this.x -= this.velocity;
                    break;
                case MovingDirection.right: 
                    this.x += this.velocity;
                    break;
            }
        }
    };

    $changeDirection(){
        this.timer--;
        let newMoveDirection = null;
        if(this.timer == 0){
            this.timer = this.timerDef;
            newMoveDirection = randomMovingDirection();

        }

        if(newMoveDirection != null && newMoveDirection != this.movingDirection){
            if(Number.isInteger(this.x / this.tileSize) && 
                Number.isInteger(this.y / this.tileSize)){
                if(! this.tileMap.didCollideWithEnvironment(this.x, this.y, )){
                    this.movingDirection = newMoveDirection;
                }
            }
        }
    };

    $setImageWhenPowerDotIsActive(pacman){
        if(pacman.powerDotAbouttoExpire){
            this.expireTimer--;
            if(this.expireTimer === 0){
                this.expireTimer = this.expireTimerDef;
                if(this.image == this.images[IMAGE_INDEX.scared]){
                    this.image = this.images[IMAGE_INDEX.scared2]
                }else{

                    this.image = this.images[IMAGE_INDEX.scared];
                }
            }
        }else{
            this.image = this.images[IMAGE_INDEX.scared];
        }
    };

    $setImage(pacman){
        if(pacman.powerDotActive){
            this.$setImageWhenPowerDotIsActive(pacman)
            //this.image = this.images[IMAGE_INDEX.scared];
        }else{
            this.image = this.images[IMAGE_INDEX.normal];
        }
    }

    $draw(ctx){
        ctx.drawImage(this.image,
            this.x, this.y, this.tileSize, this.tileSize);

    }
}