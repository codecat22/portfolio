<script>
	import { createEventDispatcher } from 'svelte';
	import { page } from '$app/stores';

	import HomeButton from '../components/HomeButton.svelte';
	import WritingButton from '../components/WritingIconDark.svelte';
	import DesignButton from '../components/DesignButton.svelte';
	import ContactButton from '../components/ContactIconDark.svelte';
	import BurgerIcon from '../components/BurgerIcon.svelte';
	import ReturnArrow from '../components/ReturnArrow.svelte';
	import contact from '../stores/contact';

	export let isWriting = false;
	export let iconColor = '#6DA34D';

	$: isSubPage = $page.url.pathname.split('/').length >= 4;
	$: hideMenuButton = !isWriting ? $page.url.pathname === '/design' : true;

	const dispatch = createEventDispatcher();
</script>

<nav class={$$props.class}>
	<a href="/"><HomeButton color={iconColor} /></a>
	{#if !isWriting}<a href="/writing"><WritingButton color={iconColor} /></a>{/if}
	{#if isWriting || !hideMenuButton}<a href="/design"><DesignButton color={iconColor} /></a>{/if}
	<a href={$page.url.pathname.split('/').slice(0, -1).join('/')} class:hidden={!isSubPage}
		><ReturnArrow class="return-arrow" /></a
	>
	<div class="right-item grd">
		<button class:move-right={hideMenuButton}
			><ContactButton color={iconColor} on:click={() => contact.set(true)} /></button
		>
		{#if !hideMenuButton}
			<div class="menu" on:click={() => dispatch('menu-click')}>
				<BurgerIcon class="burger-icon" />
			</div>
		{/if}
	</div>
</nav>

<style>
	.move-right {
		grid-column: 2;
	}

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
		color: var(--space-cadet);
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

	.grd {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		gap: 1rem;
	}

	button {
		margin: 0px;
		padding: 0px;
	}

	.menu {
		margin: 0px;
		padding: 0px;
	}
</style>
