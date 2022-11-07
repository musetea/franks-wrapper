<script>
	import { onMount } from 'svelte';
	import Canvas from './Canvas.svelte';
	import { getFrogger } from './frogger';
	import { keys as Keys, onKeyDown, onKeyUp, isJump } from './event';
	import { initObstacles, handleObstacles } from './obstacle';
	import { initLogs, handleLogs } from './logs';
	import { handleParticles } from './particle';

	const SCREEN_W = 600;
	const SCREEN_H = 600;
	const canvaes = [];
	const contextes = [];
	const HOME = `/franks/frog`;

	// 게임변수
	let score = 0; // 스코어
	let collisionCount = 0; // 충돌횟수
	const keys = Keys;

	let frame = 0; // 프레임수
	let gameSpeed = 1; // 게임스피드

	let bgImg, grassImg;
	let frogger;

	onMount(() => {
		canvaes.forEach((canvas) => contextes.push(canvas.getContext()));
		console.log(contextes);
		init();
	});

	const init = () => {
		loadImages();
		initObstacles(contextes[0], SCREEN_W, SCREEN_H);
		//initLogs(contextes[0], SCREEN_W, SCREEN_H);

		animate();
	};

	const loadImages = () => {
		bgImg = new Image();
		bgImg.src = `${HOME}/bg_lvl2.png`;

		grassImg = new Image();
		grassImg.src = `${HOME}/grass.png`;

		const frogImage = new Image();
		frogImage.src = `/franks/frog/frog_spritesheet.png`;
		frogger = getFrogger(frogImage);
	};

	const animate = () => {
		requestAnimationFrame(animate);
		canvaes.forEach((canvas) => {
			canvas && canvas.clearRect();
		});

		contextes[1].drawImage(bgImg, 0, 0, SCREEN_W, SCREEN_H);
		contextes[3].drawImage(grassImg, 0, 0, SCREEN_W, SCREEN_H);
		handleParticles(contextes[2], frogger.x, frogger.y);
		frocFrogger();
		handleObstacles(gameSpeed);
		handleLogs(gameSpeed);
	};

	function frocFrogger() {
		if (!frogger) return;
		frogger.draw(contextes[2]);
		frogger.update();
	}

	const onWindowKeyDown = (e) => {
		//console.log(e.keyCode);
		onKeyDown(e);
		if (isJump()) frogger.jump(e.keyCode);
		if (frogger.y < 0) {
			score++;
			gameSpeed += 0.5;
			frogger.reset();
		}
	};

	const onWindowKeyUp = (e) => {
		onKeyUp(e);
		frogger.setMoving(false);
	};
</script>

<svelte:window on:keydown={onWindowKeyDown} on:keyup={onWindowKeyUp} />

{#each { length: 5 } as _, i}
	<Canvas bind:this={canvaes[i]} width={SCREEN_W} height={SCREEN_H} />
{/each}

<style>
</style>
