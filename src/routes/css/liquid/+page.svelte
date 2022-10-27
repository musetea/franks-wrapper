<script>

</script>


<svelte:head>
    <title>Liquid Loader</title>
</svelte:head>


<div class="loader">
    <div class="particle"></div>
    <div class="particle leftSpin"></div>
    <div class="particle"></div>
    <div class="particle rightSpin"></div>
    <div class="particle"></div>
    <div class="particle leftSpin"></div>
    <div class="particle"></div>
    <div class="particle rightSpin"></div>
    <div class="particle"></div>
</div>

<style>

    .loader{
        padding: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(0deg);
        display: flex;
        align-items: center;
        background: #fff;
        animation: rotate 20s linear infinite;
        filter: blur(10px) contrast(15);
    }
    @keyframes rotate{
        from{
            transform: translate(-50%, -50%) rotate(0deg);
        }
        to{
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
    
    .particle{
        width: 50px;
        height: 50px;
        background: #000;
        border-radius: 50%;
    }

    .particle:first-child, 
    .particle:last-child{
        width: 25px;
        height: 25px;
    }

    .particle:nth-child(1),
    .particle:nth-child(3),
    .particle:nth-child(5),
    .particle:nth-child(7),
    .particle:nth-child(9) {
        animation: pulse 1.3s ease-in-out infinite;
    }

    @keyframes pulse{
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(1.9);
        }
        70%{
            transform: scale(0.6);
        }
        100%{
            transform: scale(1);
        }
    }

    .leftSpin{
        animation: leftSpin 2.5s linear infinite;
    }

    @keyframes leftSpin{
        from{
            transform: rotate(0deg) translateX(50px);
        }
        to{
            transform: rotate(360deg) translateX(50px);
        }
    }
    .rightSpin{
        animation: rightSpin 2.5s linear infinite;
    }

    @keyframes rightSpin{
        from{
            transform: rotate(360deg) translateX(50px);
        }
        to{
            transform: rotate(0deg) translateX(50px);
        }
    }

    .particle:nth-child(3){
        animation-delay: .25s;
    }
    .particle:nth-child(5){
        animation-duration: .75s;
    }
    .particle:nth-child(7){
        animation-delay: 1.5s;
    }
    .particle:nth-child(9){
        animation-delay: 3s;
    }
</style>