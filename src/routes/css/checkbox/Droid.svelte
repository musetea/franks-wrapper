<script>
    export let checked;
</script>


<div class="droid" class:checked={checked}>
    <div class="radios">
        <div class="radio short" ></div>
        <div class="radio long"></div>
    </div>
    <div class="head">
        <div class="band one"></div>
        <div class="band two"></div>
        <div class="eyes">
            <div class="eye one"></div>
            <div class="eye two"></div>
        </div>
        <div class="band three"></div>
    </div>
    <div class="body">
        <div class="lines one"></div>
        <div class="lines two"></div>
        <div class="circle one"></div>
        <div class="circle two"></div>
        <div class="circle three"></div>
    </div>
</div>

<style>
    .droid{
        --size:140px;
        width: var(--size);
        margin-left: 0;
        position: absolute;
        top:10px;
        left: 10px;
        z-index: 4;
    }

    .droid.checked{
        transform: translate(140px);
    }

    .droid.checked .body{
        transform: rotate(360deg);
    }
    .droid.checked .radios{
        transform: translateX(-30px)
    }
    .droid.checked .eyes {
        transform: translateX(30px);
    }

    .radios{
        position: absolute;
        transition: left 0.6s;
        left: 22%;
    }
    

    .radio {
        background: #f0e5d6;
        position: absolute;
        width: 2px;
    }

    .radio.short{
        height: 20px;
        top: -60px;
        left: 50px;
    }
    .radio.long{
        border-top: 6px solid #020204;
        border-bottom: 6px solid #020204;
        height: 36px;
        top: -78px;
        left: 56px;
    }

    .head{
        width: 90px;
        height: 56px;
        background: #dadacd;
        border-radius: 90px 90px 14px 14px;
        margin-left: -45px;
        position: absolute;
        top: -46px;
        left: 50%;
        overflow: hidden;
        z-index: 1;
        border: 1px solid black;
    }

    .band {
        position: absolute;
        width: 100%;
    }
    .band.one{
        height: 56px;

    }

    .band.two{
        height: 4px;
        top: 17px;
        background-color: rgb(210, 124, 71);
    }
    .band.three{
        height: 4px;
        top: 27px;
        background-color: rgb(188, 179, 179);
    }

    /* eyes */
    .eyes {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0%;
        transition: left .6s;
        z-index: 10;
    }
    

    .eye{
        display: block;
        position: absolute;
        border-radius: 50%;
    }

    .eye.one{
        height: 30px;
        border: 4px solid #d0c5b5;
        background-color: #0f0f1a;
    }
    .eye.two{
        width: 16px;
        height: 16px;
        top: 30px;
        left: 40%;
        background-color: #ddd2c2;
        border: 1px solid #06060e;
    }
    .eye.two::after {
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        top: 2px;
        left: 2px;
        display: block;
        background-color: #07070b;
        border-radius: 50%;

    }
    .body{
        width: var(--size);
        height: var(--size);
        position: relative;
        background-color: #ded7ce;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid black;
    }

    .lines {
        width: 400px;
        height: 400px;
        position: absolute;
        border: 2px solid rgb(167,145,108);
        border-radius: 50%;
        opacity: 0.6;
    }
    .lines.two {
        top: -10px;
        left: -250px;
    }

    .circle{
        width: 70px;
        height: 70px;
        margin-left: -35px;
        position: absolute;
        background-color: rgb(180,120,54);
        border-radius: 50%;
    }

    .circle::after{
        content: '';
        width: 70px;
        height: 70px;
        margin-left: -35%;
        margin-top: -35%;
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        background-color: #d1c3ad;
        border-radius: 50%;
    }

    .circle.one{
        width: 90px;
        height: 80px;
        margin-left: -40px;
        top: 6%;
        left: 50%;
    }
    .circle.two{
        left: 18%;
        top: 70%;
        transform: rotate(40deg);
    }
    .circle.two::after {
        top: 110%;
    }

    .circle.three{
        height: 30px;
        top: 66%;
        left: 90%;
        transform: rotate(-50deg);
    }

    .circle.three::after {
        top: 110%;
    }

    
</style>