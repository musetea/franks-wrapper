<script>
    let left = "<<";
    let right = ">>";
</script>


<svelte:head>
    <title>Sprite</title>
</svelte:head>

<div class="moon">
    <p class="loading">LOADING</p>
    <span class="left">{left}</span>
    <input type="radio" class="left" name="direction">
    <span class="right">{right}</span>
    <input type="radio" class="right" name="direction">
    <div class="dog"></div>
    
</div>

<div class="jump"></div>


<style>
    .moon{
        width: 250px;
        height: 250px;
        position: absolute;
        top: 40%;
        left: 50%;
        border: 1px solid black;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background: #d8d8d8;
        box-shadow: inset 15px 15px 10px #999;
    }
  

    p.loading{
        width: 100%;
        height: 10px;
        position: absolute;
        left: 0;
        bottom: -50px;
        font-family: 'monospace';
        color: #4c4c4c;
        font-size: 20px;
        text-align: center;
        text-shadow: 1px 1px 1px #737373;
    }

    input.left, input.right, 
    span.left, span.right{
        position: absolute;
        top: -20px;
        width: 20px;
        height: 20px;
        cursor: pointer;
        z-index: 10;
    }
    
    span.left, span.right{
        pointer-events: none;
        font-size: 20px;
        color: #4c4c4c;
        text-shadow: 1px 1px 1px #737373;
    }

    input.left, span.left{
        left: 0;
    }

    input.right, span.right{
        right: 0;
    }

    input.left, input.right{
        opacity: 0;
    }

    .left:checked ~ .dog{
        transform: translate(-50%, -50%) rotateY(180deg);
    }

    .dog{
        width: 302px;
        height: 205px;
        background: transparent url('/run.png') 0 0 no-repeat;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 2em auto;
        animation: run 1s steps(21) infinite;

    }
    @keyframes run{
        100%{
            background-position: -6342px, 0;
        }
    }

    .jump{
        width: 302px;
        height: 210px;
        background: transparent url('/jump.png') 0 0 no-repeat;
        position: absolute;
        top: 30%;
        animation: jump 1s steps(18) infinite;
    }
    @keyframes jump{
        100%{
            background-position: -5436px, 0;
        }
    }
</style>