<script lang="ts">
	import FilterBar from '$components/FilterBar.svelte';

	const onlyUnique = (value, index, self) => self.indexOf(value) === index;

	const allVideos = [
		{
			src: 'https://www.youtube-nocookie.com/embed/5L8blJKYNk0',
			title: 'Making of Here Be Dragons',
			tags: ['university project', 'unity', 'blender'],
			isFeatured: true
		},
		{
			src: 'https://www.youtube-nocookie.com/embed/FxuaJ9DEBYk',
			title: 'Here Be Dragons: Unity Demo',
			tags: ['university project', 'unity', 'game'],
			isFeatured: true
		},
		{
			src: 'https://www.youtube-nocookie.com/embed/pHONGiIztX4',
			title: 'DH2629 Elevetor Video',
			tags: ['university project', 'soma design'],
			isFeatured: true
		},
		{
			src: 'https://www.youtube-nocookie.com/embed/0NqJQjho_zU',
			title: 'furhat Culinary Instructor',
			tags: ['university project', 'robot'],
			isFeatured: true
		}
	];

	const tags = allVideos
		.map((v) => v.tags)
		.flat(1)
		.filter(onlyUnique);

	let filter: FilterOptions = 'featured';
	let selectedTags: string[] = ['university project'];
	$: videos =
		filter === 'featured'
			? allVideos.filter((video) => video.isFeatured)
			: filter === 'tags'
			? allVideos.filter((video) => selectedTags.some((tag) => video.tags.includes(tag)))
			: allVideos;
</script>

<FilterBar {tags} bind:selectedTags bind:filter />

<section class="design-main">
	<div class="video-gallery">
		{#each videos as video}
			<div class="video">
				<iframe
					src={video.src}
					title={video.title || 'YouTube video player'}
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					loading="lazy"
				/>
			</div>
		{/each}
	</div>
</section>

<style>
	.video-gallery {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1em;
		padding: 1em;
	}

	@media (min-width: 1200px) {
		:global(.return-arrow) {
			display: block;
		}

		.video-gallery {
			padding: 0em;
			grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		}
	}

	.video {
		overflow: hidden;
		padding-bottom: 56.25%;
		position: relative;
		height: 0;
	}

	iframe {
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		position: absolute;
	}
</style>
