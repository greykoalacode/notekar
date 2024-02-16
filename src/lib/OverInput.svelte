<script lang="ts">
	import { generateBallLabel, type EachBallOption, getCurrentStatus, options } from '$lib';
	import type { ChangeEventHandler } from 'svelte/elements';
	import Player from './Player.svelte';

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

	/**
	 *
	 * @param currentBall
	 * @param option
	 */
	function setBallValue(currentBall: number, option: EachBallOption) {
		if (option.runs % 2 !== 0) {
			playerComponent.changeStrike();
		}
		let hasExtraBall = option.isNoBall || option.isWide;
		console.log(balls[currentBall], hasExtraBall, option);
		balls = [...balls.slice(0, currentBall), {...option}, ...balls.slice(currentBall+1)];
		if(hasExtraBall){
			balls = [...balls, {...options[0]}];
		}
	}

	/**
	 * @type {number}
	 */
	export let currentOver: number;

	export let isOverCompleted: boolean = false;

	$: hasPrevious = currentBallIndex === 0;
	$: hasNext = currentBallIndex >= balls.length;

	function nextBall() {
		if (currentBallIndex < balls.length) currentBallIndex = currentBallIndex + 1;
	}

	function previousBall() {
		if (currentBallIndex > 0) currentBallIndex -= 1;
	}
</script>

<h3>Over {currentOver}</h3>
<h3>Over-wise score: {overScore}</h3>
<p>
	{JSON.stringify(balls)}
	{currentBallIndex}
</p>
<!-- <p>{JSON.stringify(options)}</p> -->
<Player bind:this={playerComponent} />

{#if !isOverCompleted}
	<button on:click={() => {
		currentOver += 1;
		// isOverCompleted = true;
	}}>Next Over</button>
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
	<p>Ball {getCurrentStatus(currentOver, currentBallIndex, balls)}</p>
	{#if currentBall.isWicket || currentBall.isWide || currentBall.isNoBall}
		<div>
			<span>Extra Runs</span>
			<input class="" bind:value={currentBall.runs} />
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
