<script>
	let game;
	let score = 0;

	const gameStart = (e) => {};
</script>

<div bind:this={game} id="game" />
<div id="score">{score}</div>
<button on:click={gameStart}>Start Game</button>

<style>
	#game {
		position: relative;
		display: inline-grid;
		background-color: black;
	}

	#scroe {
		width: 200px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 5px solid darkblue;
	}
</style>
