<script lang="ts">
	import data from '../../../data/web-design';
	import placeholder from '../../../actions/placeholder';
	const { pageImages, title } = data.find((t) => t.title === 'Grocery app');
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
			This is a little personal project I'm working on with my spouse. We are making an app that
			organises all shopping lists into one convenient place. It also holds a list of stores with
			map locations, reminders for various activities, and even the ability to indicate if something
			is currently in stock at home.
		</p>
		<p>
			While this is not a particularly groundbreaking or interesting idea, I believe it is going to
			be very useful - at least to us - in everyday, mundane shopping experiences.
		</p>
		<p>Never forget to buy oat milk again! :)</p>
	</div>
</section>
