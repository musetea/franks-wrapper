import {SpriteImage } from './lib';
import { GRID_SIZE } from './lib';
import { ARROW_KEYS} from './lib';

//const frogImage = new Image();
//frogImage.src = `/franks/frog/frog_spritesheet.png`; 
const FORG_OFFSET_Y = 40; 

class Frogger{
    constructor(w, h, frog){
        this.canvasWidth = w;
        this.canvasHeight = h;
        this.image = new SpriteImage(frog, 250,250);
        this.width = 50;
        this.height = 50;
        this.x = w/2 - this.width/2;
        this.y = h - this.height - FORG_OFFSET_Y;
        this.moving = false;
        this.frameX = 0; 
        this.frameY = 0;
        this.keyCode = 0;
        //console.log(this);
    }

    update(){
        if(this.moving === false){
            this.moving = !this.moving;
            if(this.keyCode === ARROW_KEYS.UP){
                //if(this.y > this.height){
                    this.y -= GRID_SIZE;
                //}
            }
            if(this.keyCode === ARROW_KEYS.DOWN){ 
                
                if(this.y < this.canvasHeight - (this.height * 2)) {
                    this.y += GRID_SIZE;
                } 
            }
            if(this.keyCode === ARROW_KEYS.LEFT){
                if(this.x > this.width  ){
                    this.x -= GRID_SIZE;
                }
            }
            if(this.keyCode === ARROW_KEYS.RIGHT){
                if(this.x < this.canvasWidth - (this.width*2)){
                    this.x += GRID_SIZE;
                }
            }
            this.keyCode = 0;
        }
    };

    jump(key){
        this.moving = true;
        console.log('jump');
        this.keyCode = key;
    }

    draw(ctx){
        //console.log(this);
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    setMoving(isMoving){
        this.moving = isMoving;

    }

    reset(){
        this.x = this.canvasWidth/2 - this.width/2;
        this.y = this.canvasHeight - this.height - FORG_OFFSET_Y;
    }
};

export const getFrogger = (frogImg) => { return new Frogger(600,600,frogImg);}