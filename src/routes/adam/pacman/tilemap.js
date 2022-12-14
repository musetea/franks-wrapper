import Pacman from './pacman';
import Enemy from './enemy';
import MovingDirection from './movingDirection';

// 1: WALL
// 0: YELLOW DOT
// 4: PAC MAN
// 5: EMPTY SPACE
// 6: ENEMY
// 7: POWER DOT 

const map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,7,0,0,4,0,0,0,0,0,0,7,1],
    [1,0,1,1,1,1,1,1,0,0,1,0,1],
    [1,0,1,6,0,0,0,0,0,0,1,0,1],
    [1,0,1,7,1,1,1,1,1,0,1,0,1],
    [1,0,1,0,1,0,0,0,1,0,1,0,1],
    [1,0,0,0,1,0,0,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0,1,0,0,0,1],
    [1,0,1,0,1,0,1,0,0,0,1,0,1],
    [1,6,0,0,0,0,0,0,0,0,0,6,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
];


export default class TileMap{
    constructor(tileSize){
        this.tileSize = tileSize;

        this.wall=undefined;
        this.yellowDot = undefined;
        this.pinkDot = undefined;
        this.powerDot = undefined;

        this.timerDef = 30
        this.timer = this.timerDef ;
    };

    setWallImage(image){
        this.wall = image;
    };
    setYellowDotImage(image){
        this.yellowDot = image;
    };
    setPinkDotImage(image){
        this.pinkDot = image;
        this.powerDot = this.pinkDot;
    };

    setCanvasSize(canvas){
        canvas.width = map[0].length * this.tileSize;
        canvas.height = map.length * this.tileSize;
    }

    getPacman(velocity){
        for(let row=0; row <map.length; row++){
            for(let column=0; column < map[row].length; column++){
                
                const tile = map[row][column];
                if(tile === 4){
                    map[row][column] = 0;
                    return new Pacman(column*this.tileSize, row * this.tileSize,
                        this.tileSize, velocity, this);
                }
            }
        }
    };

    getEnemies(velocity, images){
        const enemies = [];
        for(let row=0; row <map.length; row++){
            for(let column=0; column < map[row].length; column++){
                const tile = map[row][column];
                if(tile === 6){
                    map[row][column] = 0;
                    const ghost = new Enemy(column*this.tileSize, row*this.tileSize, this.tileSize, velocity, this);
                    ghost.setImages(images);
                    enemies.push(ghost);
                }
            }
        }
        return enemies;
    }

    didCollideWithEnvironment(x, y, direction){
        if(direction == null){
            return;
        }

        if(Number.isInteger(x/this.tileSize) && 
            Number.isInteger(y/this.tileSize)){
            let column = 0;
            let row = 0;
            let nextColumn = 0;
            let nextRow = 0;
            switch(direction){
                case MovingDirection.right:
                    nextColumn = x + this.tileSize;
                    column = nextColumn / this.tileSize;
                    row = y / this.tileSize;
                    break;
                case MovingDirection.left:
                    nextColumn = x - this.tileSize;
                    column = nextColumn / this.tileSize;
                    row = y / this.tileSize;
                    break;
                case MovingDirection.up:
                    nextRow = y - this.tileSize;
                    row = nextRow / this.tileSize;
                    column = x / this.tileSize;
                    break;
                case MovingDirection.down:
                    nextRow = y + this.tileSize;
                    row = nextRow / this.tileSize;
                    column = x / this.tileSize;
                    break;
            }

            const tile = map[row][column];
            if(tile === 1){
                return true;
            }
        }
        return false;
    };

    didWin(){
        return this.$dotsLeft() === 0;
    }

    eatDot(x, y){
        const row = y / this.tileSize;
        const column = x / this.tileSize;
        if(Number.isInteger(row) && Number.isInteger(column)){
            // YELLOW DOT ?????? 
            if(map[row][column] === 0){
                map[row][column] = 5;
                return true;
            }
        }
        return false;
    };
    eatPowerDot(x, y){
        const row = y / this.tileSize;
        const column = x / this.tileSize;
        if(Number.isInteger(row) && Number.isInteger(column)){
            //POWER DOT ?????? 
            if(map[row][column] === 7){
                map[row][column] = 5;
                return true;
            }
        }
        return false;
    };


    update(ctx){
        if(!ctx) return;

        this.$draw(ctx);
    };

    $draw(ctx){
        for(let row=0; row <map.length; row++){
            for(let column=0; column < map[row].length; column++){
                const tile = map[row][column];
                switch(tile){
                    case 1: 
                        this.$drawWall(ctx, column, row, this.tileSize);
                        break;
                    case 0:
                        this.$drawDot(ctx, column, row, this.tileSize);
                        break;
                    case 5: 
                        this.$drawBlank(ctx, column, row, this.tileSize);
                        break;
                    case 7: 
                        this.$drawPowerDot(ctx, column, row, this.tileSize);
                        break;
                }

                //this.$drawGrid(ctx, column, row, this.tileSize);
            }
        }
    };

    $drawGrid(ctx, column, row, size){
        ctx.strokeStyle = 'yellow';
        ctx.strokeRect(column*size, row*size, size, size);
    }

    $drawWall(ctx, column, row, size){
        if(!this.wall) return;
        ctx.drawImage(this.wall,
            column * size, 
            row * size,
            size,
            size);
    };
    $drawDot(ctx, column, row, size){
        if(!this.yellowDot) return;
        ctx.drawImage(this.yellowDot,
            column * size, 
            row * size,
            size,
            size);
    };
    $drawBlank(ctx, column, row, size){
        ctx.fillStyle='black';
        ctx.fillRect(column*size, row*size, size, size);
    }
    $drawPowerDot(ctx, column, row, size){
        this.timer--;
        if(this.timer == 0){
            this.timer = this.timerDef; 
            if(this.powerDot == this.pinkDot){
                this.powerDot = this.yellowDot;
            }else{
                this.powerDot = this.pinkDot;
            }
        }

        ctx.drawImage(this.powerDot, 
            column*size, row*size, size, size);
    };
    $dotsLeft(){
        return map.flat().filter(tile => tile === 0).length;
    }
}