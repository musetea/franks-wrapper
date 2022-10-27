<script>
    export let icon;
</script>

<div class="button">
    <i class={icon}></i>
    <div class="blurred">
        <span></span>
        <span></span>
    </div>
</div>

<style>
    .button{
        width: 50px;
        height: 50px;
        margin: 0 auto;
        position: relative;
    }

    i{
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        z-index: 10;
    }

    .blurred {
        position: relative;
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        filter: url(#goo);

    }
    .blurred::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: black;
        border-radius: 100%;
        /* transition: 1.6s; */
        transition: 1.5s cubic-bezier(0,2,0.61,-0.05);
    }
    .button:hover .blurred::before {
        width: 40px;
        height: 40px;
        top: 50%;
        left: 50%;
    }

    .blurred::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: black;
        border-radius: 100%;
        /* transition: .6s; */
        transition: 1.7s cubic-bezier(0,2,0.61,-0.05);
    }
    .button:hover .blurred::after {
        width: 15px;
        height: 15px;
        top: 30px;
        left: 45px;
    }

    .blurred > span:nth-of-type(1),
    .blurred > span:nth-of-type(2) {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: black;
        border-radius: 100%;
        /* transition: .2s; */
        transition: 1.4s cubic-bezier(0,2,0.61,-0.05);
    }
    .button:hover .blurred > span:nth-of-type(1){
        width: 30px;
        height: 30px;
        top: -10px;
        left: -20px;
    }
    .button:hover .blurred > span:nth-of-type(2){
        width: 25px;
        height: 25px;
        top: 40px;
        left: -20px;
    }
</style>