<script lang="ts">
	import ArrowRight from '$components/ArrowRight.svelte';

	const items = [
		{
			href: '/design/web',
			date: 'January Bollocks',
			title: 'Web Design',
			abstract: 'Websites, applications'
		},
		{
			href: '/design/graphic',
			date: 'January Bollocks',
			title: 'Graphic Design',
			abstract: 'Logos, icons, and others'
		},
		{
			href: '/design/collaborations',
			date: 'January Bollocks',
			title: 'Collaborations',
			abstract: 'University group projects'
		},
		{
			href: '/design/art',
			date: 'January Bollocks',
			title: 'Visual Art',
			abstract: 'Photos, drawings, videos'
		}
	];
</script>

<h2 class="design-title">Design</h2>

<section class="design-main">
	<ul>
		{#each items as item}
			<a href={item.href}>
				<!-- <p class="doc-date">{item.date}</p> -->
				<h3 class="doc-title">{item.title}</h3>
				<p class="doc-abstract">{item.abstract}</p>
				<img src="/images/visual-art-cover.png" alt="Visual Art Cover">
				<div class="arrow-right">
					<ArrowRight class="arrow-icon" />
				</div>
			</a>
		{/each}
	</ul>
</section>

<style>
	a:hover {
		background-color: var(--purple);
		transition: all ease-in-out 0.2s;
		transform: scale(1.05);
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

	a:hover > .arrow-right {
		background-color: #574b60;
	}

	a:hover > .arrow-right > :global(.arrow-icon) {
		color: var(--white);
	}

	.doc-abstract {
		margin-left: 1rem;
		margin-right: 1rem;
		font-family: 'Open Sans', sans-serif;
		margin-bottom: 1rem;
		/* height: 43%; */
		--val: 1vw;
		--min: 0.6rem;
		color: var(--light-gray);
	}

	img {
		width: 80%;
		margin-left: auto;
		margin-right: auto;
		margin-top: 15%;
	}

	.doc-title {
		margin: 1rem;
		font-family: 'Lalezar', cursive;
		--val: 1.8vw;
		transition: all ease-in-out 0.3s;
		color: var(--white);
	}

	ul {
		display: grid;
		--grid-cols: 4;
		grid-template-columns: repeat(var(--grid-cols), 1fr);
		align-content: center;
		justify-items: center;
		margin-top: 5vw;
		margin-bottom: 5vw;
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

	a {
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
		text-decoration: none;
		color: var(--black);
	}

	h2 {
		text-align: center;
		font-weight: 100;
		--val: 2.2vw;
	}

	:global(.design-layout-main) {
		grid-template-columns: 10% 1fr 10%;
	}

	:global(.burger-icon) {
		display: none;
	}
</style>
