<script lang="ts">
	import Nav from '$components/NavDark.svelte';
	import sidebar from '$stores/sidebar';

	let clientWidth = Infinity;

	const handleMenuClick = () => {
		sidebar.update((s) => !s);
	};
</script>

<svelte:window bind:innerWidth={clientWidth} />

<main>
	<Nav class="top-nav" on:menu-click={handleMenuClick} />
	<slot />
</main>

<style>
	:global(.top-nav) {
		grid-column: 1 / -1;
	}

	main {
		display: grid;
		grid-template-columns: 17% 1fr 17%;
		grid-template-rows: min-content min-content 1fr;
		transition: all ease-in-out 0.3s;
		min-width: 96vw;
		background-color: var(--brown);
		min-height: 100vh;
		padding-bottom: 2rem;
	}

	@media (max-width: 1200px) {
		main {
			grid-template-columns: 0 1fr 0;
		}
	}
</style>
