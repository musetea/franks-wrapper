import { keys } from './event';

/**
 * 그리드 사이즈 80px
 */
export const GRID_SIZE = 80;

/**
 * 최대 횟수 
 */
export const MAX_PARTICLES = 300;

export const ARROW_KEYS = {
    UP    : 38,
    DOWN  : 40,
    LEFT  : 37,
    RIGHT : 39
};




/**
 * 스프라이트 이미지 
 */
export class SpriteImage{
    constructor(img, width, height){
        this.image = img;
        this.spriteWidth = width;
        this.spriteHeght = height;
    }
};

export class Base{
    constructor(x, y, width, height, speed, type){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }
};

export const isPressKey = () => {
    return keys[ARROW_KEYS.UP] ||
        keys[ARROW_KEYS.DOWN] ||
        keys[ARROW_KEYS.LEFT] ||
        keys[ARROW_KEYS.RIGHT];
}