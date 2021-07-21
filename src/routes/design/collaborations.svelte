<script lang="ts">
	import data from '../../data/collaborations';
	import Sidebar from '../../components/Sidebar.svelte';

	const chunk = (arr: any[], columnCount: number): any[][] =>
		Array.from({ length: columnCount }, (_v, arrayIndex) => {
			return arr.filter((_it, itemIndex) => itemIndex % columnCount === arrayIndex);
		});

	let columns = chunk(data.cards, 3);
	let clientWidth = Infinity;

	$: columns = chunk(data.cards, clientWidth >= 1200 ? 3 : clientWidth >= 768 ? 2 : 1);
</script>

<svelte:window bind:innerWidth={clientWidth} />

<h2 class="design-title">Collaborations</h2>

<section class="design-main">
	<div class="masonry">
		{#each columns as cards}
			<div class="column">
				{#each cards as card}
					<div class={`card ${card.id}`}>
						<img
							class="card-image {card.id}"
							src={`/images/collaborations/${card.img}`}
							alt={card.alt}
						/>
						<div class="card-main {card.id}">
							<h3 class="card-title {card.id}">{card.title}</h3>
							<p class="card-authors {card.id}">{card.authors}</p>
							<p class="card-description {card.id}">{card.description}</p>
						</div>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</section>

<Sidebar
	links={[
		{ label: 'Web Design', href: '/design' },
		{ label: 'Visual Art', href: '/design/art' },
		{ label: 'Other Projects', href: '/design/other' }
	]}
/>

<style>
	.masonry {
		display: flex;
		justify-content: center;
	}

	.column {
		display: flex;
		flex-flow: column;
	}

	.card {
		box-shadow: 2px 2px 4px 0px #0a0a0a80;
		border: 1px solid rgba(10, 10, 10, 0.3);
		border-top: 5px solid var(--black);
		margin: 0.5rem;
		margin-top: 0;
		margin-bottom: 1rem;
		display: flex;
		flex-direction: column;
		height: min-content;
		cursor: pointer;
		min-width: 20ch;
		max-width: 40ch;
	}

	.card-image {
		max-width: 100%;
		height: auto;
		margin: max(1rem, 1.2vw);
	}

	.card-main {
		margin: max(1rem, 1.2vw);
		margin-top: 0;
	}

	.card-title {
		font-family: 'Lalezar', cursive;
		font-weight: 400;
		color: var(--white);
		--val: 2vw;
		--min: 1.8em;
	}

	.card-authors {
		font-family: 'Open Sans', sans-serif;
		font-weight: 300;
		color: var(--light-gray);
		--val: 0.2vw;
		--min: 0.7em;
		margin-top: max(0.5rem, 0.5vw);
		margin-bottom: max(1rem, 1vw);
	}

	.card-description {
		font-family: 'Open Sans', sans-serif;
		font-weight: 300;
		color: var(--white);
		--val: 1vw;
		--min: 0.9em;
	}
</style>
