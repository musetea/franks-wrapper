export default class InputHandler{
    constructor(game){
        this.game = game;
        console.log('input handler created');

        window.addEventListener('keydown', (e) => {
            // console.log(e.key);
            this.game.lastKey = `P${e.key}`;
        });
        window.addEventListener('keyup', (e) => {
            // console.log(e.key);
            this.game.lastKey = `R${e.key}`;
        });
    }
}