<script>
	import { onMount } from 'svelte';
    import { Player} from './player';

    let innerWidth;
    let innerHeight;
    
    let canvas, ctx;
    let imgPlayer;
    let player;

    const animate = () => {
        if(!canvas) return;
        ctx.clearRect(0,0, canvas.width, canvas.height);
        player.draw(ctx, canvas.width, canvas.height);
    };

    onMount(()=> {
        canvas.width = innerWidth;
        canvas.height = innerHeight;

        ctx = canvas.getContext('2d');
        imgPlayer = new Image();
        imgPlayer.src = '/character.png';

        player = new Player(imgPlayer);
        console.log(player);

        setInterval(animate, 1000/15);
    });

    const onResize = (e) => {
        // console.log(e);
        innerWidth = e.currentTarget.innerWidth;
        innerHeight = e.currentTarget.innerHeight;
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        //console.log( canvas.width,canvas.height,);
    };
</script>


<svelte:head>
    <title>Dev ...</title>
</svelte:head>

<svelte:window 
    on:resize={onResize} 
    bind:innerWidth
    bind:innerHeight
/>




<div class="floor"></div>
<canvas id="canvas" bind:this={canvas}></canvas>

<style>
    .floor{
        width: 500%;
        height: 500%;

        position: absolute;
        left: -200%;
        top: -200%;
        /* background-color: blue; */
        background: url('/floor/Brick_01.png');
        transform: rotate3d(1,0,1, 50deg);
    }

    canvas{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
</style>