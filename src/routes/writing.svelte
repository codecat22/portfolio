<script lang="ts">
	import Contact from '../components/Contact.svelte';
	import Nav from '../components/Nav.svelte';
	import papers from '../data/papers';

	let clientWidth = 0;

	const docsData = Object.values(papers);
	let docs = docsData;
</script>

<svelte:window bind:innerWidth={clientWidth} />

<main>
	<Nav isWriting iconColor="#2B2D42" />
	<h2>Writings</h2>
	<ul>
		{#each docs as { date, title, abstract, name }}
			<a href="/data/papers/{name}.pdf" target="blank">
				<p class="doc-date">{date}</p>
				<h3 class="doc-title">{title}</h3>
				<p class="doc-abstract">{abstract}</p>
			</a>
		{/each}
	</ul>

	<Contact />
</main>

<style>
	a:hover {
		transition: all ease-in-out 0.3s;
		transform: scale(1.2);
		z-index: 100;
	}

	.doc-abstract {
		margin-left: 1rem;
		margin-right: 1rem;
		font-family: var(--font-main);
		line-height: 26px;
		height: 43%;
		--val: 1vw;
		--min: 0.6rem;
	}

	.doc-title {
		margin: 1rem;
		font-family: var(--font-main);
		--val: 1.5vw;
		transition: all ease-in-out 0.3s;
		line-height: 34px;
	}

	a:hover > .doc-title {
		color: var(--fire-engine-red);
		transition: all ease-in-out 0.3s;
	}

	.doc-date {
		color: var(--cool-grey);
		--val: 0.8vw;
		--min: 0.5rem;
		font-family: 'Satisfy';
	}

	ul {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(auto-fit, 30ch);
		--grid-cols: 4;
		margin-top: 5vw;
		margin-bottom: 5vw;
		padding-left: 5vw;
		padding-right: 5vw;
		gap: 2ch;
		align-self: center;
		justify-content: center;
		grid-auto-rows: 1fr;
	}

	@media only screen and (max-width: 600px) {
		ul {
			display: flex;
			flex-direction: column;
		}
	}

	@media only screen and (max-width: 900px) and (min-width: 601px) {
		ul {
			--grid-cols: 2;
		}
	}

	a {
		display: flex;
		flex-direction: column;
		transition: all ease-in-out 0.3s;
		cursor: pointer;
		position: relative;
		padding: 0.3em;
		padding-bottom: 1em;
		padding-right: 0px;
		text-decoration: none;
		color: black;
	}

	main {
		min-height: 100vh;
		background-color: white;
		display: flex;
		flex-direction: column;
	}

	h2 {
		text-align: center;
		font-weight: 100;
		--val: 2.2vw;
		font-family: var(--font-main);
		line-height: 30px;
		color: black;
	}
</style>
