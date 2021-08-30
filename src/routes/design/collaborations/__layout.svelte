<script>
	import Sidebar from '$components/Sidebar.svelte';
</script>

<slot />

<Sidebar
	links={[
		{ label: 'Web Design', href: '/design' },
		{ label: 'Visual Art', href: '/design/art' },
		{ label: 'Other Projects', href: '/design/other' }
	]}
/>

<style>
	:global(.collaboration-image) {
		max-width: 100%;
		height: auto;
	}

	:global(.collaboration-file-link) {
		font-family: 'Open Sans', sans-serif;
		font-weight: 600;
		text-decoration: underline;
		color: var(--white);
		font-size: inherit;
	}

	:global(.collaboration-file-link:visited) {
		color: var(--light-gray);
	}

	:global(.collaboration-content) {
		display: grid;
		grid-template-columns: 3fr 7fr;
	}

	:global(.collaboration-aside) {
		padding: 0 2em 1em 0;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	:global(.collaboration-description) {
		padding: 0 0 0 2em;
	}

	@media (max-width: 600px) {
		:global(.collaboration-content) {
			grid-template-columns: 1fr;
		}

		:global(.collaboration-aside) {
			padding: 0 1em 1em 1em;
		}

		:global(.collaboration-description) {
			padding: 0 1em 0 1em;
		}
	}

	@media (min-width: 600px) and (max-width: 1200px) {
		:global(.collaboration-content) {
			padding-left: 1em;
			padding-right: 1em;
		}
	}

	:global(.collaboration-description > p) {
		font-family: 'Open Sans', sans-serif;
		font-weight: 400;
		color: var(--white);
		margin-bottom: 1em;
	}


	:global(.collaboration-authors) {
		font-family: 'Open Sans', sans-serif;
		font-weight: 300;
		color: var(--light-gray);
		--val: 0.2vw;
		--min: 0.7em;
		margin-top: 1em;
	}
</style>
