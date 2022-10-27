<script>

</script>


<div class="droid">
    <div class="radios">
        <div class="radio short"></div>
        <div class="radio long"></div>
    </div>
    <!-- head -->
    <div class="head">
        <div class="band one"></div>
        <div class="band two"></div>
        <div class="eyes">
            <div class="eye one"></div>
            <div class="eye two"></div>
        </div>
        <div class="band three"></div>
    </div>
    <!-- body -->
    <div class="body">
        <div class="lines one"></div>
        <div class="lines two"></div>
        <div class="circle one"></div>
        <div class="circle two"></div>
        <div class="circle three"></div>
    </div>
    <!--  -->
    <div class="shadow"></div>
</div>

<style>
    
    .droid{
        --size: 140px;
        width: var(--size);
        margin-left: 0;
        position: absolute;
        left: 10%;
        bottom: 20%;
        z-index: 4;
    }

    .radios{
        position: absolute;
        left: 22%;
        transition: left 0.6s;
    }
    .radios.right{
        left: 0%;
    }

    .radio{
        width: 2px;
        position: absolute;
        background-color: #f0e5d6;
    }
    .radio.short{
        height: 20px;
        top: -60px;
        left: 50px;
    }
    .radio.long{
        height: 36px;
        top: -78px;
        left: 56px;
        border-top: 6px solid #020204;
        border-bottom: 6px solid #020204;
    }

    /* HEAD */
    .head {
        width: 90px;
        height: 56px;
        margin-left: -45px;
        background-color: #dad5cd;
        border-radius: 90px 90px 14px 14px;
        overflow: hidden;
        position: absolute;
        left: 50%;
        top: -46px;
        z-index: 1;
    }
    .band{
        width: 100%;
        position: absolute;
    }
    .band.one{
        height: 6px;
        top: 6px;
        background-color: rgb(159,154,154);
        opacity: .8;
        z-index: 1;
    }
    .band.two {
        height: 4px;
        top: 17px;
        background-color: rgb(210,124,71);
    }
    .band.three{
        height: 4px;
        top: 27px;   
    }

    /* EYES */
    .eyes {
        width: 100%;
        height: 100%;
        display: block;
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
        width: 30%;
        height: 30px;
        top: 12px;
        left: 12%;
        background-color: #0f0f1a;
        border: 4px solid #d0c5b5;
    }
    .eye.one::after{
        content: '';
        width: 3px;
        height: 3px;
        display: block;
        
        position: absolute;
        top: 4px;
        right: 4px;
        background-color: white;
        border-radius: 50%;
        
    }
    .eye.two {
        width: 16px;
        height: 16px;
        top: 30px;
        left: 40%;
        border: 1px solid #06060e;
        background-color: #ddd2c2;
    }
    .eye.two::after {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        
        position: absolute;
        top: 2px;
        left: 2px;
        background-color: #07070b;
        border-radius: 50%;

    }

    /* BODY */
    .body{
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        background-color: #ded7ce;
    }

    .lines {
        width: 400px;
        height: 400px;
        border: 2px solid rgb(167,145,108);
        border-radius: 50%;
        position: absolute;
        opacity: 0.6;
    }
    .lines.two {
        top: -10px;
        left: -250px;
    }

    /* CIRCLE */
    .circle{
        --circle-size: 70px;
        width: var(--circle-size);
        height: var(--circle-size);
        border-radius: 50%;
        margin-left: -35px;
        background-color: rgb(180,102,54);
        position: absolute;
    }
    .circle::after {
        content: '';
        width: 70%;
        height: 70%;
        margin-top: -35%;
        margin-left: -35%;
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: #d1c3ad;
        border-radius: 50%;

    }
    .circle.one { 
        width: 90px;
        height: 80px;
        margin-left: -40px;
        top: 6%;
        left: 50%;
    }
    .circle.two {  
        width: 76px;
        height: 38px;
        top: 70%;
        left: 18%;
        transform: rotate(40deg);
    }
    .circle.two::after{
        top: 110%;
    }
    .circle.three {
        height: 30px;
        top: 66%;
        left: 90%;
        transform: rotate(-50deg);
    }
    .circle.three::after {
        top: 110%;
    }

    /* SHADOW */
    .shadow {
        width: var(--size);
        height: calc( (var(--size) /  6));
        background-color: rgb(70,50,38);
        border-radius: 50%;

        position: absolute;
        left: 5px;
        bottom: -8px;
        z-index: -1;

        opacity: .8 ;
    }
</style>