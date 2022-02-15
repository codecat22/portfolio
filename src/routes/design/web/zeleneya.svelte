<script lang="ts">
	import data from '../../../data/web-design';
	import placeholder from '../../../actions/placeholder';
	const { pageImages, title } = data.find((t) => t.title === 'Zeleneya mobile');
</script>

<h2 class="design-title">{title}</h2>

<section class="design-main web-design-content">
	<aside class="web-design-aside">
		{#each pageImages as pageImage}
			<img class="web-design-image" use:placeholder src={pageImage.img} alt={pageImage.alt} />
		{/each}
	</aside>
	<div class="web-design-description">
		<p>
			I did this design for a community project with some other Bulgarian students. The idea is to
			create an application for "neighbourly sharing" where people can find others around them who
			want to share food, clothing, or anything else, or conversely share something with their
			neighbours instead. The app is inspired by the concept of on-the-ground mutual aid, and aims
			to reintroduce (especially in the growing capital city of Sofia) the age-old concept of
			friendly, neighbourly help.
		</p>
		<p>
			The Zeleneya design has now been handed over to the main programmer (who also came up with the
			idea in the first place), and is currently under development.
		</p>
	</div>
</section>
