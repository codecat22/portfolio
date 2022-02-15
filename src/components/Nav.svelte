<script>
	import HomeButton from '../components/HomeButton.svelte';
	import DesignButton from '../components/DesignButton.svelte';
	import ContactButton from '../components/ContactButton.svelte';
	import contact from '../stores/contact';
</script>

<nav>
	<a href="/"><HomeButton /></a>
	<a href="/design"><DesignButton /></a>
	<button><ContactButton on:click={() => contact.set(true)} /></button>
</nav>

<style>
	button {
		background: none;
		border: none;
		cursor: pointer;
		display: grid;
		place-items: center;
		margin-right: 1rem;
	}

	nav {
		display: flex;
		align-items: center;
		padding: 0.8rem;
		background-color: inherit;
	}

	nav > :global(*) {
		margin-right: 1rem;
	}

	nav > :global(*:last-child) {
		margin-right: 0rem;
		margin-left: auto;
	}
</style>
