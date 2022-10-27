import InputHandler  from './input';
import { Plant, Grass, Bush } from './object';
import Owlbear from './owlbear';

const RANDOM_SIZE_03 = 0.3;
const RANDOM_SIZE_06 = 0.6;

export default class Game {
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.topMargin = 200;
        this.lastKey = undefined;
        this.numberOfPlants = 10;
        
        this.input = new InputHandler(this);
        this.owlbear = new Owlbear(this);
        this.plants = [];
        this.gameObjects = [];
    }

    render(context, deltaTime){
        // 객체모음
        this.gameObjects = [this.owlbear, ...this.plants];

        // 객체정렬 
        this.gameObjects.sort((a,b) => {
            return (a.y + a.height) - (b.y + b.height);
        });
        this.gameObjects.forEach(obj => {
            obj.draw(context);
            obj.update(deltaTime);
        });
        // this.plants.forEach(plant => plant.draw(context));
        // this.owlbear.draw(context);
        // this.owlbear.update(deltaTime);
    }

    init(){
        for(let i=0; i<this.numberOfPlants; i++){
            const randomsize = Math.random();
            if(randomsize < RANDOM_SIZE_03){
                this.plants.push(new Grass(this));
            }
            else if(randomsize < RANDOM_SIZE_06){
                this.plants.push(new Plant(this));
            }
            else{
                this.plants.push(new Bush(this));
            }
        }
    };

    
}