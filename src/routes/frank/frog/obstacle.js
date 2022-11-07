import { GRID_SIZE } from './lib';

class Obstacle{
    constructor(x, y, width, height, speed, type){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;

        console.log(this);
    }

    draw(ctx){
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    update(gameSpeed){
        this.x += this.speed * gameSpeed;
        if(this.speed > 0){
            // x 좌표가 오른쪽 끝에 도달했을때 
            if(this.x > canvasWidth + this.width){
                this.x = 0 -this.width;
            }
        }else{
            if(this.x < 0 - (this.width*2)){
                this.x = canvasWidth; 
            }
        }
    }
}

let context=undefined;
let canvasWidth=undefined;
let canvasHeight=undefined;
const carsArray = [];
export const initObstacles = (ctx, w, h) => {
    context = ctx;
    canvasWidth = w;
    canvasHeight = h;

    for(let i=0; i<2; i++){
        const x = i * 350;
        const y = canvasHeight - GRID_SIZE*2 - 20;
        const w = GRID_SIZE*2;
        carsArray.push(new Obstacle(x, y, w, GRID_SIZE, 1, 'car')
        )
    }
    for(let i=0; i<2; i++){
        const x = i * 300;
        const y = canvasHeight - (GRID_SIZE*3) - 20;
        const w = GRID_SIZE*2;
        carsArray.push(new Obstacle(x,y, w, GRID_SIZE, -1, 'car')
        )
    }
    for(let i=0; i<2; i++){
        const x = i * 400;
        const y = canvasHeight - (GRID_SIZE*4) - 20;
        const w = GRID_SIZE*2;
        carsArray.push(new Obstacle(x,y, w, GRID_SIZE, 2, 'car')
        )
    }
};

export const handleObstacles =(gameSpeed)=> {
    carsArray.forEach(car => {
        car.update(gameSpeed);
        car.draw(context);
    });
};
