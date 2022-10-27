import { KEYS_ARROW_UP,KEYS_ARROW_DOWN } from './def';
import { PLAYER_WIDHT,PLAYER_HEIGHT } from './def';
import { PLAYER_MAX_FRAME } from './def';
import ProjectTile from './tile';


export default class Player{
    constructor(game){
        this.game = game;
        this.spriteWidth = PLAYER_WIDHT;
        this.spriteHeight = PLAYER_HEIGHT;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.speedY = 0;
        this.maxSpeed = 3;
        this.projectTiles = [];

        this.x = 20;
        this.y = 100;
        
        this.frameX = 0;
        this.frameY = 0;
        this.minFrame = 0; 
        this.maxFrame = PLAYER_MAX_FRAME;

        this.image = document.getElementById('player');

        // 파워업
        this.powerUp = false;
        this.powerUpTimer = 0;
        this.powerUpLimit = 10000;
    }

    draw(context){
        // context.fillStyle = 'black';
        if(this.game.debug) {
            context.strokeRect(this.x, this.y, this.width, this.height);
        } 

         // HANDLE PROJECTTILES
        this.projectTiles.forEach(tile => {
            tile.draw(context);
        });

        
        // 이미지 그리기
        context.drawImage(this.image, 
            this.frameX * this.width, 
            this.frameY * this.height, 
            this.width, 
            this.height,
            this.x, this.y, this.width, this.height);


       
    }
    update(deltaTime){
        if(this.game.keys.includes(KEYS_ARROW_UP)){
            this.speedY = -this.maxSpeed;
        }
        else if(this.game.keys.includes(KEYS_ARROW_DOWN)){
            this.speedY += this.maxSpeed;
        }
        else {
            this.speedY = 0;
        }
        this.y += this.speedY;

        // 수직경계
        if(this.y > this.game.height - this.height *0.5){
            this.y = this.game.height - this.height*0.5;
        }
        else if(this.y < -this.height * 0.5){
            this.y = -this.height * 0.5;
        }


        //PROJECTTILES
        this.projectTiles.forEach(tile => {
            tile.update();
        });
        this.projectTiles = this.projectTiles.filter(tile => !tile.markedForDeletion)

        // 스프라이트 
        this.frameX < this.maxFrame ? this.frameX++ : this.frameX=0;

        // 파워업
        if(this.powerUp){
            if(this.powerUpTimer > this.powerUpLimit){
                this.powerUpTimer = 0;
                this.powerUp = false;
                this.frameY = 0;
            }
            else{
                this.powerUpTimer += deltaTime;
                this.frameY = 1;
                this.game.ammo += 0.1;
            }
        }
    };

    shootTop(){
        if(this.game.ammo > 0) {
            this.projectTiles.push(new ProjectTile(this.game, this.x + 80, this.y + 30));
            this.game.ammo--;
        }
        //console.log(this.game.ammo, this.game.maxAmmo);
        if(this.powerUp){
            this.shootBottom();
        }
    };

    shootBottom(){
        if(this.game.ammo > 0){
            this.projectTiles.push(new ProjectTile(this.game, this.x + 80, this.y + 175));
        }
    }

    enterPowerUp(){
        this.powerUpTimer = 0;
        this.powerUp = true;
        if(this.game.ammo < this.game.maxAmmo){
            this.game.ammo = this.game.maxAmmo;
        }
    }
};