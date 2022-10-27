<script>
	import { onMount } from 'svelte';
    import { Bird}  from './bird';
    import { Particle} from './particles';
    import { Obstracle } from './obstracles';
    import { Background } from './bg';
    import { BG } from '../../../lib/lib';
    import { Sound } from '../../../lib/sound';
	

    const SCREEN_W = 600;
    const SCREEN_H = 400;
    let canvas, ctx;
    
    let gBG;
    let bg;
    
    let frame = 0;
    let gameSpeed = 2;
    let spacePress = false;
    let score = 0;
    let angle=0, hue=0;
    let bird;
    const pariclesArr = [];
    const obstaclesArr = [];
    let bang;
    let boom;

    const topOffset = 90;
    let gradient;

    function createCradient(ctx){
        const gradient = ctx.createLinearGradient(0,0,0,70);
        gradient.addColorStop('0.4', '#fff');
        gradient.addColorStop('0.5', '#000');
        gradient.addColorStop('0.55', '#4040ff');
        gradient.addColorStop('0.6', '#000');
        gradient.addColorStop('0.9', '#fff');
        return gradient;
    }


    onMount(()=>{
        ctx = canvas.getContext('2d');
        canvas.width= SCREEN_W;
        canvas.height= SCREEN_H;

        boom = new Sound('/bird/boom.wav');
        
        
        gBG = new BG(canvas.width, canvas.height);
        bg = new Background('/bird/bg.png', gBG);
        console.log(bg);

        const dragon = new Image();
        dragon.src = '/bird/dragon.png';
        bird = new Bird(100,150, 20,20, dragon);

        bang = new Image();
        bang.src = `/bird/bang.png`;
        gradient = createCradient(ctx);

        animate();
    });


    function onKeyDown(e){
        // console.log(e);
        if(e.code === 'Space') spacePress=true;
    };
    function onKeyUp(e){
        if(e.code === 'Space') spacePress=false;
        bird.frameX = 0;
    };


    function animate(){
        if(!canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        bg.draw(ctx, gameSpeed);        
        displayScore();
        birdFly();
        handleParticles();
        handleObstacles();
        if(handleCollisions()) return;

        requestAnimationFrame(animate);
        angle+=0.01;
        hue++;
        frame++;
    };

    function birdFly(){
        bird.update(canvas.width, canvas.height, angle, spacePress, frame);
        bird.draw(ctx);
    };

    function displayScore(){
        ctx.fillStyle = gradient;
        ctx.font = '90px Georgia';
        ctx.strokeText(score, 500, 70);
        ctx.fillText(score, 500, 70);

    }

    function handleParticles(){
        pariclesArr.unshift(new Particle(bird.x, bird.y, hue));
        for(let i=0; i<pariclesArr.length; i++){
            pariclesArr[i].update(gameSpeed);
            pariclesArr[i].draw(ctx);
        }
        // 200이상이면 20개 삭제 
        if(pariclesArr.length > 200){
            for(let i=0; i<20; i++){
                pariclesArr.pop(pariclesArr[i]);
            }
        }
    };

    function handleObstacles(){
        if(frame%50 === 0){
            obstaclesArr.unshift(new Obstracle(canvas.width, canvas.height, hue));
        }
        for(let i=0; i<obstaclesArr.length; i++){
            if(obstaclesArr[i].update(gameSpeed, bird.x)){
                score++;
            }
            obstaclesArr[i].draw(ctx, canvas.height);
        }
    };

    function handleCollisions(){
        for(let i=0; i<obstaclesArr.length; i++){
            const obstacle = obstaclesArr[i];
            if(bird.x <  obstacle.right() && bird.right() > obstacle.x &&
                ((bird.y < 0 + obstacle.top && bird.bottom() > 0) ||
                 (bird.y > canvas.height - obstacle.bottom &&
                bird.y + bird.height < canvas.height))){
                    // collision 
                    boom.play();
                    ctx.drawImage(bang, bird.x, bird.y, 50,50);
                    gameOver(ctx);
                    return true;
                }

        }
    };

    function gameOver(ctx){
        ctx.font = '25px Georgia';
        ctx.fillStyle = "white";
        ctx.fillText('Game Over, score is ' + score, 200, 200);
    }

</script>

<svelte:window
    on:keydown={onKeyDown}
    on:keyup={onKeyUp}
/>



<canvas
    style:--width={`${SCREEN_W}px`}
    style:--height={`${SCREEN_H}px`}
    id="canvas"
    bind:this={canvas} 
>
</canvas>

<style>
    #canvas {
        /* width: var(--width);
        height: var(--height); */
        width: 800px;
        height: 600px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 3px solid black;
    }
</style>