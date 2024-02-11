<script lang="ts">
	import { generateBallLabel, type EachBallOption, getCurrentStatus, options } from '$lib';

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
			balls.push(options[0]);
		}
		balls[currentBall - 1] = option;
	}

	/**
	 * @type {number}
	 */
	export let currentOver: number;

	export let isOverCompleted: boolean = false;

	function nextBall() {
		if (currentBall < balls.length) currentBall++;
	}

	function previousBall() {
		if (currentBall > 1) currentBall--;
	}
</script>

<h3>Over {currentOver}</h3>
<h3>Over-wise score: {overScore}</h3>

{#if !isOverCompleted}
	<div class="pure-g">
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
		<button disabled={currentBall === 1} class="pure-u-1-3" on:click={previousBall}>Previous</button
		>
		<div class="pure-g pure-u-1-3 each-ball-layout">
			{#each options as option}
				<button
					class="pure-u-1-3 each-ball-button"
					on:click={() => setBallValue(currentBall, option)}>{option.label}</button
				>
			{/each}
			{#if balls[currentBall - 1].isWicket || balls[currentBall - 1].isWide || balls[currentBall - 1].isNoBall}
				<span>Extra Runs</span>
				<input class="pure-u-1-5 each-ball-button" bind:value={balls[currentBall - 1].runs} />
			{/if}
		</div>
		<button disabled={currentBall >= balls.length} class="pure-u-1-3" on:click={nextBall}
			>Next</button
		>
	</div>
</div>
