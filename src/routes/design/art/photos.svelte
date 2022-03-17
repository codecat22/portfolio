<script lang="ts">
	import FilterBar from '../../../components/FilterBar.svelte';
	import { makeTagsFromUrls } from '../../../utils/index';
	import images from '../../../data/images';
	import clickOutside from '../../../actions/clickOutside';

	const allPhotoUrls = images.photos;
	const tags = makeTagsFromUrls(allPhotoUrls);

	let selectedImage = '';

	let filter: FilterOptions = 'featured';
	let selectedTags: string[] = ['animals'];
	$: photoUrls =
		filter === 'featured'
			? allPhotoUrls.filter((url) => url.includes(`/featured/`))
			: filter === 'tags'
			? allPhotoUrls.filter((url) => selectedTags.some((tag) => url.split('/').pop().includes(tag)))
			: allPhotoUrls;

	const extractNameFromUrl = (url: string): string => url.split('/').pop().split('.')[0];
</script>

<FilterBar bind:filter {tags} bind:selectedTags />

<section class="design-main">
	<div class="photo-gallery">
		{#each photoUrls as href}
			<div class="photo-card" on:click={() => (selectedImage = href)}>
				<img class="photo" src={href} loading="lazy" alt={extractNameFromUrl(href)} />
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

	.photo-gallery {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
	}

	.photo-card {
		margin: 0.5em;
		max-width: 50ch;
		cursor: pointer;
		position: relative;
	}

	.photo {
		max-width: 100%;
		height: auto;
		transition: all 0.2s ease-in-out;
	}

	.photo-card:hover > .photo {
		filter: hue-rotate(90deg) opacity(45%);
		transition: all 0.2s ease-in-out;
	}
</style>
