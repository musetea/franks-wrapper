<script>
    import Scene from './Scene.svelte';

    const icons = [
        "fa-brands fa-html5",
        "fab fa-css3-alt",
        "fab fa-js",
        "fab fa-react",
        "fab fa-bootstrap",
        "fa-solid fa-database",
        "fab fa-windows",
        "fab fa-wordpress",
        "fab fa-youtube icon_down",
    ]

</script>


<svelte:head>
    <title>Cube Menu</title>
    
</svelte:head>

<div class="container">
    {#each icons as icon }
        <Scene icon={icon} />
    {/each}
</div>


<style>
    :root{
        --size: 260px;
    }
    .container{
        position: relative;
        margin: 200px auto;
        padding: 30px;
        width:var(--size);
        height: var(--size);
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto auto;
        gap: 10px;

    }
</style>