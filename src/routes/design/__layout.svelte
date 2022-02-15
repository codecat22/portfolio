<script lang="ts">
	import Contact from '../../components/Contact.svelte';
	import Nav from '../../components/NavDark.svelte';
	import Sidebar from '../../components/Sidebar.svelte';
	import sidebar from '../../stores/sidebar';
	import { page } from '$app/stores';

	let clientWidth = Infinity;

	const handleMenuClick = () => {
		sidebar.update((s) => !s);
	};

	$: showSidebar = $page.url.pathname.includes('/design/');
</script>

<svelte:window bind:innerWidth={clientWidth} />

<main class="design-layout-main">
	<Nav class="top-nav" on:menu-click={handleMenuClick} />
	<slot />
	<Contact />
	{#if showSidebar}
		<Sidebar />
	{/if}
</main>

<style>
	:global(.top-nav) {
		grid-column: 1 / -1;
	}

	:global(.design-layout-main) {
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
