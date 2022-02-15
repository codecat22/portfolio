<script lang="ts">
	import { onMount } from 'svelte';

	export let card: {
		href: string;
		img: string;
		alt: string;
		title: string;
		subtitle: string;
		description: string;
	};
	export let position: 'left' | 'right' | 'middle';

	let self;

	onMount(() => {
		if (position === 'middle') self.scrollIntoView(false);
	});
</script>

<a bind:this={self} class="card" href={card.href} id="{position}-card">
	<img class="card-image" src={card.img} alt={card.alt} />
	<div class="card-main">
		<h3 class="card-title">{card.title}</h3>
		<p class="card-sub-title">{card.subtitle}</p>
		<p class="card-description">{card.description}</p>
	</div>
</a>

<style>
	.card {
		flex: 0 0 80%;
		box-shadow: 2px 2px 4px 0px #0a0a0a80;
		border: 1px solid rgba(10, 10, 10, 0.3);
		border-top: 5px solid var(--black);
		display: flex;
		flex-direction: column;
		height: min-content;
		cursor: pointer;
		text-decoration: none;
		scroll-snap-align: center;
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
		text-align: center;
		--val: 2vw;
		--min: 1.8em;
	}

	.card-sub-title {
		text-align: center;
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
