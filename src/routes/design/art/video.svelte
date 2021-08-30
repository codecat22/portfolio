<script lang="ts">
	import FilterBar from '$components/FilterBar.svelte';
</script>

<FilterBar tags={[]} />

<section class="design-main">
	<div class="video-gallery">
		<div class="video">
			<iframe
				src="https://www.youtube-nocookie.com/embed/pHONGiIztX4"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				loading="lazy"
			/>
		</div>
		<div class="video">
			<iframe
				src="https://www.youtube-nocookie.com/embed/0NqJQjho_zU"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				loading="lazy"
			/>
		</div>
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
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
