<script>
	import Sidebar from '../../../components/Sidebar.svelte';
</script>

<slot />

<Sidebar />

<style>
	:global(.collaboration-image) {
		max-width: 100%;
		height: auto;
	}

	:global(.collaboration-file-link) {
		font-family: var(--font-main) !important;
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
		font-family: var(--font-main);
	}

	:global(.collaboration-description > p) {
		font-family: var(--font-main) !important;
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
		font-family: var(--font-main);
		color: var(--white);
		margin-bottom: 1em;
	}

	:global(.collaboration-description > p:first-child) {
		font-size: 1.5vw;
	}

	:global(.collaboration-description > p:not(:first-child)) {
		font-size: 1vw;
	}

	:global(.collaboration-authors) {
		font-family: var(--font-header) !important;
		font-weight: 300;
		color: white;
		--val: 0.34w;
		--min: 0.7em;
		margin-top: 1em;
	}
</style>
