<script>
	import { onMount } from 'svelte';
	import Bubble from './bubble';
    import Mouse from './mouse';
    import Player from './player';
    import Sounds from './sound';
    import Background from './background';
    import Enemy from './enemy';
    
    const SCREN_WIDTH=1000, SCREEN_HIGHT = 600;
    let canvas;
    let ctx;
    let audio;

    let play;
    let gameOver = false;
    let score=0;
    let gameFrame=0;
    const fontSize = 25;
    let font=`${fontSize}px Georgia`;

    let mouse, canvasPosition;
    let background;
    let player;
    const enemys = [
        'blue_fish_swim.png',
        'green_fish_swim.png',
        'pink_fish_swim.png',
        'red_fish_swim.png',
        'yellow_fish.png'
    ];

    let enermies = [];
    const bubbles = [];
    let bubbleImage, enemyImage; 
    let gameSpeed = 3;

    
    const canvasMouseDown = (e) => {
        // 마우스 원점설정 
        mouse.click = true;
        mouse.x = e.x - canvasPosition.left;
        mouse.y = e.y - canvasPosition.top;
        // console.log(mouse.x, mouse.y, mouse.click);
    };
    const canvasMouseUp = (e) => {
        mouse.click =false;
    };

    onMount(() => {
        canvas.width = SCREN_WIDTH;
        canvas.height = SCREEN_HIGHT;
        ctx = canvas.getContext('2d');
        ctx.font = font;
        canvasPosition = canvas.getBoundingClientRect();
        console.log(canvas, ctx, canvasPosition);
        init();

        return () => {
            removeEventHandler();
        }
    });

    const addEventListener = () => {
        canvas.addEventListener('mousedown', canvasMouseDown);
        canvas.addEventListener('mouseup', canvasMouseUp);
    };
    const removeEventHandler = () => {
        canvas.removeEventListener('mousedown', canvasMouseDown);
        canvas.removeEventListener('mouseup', canvasMouseUp);
    };

    const initBg = ()  => {
        background = new Background('/bubble/background1.png', canvas.width, canvas.height);

    }

    const initPlayer = () => {
        player = new Player(canvas);
        console.log(player);
    };

    /**
     * 적군생성 
     */
    const initEnemys = () => {
        for(let i=0; i<enemys.length; i++){
            const image = new Image();
            image.src = `/bubble/${enemys[i]}`;
            enermies.push(new Enemy(canvas.width, canvas.height, image));
        }
    };

    const addBubble = () => {
        
        if(gameFrame % 50 == 0){
            bubbles.push(new Bubble(canvas.width, canvas.height, bubbleImage));
            // console.log(bubbles.length);
        }

        for(let i=0; i<bubbles.length; i++){
            
            bubbles[i].update(player);
            bubbles[i].draw(ctx);

            if(bubbles[i].y < 0 - bubbles[i].radius * 2 ){
                bubbles.splice(i, 1);

                if(!bubbles[i].counted){
                    score--;
                }

                i--;
            }           
            // 충돌된 버블제거 
            else if(bubbles[i].distance < bubbles[i].radius + player.radius){
                
                bubbles[i].soundType == 'sound1'  ? audio.play(0) : audio.play(1);
                if(!bubbles[i].counted){
                    score++;
                    bubbles[i].counted = true;
                    bubbles.splice(i,1); // 제거 
                    i--;
                }
            }
        }
        
    };

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함    
    };

    const runEnemy= () =>{
        // const i = getRandomInt(0,enermies.length);
        // enermies[i].update(gameFrame);
        // enermies[i].draw(ctx);
        enermies.forEach(enemy => {
            enemy.update(gameFrame, player);
            enemy.draw(ctx);

            if(enemy.distance < enemy.radius + player.radius){
                // console.log(enemy, ' 충돌');
                audio.play(2);

                enemy.init();

                player.decrease();
                if(player.lived <= 0){
                    gameFinish();
                }
            }
        });
    };

    const runPlayer = () => {
        player.update(mouse);
        player.draw(ctx, mouse);
    };

    const displayScore = () => {
        ctx.fillStyle='black';
        ctx.fillText(`score: ${score}`, 10,30);
    };



    const gameFinish = () => {
        ctx.fillStyle = 'white';
        const msg1 = 'GAME OVER !!!!! ';
        const txtSize = msg1.length * fontSize;
        ctx.fillText(msg1,canvas.width/2 - 100 , canvas.height/2 - 10);
        ctx.fillText(score, canvas.width/2, 280);
        gameOver = true;
        audio.play(3);
        play.disabled  = false;
    }

    const init = () => {

        const soundSrc = [
            '/bubble/Plop.ogg',
            '/bubble/bubbles-single1.wav',
            '/bubble/qubodup-crash.ogg',
            '/bubble/GAMEOVER.wav',
        ];
        audio = new Sounds(soundSrc);
        
        bubbleImage= new Image();
        bubbleImage.src = "/bubble/bubble_pop_frame_01.png";

        initEnemys()
        

        mouse = new Mouse(canvas);
        addEventListener();
        initBg();
        initPlayer();
        animate()

        play.disabled  = true;
        gameOver = false;
    };

    const animate = (deltaTime) => {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        background.draw(ctx, gameSpeed);
        addBubble();
        runEnemy();
        runPlayer()
        displayScore();
        
        gameFrame++;
        if(!gameOver) requestAnimationFrame(animate);
    };

    const windowResize = (e) => {
        canvasPosition = canvas.getBoundingClientRect();
    };

    const onPlayClick = (e) =>{
        window.location.reload();
    }

</script>


<svelte:head>
    <title>Fish Bubble 2D Game</title>
</svelte:head>

<svelte:window on:resize={windowResize} />

<div class="container">
    <div class="controls">
        <button class="play" bind:this={play}
            on:click={onPlayClick}
            >PLAY
        </button>
    </div>
    <canvas id="canvas" bind:this={canvas} 
        style:--width={`${SCREN_WIDTH}px`}
        style:--heigh={`${SCREEN_HIGHT}px`}>
    </canvas>
</div>


<style>
    .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .controls{
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .play {
        padding: 10px 20px;
        border-radius: 10px;

    }

    #canvas {
        width: var(--width);
        height: var(--height);
        border: 4px solid black;
        background: linear-gradient(to bottom, lightblue, darkblue, black);
    }
</style>