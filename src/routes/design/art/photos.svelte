<script lang="ts">
	import FilterBar from '../../../components/FilterBar.svelte';
	const photosImport = import.meta.glob('/static/images/art/photos/**/*.{jpg,JPG}');

	const allPhotoUrls = Object.keys(photosImport);
	const tags = [
		...new Set(
			allPhotoUrls
				.map((it) =>
					it
						.split('/')
						.pop()
						.split('.')[0]
						.split(',')
						.filter((v) => isNaN(parseInt(v)))
						.map((v) => v.trim())
				)
				.flat(1)
		)
	];

	let filter: FilterOptions = 'featured';
	let selectedTags: string[] = ['animals'];
	$: photoUrls =
		filter === 'featured'
			? allPhotoUrls.filter((url) => url.includes(`/featured/`))
			: filter === 'tags'
			? allPhotoUrls.filter((url) => selectedTags.some((tag) => url.split('/').pop().includes(tag)))
			: allPhotoUrls;
</script>

<FilterBar bind:filter {tags} bind:selectedTags />

<section class="design-main">
	<div class="photo-gallery">
		{#each photoUrls as href}
			<div class="photo-card">
				<img class="photo" src={href} loading="lazy" alt={href.split('/').pop().split('.')[0]} />
			</div>
		{/each}
	</div>
</section>

<style>
	.photo-gallery {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: center;
	}

	.photo-card {
		margin: 0.5em;
		max-width: 39.5ch;
		cursor: pointer;
	}

	.photo {
		border: 1px solid rgba(189, 192, 199, 0.3);
		max-width: 100%;
		height: auto;
	}
</style>
