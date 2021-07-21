<script>
	import { createEventDispatcher } from 'svelte';
	import { page } from '$app/stores';

	import HomeButton from '../components/HomeIconDark.svelte';
	import WritingButton from '../components/WritingIconDark.svelte';
	import ContactButton from '../components/ContactIconDark.svelte';
	import BurgerIcon from '../components/BurgerIcon.svelte';
	import ReturnArrow from '../components/ReturnArrow.svelte';

	$: isArtPage = $page.path.includes('/design/art/');

	const dispatch = createEventDispatcher();
</script>

<nav class={$$props.class}>
	<a href="/"><HomeButton /></a>
	<a href="/writing"><WritingButton /></a>
	<a href="/design/art" class:hidden={!isArtPage}><ReturnArrow class="return-arrow" /></a>
	<a href="/contact" class="right-item"><ContactButton /></a>
	<div class="menu" on:click={() => dispatch('menu-click')}>
		<BurgerIcon class="burger-icon" />
	</div>
</nav>

<style>
	.hidden {
		display: none;
	}

	:global(.return-arrow) {
		transform: scaleX(-1);
	}

	:global(.burger-icon:hover) {
		color: var(--white) !important;
		transition: all 0.3s linear;
	}

	.right-item {
		margin-left: auto;
	}

	a {
		display: grid;
		place-content: center;
		margin-right: 1rem;
	}

	nav {
		display: flex;
		align-items: center;
		padding: 0.8rem 1rem 0.8rem 1rem;
		background-color: inherit;
	}

	.pre-last {
		margin-right: 0rem;
		margin-left: auto;
	}

	.menu {
		color: var(--light-gray);
		text-decoration: none;
		align-self: center;
		margin-right: 0px;
		display: grid;
		place-content: center;
		font-size: 18px;
		text-align: right;
		border: none;
		background: inherit;
		cursor: pointer;
	}

	.menu:hover {
		color: var(--white);
	}
</style>
