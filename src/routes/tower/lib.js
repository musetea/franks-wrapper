export const CellSize = 100;
export const CellGap = 3;
export const DefenderCose = 100;
export const DefenderHeath = 100;
export const NumberOfResources = 300;

export const Mouse = {
    x: undefined,
    x:undefined,
    width:0.1,
    height:0.1,
    click: false,
};

export class ControlBar{
    constructor(w, color){
        this.width = w;
        this.height = CellSize;
        this.color = color;
    };


    draw(ctx){
        ctx.fillStyle=this.color;
        ctx.fillRect(0,0, this.width, this.height);
    }
};

export class Cell{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = CellSize;
        this.height = CellSize;
    }
    draw(ctx, mouse){
        if(mouse.x && mouse.y &&  collision(this, mouse))
        {
            ctx.strokeStyle='black';
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
    }
};

export const collision = (a, b) => {
    if(
        !(a.x > b.x + b.width ||
          a.x +a.width < b.x ||
          a.y > b.y + b.height ||
          a.y + a.height < b.height)  
    ){
        return true;
    }
    return false;
};