import Pacman from './pacman';

// 1: WALL
// 0: YELLOW DOT
// 4: PAC MAN

const map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,4,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,0,0,1,0,1],
    [1,0,1,0,0,0,0,0,0,0,1,0,1],
    [1,0,1,0,1,1,1,1,1,0,1,0,1],
    [1,0,1,0,1,0,0,0,1,0,1,0,1],
    [1,0,0,0,1,0,0,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0,1,0,0,0,1],
    [1,0,1,0,1,0,1,0,0,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
];

export default class TileMap{
    constructor(tileSize){
        this.tileSize = tileSize;

        this.wall=undefined;
        this.yellowDot = undefined;
    };

    setWallImage(image){
        this.wall = image;
    };
    setYellowDotImage(image){
        this.yellowDot = image;
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
    }


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
                }

                this.$drawGrid(ctx, column, row, this.tileSize);
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
}