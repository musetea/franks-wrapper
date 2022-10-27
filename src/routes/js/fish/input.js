import { KEYS_ARROW_UP,KEYS_ARROW_DOWN, KEYS_SPACE } from './def';
import { KEYS_DEBUG } from './def';

export default class InputHanlder{
    constructor(game){
        this.game = game;
        window.addEventListener('keydown', (e) => {
            // console.log(e.key);

            switch(e.key){
                case KEYS_ARROW_UP:
                case KEYS_ARROW_DOWN:
                    if(this.game.keys.indexOf(e.key) === -1){
                        this.game.keys.push(e.key);
                    }
                    break;
                case KEYS_SPACE:
                    this.game.player.shootTop();
                    break;
                case KEYS_DEBUG: 
                    this.game.debug = !this.game.debug;
                    break;
            }
            
          
        });
        window.addEventListener('keyup', (e) => {
            let index = this.game.keys.indexOf(e.key);
            if( index > -1){
                this.game.keys.splice(index, 1);
            }
        });
    }
};