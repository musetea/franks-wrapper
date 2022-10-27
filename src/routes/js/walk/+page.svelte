<script>
	import { onMount } from 'svelte';
    import  Player  from './player';
    // import { startAnimation} from './fps';

    const SCREEN_W=800, SCREEN_H=500;
    let background;
    let canvasPosition;

    const characters = [
        {src: 'chewie.png', width: 40, height : 72, name: 'chewie'},
        {src: 'jedi.png', width: 32, height : 48, name: 'jedi'},
    ];
    const players = [];


    let canvas, ctx;
    const keys =[];

    const timerAnimate = () => {
        if(!canvas) return;
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(background, 0,0, canvas.width, canvas.height);
        runPlayer();
    };
    
    onMount(()=>{
        canvas.width = SCREEN_W;
        canvas.height = SCREEN_H;
        ctx = canvas.getContext('2d');
        ctx.font = "25px Georgia";
        canvasPosition = canvas.getBoundingClientRect();
        background = new Image();
        background.src = '/walk/background.png';
        characters.forEach(char => {
            const img = new Image();
            img.src = `/walk/${char.src}`;
            const player = new Player(img, char.width, char.height, char.name)
            player.setXY(Math.random() * canvas.width - char.width , 
                Math.random()* char.height  + 144);
            players.push(player)
        });
        players[0].selected = true;
        addEventListener();

        // animate();
        // setInterval(timerAnimate, 100);
        startAnimation(30, timerAnimate);
        return () =>{
            removeEventHandler();
        }
    });

    const addEventListener = () => {
        canvas.addEventListener('mousedown', canvasMouseDown);
        canvas.addEventListener('mousemove', canvasMouseMove);
        canvas.addEventListener('mouseup', canvasMouseUp);
    };
    const removeEventHandler = () => {
        canvas.removeEventListener('mousedown', canvasMouseDown);
        canvas.removeEventListener('mousemove', canvasMouseMove);
        canvas.removeEventListener('mouseup', canvasMouseUp);
    };

    const onKeyDown = (e) => {  
        keys[e.keyCode] = true;
    }
    const onKeyUp = (e) => { 
        delete keys[e.keyCode];
        players.forEach(p => p.moving = false);
    };
    
    const checkPlayerInMouse = (pointX, pointY, x, y, w, h) => {
        if((pointX >= x && pointX <= x + w) && 
            (pointY >= y && pointY <= y + h)){
            return true;
        }else {
            return false;
        }
    };


    const canvasMouseDown = (e) => {
        const pointX = e.clientX - canvasPosition.left;
        const pointY = e.clientY - canvasPosition.top;
        players.forEach(p => {
            if(checkPlayerInMouse(pointX, pointY, p.x, p.y, p.width, p.height)){
                p.selected=true;
            }else{
                p.selected = false;
            }
        });
    };
    const canvasMouseMove = (e) => {
        const pointX = e.clientX - canvasPosition.left;
        const pointY = e.clientY - canvasPosition.top;
        players.forEach(player => {
            //console.log(player.x, player.y, player.width, player.height, pointX, pointY);
            if((pointX >= player.x && pointX <= player.x +player.width)  
                && (pointY >= player.y && pointY <= player.y + player.height)){
                    canvas.style = "cursor:pointer;";
            }else{
                canvas.style = "cursor:auto;";
            }
        });
    };
    const canvasMouseUp = (e) => {
       //console.log(e);
    };

    const runPlayer = () => {
        players.forEach(player => {
            //console.log(player);
            player.walking(keys, canvas.width, canvas.height);
            player.draw(ctx);
        })
    }

    const animate = () => {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(background, 0,0, canvas.width, canvas.height);
        runPlayer();
        requestAnimationFrame(animate);
    };

    let fps, fpsInterval, startTime, now, then, elapsed;


    const startAnimation = (fps) => {
        fpsInterval  = 1000/fps;
        then = Date.now();
        startTime = then;
        animate2();
    };

    function animate2(){
        requestAnimationFrame(animate2);
        now = Date.now();
        elapsed = now - then;
        if(elapsed > fpsInterval){
            then = now - (elapsed % fpsInterval);
            timerAnimate()
        }
        
    }
    
</script>


<svelte:head>
    <title>Walk</title>
</svelte:head>

<svelte:window
    on:keydown={onKeyDown}
    on:keyup={onKeyUp}
/>



<canvas id="canvas" 
    bind:this={canvas}
   
    style:--width={`${SCREEN_W}px`}
    style:--height={`${SCREEN_H}px`} >
</canvas>

<style>
    #canvas{
        width: var(--width);
        height: var(--height);
        border: 2px solid black;
        background-color: #d79c50;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }

</style>