<script>
    export let menus;
</script>

<div class="container">
    <div class="box">
        <div class="side side--front">
            {#each menus as menu }
                <button>
                    <p>{menu}</p>
                </button>
            {/each}
            <div class="shape"></div>
        </div>
        <div class="side side--left"></div>
        <div class="side side--top"></div>
    </div>
</div>


<style>
    .container{
        width: 200px;
        height: 200px;
        margin: 250px auto;
        perspective: 700px;
    }

    .box{
        width: 100%;
        height: 100%;
        position: relative;
        

        transform-style: preserve-3d;
        transform: rotateX(-20deg) rotateY(30deg);
    }

    .side{
        width: 200px;
        height: 200px;
        background-color: rgba(30,67,125, .5);

        position: absolute;
    }
    .side--front{
        transform: rotateY(0deg) translateZ(100px);
        background-color: #0e76a8;
    }

    .side--left{
        transform: rotateY(-90deg) translateZ(100px);
        background-color: #128ec9;
    }
    .side--top{
        transform: rotateX(90deg) translateZ(100px);
        background-color: #0b5d85;
    }

    button{
        width: 100%;
        padding: 0;
        font: inherit;
        font-family: Impact, sans-serif;
        font-size: 40px;
        padding-left: 20px;
        color: inherit;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;

        transform-origin: left;
        text-align: left;
        transition: .5s;
    }
    button:hover {
        padding-left: 210px;
    }

    .shape{
        display: none;
        width: 400px;
        height: 500px;
        position: absolute;
        left: -300px;
        top: -80px;
        background-color: black;

        transition: 1s;
        z-index: -10;
    }

    button:nth-child(1):hover ~ .shape{

    }
</style>