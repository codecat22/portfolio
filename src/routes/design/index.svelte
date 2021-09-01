<script lang="ts">
	import Sidebar from '$components/Sidebar.svelte';
	import cards from '$data/web-design';
	import { tweened } from 'svelte/motion';
	import { quartInOut } from 'svelte/easing';

	const sliderPosition = tweened("-70%", { duration: 300, easing: quartInOut });

	const prev = (index: number) => (index - 1 < 0 ? cards.length - 1 : index - 1);
	const next = (index: number) => (index + 1 >= cards.length ? 0 : index + 1);

	let cardIndex = 0;
	$: visibleCards = [cards[prev(cardIndex)], cards[cardIndex], cards[next(cardIndex)]];
</script>

<h3
	class="design-title"
	on:click={() =>
		(visibleCards = [cards[next(cardIndex)], cards[cardIndex], cards[prev(cardIndex)]])}
>
	Web Design
</h3>
<section class="design-main">
	<div class="slider">
		<button class="arrow left" on:click={() => (cardIndex = prev(cardIndex))}>
			<svg viewBox="0 0 100 100"
				><path
					fill="currentColor"
					d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"
					transform="translate(15,0)"
				/></svg
			>
		</button>
		<div class="cards hide-scrollbar">
			{#each visibleCards as card}
				<a class="card" href={card.href}>
					<img class="card-image" src={card.img} alt={card.alt} />
					<div class="card-main">
						<h3 class="card-title">{card.title}</h3>
						<p class="card-sub-title">{card.subtitle}</p>
						<p class="card-description">{card.description}</p>
					</div>
				</a>
			{/each}
		</div>
		<button class="arrow right" on:click={() =>{
			 cardIndex = next(cardIndex)
			 sliderPosition.set(`-${(cardIndex * 12) - 70}%`)
		}}>
			<svg viewBox="0 0 100 100"
				><path
					fill="currentColor"
					d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"
					transform="translate(15,0)"
				/></svg
			>
		</button>
	</div>
	<!-- <a href="https://www.figma.com/file/XACh4De1qqqHQvQT3MLx8S/Catfolio" target="blank" class="portfolio-link">
	Under the hood</a> -->
</section>

<Sidebar
	links={[
		{ label: 'Visual Art', href: '/design/art' },
		{ label: 'Collab', href: '/design/collaborations' },
		{ label: 'Other Projects', href: '/design/other' }
	]}
/>

<style>
	.slider {
		position: relative;
		margin-left: auto;
		margin-right: auto;
		overflow: hidden;
	}

	.arrow {
		position: absolute;
		width: 3em;
		display: grid;
		place-content: center;
		background: rgba(255, 250, 255, 0.75);
		border-radius: 50%;
		padding: 0.5rem;
		transition: all 0.3s ease;
		border: none;
	}

	.arrow:hover {
		background: rgba(255, 250, 255, 1);
	}

	.left {
		left: 3%;
		top: 50%;
	}

	.right {
		transform: rotate(180deg);
		right: 3%;
		top: 50%;
	}

	.arrow > svg {
		color: var(--green);
	}

	.cards {
		display: flex;
		gap: 1rem;
		/* overflow-x: hidden; */
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		-webkit-overflow-scrolling: touch;
		transition: all 0.3s ease;
		transform: translateX(-70%);
	}

	.hide-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}

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
		text-decoration: none;
		color: var(--white);
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
