<script>
	import EachBallInput from "./EachBallInput.svelte";

    /**
     * @type {import("../ambient").Ball}
     */
    let currentBall;

	/**
	 * @type {number[]}
	 */
	let balls = Array(6).fill(null, 0, 6);

    /**
     * @type {number}
     */
    export let currentOver;

    export let isOverCompleted = false;
</script>
<EachBallInput />
<h3>Over {currentOver}</h3>
<div class="pure-g">
	{#each balls as ball}
		<input class="pure-u-1-6 over-input" bind:value={ball} type="number" />
	{/each}
</div>
