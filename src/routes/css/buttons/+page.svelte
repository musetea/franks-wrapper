<script>
    import { onMount } from 'svelte';
    let buttons =[]
    let turbulence;
    let verticalFrequency = 0.0001;
    const steps = 30;
    const interval = 10;

    onMount(()=>{
        console.log(buttons, turbulence);
        turbulence.setAttribute('baseFrequency', verticalFrequency +  ' 0.00001');

        buttons.forEach(function(button){
            button.addEventListener('mouseover', function(){
                verticalFrequency = 0.00001;
                for(let i=0; i<steps; i++){

                    setTimeout(() => {
                        verticalFrequency += 0.002;
                        turbulence.setAttribute('baseFrequency', verticalFrequency +  ' 0.00001');
                    }, i * interval);
                }

                setTimeout(() => {
                    verticalFrequency += 0.002;
                    turbulence.setAttribute('baseFrequency', verticalFrequency +  ' 0.00001');
                }, steps * interval);
            });
        });
    });
</script>

<div class="container">
    <button bind:this={buttons[0]}>BUTTON 1</button>
    <button bind:this={buttons[1]}>BUTTON 2</button>
    <button bind:this={buttons[2]}>BUTTON 3</button>
</div>

<svg>
    <defs>
        <filter id="wave">
            <feTurbulence  bind:this={turbulence}
                type='fractalNoise' 
                baseFrequency='0.00001 0.00001'
                numOctaves='1'
                result='wrap'
                />
            <feDisplacementMap 
                xChannelSelector='R'
                yChannelSelector='G'
                scale='30'
                in='SourceGraphic'
                in2 = 'wrapOffset'
            />
        </filter>
    </defs>
</svg>


<style>
    .container{
        position: absolute;
        width: 900px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* border: 1px solid black; */
        display: flex;
        justify-content: space-around;
    }

    button{
        font-family: Impact;
        font-size: 40px;
        position: relative;
        width: 250px;
        height: 80px;
        border-radius: 10px;
        background: none;
        border: none;
        outline: none;
        color: white;
    }
    button::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: black;
        z-index: -1;
    }
    button:hover{
        animation: squish 0.5s;
        filter: url('#wave');  
    }
    button:hover::before{
        background: linear-gradient(to right, red, green, blue);
        /** 
            흐림효과 
            단색배경
        */
        /* filter: blur(10px)  contrast(15);   */
        filter: url('#wave');  
    }
    @keyframes squish{
        0%{
            transform: scaleY(1);
        }
        60%{
            transform: scaleY(1.5);
        }
        80%{
            transform: scaleY(0.9);
        }
        100%{
            transform: scaleY(1);
        }
    }

</style>