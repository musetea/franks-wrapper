<script>
    import { onMount } from 'svelte';
	import Game from './game';
    const GRAPHIC_2D = '2d';
    const SCREEN_WIDTH=1200, SCREEN_HEIGHT=500;

    let canvas;
    let ctx;
    let game;
    let lastTime = 0;

    const initGame = () => {
        game = new Game(canvas.width, canvas.height);
        console.log(game);

        game.draw(ctx);
    };

    /**
     * ANIMATION LOOP
     */
    const animate = (timeStamp) => {
        if(!canvas) return;

        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0,0, canvas.width, canvas.height);
        game.draw(ctx);
        game.update(deltaTime);
        requestAnimationFrame(animate)
    }


    onMount(()=>{
        ctx = canvas.getContext(GRAPHIC_2D);
        canvas.width = SCREEN_WIDTH;
        canvas.height = SCREEN_HEIGHT;
        console.log(canvas, ctx);


        initGame();
        animate(0);
    });
</script>


<svelte:head>
    <title>Fish 2D Game</title>
    <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">
</svelte:head>

<canvas id="canvas" bind:this={canvas}></canvas>

<!-- 캐릭터 -->
<img src="/fish/player.png" alt="player" id="player">
<img src="/fish/angler1.png" alt="angler1" id="angler1">
<img src="/fish/angler2.png" alt="angler2" id="angler2">
<img src="/fish/lucky.png" alt="lucky" id="lucky">
<img src="/fish/hivewhale.png" alt="hivewhale" id="hivewhale">
<img src="/fish/drone.png" alt="drone" id="drone">

<!-- 프롭스 -->
<img src="/fish/projectile.png" alt="projectile" id="projectile">
<img src="/fish/gears.png" alt="gears" id="gears">
<img src="/fish/smokeExplosion.png" alt="smokeExplosion" id="smokeExplosion">
<img src="/fish/fireExplosion.png" alt="fireExplosion" id="fireExplosion">


<!-- 레이어 -->
<img src="/fish/layer1.png" alt="layer1" id="layer1">
<img src="/fish/layer2.png" alt="layer2" id="layer2">
<img src="/fish/layer3.png" alt="layer3" id="layer3">
<img src="/fish/layer4.png" alt="layer4" id="layer4">




<style>
    :root {
        --bg-color: #4d79bc;
    }
    #canvas {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        border: 5px solid black;
        background-color: var(--bg-color);
        max-width: 100%;
        max-height: 100%;
    }

    #layer1, #layer2, #layer3, #layer4{
        display: none;
    }

    #player{
        display: none;
    }
    #angler1, #angler2, #lucky, #hivewhale {
        display: none;
    }
    #projectile, #gears {
        display: none;
    }

    #drone {
        display: none;
    }

    #fireExplosion, #smokeExplosion {
        display: none;
    }



</style>