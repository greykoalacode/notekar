<script>
	import EachBallInput from "./EachBallInput.svelte";

	/**
	 * @type {number[]}
	 */
	let balls = Array(6).fill(null, 0, 6);
</script>
<EachBallInput />
<h3>Over 1</h3>
<div class="pure-g">
	{#each balls as ball}
		<input class="pure-u-1-6 over-input" bind:value={ball} type="number" />
	{/each}
</div>
