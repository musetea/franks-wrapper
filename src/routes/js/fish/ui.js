export default class UI{
    constructor(game){
        this.game = game;
        this.fontSize = 25;
        this.fontFamily = 'Bangers';
        this.color = 'white';

    }

    draw(context){
        context.save();

        context.fillStyle = this.color;
        // shadow 
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = 'black';

        // score
        context.font = `${this.fontSize}px ${this.fontFamily}`;
        context.fillText(`Score: ${this.game.score}`, 20, 40);

        

        // 게임타임
        const fomattedTime = (this.game.gameTime * 0.001).toFixed(1);
        context.fillText(`Timer: ${fomattedTime} `, 20, 100);

        // 게임종료메시지 
        if(this.game.gameOver){
            this.gameOverMessage(context);
        }

        // ammo
        if(this.game.player.powerUp){
            context.fillStyle = '#ffffbd';
        }
        for(let i=0; i < this.game.ammo; i++){
            context.fillRect(20 + 5 * i,50, 3, 20);
        }

        context.restore();
    }

    gameOverMessage(context){
        context.textAlign = 'center';
        let msg1, msg2;
        if(this.game.score > this.game.winningScore){
            msg1 = 'Most Wondrous!';
            msg2 = 'Well Done explorer!';
        }
        else {
            msg1 = 'Blazes!';
            msg2 = 'Get my repaire kit and try again!';
        }
        context.font = `70px ${this.fontFamily}`;
        context.fillText(msg1, this.game.width/2, this.game.height/2 - 20);
        context.font = `25px ${this.fontFamily}`;
        context.fillText(msg2, this.game.width/2, this.game.height/2 + 20);

    }
};