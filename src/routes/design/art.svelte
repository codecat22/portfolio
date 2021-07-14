<script lang="ts">
</script>

<h2 class="design-title">Visual Art</h2>

<section class="design-main">
	<div class="cover-card">
		<img src="/images/art/covers/photo-cover.PNG" alt="building through a rainy window" />
	</div>
	<div class="cover-card">
		<img src="/images/art/covers/video-cover.PNG" alt="sad person pretending cooking" />
	</div>
	<div class="cover-card">
		<img src="/images/art/covers/art-cover.PNG" alt="drawn black and white bridge" />
	</div>
</section>

<style>
    .cover-card {
    }

    img {
        max-width: 100%;
		height: auto;
    }

	section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		width: 100%;
		height: 100%;
		justify-items: center;
		gap: 1rem;
        padding-top: 4rem;
	}
</style>
