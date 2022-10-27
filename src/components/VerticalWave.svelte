<script>
	import WaveButton from './WaveButton.svelte';
    export let menus;
</script>


<div class="container">
    {#each menus as menu}
        <WaveButton title={menu}/>    
    {/each}
</div>

<style>
    .container {
        width: 200px;
        height: auto;
        margin: 100px auto;
        position: relative;
    }
</style>