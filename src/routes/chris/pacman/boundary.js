export class Boundary{
    static width = 40;
    static height = 40;

    constructor({position}){
        this.position = position;
        this.width = Boundary.width;
        this.height = Boundary.height;
    }
    draw(c){
        if(!c) return;
        c.fillStyle='blue';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
};

