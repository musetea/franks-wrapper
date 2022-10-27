<script>
    let numOctaves = 4;
    let seed = 2;
    let baseFrequency = "0.02 0.05";
    let scale = 50;

</script>

<svelte:head>
    <title>Text Distortion</title>
</svelte:head>

<div class="container">
    <section class="section_1">
        <button>PAINT</button>
    </section>
    <section class="section_2">
        <button>PAINT</button>
    </section>
</div>

<svg>
    <fillter id="smudged">
        <feTurbulence 
            numOctaves={numOctaves}
            seed={seed}
            baseFrequency={baseFrequency}
        />
        <feDisplacementMap scale={scale} in="SourceGraphic" />
    </fillter>
</svg>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container{
        width: 260px;
        margin: 150px auto;
    }

    section{
        position: relative;
        /* border: 1px solid black; */
        width: 100%;
        height: 100%;
    }

    button{
        position: relative;
        width: 260px;
        height: 100px;
        font-size: 40px;
        border: none;
        outline: none;
        background: none;
        font-weight: 900;
    }

    .section_1 button{
        color: rgba(117,117,117,1);
        transition: .1s;
        text-shadow: 1px -1px 0 rgba(117,117,117,1),
                    -1px 1px 0 rgba(117,117,117,1),
                    -1px -1px 0 rgba(117,117,117,1),
                    1px 1px 0  rgba(117,117,117,1);
    }
    .section_1 button:hover{
        color: white;
        transition: 0.8s;
        text-shadow: 1px -1px 0 rgba(117,117,117,1),
                    -1px 1px 0 rgba(117,117,117,1),
                    -1px -1px 0 rgba(117,117,117,1),
                    1px 1px 0  rgba(117,117,117,1),
                    0px 2px 0  rgba(117,117,117,0.95),
                    0px 3px 0  rgba(117,117,117,0.90),
                    0px 4px 0  rgba(117,117,117,0.85),
                    0px 5px 0  rgba(117,117,117,0.80),
                    0px 6px 0  rgba(117,117,117,0.75),
                    0px 7px 0  rgba(117,117,117,.70),
                    0px 8px 0  rgba(117,117,117,.65),
                    0px 9px 0  rgba(117,117,117,.60),
                    0px 10px 0  rgba(117,117,117,.55),
                    0px 11px 0  rgba(117,117,117,.53),
                    0px 12px 0  rgba(117,117,117,.48),
                    0px 13px 0  rgba(117,117,117,.45),
                    0px 14px 0  rgba(117,117,117,.42),
                    0px 15px 0  rgba(117,117,117,.38),
                    0px 16px 0  rgba(117,117,117,.35),
                    0px 17px 0  rgba(117,117,117,.32),
                    0px 18px 0  rgba(117,117,117,.29),
                    0px 19px 0  rgba(117,117,117,.25),
                    0px 20px 0  rgba(117,117,117,.2);
    }

    .section_2 button{
        color: #65ff00;
        transition: .5s;
        -webkit-text-stroke: 1px black;
        background: linear-gradient(to right, red, #ff8000, #ffFF00, #007940, #4040ff, #a000c0);
        -webkit-background-clip: text;
        /* background-clip: text; */
        -webkit-text-fill-color: transparent;
    }
    .section_2 button::before{
        content: 'PAINT';
        position: absolute;
        /* top: 0; */
        bottom: 0;
        left: 0;
        /* background: black; */
        width: 100%;
        height: 100%;
        transition: .2s;
        z-index: -1;
        opacity: 0;
        transform: translateY(0) scale(1,0);
        background: linear-gradient(to right, red, #ff8000, #ffFF00, #007940, #4040ff, #a000c0);
        -webkit-background-clip: text;
        filter: blur(0px) url('#smudged');
    }
    .section_2 button:hover::before{
        opacity: .8;
        transform: translateY(120px) scale(1,3);
        transition: 1s ease-out;
    }
</style>