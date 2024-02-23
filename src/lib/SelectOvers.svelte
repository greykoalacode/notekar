<script lang="ts">
	import { overs, wickets, saveSettings } from "./stores";

	let oversInput: number;
	let wicketsInput: number;

    overs.subscribe((value) => oversInput = value);
    wickets.subscribe((value) => wicketsInput = value);



/**
 * @param {number} a
 */
function setOvers(a: number) {
    overs.set(a);
}

/**
 * @param {number} a
 */
function setWickets(a: number) {
    wickets.set(a);
}

/**
 * reset the overs input
 */
function setCustomOvers() {
    overs.set(0);
}

/**
 * reset the wickets input
 */
function setCustomWickets() {
    wickets.set(0);
}

/**
 * save the settings
 */
function saveTheSettings() {
    saveSettings.set(true);
}



	
</script>

<h2>Select Overs</h2>
<button class="base-button" on:click={() => setOvers(5)}>5</button>
<button class="base-button" on:click={() => setOvers(10)}>10</button>
<button class="base-button" on:click={setCustomOvers}>Custom</button>
<input class="over-custom-input" placeholder="No. of Overs" bind:value={oversInput} type="number" />

<h2>Select Wickets</h2>
<button class="base-button" on:click={() => setWickets(5)}>5</button>
<button class="base-button" on:click={() => setWickets(10)}>10</button>
<button class="base-button" on:click={setCustomWickets}>Custom</button>
<input class="over-custom-input" placeholder="No. of Wickets" bind:value={wicketsInput} type="number" />
<button class="base-button" disabled={oversInput == 0 || wicketsInput == 0} on:click={saveTheSettings}>Save</button>
