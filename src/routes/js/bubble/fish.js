export class Fish{
    constructor(src){
        this.image = new Image();
        this.image.src = src;
    }

    fish(){
        return this.image;
    }
} 