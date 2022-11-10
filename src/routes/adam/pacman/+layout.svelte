
<svelte:head>
    <title>Pac Man</title>
</svelte:head>

<div class="container">
    <slot></slot>
</div>




<style>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        height: 100vh;
        background: linear-gradient(0deg, rgb(17,51,161) 0%, rgb(136,34,195) 100%);
    }
</style>