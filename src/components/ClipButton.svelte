<script>
    export let title;
</script>

<div class="button">
    <span>{title}</span>
    <p>{title}</p>
</div>

<style>
    .button{
        width: 200px;
        height: 200px;
        position: relative;
        top: 0;
        left: 0;
        /* border: 1px solid black; */
    }
    .button:nth-of-type(2){
        top: -40px;
        left: 100px;
    }
    .button:nth-of-type(3){
        top: -80px;
        left: 0;
    }
    .button:nth-of-type(4){
        top: -120px;
        left: 100px;
    }

    .button::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        background-color: black;
        clip-path: polygon(0 25%, 50% 0, 50% 100%, 0 75%);
        transition: clip-path .2s .5s, width .2s .2s, left .2s .2s;
    }
    .button:nth-child(odd):hover::before {
        width: 0;
        left: 100px;
        transition: clip-path .2s, width .2s .2s, left .2s .2s;
        clip-path: polygon(0 0,50% 0, 50% 100%, 0 100%);
    }

    .button::after{
        content: '';
        position: absolute;
        top: 0;
        left: -1px;
        width: 200px;
        height: 200px;
        background-color: black;
        clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%);
        transition: clip-path .2s .5s, width .2s .2s, left .2s .2s;
    }
    .button:nth-child(even):hover::after {
        width: 0;
        left: 99px;
        transition: clip-path .2s, width .2s .2s, left .2s .2s;
        clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
    }

    .button p{
        font-size: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(0);
        text-align: center;

        color: white;
        z-index: 10;
        transition: .3s cubic-bezier(0, 2.17, .83, 1.36);
    }
    .button:hover p{
        font-size: 0;
        opacity: 0;
        transition: .2s;
        transform: translate(-50%, -50%) rotate(-27deg);
    }

    .button span{
        font-size: 252px;
        position: absolute;
        left: 100px;
        height: 200px;
        display: block;
        line-height: 200px;
        transform: rotateY(90deg);
        transform-origin: left;
        transition: .5s;
        overflow: hidden;
    }
    .button:nth-child(odd) span{
        right: 100px;
        left: auto;
        transform-origin: right;
    }
    .button:hover span{
        width: auto;
        transition: .5s .2s;
        transform: rotateY(0);
    }
</style>