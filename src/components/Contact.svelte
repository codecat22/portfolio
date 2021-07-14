<script>
	import BackButton from '../components/BackButton.svelte';

	export let hasBack = false;
</script>

<div class={$$props.class}>
	<p><b>Email</b></p>
	<p>siyana.ivanova13@gmail.com</p>
	<p>siyanai@kth.se</p>
	<br />
	<p><b>Social media</b></p>
	<p>Instagram: @codecat</p>
	<p>LinkedIn: Siyana Ivanova</p>

	{#if hasBack}
		<BackButton class="back-button" on:click />
	{/if}
</div>

<style>
	div > :global(.back-button) {
		position: absolute;
		bottom: 2%;
	}

	div {
		min-height: 100vh;
		display: flex;
		position: relative;
		flex-direction: column;
		background-color: var(--white);
		color: var(--black);
		justify-content: center;
		align-items: center;
	}

	p {
		max-width: 50ch;
		white-space: pre-line;
		text-align: center;
		color: var(--green);
		line-height: 1.15em;
		--val: 2.2vw;
	}

	br {
		margin: 1rem;
	}

	b {
		font-weight: 800 !important;
		font: inherit;
	}
</style>
