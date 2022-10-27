<script>
    let baseFrequency = '0.02 0.02';
    let numOctaves=3;
    let seed=0;
    let scale=7;    

</script>


<svelte:head>
    <title>CSS Filters SVG Turbulence</title>
</svelte:head>

<div class="container">
    <div class="button_wrapper">
        <button></button>
        <div class="button_label">
            HOME
        </div>
    </div>
    <div class="button_wrapper">
        <button></button>
        <div class="button_label">
            ABOUT
        </div>
    </div>
    <div class="button_wrapper">
        <button></button>
        <div class="button_label">
            ARTWORK
        </div>
    </div>
    <div class="button_wrapper">
        <button></button>
        <div class="button_label">
            CONTACT
        </div>
    </div>
    <div class="button_wrapper">
        <button></button>
        <div class="button_label">
            SHOP
        </div>
    </div>
</div>

<svg>
    <defs>
        <filter id="shake0">
            <feTurbulence id='turbulence' 
                baseFrequency={baseFrequency} 
                numOctaves={numOctaves}
                seed= {seed}
            />
            <feDisplacementMap id="displacement" 
                in="SourceGraphic"
                in2="noise"
                scale={scale}
                />
        </filter>
        <filter id="shake1">
            <feTurbulence id='turbulence' 
                baseFrequency={baseFrequency} 
                numOctaves={numOctaves}
                seed= {seed}
            />
            <feDisplacementMap id="displacement" 
                in="SourceGraphic"
                in2="noise"
                scale={"6"}
                />
        </filter>
        <filter id="shake2">
            <feTurbulence id='turbulence' 
                baseFrequency={baseFrequency} 
                numOctaves={numOctaves}
                seed= {seed}
            />
            <feDisplacementMap id="displacement" 
                in="SourceGraphic"
                in2="noise"
                scale={scale}
                />
        </filter>
        <filter id="shake3">
            <feTurbulence id='turbulence' 
                baseFrequency={baseFrequency} 
                numOctaves={numOctaves}
                seed= {seed}
            />
            <feDisplacementMap id="displacement" 
                in="SourceGraphic"
                in2="noise"
                scale={"5"}
                />
        </filter>
        <filter id="shake4">
            <feTurbulence id='turbulence' 
                baseFrequency={baseFrequency} 
                numOctaves={numOctaves}
                seed= {seed}
            />
            <feDisplacementMap id="displacement" 
                in="SourceGraphic"
                in2="noise"
                scale={scale}
                />
        </filter>
    </defs>
</svg>


<style>
    .container{
        width: 200px;
        height: 270px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* background: blue; */
    }

    .button_wrapper{
        width: 100%;
        height: 50px;
        position: relative;
        /* background: red; */
        margin-bottom: 5px;
    }

    button, .button_label{
        /* background: yellow; */
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .button_label{
        line-height: 50px;
        text-align: center;
        font-size: 35px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 
            'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: white;
    }

    button{
        background: black;
        outline: none;
        border: none;
    }

    .button_wrapper:hover{
        transform: scale(1.8);
        z-index: 10;
        /* filter: url('#shake0'); */
        animation: distort .5s linear infinite;
    }
    .button_wrapper:hover button{
        background: white;
    }
    .button_wrapper:hover .button_label{
        color: black;
    }

    @keyframes distort{
        0% { filter: url('#shake0');}
        25% { filter: url('#shake1');}
        50% { filter: url('#shake2');}
        75% { filter: url('#shake3');}
        100% { filter: url('#shake4');}
    }
</style>