<script>
	import Sidebar from '../../../components/Sidebar.svelte';
</script>

<slot />
<Sidebar />

<style>
	:global(.web-design-image) {
		max-width: 100%;
		height: auto;
	}

	:global(.web-design-file-link) {
		font-family: var(--font-main) !important;
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
		font-family: var(--font-main);
		color: var(--black);
		margin-bottom: 1em;
		line-height: 1.4em;
	}

	:global(.web-design-description > p) {
		font-size: 1.5vw;
	}

	/* :global(.web-design-description > p:first-child) {
		font-size: 1.5vw;
	} */

	/* :global(.web-design-description > p:not(:first-child)) {
		font-size: 1vw;
	} */

	:global(.web-design-authors) {
		font-family: var(--font-header) !important;
		font-weight: 300;
		color: white;
		--val: 0.34w;
		--min: 0.7em;
		margin-top: 1em;
	}
</style>
