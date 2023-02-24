<script lang="ts">
	import { onMount } from 'svelte';
	import { deviceIsMobile } from '../utils';
	import sidebarIsOpen from '../stores/sidebar';
	import { navigating, page } from '$app/stores';
	import clickOutside from '../actions/clickOutside';

	const links = [
		{ label: 'Web Design', href: '/design/web' },
		{ label: 'Graphic Design', href: '/design/graphic' },
		{ label: 'Collaborations', href: '/design/collaborations' },
		{ label: 'Visual Art', href: '/design/art' }
	];

	let isMobile = false;
	$: current = $page.url.pathname;
</script>

<nav use:clickOutside on:click-outside={() => sidebarIsOpen.set(false)} class:open={$sidebarIsOpen}>
	<button class="close-btn" on:click={() => sidebarIsOpen.set(false)}
		><span aria-hidden="true">&times;</span></button
	>
	<ul>
		{#each links as link}
			<a href={link.href}>{link.label}</a>
		{/each}
	</ul>
</nav>

<style>
	.close-btn {
		margin-left: auto;
		color: white;
		background-color: var(--space-cadet);
		border: none;
		font-size: xx-large;
		cursor: pointer;
		transition: all ease-in-out 0.3s;
		border-radius: 50%;
		width: 2rem;
		height: 2rem;
		padding: 0rem !important;
		display: grid;
		place-content: center;
		text-align: center;
	}

	.close-btn:hover {
		transition: all ease-in-out 0.3s;
		background-color: white;
		color: var(--violet);
	}

	nav {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 250px;
		position: fixed;
		z-index: 1000;
		top: 0;
		right: -250px;
		background-color: var(--space-cadet);
		overflow-x: hidden;
		padding: 1rem;
		transition: all ease-in-out 0.4s;
	}

	nav.open {
		transition: all ease-in-out 0.4s;
		right: 0px;
	}

	ul {
		display: flex;
		flex-direction: column;
	}

	a {
		text-decoration: none;
		cursor: pointer;
		padding-bottom: 1rem;
		font-family: var(--font-main);
		color: white;
	}

	a:hover {
		color: var(--fire-engine-red);
	}
</style>
