<script lang="ts">
	import { generateBallLabel, type EachBallOption, getCurrentStatus, options } from '$lib';
	import Player from './Player.svelte';
	import { overs } from './stores';

	let playerComponent: Player;

	/**
	 * @type {number}
	 */
	let currentBallIndex: number = 0;

	/**
	 * @type {number}
	 */
	let overScore: number = 0;

	/**
	 * @type {EachBallOption[]}
	 */
	let balls: EachBallOption[] = Array(6).fill(options[0], 0, 6);

	$: currentBall = balls[currentBallIndex];

	$: legalBallCount = getCurrentStatus(currentBallIndex, balls);

	$: {
		balls = [
			...balls.slice(0, 6),
			...Array(balls.filter((eachBall) => eachBall.isNoBall || eachBall.isWide).length).fill(
				options[0]
			)
		];
	}

	/**
	 *
	 * @param currentBall
	 * @param option
	 */
	function setBallValue(currentBall: number, option: EachBallOption) {
		if (option.runs % 2 !== 0) {
			playerComponent.changeStrike();
		}
		balls = [...balls.slice(0, currentBall), { ...option }, ...balls.slice(currentBall + 1)];
	}

	/**
	 * @type {number}
	 */
	export let currentOver: number;

	let setOvers: number;
	overs.subscribe(value => setOvers = value);

	export let isOverCompleted: boolean = false;

	$: hasPrevious = currentBallIndex === 0;
	$: hasNext = currentBallIndex >= balls.length - 1;

	function nextBall() {
		if (currentBallIndex < balls.length) currentBallIndex = currentBallIndex + 1;
	}

	function previousBall() {
		if (currentBallIndex > 0) currentBallIndex -= 1;
	}
</script>

<div class="pure-g text-center">
	<!-- aligning the stats -->
	<div class="pure-u-1-3">
		<p>Over {currentOver - 1}</p>
	</div>
	<div class="pure-u-1-3">
		<p>Think about this!</p>
	</div>
	<div class="pure-u-1-3">
		<p>Extras: {overScore}</p>
	</div>
</div>

<Player bind:this={playerComponent} />

{#if !isOverCompleted}
	<button
		disabled={legalBallCount != 6 || currentOver >= setOvers}
		on:click={() => {
			currentOver += 1;
		}}>Next Over</button
	>
	<p>Ball {(currentOver - 1).toString() + '.' + legalBallCount.toString()}</p>
	<div class="pure-g center">
		{#each balls as ball, index}
			<div>
				<span class="pure-u-1-6 over-input {currentBallIndex === index && 'current-ball'}"
					>{generateBallLabel(ball)}</span
				>
			</div>
		{/each}
	</div>
{:else}
	<p>d</p>
{/if}

<div class="each-ball">
	{#if currentBall.isWicket || currentBall.isWide || currentBall.isNoBall}
		<div>
			<span>Extra Runs</span>
			<input bind:value={currentBall.runs} />
		</div>
	{/if}
	<div class="pure-g">
		<button disabled={hasPrevious} class="pure-u-1-5" on:click={previousBall}>Previous</button>
		<div class="pure-g pure-u-3-5 each-ball-layout">
			{#each options as option}
				<button
					class="pure-u-1-3 each-ball-button"
					on:click={() => setBallValue(currentBallIndex, option)}>{option.label}</button
				>
			{/each}
		</div>
		<button disabled={hasNext} class="pure-u-1-5" on:click={nextBall}>Next</button>
	</div>
</div>
