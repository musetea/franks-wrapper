
<svelte:head>
    <title>Tower Defense</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap" rel="stylesheet">
</svelte:head>

<div class="container">
    <slot></slot>
</div>




<style>
    .container{
        width: 100vw;
        height: 100vh;
        background-color: gray;
        font-family: 'Helvetica';
    }

</style>