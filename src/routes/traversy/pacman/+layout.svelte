<svelte:head>
	<title>Pacman</title>
</svelte:head>

<div class="container">
	<slot />
</div>

<style>
	.container {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
