<script>
	import OverInput from './OverInput.svelte';
	import SelectOvers from './SelectOvers.svelte';

	// overs selected
	let oversSelected = false;

	let overs = 0;
	let wickets = 0;
	let currentOver = 1;
	let score = 0;
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
	function saveSettings() {
		oversSelected = true;
	}
</script>

{#if !oversSelected}
	<SelectOvers
		{overs}
		{wickets}
		{saveSettings}
		{setCustomOvers}
		{setOvers}
		{setWickets}
		{setCustomWickets}
	/>
{:else}
	<h4>Overs: {overs}</h4>
	<h4>Wickets: {wickets}</h4>
	<h4>Score: {score}</h4>
	<OverInput {currentOver} {isOverCompleted} />
{/if}
