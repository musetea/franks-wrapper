export const CellSize = 100;
export const CellGap = 3;

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
    draw(ctx){
        ctx.strokeStyle='black';
        ctx.strokeRect(this.x, this.y, this.width, this.height);

    }
};