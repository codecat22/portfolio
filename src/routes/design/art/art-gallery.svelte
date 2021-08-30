<script lang="ts">
	import FilterBar from '$components/FilterBar.svelte';
	import { makeTagsFromUrls } from '$utils/index';
	const galleryImport = import.meta.glob('/static/images/art/gallery/**/*.{jpg,JPG}');

	const getNum = (url: string): number => parseInt(url.split('/').pop().split(',')[0].trim());

	const allGalleryUrls = Object.keys(galleryImport);
	allGalleryUrls.sort((a, b) => (getNum(a) > getNum(b) ? 1 : -1));
	const tags = makeTagsFromUrls(allGalleryUrls);

	let filter: FilterOptions = 'featured';
	let selectedTags: string[] = ['animals'];
	$: galleryUrls =
		filter === 'featured'
			? allGalleryUrls.filter((url) => url.includes(`/featured/`))
			: filter === 'tags'
			? allGalleryUrls.filter((url) =>
					selectedTags.some((tag) => url.split('/').pop().includes(tag))
			  )
			: allGalleryUrls;

	const extractNameFromUrl = (url: string): string => url.split('/').pop().split('.')[0];
</script>

<FilterBar bind:filter {tags} bind:selectedTags />

<section class="design-main">
	<div class="art-gallery">
		{#each galleryUrls as href}
			<div class="art-card card-{getNum(href)}">
				<img class="art" src={href} loading="lazy" alt={extractNameFromUrl(href)} />
				<p class="art-description">A pretty</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.art-gallery {
		display: flex;
		flex-flow: row wrap;
		/* justify-content: center; */
	}

	.art-card {
		margin: 0.5em;
		max-width: 23ch;
		cursor: pointer;
	}

	.art-card.card-2 {
		max-width: 40.8ch;
	}

	.art {
		border: 1px solid rgba(189, 192, 199, 0.3);
		max-width: 100%;
		height: auto;
	}

	.art-description {
		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		text-align: center;
		color: var(--white);
		font-size: 16px;
		margin-top: 0.5rem;
	}
</style>
