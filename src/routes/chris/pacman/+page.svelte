<script>
	import { onMount } from 'svelte';
	import { CELL_WIDTH, CELL_HEIGHT, MAP, KEYS, Keys } from './setup';
	import { collisionWith, BoundaryImages, circleCollidesWithRectangle } from './setup';
	import { Player } from './player';
	import { Boundary } from './boundary';
	import Pellet from './pellet';
	import Ghost from './ghost';

	let canvas;
	let context;
	let lastKey = '';
	let score = 0;
	const images = {};
	const boundaries = [];
	const pellets = [];
	const ghosts = [];
	let animationID;
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
		initGhost();
	};
	const initGhost = () => {
		const g = new Ghost({
			position: {
				x: CELL_WIDTH * 6 + CELL_WIDTH / 2,
				y: CELL_HEIGHT + CELL_HEIGHT / 2
			},
			velocity: {
				x: Ghost.speed,
				y: 0
			}
		});
		ghosts.push(g);
	};

	const loadImages = () => {
		Object.keys(BoundaryImages).forEach((key) => {
			console.log();
			const img = new Image();
			img.src = BoundaryImages[key];
			images[key] = img;
		});
		console.log(images);
	};

	const initMap = () => {
		MAP.forEach((row, i) => {
			row.forEach((column, j) => {
				switch (column) {
					case '-':
						const h = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images['-']
						});
						boundaries.push(h);
						break;
					case '|':
						const v = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images['|']
						});
						boundaries.push(v);
						break;
					case '^':
						const v1 = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images['^']
						});
						boundaries.push(v1);
						break;
					case '+':
						const v2 = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images['+']
						});
						boundaries.push(v2);
						break;
					case '_':
						const v3 = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images['_']
						});
						boundaries.push(v3);
						break;
					case '1':
						const c1 = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images['1']
						});
						boundaries.push(c1);
						break;
					case '2':
						const c2 = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images['2']
						});
						boundaries.push(c2);
						break;
					case '3':
						const c3 = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images['3']
						});
						boundaries.push(c3);
						break;
					case '4':
						const c4 = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images['4']
						});
						boundaries.push(c4);
					case '5':
						const c5 = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images['5']
						});
						boundaries.push(c5);
					case '6':
						const c6 = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images['6']
						});
						boundaries.push(c6);
					case '7':
						const c7 = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images['7']
						});
						boundaries.push(c7);
					case '8':
						const c8 = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images['8']
						});
						boundaries.push(c8);
					case 'b':
						const b = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images['b']
						});
						boundaries.push(b);
						break;
					case '[':
						const cl = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images['[']
						});
						boundaries.push(cl);
					case ']':
						const cr = new Boundary({
							position: { x: j * CELL_WIDTH, y: i * CELL_HEIGHT },
							image: images[']']
						});
						boundaries.push(cr);
						break;
					case '.':
						const pellet = new Pellet({
							position: {
								x: j * CELL_WIDTH + CELL_WIDTH / 2,
								y: i * CELL_HEIGHT + CELL_HEIGHT / 2
							}
						});
						pellets.push(pellet);
						break;
				}
			});
		});
	};

	const animate = () => {
		if (!canvas) return;
		animationID = requestAnimationFrame(animate);
		context.clearRect(0, 0, canvas.width, canvas.height);
		player.move(Keys, lastKey, boundaries);
		boundaries.forEach((boundary) => {
			boundary.update(context);
			if (collisionWith(player, boundary)) {
				console.log('collision');
				player.collision();
			}
		});
		// 화면 떨림 방지  for 문 사용
		for (let i = pellets.length - 1; 0 < i; i--) {
			const pellet = pellets[i];
			pellet.update(context);

			if (pelletTouching(pellet, player, i)) {
				score += 10;
			}
		}

		// pellets.forEach((pellet, i) => {
		// 	pellet.update(context);

		// 	// 터칭체크
		// 	const side1 = pellet.position.x - player.position.x;
		// 	const side2 = pellet.position.y - player.position.y;
		// 	const radius = pellet.radius + player.radius;
		// 	if (Math.hypot(side1, side2) < radius) {
		// 		pellets.splice(i, 1);
		// 	}
		// });
		player.update(context);
		ghosts.forEach((ghost) => {
			ghost.update(context);

			const side1 = ghost.position.x - player.position.x;
			const side2 = ghost.position.y - player.position.y;
			const radius = ghost.radius + player.radius;
			if (Math.hypot(side1, side2) < radius) {
				console.log('collision ghost and player');
				cancelAnimationFrame(animationID);
			}

			const collisions = [];
			boundaries.forEach((boundary) => {
				if (
					!collisions.includes('right') &&
					circleCollidesWithRectangle(
						{
							...ghost,
							velocity: {
								x: ghost.speed,
								y: 0
							}
						},
						boundary
					)
				) {
					//console.log('collision ghost right');
					collisions.push('right');
				}
				if (
					!collisions.includes('left') &&
					circleCollidesWithRectangle(
						{
							...ghost,
							velocity: {
								x: -ghost.speed,
								y: 0
							}
						},
						boundary
					)
				) {
					//console.log('collision ghost left');
					collisions.push('left');
				}
				if (
					!collisions.includes('up') &&
					circleCollidesWithRectangle(
						{
							...ghost,
							velocity: {
								x: 0,
								y: -ghost.speed
							}
						},
						boundary
					)
				) {
					//console.log('collision ghost up');
					collisions.push('up');
				}
				if (
					!collisions.includes('down') &&
					circleCollidesWithRectangle(
						{
							...ghost,
							velocity: {
								x: 0,
								y: ghost.speed
							}
						},
						boundary
					)
				) {
					//console.log('collision ghost down');
					collisions.push('down');
				}
				//console.log(collisions);

				if (collisions.length > ghost.prevCollisions.length) {
					ghost.prevCollisions = collisions;
				}
				//console.log(ghost.prevCollisions);

				if (JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisions)) {
					console.log('gogo');

					if (ghost.velocity.x > 0) ghost.prevCollisions.push('right');
					else if (ghost.velocity.x < 0) ghost.prevCollisions.push('left');
					else if (ghost.velocity.y < 0) ghost.prevCollisions.push('up');
					else if (ghost.velocity.y > 0) ghost.prevCollisions.push('down');

					//console.log(collisions);
					//console.log(ghost.prevCollisions);

					const pathways = ghost.prevCollisions.filter((collision) => {
						return !collisions.includes(collision);
					});
					console.log({ pathways });

					const dirIdx = Math.floor(Math.random() * pathways.length);
					console.log(dirIdx);
					const direction = pathways[dirIdx];
					console.log(direction);
					switch (direction) {
						case 'down':
							ghost.velocity.y = ghost.speed;
							ghost.velocity.x = 0;
							break;
						case 'up':
							ghost.velocity.y = -ghost.speed;
							ghost.velocity.x = 0;
							break;
						case 'left':
							ghost.velocity.y = 0;
							ghost.velocity.x = -ghost.speed;
							break;
						case 'right':
							ghost.velocity.y = 0;
							ghost.velocity.x = ghost.speed;
							break;
					}
					ghost.prevCollisions = [];
				}
			});
		});
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

	const pelletTouching = (pellet, player, i) => {
		// 터칭체크
		const side1 = pellet.position.x - player.position.x;
		const side2 = pellet.position.y - player.position.y;
		const radius = pellet.radius + player.radius;
		if (Math.hypot(side1, side2) < radius) {
			pellets.splice(i, 1);
			return true;
		}
		return false;
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
<p>
	<span>Score: </span>
	<span>{score}</span>
</p>
<canvas bind:this={canvas} />

<style>
	canvas {
		background-color: black;
	}

	p {
		font-family: sans-serif;
		font-size: 16px;
		margin-bottom: 6px;
		color: white;
	}
</style>
