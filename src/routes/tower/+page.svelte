<script>
	import { onMount } from 'svelte';
    import { ControlBar, CellSize, DefenderCose, NumberOfResources} from './lib';
    import { Mouse, Cell } from './lib';
    import { collision } from './lib';
    import { Defender} from './defender';

    let canvas, ctx;
    let canvasPosition;
    let controlBar;
    const gridCells =[];
    const defenders = [];

    const mouse = Mouse;
    console.log(mouse);

    onMount(()=>{
        ctx = canvas.getContext('2d');
        canvas.width = 900;
        canvas.height = 600;
        canvasPosition = canvas.getBoundingClientRect();
        console.log(canvasPosition);
        initGame();
    })

    const initGame = () => {
        controlBar = new ControlBar(canvas.width, 'blue');
        createGrid();
        handleDefenders();


        animate();
    };
    const createGrid = ()=> {
        console.log(controlBar);
        for(let y = CellSize; y < canvas.height; y+=CellSize){
            for(let x = 0; x < canvas.width; x+= CellSize){
                gridCells.push(new Cell(x, y));
            }
        }
        console.log(gridCells);
    };

    function animate(){
        if(!canvas) return;
        ctx.clearRect(0,0,canvas.width, canvas.height);
        controlBar.draw(ctx);
        handleGameGrid();

        requestAnimationFrame(animate);
    };

    function handleGameGrid(){
        for(let i=0; i < gridCells.length; i++){
            gridCells[i].draw(ctx, mouse);
        }
    };

    function handleDefenders(){
        for(let i=0; i<defenders.length; i++){
            defenders[i].draw(ctx);
        }
    }

    const onCanvasMouseMove = (e)=> {
        mouse.x = e.x - canvasPosition.left;
        mouse.y = e.y - canvasPosition.top;
    }
    const onCanvasMouseLeave = (e)=> {
        mouse.x = undefined;
        mouse.y = undefined;
    };
    const onCanvasMouseDown = (e) => {
        mouse.click = true;
        
    };
    const onCanvasMouseUp = (e) => {
        mouse.click = false;
    };

    const onCanvasClick = (e) => {
        const gridPositionX = mouse.x - (mouse.x % CellSize);
        const gridPositionY = mouse.y - (mouse.y % CellSize);
        console.log(gridPositionX, gridPositionY);
        if(gridPositionY < CellSize) return;
        
        let defenderCose = DefenderCose;
        if(NumberOfResources > defenderCose){
            defenders.push(new Defender(gridPositionX, gridPositionY));
        }
        console.log(mouse);
    };

</script>


<canvas bind:this={canvas}
    on:mousemove={onCanvasMouseMove}
    on:mouseleave={onCanvasMouseLeave}
    on:mousedown={onCanvasMouseDown}
    on:mouseup={onCanvasMouseUp}
    on:click={onCanvasClick}
>
</canvas>

<style>
    canvas{
        width: 900px;
        height: 600px;
        background-color: white;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>