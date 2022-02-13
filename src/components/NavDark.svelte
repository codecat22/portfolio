<script>
	import { createEventDispatcher } from 'svelte';
	import { page } from '$app/stores';

	import HomeButton from '../components/HomeIconDark.svelte';
	import WritingButton from '../components/WritingIconDark.svelte';
	import ContactButton from '../components/ContactIconDark.svelte';
	import BurgerIcon from '../components/BurgerIcon.svelte';
	import ReturnArrow from '../components/ReturnArrow.svelte';
	import contact from '$stores/contact';

	$: isSubPage = $page.path.split('/').length >= 4;

	const dispatch = createEventDispatcher();
</script>

<nav class={$$props.class}>
	<a href="/"><HomeButton /></a>
	<a href="/writing"><WritingButton /></a>
	<a href={$page.path.split('/').slice(0, -1).join('/')} class:hidden={!isSubPage}
		><ReturnArrow class="return-arrow" /></a
	>
	<button class="right-item"><ContactButton on:click={() => contact.set(true)} /></button>
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

	button {
		background: none;
		border: none;
		cursor: pointer;
		display: grid;
		place-items: center;
		margin-right: 1rem;
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
