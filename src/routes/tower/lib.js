export const CellSize = 100;
export const CellGap = 3;
export const DefenderCose = 100;
export const DefenderHeath = 100;
export const NumberOfResources = 300;
export const FONT_SIZE = 30;
export const FONT_FAMILY = 'Orbitron';
export const EnemyHeath = 100;
export const EnermyInterval = 600;
export const STATIC = '/tower/';

export const Aliens = [
    'alien4.png', 'alien5.png', 'alien9.png', 'alien11.png',
    'alien12.png', 'alien12.png', 'alien15.png'
];


export const Mouse = {
    x: undefined,
    y: undefined,
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
    if(!a || !b) return false;
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

const amounts = [20,30,40,50];
export class Resource{
    constructor(w){
        this.x = Math.random() * (w - CellSize);
        this.y = (Math.floor(Math.random() * 5) + 1) * CellSize;
        this.width = CellSize * 0.6;
        this.height = CellSize * 0.6;
        this.amout = amounts[ Math.floor(Math.random() * amounts.length) ];
        console.log('resource', this.x, this.y, this.amout);
    }

    draw(ctx){
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x, this.y, this.width, this.height);

        // 
        ctx.fillStyle = 'black';
        ctx.font = `${20}px ${FONT_FAMILY}`;
        ctx.fillText(this.amout, this.x + 15, this.y + 25);
    }
};

export class FloatingMessage{
    constructor(msg, x, y, size, color){
        this.value = msg;
        this.x = x;
        this.y = y;
        this.size = size;
        this.lifeSpan = 0;
        this.color = color;
        this.opacity = 1;
    }
    update(){
        this.y -= 0.3;
        this.lifeSpan +=1;
        if(this.opacity >= 0.01) this.opacity -= 0.01;
    }

    draw(ctx){
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle= this.color;
        ctx.font = `${this.size}px ${FONT_FAMILY}`;
        ctx.fillText(this.value, this.x, this.y);
        ctx.globalAlpha = 1;
    }
}