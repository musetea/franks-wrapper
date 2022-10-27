<script>
    export let menu;
</script>

<div class="button">
    <p>
        <span>{menu}</span>
    </p>
    <figure></figure>
    <figure></figure>
    <figure></figure>
    <figure></figure>
</div>


<style>
    .button {
        width: 160px;
        height: 60px;
        margin-bottom: 10px;
        background-color: white;
        border: 3px solid black;
        position: relative;
    }
    .button p{
        width: 154px;
        height: 54px;
        line-height: 60px;
        background-color: white;
        text-align: center;

        font-size: 20px;
        font-weight: 900;
        position: relative;
        z-index: 10;
    }

    .button figure {
        width: 20px;
        height: 20px;
        
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); 

        background-color: white;
        border-radius: 50%;
        border: 3px solid black;
        z-index: 1;
        transition-delay: 0;
    }
    .button figure:nth-of-type(2){
        transition-delay: 0.8s;
    }
    .button figure:nth-of-type(3){
        transition-delay: .6s;
    }
    .button figure:nth-of-type(4){
        transition-delay: .2s;
    }

    .button:hover figure:nth-of-type(1){
        top: 5px;
        left: -10px;
        width: 50px;
        height: 50px;
        transition: .5s ease-out;
    }
    .button:hover figure:nth-of-type(2){
        top: 60px;
        left: 175px;
        width: 20px;
        height: 20px;
        transition: 1.2s ease-out;
    }
    .button:hover figure:nth-of-type(3){
        top: 10px;
        left: 135px;
        width: 80px;
        height: 80px;
        transition: .8s ease-out;
    }
    .button:hover figure:nth-of-type(4){
        top: -10px;
        left: 25px;
        width: 10px;
        height: 10px;
        transition: .2s ease-out;
    }

    .button:nth-of-type(2n):hover figure:nth-of-type(1){
        top: -5px;
        left: 0;
        width: 30px;
        height: 30px;
        transition: .3s ease-out;
    }
    .button:nth-of-type(2n):hover figure:nth-of-type(2){
        top: 60px;
        left: -30px;
        width: 40px;
        height: 40px;
        transition: .6s ease-out;
    }
    .button:nth-of-type(2n):hover figure:nth-of-type(3){
        top: 50px;
        left: 165px;
        width: 40px;
        height: 40px;
        transition: .4s ease-out;
    }
    .button:nth-of-type(2n):hover figure:nth-of-type(4){
        top: 70px;
        left: 25px;
        width: 10px;
        height: 10px;
        transition: .5s ease-out;
    }

    .button:not(:hover) figure {
        animation: pop 2s;
    }

    @keyframes pop {
        0%{
            transform: scale(1) translate(-50%, -50%);
        }
        100%{
            transform: scale(1.3) translate(-50%, -50%);
        }
    }

    .button span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        transition: .2s;
    }
    .button:hover span {
        transform: translate(-50%, -50%) rotate(-3deg);
        font-size: 1.2em;
    }
</style>