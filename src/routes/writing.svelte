<script lang="ts">
	import Nav from '../components/Nav.svelte';
	// import ArrowRight from '../components/ArrowRight.svelte';
	import papers from '../data/papers';

	// const wordCountScale = 0.16;
	// const wordCountMin = 120;

	let clientWidth = 0;

	const docsData = Object.values(papers);
	let docs = docsData;

	//TODO move to use directive
	// const limitAbstractWidth = (abstract: string, windowWidth: number): string => {
	// 	const txt = abstract.trim().split('');
	// 	const desiredCount = Math.ceil(Math.max(windowWidth * wordCountScale, wordCountMin));
	// 	if (txt.length > desiredCount) return txt.slice(0, desiredCount).join('') + ' ...';
	// 	return abstract;
	// };

	// $: docs = docs.map((doc, index) => ({
	// 	...doc,
	// 	abstract: limitAbstractWidth(docsData[index].abstract, clientWidth)
	// }));
</script>

<svelte:window bind:innerWidth={clientWidth} />

<main>
	<Nav />
	<h2>Academic Papers & Articles</h2>
	<ul>
		{#each docs as { date, title, abstract, name }}
			<a href="/data/papers/{name}.pdf" target="blank">
				<p class="doc-date">{date}</p>
				<h3 class="doc-title">{title}</h3>
				<p class="doc-abstract">{abstract}</p>
				<!-- <div class="arrow-right">
					<ArrowRight class="arrow-icon" />
				</div> -->
			</a>
		{/each}
	</ul>
</main>

<style>
	a:hover {
		background-color: var(--white);
		transition: all ease-in-out 0.3s;
		transform: scale(1.2);
		box-shadow: 0px 4px 4px 0px #00000040;
		z-index: 100;
	}

	/* .arrow-right {
		width: 4rem;
		display: grid;
		place-content: center;
		height: 4rem;
		transition: all ease-in-out 0.3s;
		margin-left: auto;
		margin-top: auto;
	}

	a:hover > .arrow-right {
		background-color: #b8b42d;
	}

	a:hover > .arrow-right > :global(.arrow-icon) {
		color: var(--white);
	} */

	.doc-abstract {
		margin-left: 1rem;
		margin-right: 1rem;
		font-family: 'Open Sans', sans-serif;
		height: 43%;
		--val: 1vw;
		--min: 0.6rem;
	}

	.doc-title {
		margin: 1rem;
		font-family: 'Lalezar', cursive;
		--val: 1.8vw;
		transition: all ease-in-out 0.3s;
	}

	a:hover > .doc-title {
		color: #db5461;
		transition: all ease-in-out 0.3s;
	}

	.doc-date {
		color: var(--gray);
		--val: 0.8vw;
		--min: 0.5rem;
		font-family: 'Open Sans', sans-serif;
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
		color: var(--black);
	}

	main {
		min-height: 100vh;
		background-color: var(--yellow);
		display: flex;
		flex-direction: column;
	}

	h2 {
		text-align: center;
		font-weight: 100;
		--val: 2.2vw;
	}
</style>
