<script>
	import OverInput from "./OverInput.svelte";

	// overs selected
	let oversSelected = false;

	let overs = 0;
	let wickets = 0;
    let currentOver = 1;
    /**
     * @type boolean
     */
    let isOverCompleted;

	/**
	 * @param {number} a
	 */
	function setOvers(a) {
		overs = a;
	}


	/**
	 * @param {number} a
	 */
	function setWickets(a) {
		wickets = a;
	}

	/**
	 * reset the overs input
	 */
	function setCustomOvers() {
		overs = 0;
	}


	/**
	 * reset the overs input
	 */
	function setCustomWickets() {
		wickets = 0;
	}

    /**
     * save the settings
    */
    function saveSettings(){
        oversSelected = true;
    }
</script>

{#if !oversSelected}
	<h2>Select Overs</h2>
	<button class="base-button" on:click={() => setOvers(5)}>5</button>
	<button class="base-button" on:click={() => setOvers(10)}>10</button>
	<button class="base-button" on:click={setCustomOvers}>Custom</button>
	<input class="over-custom-input" placeholder="No. of Overs" bind:value={overs} type="number" />

	<h2>Select Wickets</h2>
	<button class="base-button" on:click={() => setOvers(5)}>5</button>
	<button class="base-button" on:click={() => setOvers(10)}>10</button>
	<button class="base-button" on:click={setCustomWickets}>Custom</button>
	<input class="over-custom-input" placeholder="No. of Wickets" bind:value={wickets} type="number" />
	{#if overs != 0 && wickets != 0}
		<button class="base-button" on:click={saveSettings}>Save</button>
	{/if}
    {:else}
    <h4>Overs: {overs}</h4>
    <h4>Wickets: {wickets}</h4>
    <OverInput currentOver={currentOver} isOverCompleted={isOverCompleted} />
{/if}
