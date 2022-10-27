class OwlObject{
    constructor(game){
        this.game = game;
        console.log('Object', this.game);
    }

    draw(context){
        context.drawImage(this.image, 
            this.x, this.y,
            this.width, this.height);
    }
    update(){
        
    }
};


export class Bush extends OwlObject {
    constructor(game){
        super(game);
        this.game = game;
        this.image = document.getElementById('bush');
        this.imageWidth = 216;
        this.imageHeight = 100;
        this.width = this.imageWidth;
        this.height = this.imageHeight;
        this.x = Math.random() * this.game.width - this.width;
        this.y = this.game.topMargin + Math.random() * 
            (this.game.height - this.height - this.game.topMargin);
    }
}
export class Plant extends OwlObject {
    constructor(game){
        super(game);
        this.game = game;
        this.image = document.getElementById('plant');
        this.imageWidth = 212;
        this.imageHeight = 118;
        this.width = this.imageWidth;
        this.height = this.imageHeight;
        this.x = Math.random() * this.game.width - this.width;
        this.y = this.game.topMargin + Math.random() * 
            (this.game.height - this.height - this.game.topMargin);
    }
}
export class Grass extends OwlObject {
    constructor(game){
        super(game);
        this.game = game;
        this.image = document.getElementById('grass');
        this.imageWidth = 103;
        this.imageHeight = 182;
        this.width = this.imageWidth;
        this.height = this.imageHeight;
        this.x = Math.random() * this.game.width - this.width;
        this.y = this.game.topMargin + Math.random() * 
            (this.game.height - this.height - this.game.topMargin);
    }
}