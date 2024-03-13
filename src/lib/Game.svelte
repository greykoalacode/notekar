<script lang="ts">
	import { overs, wickets, saveSettings } from "./stores";

	import OverInput from './OverInput.svelte';
	import SelectOvers from './SelectOvers.svelte';

	/**
	 * @type {boolean} overs selected
	 */
	let oversSelected: boolean;

	saveSettings.subscribe((value) => {
		oversSelected = value;
	});


	let setOvers = 0;
	let setWickets = 0;
	overs.subscribe(value => setOvers = value);
	wickets.subscribe(value => setWickets = value);
	let currentOver = 1;
	let score = 0;

	/**
	 * @type boolean
	 */
	let isOverCompleted: boolean;
</script>

{#if !oversSelected}
	<SelectOvers />
{:else}
	<div class="pure-g text-center">
		<div class="pure-u-1-3">	
			<p>Overs: {setOvers}</p>
		</div>
		<div class="pure-u-1-3">
			<p>Wickets: {setWickets}</p>
		</div>
		<div class="pure-u-1-3">
			<p>Score: {score}</p>
		</div>
	</div>

	
	

	<OverInput {currentOver} {isOverCompleted} />
{/if}
