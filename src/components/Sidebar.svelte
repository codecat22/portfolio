<script lang="ts">
	import { onMount } from 'svelte';
	import { deviceIsMobile } from '../utils';
	import scrollOutside from '../directives/scrollOutside';
	import sidebar from '../stores/sidebar';
	import { navigating } from '$app/stores';

	export let links: { href: string; label: string }[] = [];

	let isMobile = false;

	onMount(() => {
		isMobile = deviceIsMobile();
	});

	$: if ($navigating !== null) {
		sidebar.set(false);
	}

	const handleScrollOutside = () => {
		if (!isMobile) return;
		sidebar.set(false);
	};
</script>

<nav class:closed={!$sidebar} use:scrollOutside on:scroll-outside={handleScrollOutside}>
	<ul class:closed={!$sidebar}>
		{#each links as { href, label }}
			<li>
				<a {href}>
					{#each label.split(' ') as labelPart}
						<h3>{labelPart}</h3>
					{/each}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		width: 10%;
		justify-self: flex-end;
		min-width: 15ch;
		height: 63vh;
		background-color: var(--purple);
		box-shadow: 4px 4px 4px 0px #0a0a0a80;
		display: flex;
		flex-direction: column;
		margin-right: 1rem;
		border-radius: 10px;
		transition: all ease-in-out 0.3s;
		grid-column: 3;
		grid-row: 3;
		transform: translateX(0%);
		z-index: 100;
	}

	nav.closed {
		background-color: transparent;
		box-shadow: none;
		transform: translateX(100%);
		transition: all ease-in-out 0.3s;
	}

	ul {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		height: 80%;
		transition: all ease-in-out 0.3s;
		margin-top: auto;
		margin-bottom: auto;
	}

	li > a {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		width: 100%;
		transition: all ease-in-out 0.3s;
		height: 22%;
		text-decoration: none;
		color: var(--light-gray);
	}

	nav.closed > ul {
		width: 0rem;
		overflow: hidden;
		transition: all ease-in-out 0.3s;
	}

	li:hover > a {
		color: var(--white);
		font-weight: 600;
		transition: all linear 0.3s;
	}

	h3 {
		font-weight: 400;
		--val: 1.3vw;
		transition: all linear 0.3s;
		color: inherit;
	}

	@media (max-width: 1200px) {
		li > a {
			font-size: 22px;
		}
	}
</style>
