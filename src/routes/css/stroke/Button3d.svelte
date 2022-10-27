<script>
    export let icon;
</script>

<div class="button">
    <span></span>
    <span></span>
    <span><i class={icon}></i></span>
    <span></span>
</div>

<style>
    .button{
        position: relative;
        width: 50px;
        height: 50px;
        margin: 0 auto;
        background-color: #f5b0d6;
        transition: .2s;
        transform: translate(0,0) rotateY(0) skewY(0);
    }
    .button:hover {
        transform: translate(-15px,-5px) rotateY(-15deg) skewY(-10deg)
    }

    i{
        font-size: 1.5em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
        z-index: 10;
        transition: .2s;
    }
    .button:hover i{
        color: white;
    }

    .button span{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(0,0);
        transition: .2s;
    }

    .button span:nth-of-type(4) {
        transform: translate(-4px, -4px);
        transition: .2s;
        border-top: 1px solid black;
        border-left: 1px solid black;
        opacity: .5;
        z-index: 0;
    }

    .button:hover span:nth-of-type(1){
        transform: translate(8px, 4px);
        background-color: #e08dbb;
    }
    .button:hover span:nth-of-type(2){
        transform: translate(16px, 8px);
        background-color: #bd6093;
    }
    .button:hover span:nth-of-type(3){
        transform: translate(24px, 12px);
        background-color: #94386a;
    }
    .button:hover span:nth-of-type(4){
        transform: translate(32px, 16px);
        transition-delay: .2s;
    }

    .button span:nth-of-type(4):before {
        content: '';
        width: 0;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-bottom: 1px solid black;
        transition: .2s;
    }
    .button:hover span:nth-of-type(4)::before {
        width: 100%;
        transition: .4s;
    }
    .button span:nth-of-type(4)::after {
        content: '';
        width: 100%;
        height: 0;
        position: absolute;
        left: 0;
        top: 100%;
        border-right: 1px solid black;
        transition: .2s;
    }
    .button:hover span:nth-of-type(4)::after {
        height: 100%;
        transition-delay: .6s;
        top: 0;
    }
</style>