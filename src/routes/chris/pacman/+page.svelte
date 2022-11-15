<script>
	import { onMount } from 'svelte';
	import { CELL_WIDTH, CELL_HEIGHT, MAP, KEYS, Keys } from './setup';
	import { collisionWith } from './setup';
	import { Player } from './player';
	import { Boundary } from './boundary';

	let canvas;
	let context;
	let lastKey = '';
	const images = [];
	const boundaries = [];
	const player = new Player({
		position: {
			x: CELL_WIDTH + CELL_WIDTH / 2,
			y: CELL_HEIGHT + CELL_HEIGHT / 2
		},
		velocity: { x: 0, y: 0 }
	});

	onMount(() => {
		context = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		init();
		animate();
	});

	const init = () => {
		loadImages();
		initMap();
	};

	const loadImages = () => {
		const srces = [
			'/chris/pacman/pipeHorizontal.png',
			'/chris/pacman/pipeVertical.png',
			'/chris/pacman/pipeCorner1.png',
			'/chris/pacman/pipeCorner2.png',
			'/chris/pacman/pipeCorner3.png',
			'/chris/pacman/pipeCorner4.png'
		];
		srces.forEach((src) => {
			const img = new Image();
			img.src = src;
			images.push(img);
		});
	};

	const initMap = () => {
		MAP.forEach((row, i) => {
			row.forEach((column, j) => {
				switch (column) {
					case '-':
						const h = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images[0]
						});
						boundaries.push(h);
						break;
					case '|':
						const v = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images[1]
						});
						boundaries.push(v);
						break;
					case '1':
						const c1 = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images[2]
						});
						boundaries.push(c1);
						break;
					case '2':
						const c2 = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images[3]
						});
						boundaries.push(c2);
						break;
					case '3':
						const c3 = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images[4]
						});
						boundaries.push(c3);
						break;
					case '4':
						const c4 = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images[5]
						});
						boundaries.push(c4);
						break;
				}
			});
		});
	};

	const animate = () => {
		if (!canvas) return;
		requestAnimationFrame(animate);
		context.clearRect(0, 0, canvas.width, canvas.height);
		player.move(Keys, lastKey, boundaries);
		boundaries.forEach((boundary) => {
			boundary.update(context);
			if (collisionWith(player, boundary)) {
				console.log('collision');
				player.collision();
			}
		});
		player.update(context);
	};

	const keydown = (e) => {
		switch (e.key) {
			case KEYS.UP:
				// player.up(-5);
				Keys.w.pressed = true;
				lastKey = 'w';
				break;
			case KEYS.DOWN:
				// player.down(5);
				Keys.s.pressed = true;
				lastKey = 's';
				break;
			case KEYS.LEFT:
				// player.left(-5);
				Keys.a.pressed = true;
				lastKey = 'a';
				break;
			case KEYS.RIGHT:
				// player.right(5);
				Keys.d.pressed = true;
				lastKey = 'd';
				break;
		}
	};
	const keyup = (e) => {
		switch (e.key) {
			case KEYS.UP:
				// player.up(0);
				Keys.w.pressed = false;
				break;
			case KEYS.DOWN:
				// player.down(0);
				Keys.s.pressed = false;
				break;
			case KEYS.LEFT:
				// player.left(0);
				Keys.a.pressed = false;
				break;
			case KEYS.RIGHT:
				// player.right(0);
				Keys.d.pressed = false;
				break;
		}
	};
</script>

<svelte:window
	on:resize={(e) => {
		//console.log(e);
		canvas.width = e.target.innerWidth;
		canvas.height = e.target.innerHeight;
	}}
	on:keydown={(e) => keydown(e)}
	on:keyup={(e) => keyup(e)}
/>

<canvas bind:this={canvas} />

<style>
	canvas {
		background-color: black;
	}
</style>
