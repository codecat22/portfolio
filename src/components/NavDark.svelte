<script>
	import { createEventDispatcher } from 'svelte';

	import HomeButton from '../components/HomeIconDark.svelte';
	import WritingButton from '../components/WritingIconDark.svelte';
	import ContactButton from '../components/ContactIconDark.svelte';

	export let isMobile;

	const dispatch = createEventDispatcher();
</script>

<nav class={$$props.class}>
	<a href="/"><HomeButton /></a>
	<a href="/writing"><WritingButton /></a>
	<a href="/contact" class="pre-last"><ContactButton /></a>
	<!-- svelte-ignore a11y-invalid-attribute -->
	<button class="menu" class:hidden={!isMobile} on:click={() => dispatch('menu-click')}>
		&#10247;
	</button>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		padding: 0.8rem;
		background-color: inherit;
	}

	nav > :global(*) {
		margin-right: 1rem;
	}

	.pre-last {
		margin-right: 0rem;
		margin-left: auto;
	}

	.menu {
		color: var(--light-gray);
		text-decoration: none;
		align-self: center;
		padding-left: 1rem;
		margin-right: 0px;
		padding-bottom: 4px;
		display: none;
		font-size: 18px;
		text-align: right;
		border: none;
		background: inherit;
	}

	.menu:hover {
		color: var(--white);
	}

	@media (max-width: 1200px) {
		.menu {
			display: block;
		}

		.pre-last {
			margin-right: 1rem;
		}
	}

	.hidden {
		display: none;
	}
</style>
