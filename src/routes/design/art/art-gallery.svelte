<script lang="ts">
	import FilterBar from '../../../components/FilterBar.svelte';
	import { makeTagsFromUrls } from '../../../utils/index';
	import images from '../../../data/images';
	import clickOutside from '../../../actions/clickOutside';

	const names = [
		'Poster',
		'Goat power',
		'Geometry',
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
	let selectedImage = '';

	const allGalleryUrls = images['art-gallery'];
	// allGalleryUrls.sort((a, b) => (getNum(a) > getNum(b) ? 1 : -1));
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
			<div class="art-card card-{getNum(href)}" on:click={() => (selectedImage = href)}>
				<img class="art" src={href} loading="lazy" alt={extractNameFromUrl(href)} />
				<p class="art-description">{names[i] || 'A pretty'}</p>
			</div>
		{/each}
	</div>
</section>
{#if selectedImage !== ''}
	<div class="image-overlay">
		<img
			use:clickOutside
			on:click-outside={() => (selectedImage = '')}
			class="overlay-image"
			src={selectedImage}
			loading="lazy"
			alt={extractNameFromUrl(selectedImage)}
		/>
	</div>
{/if}

<style>
	.image-overlay {
		position: fixed;
		display: grid;
		place-content: center;
		top: 0;
		left: 0;
		z-index: 1000;
		width: 100vw;
		height: 100vh;
		background-color: rgba(255, 255, 255, 0.7);
		cursor: pointer;
	}

	.overlay-image {
		max-height: 95vh;
		max-width: 90vw;
		cursor: auto;
	}

	.art-gallery {
		display: flex;
		flex-flow: row wrap;
	}

	@media (max-width: 600px) {
		.art-gallery {
			justify-content: center;
		}
	}

	.art-card {
		margin: 0.5em;
		max-width: 40ch;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}

	.art-card:hover > .art {
		filter: grayscale(100%) opacity(45%);
		transition: all 0.2s ease-in-out;
	}

	.art-card.card-2 {
		max-width: 40.8ch;
	}

	.art {
		max-width: 100%;
		height: auto;
	}

	.art-description {
		font-family: var(--font-header);
		font-weight: 400;
		text-align: center;
		color: var(--white);
		font-size: 16px;
		margin-top: 0.5rem;
	}
</style>
