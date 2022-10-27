<script>
    const fein = "SourceGraphic";
    const stdDeviation = 10;
    const values = ` 1 0 0 0 0 
                     0 1 0 0 0
                     0 0 1 0 0
                     0 0 0 1 0
                     0 0 0 0 1`;
</script>

<div class="container">
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="border"></div>
    <div class="border"></div>
</div>
<svg>
    <defs>
        <filter id="goo">
            <feGaussianBlur in={fein} stdDeviation={stdDeviation} />
            <feColorMetrix in='name' mode='matrix' values={values} />
        </filter>
    </defs>
</svg>

<style>
    .container{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        position: relative;
        /* filter: url(#goo); */
        filter: blur(2px)
    }

    .particle{
        width: 100px;
        height: 100px;
        position: absolute;
        top: -20%;
        border-radius: 50%;
        background-color: black;
        animation: fall 15s infinite;
    }
    @keyframes fall {
        0%{ top: -20%; }
        20%{ top: 0%; }
        80%{ top: 85%; }
        100%{ top: 100%; }
    }

    .particle:nth-of-type(2n){
        width: 60px;
        height: 60px;
    }
    .particle:nth-of-type(3n){
        width: 120px;
        height: 120px;
    }

    .particle:nth-of-type(1){
        left: 30%;
        animation-delay: 1s;
    }
    .particle:nth-of-type(2){
        left: 60%;
        animation-delay: 2s;
    }
    .particle:nth-of-type(3){
        left: 25%;
        animation-delay: 3s;
    }
    .particle:nth-of-type(4){
        left: 75%;
        animation-delay: 4s;
    }
    .particle:nth-of-type(5){
        left: 35%;
        animation-delay: 5s;
    }
    .particle:nth-of-type(6){
        left: 50%;
        animation-delay: 6s;
    }
    .particle:nth-of-type(7){
        left: 65%;
        animation-delay: 7s;
    }
    .particle:nth-of-type(8){
        left: 35%;
        animation-delay: 8s;
    }
    .particle:nth-of-type(9){
        left: 55%;
        animation-delay: 9s;
    }
    .particle:nth-of-type(10){
        left: 55%;
        animation-delay: 10s;
    }
    .particle:nth-of-type(11){
        left: 35%;
        animation-delay: 11s;
    }
    .particle:nth-of-type(12){
        left: 50%;
        animation-delay: 12s;
    }
    .particle:nth-of-type(13){
        left: 65%;
        animation-delay: 13s;
    }
    .particle:nth-of-type(14){
        left: 40%;
        animation-delay: 14s;
    }
    .particle:nth-of-type(15){
        left: 60%;
        animation-delay: 15s;
    }

    /*  */
    .border{
        width: 100%;
        height: 10%;
        position: absolute;
        background-color: black;
    }
    .border:nth-last-of-type(1){
        top: 0;
        left: 0;
    }
    .border:nth-last-of-type(2){
        bottom:  0;
        left: 0;
    }

</style>