import { CELL_WIDTH, CELL_HEIGHT } from './setup';


export class Boundary{
    static width = CELL_WIDTH;
    static height = CELL_HEIGHT;

    constructor({position, image}){
        this.position = position;
        this.width = CELL_WIDTH;
        this.height = CELL_HEIGHT;
        this.image = image;
    }

    update(ctx){
        if(!ctx) return;
        this.$draw(ctx);
    }
    
    /**
     * 
     * @param {*} c 
     * @returns 
     */
    $draw(c){
        if(!c) return;
        const { x, y} = this.position;
        //console.log(x,y);
        // c.fillStyle='blue';
        // c.fillRect(x, y, this.width, this.height);
        c.drawImage(this.image, x, y);
    }
};

