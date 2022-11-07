<svelte:head>
	<title>Frogger</title>
</svelte:head>

<div class="container">
	<slot />
</div>

<style>
	.container {
		font-family: 'Helvetica';
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 600px;
		height: 600px;
		background-image: url('/franks/frog/bg.png');
		border: 3px solid black;
	}
</style>
