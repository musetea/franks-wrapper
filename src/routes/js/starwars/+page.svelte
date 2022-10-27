<script>
	import { onMount } from 'svelte';
    const COLUMNS=6;
    let score = 0;
    let countdown;
    let message='';
    const holes = [];
    const moles = [];
    let lastHole;
    let timeUp;
    let timeLimit = 20000;


    function holeClick(e){

    };

    onMount(()=>{
        holes.forEach(h => h.addEventListener('click', holeClick));
        moles.forEach(m => m.addEventListener('click', whack));
    

        // popOut();
    });

    const pickRandomeHole = (holes) => {
        const randomIndex = Math.floor(Math.random() * holes.length);
        const hole = holes[randomIndex];

        if(hole === lastHole){
            return pickRandomeHole(holes)
        }
        lastHole = hole;
        return hole;
    };

    const popOut = () => {
        const time = Math.random() * 1300 + 400; // 13~17
        const hole = pickRandomeHole(holes);
        hole.classList.add('up');
        const timer = setTimeout(() => {
            hole.classList.remove('up');
            if(!timeUp) popOut();
        }, time);
    };

    function whack(e){
        // console.log(e.currentTarget);
        score++;
        this.style.backgroundImage = 'url("/starwars/yoda2.png")';
        this.style.pointerEvents = 'none';
        setTimeout(() => {
            // console.log(e.currentTarget);
            // console.log(this);
            this.style.backgroundImage = 'url("/starwars/yoda1.png")';
            this.style.pointerEvents = 'all';
        }, 800);
    };

    const startGame = () => {
        countdown = timeLimit/1000;
        message = countdown;
        score= 0;
        timeUp = false;
        popOut();
        setTimeout(()=>{
            timeUp= true;
        }, timeLimit);

        const startInterval = setInterval(() => {
            countdown -=1;
            message  = countdown;
            if(countdown < 0){
                countdown = 0;
                clearInterval(startInterval);
                message = 'Times UP!! Thank you for pretecting out plant! This is the way!';
            }
        }, 1000);
    };

</script>

<div class="wrapper">
    <div class="score">{score}</div>
    <div class="countdown">{message}</div>
    <button class="startButton"
        on:click={startGame}
        >Start
    </button>

    <div class="game">
        {#each { length:COLUMNS} as _,col}
            <div class={`hole hole${col+1}`}
                bind:this={holes[col]}
            >
                <div class={`mole ${ col <= 2 ? "small" : "large"}`}
                    bind:this={moles[col]}
                >
                </div>
            </div>
        {/each}
    </div>
</div>


<style>
    :root {
        --dp-color: #010124;
    }
    .wrapper{
        width: 800px;
        height: 600px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: 3px solid var(--dp-color);
        background-image: url('/starwars/background.png');
        overflow: hidden;
    }

    .score {
        width: 200px;
        height: 100px;
        font-size: 150px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        /* border: 1px solid red; */
        text-align: center;
    }

    .countdown {
        width: 100%;
        font-size: 25px;
        position: absolute;
        bottom: 14%;
        text-align: center;
        color: white;
    }

    button{
        outline: none;
        border: none;
        cursor: pointer;
    }
    button:hover{
        background-color:  white;
        color: var(--dp-color);
    }

    .startButton {
        padding: 20px 50px;
        font-size: 20px;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translate(-50%, 0);
        color: white;
        background-color: var(--dp-color);
        border-radius: 10px;
        z-index: 10;
    }

    .game{
        width: 600px;
        height: 400px;
        margin: 70px auto;
        /* border: 2px solid var(--dp-color); */
        z-index: 10;
        display: flex;
        flex-wrap: wrap;
    }

    .hole{
        flex: 1 0 33.33%;
        /* border: 1px solid blue; */
        position: relative;
        overflow: hidden;
    }
    .hole::after{
        content: '';
        width: 100%;
        height: 70px;
        display: block;
        background-image: url('/starwars/sand1.png');
        background-size: contain;
        /* background-color: black; */
        z-index: 2;
        position: absolute;
        bottom: -30px;
        
    }
    .hole.up .mole{
        top: 0%;
    }

    .mole{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 100%;

        background-image: url('/starwars/yoda1.png');
        background-repeat: no-repeat;
        background-position: bottom;

        transition: .5s;
    }
    .mole.small{
        background-size: 60%;
    }
    .mole.large{
        background-size: 80%;
    }

</style>