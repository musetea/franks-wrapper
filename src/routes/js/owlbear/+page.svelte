<script>
    import { onMount ,tick} from 'svelte';
    import Game from './game';

    const WIDTH = 1280;
    const HEIGHT = 720;

    let canvas;
    let ctx;
    let game; 
    let lastTime = 0;

    const initGames = () => {
        game =  new Game(WIDTH, HEIGHT);
        game.render(ctx);
        game.init();
        console.log(game);
    };
   
    const animate = async(timeStamp) => {
        //await tick();
        // console.log(timeStamp);
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        //console.log(canvas);
        ctx.clearRect(0,0,canvas.width, canvas.height);
        game.render(ctx, deltaTime);
        requestAnimationFrame(animate);
    };

    onMount(()=> {
        
        canvas.width = WIDTH;
        canvas.height = HEIGHT;
        ctx = canvas.getContext('2d');

        initGames();
        animate(0);
    });

   
</script>


<svelte:head>
    <title>JavaScript Game Development</title>
</svelte:head>

<div id="wrapper">
    <canvas id="canvas1" bind:this={canvas}></canvas>
    <img src="/owlbear/overlay.png" alt="overlay" id="overlay">
    <img src="/owlbear/leaves_left.png" alt="leaves_left" id="leaves_left">
    <img src="/owlbear/leaves_right.png" alt="leaves_right" id="leaves_right">
</div>
<img src="/owlbear/owlbear.png" alt="owlbear" id="owlbear">
<img src="/owlbear/bush.png" alt="push" id="bush">
<img src="/owlbear/plant.png" alt="plant" id="plant">
<img src="/owlbear/grass.png" alt="grass" id="grass">


<style>
    #wrapper {
        border: 5px solid black;
        width: 1280px;
        /* width: 960px; */
        height: 720px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        overflow: hidden;
    }

    canvas {
        background: url('/owlbear/background.png');
    }
    canvas:hover ~ #leaves_left {
        left: -150px;
        transform: rotate(15deg);
    }

    #overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }

    #leaves_left {
        position: absolute;
        top: 50px;
        left: -100px;
        transition: .3s;
        animation: wobble ease-in-out 1.5s infinite;
        pointer-events: none;
    }
    @keyframes wobble{
        0%{ 
            top: 50px;
        }
        50%{    
            top: 56px        
        }
        100%{     
            top: 50px;
        }
    }
    /*  RIGHT  */
    #leaves_right {
        position: absolute;
        top: 50px;
        right: -100px;
        transition: .2s;
        animation: wobble ease-in-out 1.6s infinite;
        pointer-events: none;
    }
    canvas:hover ~ #leaves_right {
        right: -180px;
        transform: rotate(15deg);
    }


    /* 올빼미 */
    #owlbear{
        display: none;
    }
    #bush, #plant, #grass {
        display: none;
    }
</style>