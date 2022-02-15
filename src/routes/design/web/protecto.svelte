<script lang="ts">
	import data from '../../../data/web-design';
	import placeholder from '../../../actions/placeholder';
	const { pageImages, title } = data.find((t) => t.title === 'Protecto');
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
			In this project, I designed a full website for an innovative security product pending patent.
			Tasks included UI/UX design, graphic design e.g. icons, branding, web design. I worked closely
			with a programmer who was implementing the design and provided assistance with CSS.
		</p>
		<p>
			The main goal of the product is for the user to be able to securely store and share personal
			files such as documents, photos, or audio. The unique feature of this project (not shown in
			the example pictures due to its proprietary nature) is a complex login form with a highly
			personalised visual key.
		</p>
		<p>
			This design was highly guided by the client's requirements at every step, although there was
			some space for creativity when designing some parts of the layout, the icons, and other
			graphical elements.
		</p>
	</div>
</section>
