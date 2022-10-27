<script>
    export let title;
    export let desc;
    export let svg;
</script>


<div class="button">
    <p>{title}</p>
    <div class="svg">
        {@html svg}
    </div>
    <span>{desc}</span>
</div>

<style>
    .button{
        --size: 60px;
        display: block;
        height: var(--size);
        line-height: var(--size);
        font-size: 25px;

        text-align: center;
        color: white;
        background-color: black;

    }
    .svg{
        width: 400px;
        height: 200px;
        filter: blur(200px);
        position: absolute;
        /* top: -200px; */
        left: 0;
        fill: black;
        color: black;
        transition: .3s;

    }

    .button:hover .svg{
        filter: blur(0);
        transition: 1s;
    }

    .button > span{
        position: absolute;
        top: 100px;
        left: 0;
        width: 400px;
        font-size: 15px;
        text-align: center;
        line-height: 15px;
        padding: 30px;
        transition: .3s;
        color: black;
        filter: blur(200px);
    }
    .button:hover span{
        filter: blur(0);
        transition: 1s;
    }

    /* p */
    .button p{
        -webkit-text-stroke: 1px transparent;
        transition: 0.5s;
    }
    .button:hover p{
        -webkit-text-stroke: 1px white;
        color: white;
    }

</style>