<script lang="ts">
	import ArrowRight from '../../../components/ArrowRight.svelte';
	import Sidebar from '../../../components/Sidebar.svelte';
</script>

<section class="design-main cover-cards-container">
	<a href="/design/art/photos" class="cover-card">
		<img
			class="cover-card-image"
			src="/images/art/covers/photo-cover.PNG"
			alt="building through a rainy window"
		/>
		<div class="cover-card-caption">
			<h2 class="cover-card-caption-label">Photos</h2>
			<div class="cover-card-arrow-container">
				<ArrowRight class="cover-card-caption-arrow" />
			</div>
		</div>
	</a>
	<a href="/design/art/video" class="cover-card">
		<img
			class="cover-card-image"
			src="/images/art/covers/video-cover.PNG"
			alt="sad person pretending to be cooking"
		/>
		<div class="cover-card-caption">
			<h2 class="cover-card-caption-label">Videos</h2>
			<div class="cover-card-arrow-container">
				<ArrowRight class="cover-card-caption-arrow" />
			</div>
		</div>
	</a>
	<a href="/design/art/art-gallery" class="cover-card">
		<img
			class="cover-card-image"
			src="/images/art/covers/art-cover.PNG"
			alt="drawn black and white bridge"
		/>
		<div class="cover-card-caption">
			<h2 class="cover-card-caption-label">Art</h2>
			<div class="cover-card-arrow-container">
				<ArrowRight class="cover-card-caption-arrow" />
			</div>
		</div>
	</a>
</section>

<Sidebar />

<style>
	.cover-card:hover .cover-card-caption {
		min-width: 100%;
	}

	.cover-card:hover .cover-card-arrow-container {
		opacity: 1;
		transition: opacity 0.1s linear;
		transition-delay: 0.3s;
	}

	.cover-card-arrow-container {
		opacity: 0;
		background: var(--middle-blue);
		margin-left: auto;
		display: grid;
		place-content: center;
		flex: 2;
	}

	:global(.cover-card-caption-arrow) {
		padding: 0 !important;
		color: var(--white) !important;
	}

	.cover-card-caption-label {
		font-family: var(--font-header);
		color: white;
		--val: 2vw;
		flex: 8;
		margin: 0.5rem;
		font-weight: 400;
		display: flex;
	}

	.cover-card-caption {
		position: absolute;
		bottom: 15%;
		left: 0;
		display: flex;
		background: var(--liberty);
		min-width: 45%;
		transition: min-width 0.3s linear;
	}

	.cover-card {
		position: relative;
		height: min-content;
		display: flex;
		cursor: pointer;
	}

	.cover-card-image {
		max-width: 100%;
		height: auto;
		border-radius: 15%;
	}

	.cover-cards-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		height: 100%;
		flex: 1;
		align-items: center;
		padding-left: 4%;
		padding-right: 4%;
	}

	@media (max-width: 1200px) {
		.cover-card-caption-label {
			font-size: 35px;
		}

		.cover-cards-container {
			padding-top: 0;
			grid-template-columns: 1fr;
			justify-items: center;
		}

		.cover-card {
			max-width: 400px;
		}
	}
</style>
