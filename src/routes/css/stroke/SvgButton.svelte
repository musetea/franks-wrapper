<script>
    export let menu;
    let viewBox='0 0 210 60';
    let x=10;
    let y=45;
</script>


<div class="button">
    <svg viewBox={viewBox}>
        <text x={x} y={y}>{menu}</text>
    </svg>
</div>


<style>
    .button{
        width: 300px;
        height: 80px;
        position: relative;
        border-left: 1px solid transparent;
        margin-bottom: 10px;
        transition: .5s;
    }
    .button:hover {
        border-left: 1px solid black;
    }

    /* SVG */
    svg{
        font-size: 50px;
        position: absolute;
        top: 0;
        left: 0;
        stroke: black;
        stroke-width: 1;
        stroke-dasharray: 250;
        stroke-dashoffset: -250;
        fill: black;
        transition: stroke-dashoffset .9s ease-out, 
            fill 1s;
    }
    .button:hover svg {
        stroke-dashoffset: 0;
        transition: stroke-dashoffset .6s ease-out, 
            fill .6s;
        fill: transparent;
    }
</style>