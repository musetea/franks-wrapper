<script>
    export let icon;
</script>



<div class="scene">
    <span class="cube_shadow"></span>
    <i class={icon}></i>
    <div class="cube">
        <div class="cube_face cube_face--front">
            <i class={`${icon} icon_front`}></i>
        </div>
        <div class="cube_face cube_face--back"></div>
        <div class="cube_face cube_face--right"></div>
        <div class="cube_face cube_face--left"></div>
        <div class="cube_face cube_face--top"></div>
    </div>
</div>

<style>
    
    .scene {
        --size: 50px;
        --bg-color: #9c0c0c;
        width: var(--size);
        height: 50px;
        margin-left: 8px;

        perspective: 500px;
    }

    .scene > i{
        font-size: 25px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .scene:hover > i {
        bottom: -10px;
        transform: translate(-50%, 0) rotateY(360deg);
        transition: .3s .2s;
    }

    .cube {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateY(0) translateZ(-100px) 
                rotateX(-20deg) rotateY(20deg);
        transform-style: preserve-3d;
        transition: transform .3s ease-in;
    }
    .scene:hover .cube{
        transform: translateY(-40px) translateZ(-100px) 
            rotateX(30deg) rotateY(30deg);
    }

    .cube_shadow {
        display: block;
        width: 50px;
        height: 40px;
        position: absolute;
        bottom: -10px;
        left: 0;
        background-color: black;
        filter: blur(10px);
        transition: .3s ease-in;
    }
    .scene:hover .cube_shadow{
        width: 60px;
        height: 10px;
        left: 10px;
        bottom: 0;
        filter: blur(15px);
    }

    .cube_face {
        
        width: 100%;
        height: 100%;
        position: absolute;

        background-color: var(--bg-color);
        opacity: 1;
        border: 1px solid black;
    }


    .cube_face > i {
        font-size: 30px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* color: black; */
        color: white;
        transition: bottom .3s;
    }

    /* CUBE FACE */
    .cube_face--front {
        transform: rotateY(0) translateZ(25px);
    }
    .cube_face--back {
        transform: rotateY(180deg) translateZ(25px);
        background-color: #520303;
    }
    .cube_face--right {
        transform: rotateY(90deg) translateZ(25px);
        background-color: #992b2b;
    }
    .cube_face--left {
        transform: rotateY(-90deg) translateZ(25px);
        background-color: #eb3737;
    }
    .cube_face--top {
        transform: rotateX(90deg) translateZ(25px);
        background-color: #c21f1f;
    } 
</style>