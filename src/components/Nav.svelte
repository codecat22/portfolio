<script>
	import HomeButton from '../components/HomeButton.svelte';
	import DesignButton from '../components/DesignButton.svelte';
	import ContactButton from '../components/ContactButton.svelte';
</script>

<nav>
	<a href="/"><HomeButton /></a>
	<a href="/design/collaborations"><DesignButton /></a>
	<a href="/contact"><ContactButton /></a>
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

	nav > :global(*:last-child) {
		margin-right: 0rem;
		margin-left: auto;
	}
</style>
