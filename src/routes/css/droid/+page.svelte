<script>
    import Droid from '../../../components/Droid.svelte';
</script>


<svelte:head>
    <title>Star Wars </title>
</svelte:head>


<div class="ground">
    <div class="cloud cloud1"></div>
    <div class="cloud cloud2"></div>
    <div class="cloud cloud3"></div>
    <div class="cloud cloud4"></div>
</div>

<!--  -->
<Droid />


<style>
    :global(body){
        background-color: yellow;
    }
    .ground{
        width: 100%;
        height: 25%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background-color: rgb(138,118,90);
    }

    .cloud {
        width: 10rem;
        height: 2rem;
        border-radius: 2rem;
        background-color: rgb(148,147,152);
        box-shadow: inset 0rem -0.5rem 0 #d9d9d9;

        position: absolute;
        top: 10%;
        left: 30%;

        z-index: 1;
        animation: move-cloud 60s linear infinite;
    }
    .cloud::before {
        content: '';
        width: 4rem;
        height: 4rem;
        background-color: inherit;
        border-radius: 50%;

        position: absolute;
        left: 10%;
        bottom: 25%;
    }
    .cloud::after {
        content: '';
        width: 2.8rem;
        height: 2.8rem;
        background-color: inherit;
        border-radius: 50%;
        
        position: absolute;
        right: 30%;
        bottom: 25%;
    }

    .cloud2 {
        top: 20%;
        left: 10%;
        animation: move-cloud 45s linear reverse infinite;
    }
    .cloud3 {
        top: 15%;
        animation: move-cloud 25s linear reverse infinite;
        transform: scale(1.5);
    }
    .cloud4 {
        animation: move-cloud 40s linear reverse infinite;
    }

    @keyframes move-cloud {
        0%{
            left: 130%;
        }
        100%{
            left: -30%;
        }
    }

</style>