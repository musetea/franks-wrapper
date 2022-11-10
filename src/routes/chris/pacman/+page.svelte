<script>
	import { onMount } from 'svelte';
	import { Player } from './player';
	import { Boundary } from './boundary';

	let canvas;
	let context;
	const player = new Player({
		position: {
			x: Boundary.width + Boundary.width / 2,
			y: Boundary.height + Boundary.height / 2
		},
		velocity: { x: 0, y: 0 }
	});

	onMount(() => {
		context = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		init();
	});

	const init = () => {
		player.draw(context);
	};
</script>

<svelte:window
	on:resize={(e) => {
		console.log(e);
		canvas.width = e.target.innerWidth;
		canvas.height = e.target.innerHeight;
	}}
	on:keydown={(e) => {
		console.log(e);
	}}
/>

<canvas bind:this={canvas} />

<style>
</style>
