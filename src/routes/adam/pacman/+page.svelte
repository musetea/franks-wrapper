<script>
	import { onMount } from 'svelte';
	import TileMap from './tilemap';
	const TILE_SIZE = 32; // 그리드 셀크기
	const velocity = 2;
	const PACMAN_IMAGES = [
		'/adam/pacman/pac0.png',
		'/adam/pacman/pac1.png',
		'/adam/pacman/pac2.png',
		'/adam/pacman/pac1.png'
	];
	const ENEMY_IMAGES = [
		'/adam/pacman/ghost.png',
		'/adam/pacman/scaredGhost.png',
		'/adam/pacman/scaredGhost2.png'
	];
	const SOUNDS = {
		waka: '/adam/pacman/waka.wav',
		power: '/adam/pacman/power_dot.wav'
	};
	let canvas, ctx;
	const tileMap = new TileMap(TILE_SIZE);
	let pacman = undefined;
	let enemies = [];
	let gameOver = false;
	let gameWin = false;
	const audioes = [];

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
		const pinkdot = new Image();
		pinkdot.src = '/adam/pacman/pinkDot.png';
		tileMap.setPinkDotImage(pinkdot);

		// 팻맨이미지
		pacman = tileMap.getPacman(velocity);

		const pacmanImages = [];
		PACMAN_IMAGES.forEach((png) => {
			const img = new Image();
			img.src = png;
			pacmanImages.push(img);
		});
		pacman.setPacmanImages(pacmanImages);

		// 팻맨 사운드
		audioes.push(new Audio(SOUNDS['waka']));
		pacman.setWakaSound(audioes[0]);
		audioes.push(new Audio('/adam/pacman/power_dot.wav'));
		pacman.setPowerDotSound(audioes[1]);

		// 에너미
		const enemyImages = [];
		ENEMY_IMAGES.forEach((png) => {
			const img = new Image();
			img.src = png;
			enemyImages.push(img);
		});
		enemies = tileMap.getEnemies(velocity, enemyImages);
		//console.log(enemies);

		audioes.push(new Audio('/adam/pacman/gameOver.wav'));
		audioes.push(new Audio('/adam/pacman/gameWin.wav'));
		audioes.push(new Audio('/adam/pacman/eat_ghost.wav'));
		pacman.setEatGhostSound(audioes[4]);
		//audioes.forEach((a) => a.play());
	};

	const animations = () => {
		tileMap.update(ctx);
		drawGameEnd();
		pacman.update(ctx, pause(), enemies);
		enemies.forEach((enemy) => enemy.update(ctx, pause(), pacman));
		checkGameOver();
		checkGameWin();
	};

	const pause = () => {
		return !pacman.madeFirstMove || gameOver || gameWin;
	};
	const checkGameOver = () => {
		if (!gameOver) {
			gameOver = isGameOver();
			if (gameOver) {
				audioes[2].play();
			}
		}
	};

	const isGameOver = () => {
		return enemies.some((enemy) => !pacman.powerDotActive && enemy.collideWith(pacman));
	};

	const checkGameWin = () => {
		if (!gameWin) {
			gameWin = tileMap.didWin();
			if (gameWin) {
				audioes[3].play();
			}
		}
	};
	const drawGameEnd = () => {
		if (gameOver || gameWin) {
			let text = `You Win!`;
			if (gameOver) {
				text = 'Game Over!!!';
			}

			ctx.fillStyle = 'black';
			ctx.fillRect(0, canvas.height / 3.2, canvas.width, 80);
			ctx.font = '80px comic sans ';
			const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
			gradient.addColorStop('0', 'magenta');
			gradient.addColorStop('0.5', 'blue');
			gradient.addColorStop('1.0', 'red');
			ctx.fillStyle = gradient;
			ctx.fillText(text, 10, canvas.height / 2);
		}
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
