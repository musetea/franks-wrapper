<script>
	import { onMount } from 'svelte';
	export let width;
	export let height;
	let canvas, ctx;

	onMount(() => {
		canvas.width = width;
		canvas.height = height;
		ctx = canvas.getContext('2d');
		console.log(canvas, ctx);
	});

	export const clearRect = () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	};

	export const getContext = () => {
		return ctx;
	};
</script>

<canvas bind:this={canvas} />

<style>
	canvas {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
</style>
