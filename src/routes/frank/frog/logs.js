import { Base, GRID_SIZE} from './lib';

class Logs extends Base{
    constructor(x, y, width, height, speed, type){
        super(x, y, width, height, speed)
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
};

const logsArray = [];
let canvasWidth=undefined;
let canvasHeight=undefined;
let context;
export const initLogs = (ctx, w, h) => {
    context = ctx;
    canvasWidth = w;
    canvasHeight = h;

    for(let i=0; i<2; i++){
        const x = i * 400;
        const y = canvasHeight - GRID_SIZE*5 - 20;
        const w = GRID_SIZE*2;
        logsArray.push(new Logs(x, y, w, GRID_SIZE, -1, 'log')
        )
    }
    for(let i=0; i<2; i++){
        const x = i * 200;
        const y = canvasHeight - GRID_SIZE*6 - 20;
        const w = GRID_SIZE;
        logsArray.push(new Logs(x, y, w, GRID_SIZE, 1, 'turtle')
        )
    }
};

export const handleLogs =(gameSpeed)=> {
    logsArray.forEach(log => {
        log.update(gameSpeed);
        log.draw(context);
    });
};
