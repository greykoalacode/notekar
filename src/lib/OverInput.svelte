<script lang="ts">
	import { generateBallLabel, type EachBallOption, getCurrentStatus, options } from '$lib';
	import Player from './Player.svelte';

	let playerComponent: Player;

	/**
	 * @type {number}
	 */
	let currentBall: number = 1;

	/**
	 * @type {number}
	 */
	let overScore: number = 0;

	/**
	 * @type {EachBallOption[]}
	 */
	let balls: EachBallOption[] = Array(6).fill(options[0], 0, 6);

	/**
	 *
	 * @param currentBall
	 * @param option
	 */
	function setBallValue(currentBall: number, option: EachBallOption) {
		if (option.isNoBall || option.isWide) {
			balls = [...balls, options[0]]
		}
		if(option.runs % 2 !== 0) {
			playerComponent.changeStrike();
		}
		balls[currentBall - 1] = option;
	}

	function setExtraRuns(currentBall: number, runs: number){
		balls[currentBall-1].runs = runs;
	}

	/**
	 * @type {number}
	 */
	export let currentOver: number;

	export let isOverCompleted: boolean = false;

	$: hasPrevious = currentBall === 1;
	$: hasNext = currentBall >= balls.length;

	function nextBall() {
		if (currentBall < balls.length) currentBall = currentBall +1;
	}

	function previousBall() {
		if (currentBall > 1) currentBall -= 1;
	}
</script>

<h3>Over {currentOver}</h3>
<h3>Over-wise score: {overScore}</h3>
<p>
	{
		JSON.stringify(balls)
	}
</p>
<p>{JSON.stringify(options)}</p>
<Player bind:this={playerComponent} />

{#if !isOverCompleted}
	<div class="pure-g center">
		{#each balls as ball, index}
			<span class="pure-u-1-6 over-input {currentBall == index + 1 && 'current-ball'}"
				>{generateBallLabel(ball)}</span
			>
		{/each}
	</div>
{:else}
	<p>d</p>
{/if}

<div class="each-ball">
	<p>Ball {getCurrentStatus(currentOver, currentBall, balls)}</p>
	<div class="pure-g">
		<button disabled={hasPrevious} class="pure-u-1-5" on:click={previousBall}>Previous</button
		>
		<div class="pure-g pure-u-3-5 each-ball-layout">
			{#each options as option}
				<button
					class="pure-u-1-3 each-ball-button"
					on:click={() => setBallValue(currentBall, option)}>{option.label}</button
				>
			{/each}
			{#if balls[currentBall - 1].isWicket || balls[currentBall - 1].isWide || balls[currentBall - 1].isNoBall}
			<div>
				<span>Runs</span>
				<input class="" bind:value={balls[currentBall-1].runs} />
				<!-- on:change={e => setExtraRuns(currentBall, Number.parseInt(e.currentTarget.value))} -->
			</div>
			{/if}
		</div>
		<button disabled={hasNext} class="pure-u-1-5" on:click={nextBall}
			>Next</button
		>
	</div>
</div>
