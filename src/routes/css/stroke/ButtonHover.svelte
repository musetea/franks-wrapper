<script>
	 export let menu;
</script>

<div class="button">
    <div class="svg">
        {@html menu.svg} 
    </div>
    <span>{menu.name}</span>
</div>

<style>
    .button{
        width: 160px;
        height: 60px;
        position: relative;
        border-left: 1px solid black;
        /* 위치 */
        margin-bottom: 10px;

        transition: .5s;
    }
    .button:hover {
        border-left: 1px solid rgba(0,0,0,0);
    }
    .button::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: -1px;
        left: -1px;
        border-right: 1px solid black;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        transition: .5s;
    }
    .button:hover::before {
        width: 100px;
        left: 60px;
    }

    .button span {
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: .5s;
    }
    .button:hover span{
        left: 100px;
    }

    .svg{
        width: 70px;
        height: 70px;
        position: absolute;
        top: 50%;
        left: -10%;

        stroke: black;
        stroke-width: 10;
        stroke-dasharray: 4000;
        stroke-dashoffset: -4000;
        fill: transparent;

        transform: translate(0, -50%);
        transition: .9s ease-out;
    }
    .button:hover .svg{
        stroke-dashoffset: 0;
    }
</style>