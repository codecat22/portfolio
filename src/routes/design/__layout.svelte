<script lang="ts">
	import { deviceIsMobile } from '../../utils';
	import { onMount } from 'svelte';

	import Nav from '../../components/NavDark.svelte';
	import clickOutside from '../../directives/clickOutside';
	import scrollOutside from '../../directives/scrollOutside';

	const navbarUrls = {
		web: ['art', 'collaborations', 'other'],
		other: ['web', 'collaborations', 'art'],
		art: ['web', 'collaborations', 'other'],
		collaborations: ['web', 'art', 'other']
	};

	const urlToLabel = {
		web: 'Web Design',
		other: 'Other Projects',
		art: 'Visual Art',
		collaborations: 'Collab'
	};

	let currentNavbarUrls: string[] = [];
	let isMobile = false;

	onMount(() => {
		currentNavbarUrls = navbarUrls[window.location.pathname.split('/').pop()];
		isMobile = deviceIsMobile();
	});

	let sidebarOpen = false;
	let clientWidth = Infinity;

	const handleClickOutside = () => {
		if (clientWidth >= 1200) return;
		sidebarOpen = false;
	};
</script>

<svelte:window bind:innerWidth={clientWidth} />

<main>
	<Nav class="top-nav" on:menu-click={() => (sidebarOpen = !sidebarOpen)} {isMobile} />
	<slot />
	<nav
		class:closed={!sidebarOpen}
		class:hidden={isMobile}
		use:clickOutside
		on:click-outside={handleClickOutside}
		use:scrollOutside
		on:scroll-outside={handleClickOutside}
	>
		<div
			class="back-button-container"
			class:hidden={isMobile}
			on:click={() => (sidebarOpen = !sidebarOpen)}
		>
			<div class="back-button" />
		</div>
		<ul class:closed={!sidebarOpen}>
			{#each currentNavbarUrls as url}
				<li>
					<a href="/design/{url}">
						{#each urlToLabel[url].split(' ') as label}
							<h3>{label}</h3>
						{/each}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</main>

<nav
	class:closed={!sidebarOpen}
	class:hidden={!isMobile}
	class="mobile-nav"
	use:clickOutside
	on:click-outside={handleClickOutside}
	use:scrollOutside
	on:scroll-outside={handleClickOutside}
>
	<button class="close-button" on:click={() => (sidebarOpen = false)}>x</button>
	<ul class:closed={!sidebarOpen}>
		{#each currentNavbarUrls as url}
			<li>
				<a href="/design/{url}">
					{#each urlToLabel[url].split(' ') as label}
						<h3>{label}</h3>
					{/each}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	:global(.top-nav) {
		grid-column: 1 / -1;
	}

	nav {
		width: 60%;
		justify-self: flex-end;
		min-width: 10ch;
		height: 63vh;
		right: 0%;
		top: 7rem;
		background-color: var(--purple);
		box-shadow: 4px 4px 4px 0px #0a0a0a80;
		display: flex;
		flex-direction: column;
		margin-right: 1rem;
		border-radius: 10px;
		position: sticky;
		transition: all ease-in-out 0.3s;
		grid-column: 3;
		grid-row: 3;
	}

	nav.closed {
		width: 1rem;
		min-width: 0px;
		background-color: transparent;
		box-shadow: none;
		transition: all ease-in-out 0.3s;
	}

	ul {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		height: 80%;
		transition: all ease-in-out 0.3s;
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

	.back-button-container {
		height: 10%;
		cursor: pointer;
		transition: all ease-in-out 0.3s;
	}

	.back-button-container:hover > .back-button {
		--arrow-color: var(--white);
		transition: all ease-in-out 0.3s;
	}

	nav.closed > .back-button-container > .back-button {
		transition: all ease-in-out 0.3s;
		transform: rotate(135deg);
	}

	.back-button {
		width: 0.8rem;
		height: 0.8rem;
		--arrow-color: var(--light-gray);
		border-bottom: solid var(--arrow-color, var(--black)) 3px;
		border-right: solid var(--arrow-color, var(--black)) 3px;
		transform: rotate(-45deg);
		cursor: pointer;
		margin: 0.7rem 0 0.5rem 0.2rem;
		transition: all ease-in-out 0.3s;
	}

	main {
		display: grid;
		grid-template-columns: 17% 1fr 17%;
		grid-template-rows: min-content min-content 1fr;
		transition: all ease-in-out 0.3s;
		min-width: 96vw;
		position: relative;
		background-color: var(--brown);
		min-height: 100vh;
		padding-bottom: 2rem;
	}

	.close-button {
		background-color: transparent;
		border: none;
		position: absolute;
		color: var(--white);
		top: 0.2rem;
		left: 0.2rem;
		cursor: pointer;
		width: 100%;
		text-align: left;
	}

	nav.closed > .close-button {
		display: none;
	}

	.mobile-nav {
		display: none;
		position: absolute;
		top: 0;
		right: 0%;
		height: 100%;
		border-radius: 0px;
		width: 30%;
		margin-right: 0;
	}

	.mobile-nav > ul > li > a > h3 {
		--val: 3vw;
		--max: 3rem;
	}

	.mobile-nav > ul {
		max-height: 60vh;
	}

	@media (max-width: 1200px) {
		main {
			grid-template-columns: 0 1fr 0;
		}

		.mobile-nav {
			display: flex;
		}

		ul {
			margin-top: 6rem;
			height: 50%;
		}

		li > a {
			font-size: 22px;
		}
	}

	.hidden {
		display: none;
	}
</style>
