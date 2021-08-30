<script lang="ts">
	import Nav from '$components/Nav.svelte';
	import ArrowRight from '$components/ArrowRight.svelte';

	const wordCountScale = 0.16;
	const wordCountMin = 120;

	let clientWidth = 0;

	const docsData = Array.from({ length: 9 }, () => ({
		date: '1 September 2020',
		title: 'Cat paper very title much good',
		abstract:
			'Cat text very excerpt wow, such many text is shown here. This is some cat text for sure. Cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat catCat text very excerpt wow, such many text is shown here. This is some cat text for sure. Cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat catCat text very excerpt wow, such many text is shown here. This is some cat text for sure. Cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat catCat text very excerpt wow, such many text is shown here. This is some cat text for sure. Cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat catCat text very excerpt wow, such many text is shown here. This is some cat text for sure. Cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat catCat text very excerpt wow, such many text is shown here. This is some cat text for sure. Cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat catCat text very excerpt wow, such many text is shown here. This is some cat text for sure. Cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat catCat text very excerpt wow, such many text is shown here. This is some cat text for sure. Cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat catCat text very excerpt wow, such many text is shown here. This is some cat text for sure. Cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat'
	}));

	let docs = docsData;

	//TODO move to use directive
	const limitAbstractWidth = (abstract: string, windowWidth: number): string => {
		const txt = abstract.trim().split('');
		const desiredCount = Math.ceil(Math.max(windowWidth * wordCountScale, wordCountMin));
		if (txt.length > desiredCount) return txt.slice(0, desiredCount).join('') + ' ...';
		return abstract;
	};

	$: docs = docs.map((doc, index) => ({
		...doc,
		abstract: limitAbstractWidth(docsData[index].abstract, clientWidth)
	}));
</script>

<svelte:window bind:innerWidth={clientWidth} />

<main>
	<Nav />
	<h2>Academic Papers & Articles</h2>
	<ul>
		{#each docs as { date, title, abstract }}
			<li>
				<p class="doc-date">{date}</p>
				<h3 class="doc-title">{title}</h3>
				<p class="doc-abstract">{abstract}</p>
				<div class="arrow-right">
					<ArrowRight class="arrow-icon" />
				</div>
			</li>
		{/each}
	</ul>
</main>

<style>
	li:hover {
		background-color: var(--white);
		transition: all ease-in-out 0.3s;
		transform: scale(1.2);
		box-shadow: 0px 4px 4px 0px #00000040;
		z-index: 100;
	}

	.arrow-right {
		width: 5vw;
		min-width: 2rem;
		display: grid;
		place-content: center;
		height: 5vw;
		min-height: 2rem;
		transition: all ease-in-out 0.3s;
		position: absolute;
		bottom: 0;
		right: 0;
	}

	li:hover > .arrow-right {
		background-color: #b8b42d;
	}

	li:hover > .arrow-right > :global(.arrow-icon) {
		color: var(--white);
	}

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

	li:hover > .doc-title {
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
		--grid-cols: 4;
		grid-template-columns: repeat(var(--grid-cols), 1fr);
		align-content: center;
		justify-items: center;
		margin-top: 5vw;
		padding-left: 5vw;
		padding-right: 5vw;
		grid-gap: 2vw;
		align-self: center;
	}

	@media only screen and (max-width: 600px) {
		ul {
			--grid-cols: 2;
		}
	}

	@media only screen and (max-width: 900px) and (min-width: 601px) {
		ul {
			--grid-cols: 3;
		}
	}

	li {
		display: flex;
		flex-direction: column;
		width: 16vw;
		min-width: 8rem;
		height: 24vw;
		min-height: 12rem;
		transition: all ease-in-out 0.3s;
		cursor: pointer;
		position: relative;
		padding: 0.3em;
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
