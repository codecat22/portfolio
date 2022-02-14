<script lang="ts">
	import data from '$data/web-design';
	import placeholder from '$actions/placeholder';
	const { pageImages, title } = data.find((t) => t.title === 'Trebel 2021');
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
			I returned to Trebel in 2021 to design an updated version of their website after the company
			expanded its reach. My responsibilities included UI/UX design, branding, web/ graphic design
			of the new site, and some copywriting.
		</p>
		<p>
			There were a lot of changes implemented in the reworking of the Trebel16 design. The website
			became much larger and more complex, including a variety of new sections and elements. I
			worked closely with the programmer who is building the website (a process that is still
			ongoing).
		</p>
		<p>
			Challenges of a commercial website include the need to present the company's catalogue, which
			comes in many different forms such as photos, downloadable files, and video materials, in a
			clear and compelling way. It is also important to maintain a consistent and distinct feel/
			branding throughout.
		</p>
		<p>The company is planning to launch the new website later in 2022.</p>
	</div>
</section>
