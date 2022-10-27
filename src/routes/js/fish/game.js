import Player from './player';
import InputHanlder from './input';
import UI from './ui';
import { Angler1, Angler2, Drone, HiveWhale, LuckyFish } from './enemy';
import { AMMO, MAX_AMMO} from './def';
import Background from './background';
import Particle from './particle';
import { SmokeExplosion, FireExplosion } from './explosion';

export default class Game{
    constructor(width, height){
        this.width = width;
        this.height = height;

        this.keys = [];
        this.ammo = AMMO;
        this.maxAmmo = MAX_AMMO;
        this.ammoTimer = 0;
        this.ammoInterval = 500;

        this.enemies = [];
        this.enemyTimer = 0;
        this.enemyInterval = 1000;

        this.particles = [];
        this.explosions = [];

        this.background = new Background(this);
        this.player = new Player(this);
        this.input = new InputHanlder(this);
        this.ui = new UI(this);

        this.gameOver = false;
        this.score = 0;
        this.winningScore = 350;

        // 게임시간
        this.gameTime = 0;
        this.timeLimit = 60000; //15초
        // 게임속도
        this.speed = 1;
        this.debug = false;
    }

    update(deltaTime){

        // 게임오버체크 
        if(!this.gameOver) this.gameTime += deltaTime;
        if(this.gameTime > this.timeLimit) this.gameOver = true;

        // 백그라운드 
        this.background.update();
        this.background.layer4.update();

        // 플레이어
        this.player.update(deltaTime);

        // AMMO 
        if(this.ammoTimer > this.ammoInterval){
            if(this.ammo < this.maxAmmo){
                this.ammo++;
            }
            this.ammoTimer = 0;
        }
        else{
            this.ammoTimer += deltaTime;
        }

        // PATICLE
        this.particles.forEach(particle => particle.update());
        this.particles = this.particles.filter(particle => !particle.markedForDeletion);  
        
        // EXPLOTIION
        this.explosions.forEach(explosion => explosion.update(deltaTime));
        this.explosions = this.explosions.filter(explosion => !explosion.markedForDeletion); 

        // ENAMEY
        this.enemies.forEach(enemy => {
            enemy.update();
            
            // 충동감지
            if(this.checkCollision(this.player, enemy)){
                enemy.markedForDeletion = true;
                //EXPLOSIONS
                this.addExplosion(enemy);

                // PARTICLE
                for(let i=0; i<enemy.score; i++){
                    this.particles.push(new Particle(this, enemy.x+enemy.width*0.5, enemy.y + enemy.height* 0.5))
                }

                if(enemy.type == 'lucky'){
                    this.player.enterPowerUp();
                }
                else{
                    if(!this.gameOver)
                        this.score -= enemy.score;
                }
                console.log(enemy);
            }

            // 발사체 충돌 감지
            this.player.projectTiles.forEach(tile => {

                if(this.checkCollision(tile, enemy)){
                    enemy.lives--;
                    tile.markedForDeletion = true;   // 발사체 제거 

                    // PARTICLE
                    // for(let i=0; i<10; i++){
                    //     this.particles.push(new Particle(this, enemy.x+enemy.width*0.5, enemy.y + enemy.height* 0.5))
                    // }

                    if(enemy.lives <= 0){
                        
                        // PARTICLE
                        // for(let i=0; i<10; i++){
                        //     this.particles.push(new Particle(this, enemy.x+enemy.width*0.5, enemy.y + enemy.height* 0.5))
                        // }
                        enemy.markedForDeletion = true;

                        //EXPLOSIONS
                        this.addExplosion(enemy);

                        if(enemy.type === 'hive'){
                            for(let i=0; i<5; i++){
                                this.enemies.push(new Drone(this, 
                                    enemy.x + Math.random() * enemy.width, 
                                    enemy.y + Math.random() * enemy.height* 0.5))
                            }
                        }

                        if(!this.gameOver) {
                            this.score += enemy.score;
                        }
                        
                        
                        if(this.score > this.winningScore){
                            this.gameOver = true;
                        }
                    }
                }
            });
        })
        this.enemies = this.enemies.filter(enemy => !enemy.markedForDeletion);
        if(this.enemyTimer > this.enemyInterval && !this.gameOver){
            this.addEnemy();
            this.enemyTimer = 0;
        }
        else{
            this.enemyTimer += deltaTime;
        }
    }

    draw(context){
        this.background.draw(context);  //배경
        this.ui.draw(context);

        this.player.draw(context);

        // PATICLE
        this.particles.forEach(particle => {
            particle.draw(context);
        });

        // ENAMEY
        this.enemies.forEach(enemy => {
            enemy.draw(context);
        });

        // EXPLOTIION
        this.explosions.forEach(explosion => explosion.draw(context));

        // 백그라운드4
        this.background.layer4.draw(context);
    };

    addEnemy(){
        const randomize = Math.random();
        if(randomize < 0.3)
        {
            this.enemies.push(new Angler1(this));
        }
        else if(randomize < 0.6){
            this.enemies.push(new Angler2(this));
        }
        else if(randomize < 0.8){
            this.enemies.push(new HiveWhale(this));
        }
        else{
            this.enemies.push(new LuckyFish(this));
        }
        // console.log(this.enemies);
    };

    //** */
    addExplosion(enemy){

        const randomize = Math.random();
        if(randomize < 0.5){
            this.explosions.push(new SmokeExplosion(this, 
                enemy.x + enemy.width * 0.5, 
                enemy.y + enemy.height * 0.5));
        }else{
            this.explosions.push(new FireExplosion(this, 
                enemy.x + enemy.width * 0.5, 
                enemy.y + enemy.height * 0.5));
        }
    };

    checkCollision(rect1, rect2){
        return (
            rect1.x < rect2.x + rect2.width && 
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height && 
            rect1.height + rect1.y > rect2.y
        );
    }
};