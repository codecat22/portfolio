<script lang="ts">
	import FilterBar from '../../../components/FilterBar.svelte';
	import { makeTagsFromUrls } from '../../../utils/index';
	import images from '../../../data/images';

	// const galleryImport = import.meta.glob('images/art/gallery/**/*.{jpg,JPG,png,PNG}');
	const names = [
		'Bridge at night',
		'Rila',
		'Raleigh',
		'Teatime',
		'Sofia night',
		'The eyeball zone',
		'Identity',
		'Spring in Sofia',
		'Country house',
		'Alexander Nevsky'
	];

	const getNum = (url: string): number => parseInt(url.split('/').pop().split(',')[0].trim());

	const allGalleryUrls = images['art-gallery'];
	allGalleryUrls.sort((a, b) => (getNum(a) > getNum(b) ? 1 : -1));
	const tags = makeTagsFromUrls(allGalleryUrls);

	let filter: FilterOptions = 'featured';
	let selectedTags: string[] = ['black-and-white'];
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
		{#each galleryUrls as href, i}
			<div class="art-card card-{getNum(href)}">
				<img class="art" src={href} loading="lazy" alt={extractNameFromUrl(href)} />
				<p class="art-description">{names[i] || 'A pretty'}</p>
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

	@media (max-width: 600px) {
		.art-gallery {
			justify-content: center;
		}
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
