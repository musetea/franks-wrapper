import { LAYER_WIDHT, LAYER_HEIGHT} from './def';

export default class Layer{
    constructor(game, image, speedModifier){
        this.game = game;
        this.image = image;
        this.speedModifier = speedModifier;
        
        this.width = LAYER_WIDHT;
        this.height = LAYER_HEIGHT;
        this.x= 0;
        this.y= 0;

    }

    draw(context){
        context.drawImage(this.image, this.x, this.y);
        context.drawImage(this.image, this.x + this.width, this.y);
        
    }
    update(){
        if(this.x <= -this.width){
            this.x = 0;
        }
        else{
            this.x -= this.game.speed * this.speedModifier;
        }
    }
};