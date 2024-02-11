<script lang="ts">
	export let overs: number;
	export let wickets: number;

	export let saveSettings: () => void;

    export let setOvers: (a: number) => void;
    export let setWickets: (a: number) => void;
    export let setCustomOvers: () => void;
    export let setCustomWickets: () => void;


	
</script>

<h2>Select Overs</h2>
<button class="base-button" on:click={() => setOvers(5)}>5</button>
<button class="base-button" on:click={() => setOvers(10)}>10</button>
<button class="base-button" on:click={setCustomOvers}>Custom</button>
<input class="over-custom-input" placeholder="No. of Overs" bind:value={overs} type="number" />

<h2>Select Wickets</h2>
<button class="base-button" on:click={() => setWickets(5)}>5</button>
<button class="base-button" on:click={() => setWickets(10)}>10</button>
<button class="base-button" on:click={setCustomWickets}>Custom</button>
<input class="over-custom-input" placeholder="No. of Wickets" bind:value={wickets} type="number" />
{#if overs != 0 && wickets != 0}
	<button class="base-button" on:click={saveSettings}>Save</button>
{/if}
