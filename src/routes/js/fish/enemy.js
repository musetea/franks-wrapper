import { ANGLER1_WIDHT, ANGLER1_HEIGHT} from './def';
import { ANGLER2_WIDHT, ANGLER2_HEIGHT} from './def';
import { LUCKY_FISH_WIDHT, LUCKY_FISH_HEIGHT} from './def';
import { HIVE_WHALE_WIDHT, HIVE_WHALE_HEIGHT} from './def';
import { DRONE_WIDHT, DRONE_HEIGHT} from './def';
import { ENEMY_MAX_FRAME } from './def';

const MOVE_HEIGHT_AREA = 0.95;

class Enemy{
    constructor(game){
        this.game = game;
        this.x = this.game.width;
        this.speedX = Math.random() * -1.5 - 0.5;
        this.markedForDeletion = false;

        this.maxFrame = ENEMY_MAX_FRAME;
        this.frameX = 0;
        this.frameY = 0;
    }

    update(){
        this.x += this.speedX - this.game.speed;

        if(this.x + this.width < 0) {
            this.markedForDeletion = true;
        }

        // 스프라이트 
        this.frameX < this.maxFrame ? this.frameX++ : this.frameX=0;
    }

    draw(context){

        // context.fillStyle = 'red';
        if(this.game.debug) {
            context.strokeRect(this.x, this.y, this.width, this.height);
        }
        context.drawImage(this.image, 
            this.frameX * this.width, 
            this.frameY * this.height,
            this.width, this.height,
            this.x, this.y, this.width, this.height);

        if(this.game.debug){
            context.fillStyle = 'black';
            context.font = '20px Helvetica';
            context.fillText(this.lives, this.x, this.y);
        }

    }
};


/**
 * ANGLER1
 */
export class Angler1 extends Enemy {
    constructor(game){
        super(game);
        this.game = game;
        this.scale = 1;

        this.lives = 3;
        this.score = this.lives;

        this.width = ANGLER1_WIDHT * this.scale;
        this.height = ANGLER1_HEIGHT * this.scale;

        this.y = Math.random() * (this.game.height * MOVE_HEIGHT_AREA - this.height);
        this.image = document.getElementById('angler1');
        this.frameY = Math.floor(Math.random() * 3);
    }
}
/**
 * ANGLER2
 */
export class Angler2 extends Enemy {
    constructor(game){
        super(game);
        this.game = game;
        this.scale = 1;

        this.lives = 2;
        this.score = this.lives;

        this.width = ANGLER2_WIDHT * this.scale;
        this.height = ANGLER2_HEIGHT * this.scale;

        this.y = Math.random() * (this.game.height * MOVE_HEIGHT_AREA - this.height);
        this.image = document.getElementById('angler2');
        this.frameY = Math.floor(Math.random() * 2);
    }
}

/**
 * LUCKY FISH
 */
export class LuckyFish extends Enemy {
    constructor(game){
        super(game);
        this.game = game;
        this.scale = 1;
        this.type = 'lucky';

        this.lives = 3;
        this.score = 15;

        this.width = LUCKY_FISH_WIDHT * this.scale;
        this.height = LUCKY_FISH_HEIGHT * this.scale;

        this.y = Math.random() * (this.game.height * MOVE_HEIGHT_AREA - this.height);
        this.image = document.getElementById('lucky');
        this.frameY = Math.floor(Math.random() * 2);
    }
}

/**
 * HIVE WHALE
 */
export class HiveWhale extends Enemy {
    constructor(game){
        super(game);
        this.game = game;
        this.scale = 1;
        this.type = 'hive';

        this.lives = 15;
        this.score = this.lives;
        this.frameY = 0;

        this.width = HIVE_WHALE_WIDHT * this.scale;
        this.height = HIVE_WHALE_HEIGHT * this.scale;

        this.y = Math.random() * (this.game.height * MOVE_HEIGHT_AREA - this.height);
        this.image = document.getElementById('hivewhale');
        this.speedX = Math.random() * -1.2 - 0.2; // 프레임당 1.4픽셀 
    }
};

/**
 * 
 */
export class Drone extends Enemy {
    constructor(game){
        super(game);
        this.game = game;
        this.scale = 1;
        this.type = 'drone';

        this.lives = 3;
        this.score = this.lives;
        this.frameY = Math.floor(Math.random() * 2);

        this.width = DRONE_WIDHT * this.scale;
        this.height = DRONE_HEIGHT * this.scale;

        this.y = Math.random() * (this.game.height * MOVE_HEIGHT_AREA - this.height);
        this.image = document.getElementById('drone');

        this.speedX = Math.random() * -4.2 - 0.5; // 프레임당 1.4픽셀 
    }
};
