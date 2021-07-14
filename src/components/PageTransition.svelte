<!-- NOTE: Experimenta WIP -->
<script lang="ts">
	import { fade } from 'svelte/transition';
	export let refresh = '';
</script>

{#key refresh}
	<div transition:fade={{ duration: 300 }}>
		<slot />
	</div>
{/key}


<style>
	div {
		min-height: 100vh;
		width: 100%;
	}
</style>
