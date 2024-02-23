<script>
	import { saveSettings } from './stores';

	import OverInput from './OverInput.svelte';
	import SelectOvers from './SelectOvers.svelte';

	/**
	 * @type {boolean} overs selected
	 */
	let oversSelected;

	saveSettings.subscribe((value) => {
		oversSelected = value;
	});

	let overs = 0;
	let wickets = 0;
	let currentOver = 1;
	let score = 0;

	/**
	 * @type boolean
	 */
	let isOverCompleted;
</script>

{#if !oversSelected}
	<SelectOvers />
{:else}
	<div class="pure-g text-center">
		<div class="pure-u-1-3">	
			<p>Overs: {overs}</p>
		</div>
		<div class="pure-u-1-3">
			<p>Wickets: {wickets}</p>
		</div>
		<div class="pure-u-1-3">
			<p>Score: {score}</p>
		</div>
	</div>

	
	

	<OverInput {currentOver} {isOverCompleted} />
{/if}
