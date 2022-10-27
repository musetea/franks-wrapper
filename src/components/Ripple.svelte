<script>
    import RippleButton from './RippleButton.svelte';
    import Goo from './svg/Goo.svelte';

    export let menus;

</script>

<div class="container">
    {#each menus as menu}
        <RippleButton title={menu} />
    {/each}

    <!-- <Goo id={"goo"}/> --> 
    
   
</div>

<style>
    .container{
        width: 220px;
        height: auto;
        margin: 70px auto;
        position: relative;

        filter: url(#goo);
    }
</style>

