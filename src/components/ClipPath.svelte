<script>
    import ClipButton from './ClipButton.svelte';
    export let menus;
</script>


<div class="container">

    {#each menus as menu }
        <ClipButton title={menu} />
    {/each}

</div>

<style>
    .container{
        width: 200px;
        margin: 50px auto;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        position: relative;
    }
</style>

