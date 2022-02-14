<script>
	import Sidebar from '$components/Sidebar.svelte';
</script>

<slot />

<style>
	:global(.web-design-image) {
		max-width: 100%;
		height: auto;
	}

	:global(.web-design-file-link) {
		font-family: 'Open Sans', sans-serif;
		font-weight: 600;
		text-decoration: underline;
		color: var(--white);
		font-size: inherit;
	}

	:global(.web-design-file-link:visited) {
		color: var(--light-gray);
	}

	:global(.web-design-content) {
		display: grid;
		grid-template-columns: 5fr 5fr;
	}

	:global(.web-design-aside) {
		padding: 0 2em 1em 0;
		display: flex;
		align-items: center;
		flex-direction: column;
        gap: 1em;
	}

	:global(.web-design-description) {
		padding: 0 0 0 2em;
	}

	@media (max-width: 600px) {
		:global(.web-design-content) {
			grid-template-columns: 1fr;
		}

		:global(.web-design-aside) {
			padding: 0 1em 1em 1em;
		}

		:global(.web-design-description) {
			padding: 0 1em 0 1em;
		}
	}

	@media (min-width: 600px) and (max-width: 1200px) {
		:global(.web-design-content) {
			padding-left: 1em;
			padding-right: 1em;
		}
	}

	:global(.web-design-description > p) {
		font-family: 'Open Sans', sans-serif;
		font-weight: 400;
		color: var(--white);
		margin-bottom: 1em;
	}


	:global(.web-design-authors) {
		font-family: 'Open Sans', sans-serif;
		font-weight: 300;
		color: var(--light-gray);
		--val: 0.2vw;
		--min: 0.7em;
		margin-top: 1em;
	}
</style>
