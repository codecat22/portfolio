<script lang="ts">
	import Contact from '../../components/Contact.svelte';
	import Nav from '../../components/Nav.svelte';
	import Sidebar from '../../components/Sidebar.svelte';
	import sidebar from '../../stores/sidebar';
	import { page } from '$app/stores';

	let clientWidth = Infinity;

	const handleMenuClick = () => {
		sidebar.update((s) => !s);
	};
	$: showSidebar = $page.path.includes('/design/');
</script>

<svelte:window bind:innerWidth={clientWidth} />

<main class="design-layout-main">
	<Nav class="top-nav" on:menu-click={handleMenuClick} iconColor="#FAF33E" />
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
		transition: all ease-in-out 0.3s;
		min-width: 96vw;
		background-color: var(--liberty);
		min-height: 100vh;
		padding-bottom: 2rem;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	@media (max-width: 1200px) {
		main {
			grid-template-columns: 0 1fr 0;
		}
	}
</style>
