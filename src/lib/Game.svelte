<script>
	import OverInput from "./OverInput.svelte";

	// overs selected
	let oversSelected = false;

	let overs = 0;
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
	 * reset the overs input
	 */
	function setCustom() {
		overs = 0;
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
	<button class="base-button" on:click={setCustom}>Custom</button>
	<input class="over-custom-input" placeholder="No. of Overs" bind:value={overs} type="number" />
	{#if overs != 0}
		<button class="base-button" on:click={saveSettings}>Save</button>
	{/if}
    {:else}
    <h4>Overs: {overs}</h4>
    <OverInput currentOver={currentOver} isOverCompleted={isOverCompleted} />
{/if}
