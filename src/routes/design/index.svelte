<script lang="ts">
	const items = [
		{
			href: '/design/web',
			date: 'January Bollocks',
			src: '/images/web-design-cover.png',
			alt: 'Web Design Cover',
			title: 'Web Design',
			abstract: 'Websites, applications'
		},
		{
			href: '/design/graphic',
			src: '/images/graphic-design-cover.png',
			alt: 'Graphic Design Cover',
			date: 'January Bollocks',
			title: 'Graphic Design',
			abstract: 'Logos, icons, and others'
		},
		{
			href: '/design/collaborations',
			src: '/images/collaborations-cover.png',
			alt: 'Collaborations Cover',
			date: 'January Bollocks',
			title: 'Collaborations',
			abstract: 'University group projects'
		},
		{
			href: '/design/art',
			src: '/images/visual-art-cover.png',
			alt: 'Visual Art Cover',
			date: 'January Bollocks',
			title: 'Visual Art',
			abstract: 'Photos, drawings, videos'
		}
	];
</script>

<section class="design-main">
	<ul>
		{#each items as item}
			<a href={item.href}>
				<div class="img-container">
					<img src={item.src} alt={item.alt} />
				</div>
				<hr />
				<h3 class="doc-title">{item.title}</h3>
				<p class="doc-abstract">{item.abstract}</p>
			</a>
		{/each}
	</ul>
</section>

<style>
	hr {
		background-color: white;
		color: white;
		width: 35%;
		transition: width 0.2s ease-in-out;
	}

	a:hover > hr {
		width: 60%;
		transition: width 0.2s ease-in-out;
	}

	.doc-abstract {
		margin-left: 1rem;
		margin-right: 1rem;
		font-family: var(--font-main);
		margin-bottom: 1rem;
		--val: 1vw;
		--min: 0.6rem;
		color: white;
		text-align: center;
	}

	img {
		max-width: 100%;
		height: auto;
		margin: auto;
		padding: 1em;
		transition: all 0.2s ease-in-out;
	}
	
	a:hover > .img-container >img {
		transition: all 0.2s ease-in-out;
		transform: scale(1.2);
	}

	.img-container {
		height: 60%;
		display: grid;
		place-content: center;
		margin-bottom: 2rem;
	}

	.doc-title {
		margin: 1rem;
		font-family: var(--font-header);
		--val: 1.8vw;
		transition: all ease-in-out 0.3s;
		color: var(--white);
		text-align: center;
	}

	ul {
		display: grid;
		--grid-cols: 4;
		grid-template-columns: repeat(var(--grid-cols), 1fr);
		align-content: center;
		justify-items: center;
		margin-top: 5vw;
		margin-bottom: 5vw;
		padding-left: 3vw;
		padding-right: 3vw;
		gap: 1vw;
		align-self: center;
		grid-auto-rows: 1fr;
	}

	@media only screen and (max-width: 600px) {
		ul {
			--grid-cols: 1;
		}

		a {
			margin-bottom: 1.2rem;
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
		padding: 0.3em 0 0 0.3em;
		text-decoration: none;
		color: var(--black);
	}

	:global(.design-layout-main) {
		grid-template-columns: 10% 1fr 10% !important;
		background-color: var(--liberty);
	}
</style>
