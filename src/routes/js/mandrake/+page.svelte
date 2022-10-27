<script>
    import { onMount} from 'svelte';
	import Mandrake from './mandrake';

    const SCREEN_WIDHT=2560,
        SCREEN_HEIGHT=1406;
    let canvas;
    let ctx;
    let mandrake;
    const controls = ['All', 'Grow', 'Wink', 'Float', 'Hide'];
    let animation = 'All';
   
    const init = () => {
        mandrake = new Mandrake(canvas.width, canvas.height);
        console.log(mandrake);
    };
    
    const animate = () => {
        ctx.clearRect(0,0, canvas.width, canvas.height);    
        mandrake.draw(ctx);
        mandrake.update();
        requestAnimationFrame(animate);
    };

    const chagneAnimation = async(animation) => {
        if(!mandrake) return;

        switch(animation){
            case 'All': mandrake.setAnimation(0, 355); break;
            case 'Grow': mandrake.setAnimation(0, 75); break;
            case 'Wink': mandrake.setAnimation(76,112); break; 
            case 'Float': mandrake.setAnimation(113,262); break;
            case 'Hide': mandrake.setAnimation(263, 355); break;
        }
    };

    onMount(()=>{
        canvas.width = SCREEN_WIDHT;
        canvas.height = SCREEN_HEIGHT;
        ctx = canvas.getContext('2d');
        
        console.log(canvas, ctx);

        init();
        animate(0);
    });

    $:{
        chagneAnimation(animation);
    }
</script>


<svelte:head>
    <title>MUSH ROOM</title>
    <!-- <link rel="preconnect" href="https://fonts.googleapis.com"> -->
    <!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
    <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">
</svelte:head>

<img src="mushroom/mandrake.png" alt="mandrake" id="mandrake">
<div class="container">
    <div id="controls">
        <p>Play animation: </p>
        {#each controls as control}
            {@const id = control.toLowerCase() }
            <div class="control">
                <input type="radio" name="animation" id={id} bind:group={animation} value={control}>
                <label for={id}>{control}</label>
            </div>
        {/each}
    </div>
    <canvas id="canvas" bind:this={canvas}></canvas>
</div>


<style>

    #mandrake{
        display: none;
    }

    .container{
        width: 100vw;
        height: 100vh;
        position: absolute;
        /* left: 50%;
        top: 50%;
        transform: translate(-50%, -50%); */
        box-shadow: 5px 5px 5px black;
        border: 1px solid black;

        background: url();
    }

    #controls{
        margin: 10px;
        font-size: 2rem;
        font-family: 'Bangers', cursive;
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    .control input[type='radio']{
        font-size: 1.5rem;
    }

    #canvas {
        width: 100%;
        height: 100%;
        background: url('/mushroom/background.png');
        box-shadow: inset 5px 5px 5px black;
        border: 1px solid black;
    }
</style>