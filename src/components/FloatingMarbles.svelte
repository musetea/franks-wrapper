<script>

    
</script>



<div class="container">
    <div class="button">
        <p>H</p>
        <p>I</p>
    </div>
    <div class="button">
        <p>O</p>
        <p>&hearts</p>
    </div>
    <div class="button">
        <p>V</p>
        <p>C</p>
    </div>
    <div class="button">
        <p>E</p>
        <p>S</p>
    </div>
    <div class="button">
        <p>R</p>
        <p>S</p>
    </div>
</div>

<svg>
    <defs>
        <filter id='goo'>
            <feGaussianBlur in='SourceGrapics' stdDeviation='10' />
            <feColorMetrix in='name' mode='matrix' values='1 0 0 0 0 
                                                           0 1 0 0 0
                                                           0 0 1 0 0
                                                           0 0 0 30 -15'
            />
            <feBlend in='SourceGraphics' />
        </filter>
    </defs>
</svg>

<style>
    .container{
        /*filter: url(#goo);*/
    }
    .button{
        width: 100px;
        height: 100px;
        margin-right: 5px;
        position: relative;
        background-color: black;
        border-radius: 50%;
        transition: .5s;
        float: left;
    }
    .button::before {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;

        position: absolute;
        top: 15px;
        right: 20px;
        transform: rotateX(-15deg) rotateY(-15deg);

        background-color: white;
    }
    .button::after{
        content: '';
        width: 100%;
        height: 10px;
        position: absolute;
        left: 0;
        bottom: -30px;
        border-radius: 50%;
        background-color: black;
        filter: blur(2px);
    }

    .button p:nth-child(1){
        font-size: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        color: white;
        z-index: 100;
        transform: translate(-50%, -50%) rotateX(0);
        transition: .3s ease-in;
    }
    .button:hover p:nth-child(1){
        transform: translate(-50%,-60%) rotateX(90deg);
    }
    .button p:nth-child(2){
        font-size: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        color: white;
        z-index: 100;
        transform: translate(-50%, -170%) rotateX(-90deg);
        transition: .3s ease-in;
    }
    .button:hover p:nth-child(2){
        transform: translate(-50%,-50%) rotateX(0);
    }

    .button:hover ~ .button{
        transform: translate();
    }
</style>