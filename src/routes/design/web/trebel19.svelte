<script lang="ts">
	import data from '../../../data/web-design';
	import placeholder from '../../../actions/placeholder';
	const { pageImages, title } = data.find((t) => t.title === 'Trebel 2019');
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
			This was my first project both as a programmer and as a designer. The design of the site is
			simple, as it was not a big project (or a big company) at the time. It consists of a diverse
			(if limited) catalogue of products presented in a static website with a gallery, a downloads
			section, and contact/ order information.
		</p>
		<p>
			The company is a distributor for Bulgaria of window frames, doors, outdoor flooring (such as
			tiles) and other similar items.
		</p>
		<p>
			After two years, the website is not in operation anymore as it does not encompass the
			company's current expanded catalogue. Instead, a new website (once again using my design) is
			being developed to replace it.
		</p>
	</div>
</section>
