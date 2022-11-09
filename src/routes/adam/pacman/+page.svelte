<script>
	import { onMount } from 'svelte';
	import TileMap from './tilemap';
	const TILE_SIZE = 32; // 그리드 셀크기
	const velocity = 1;
	const PACMAN_IMAGES = [
		'/adam/pacman/pac0.png',
		'/adam/pacman/pac1.png',
		'/adam/pacman/pac2.png',
		'/adam/pacman/pac1.png'
	];
	let canvas, ctx;
	const tileMap = new TileMap(TILE_SIZE);
	let pacman = undefined;

	onMount(() => {
		ctx = canvas.getContext('2d');
		//console.log(canvas, ctx);

		init();

		const timer = setInterval(animations, 1000 / 75);
		//console.log(timer);
	});

	const init = () => {
		tileMap.setCanvasSize(canvas);

		const wall = new Image();
		wall.src = '/adam/pacman/wall.png';
		tileMap.setWallImage(wall);

		const yellowdot = new Image();
		yellowdot.src = '/adam/pacman/yellowDot.png';
		tileMap.setYellowDotImage(yellowdot);

		// 팻맨이미지
		pacman = tileMap.getPacman(velocity);

		const pacmanImages = [];
		PACMAN_IMAGES.forEach((png) => {
			const img = new Image();
			img.src = png;
			pacmanImages.push(img);
		});
		pacman.setPacmanImages(pacmanImages);
	};

	const animations = () => {
		tileMap.update(ctx);
		pacman.update(ctx);
	};
</script>

<h1>Pac-Man</h1>
<canvas bind:this={canvas} />

<style>
	h1 {
		text-align: center;
		font-family: comic sans MS;
		color: lightgray;
	}

	canvas {
		box-shadow: 10px 10px 20px black;
	}
</style>
