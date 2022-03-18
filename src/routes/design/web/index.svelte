<script lang="ts">
	import data from '../../../data/web-design';
	import Sidebar from '../../../components/Sidebar.svelte';
</script>

<section class="design-main">
	{#each data as card}
		<a class={`card ${card.title}`} href="{card.href}">
			<img class="card-image {card.title}" src="{card.img}" alt={card.alt} />
			<div class="image-overlay">
				<p class="card-title">{card.title}</p>
			</div>
		</a>
	{/each}
</section>

<Sidebar />

<style>
	.card-title {
		font-family: var(--font-header) !important;
		opacity: 0;
		text-align: center;
		transition: all 0.2s ease-in-out;
	}
	
	.image-overlay:hover > .card-title {
		transition: all 0.5s ease-in-out;
		opacity: 1;
	}

	.image-overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background-color: rgb(35, 240, 199, 0);
		transition: all 0.4s ease-in-out;
		display: grid;
		place-content: center;
		padding: 1em;
	}
	
	.image-overlay:hover {
		background-color: rgb(35, 240, 199, 0.85);
		transition: all 0.4s ease-in-out;
	}

	section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		height: 100%;
		flex: 1;
		align-items: center;
		padding-left: 4%;
		padding-right: 4%;
	}

	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: min-content;
		cursor: pointer;
		text-decoration: none;
		position: relative;
	}

	.card-image {
		object-fit: cover;
		width: 100%;
		height: 30ch;
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
