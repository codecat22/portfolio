<script lang="ts">
	import collaborations from '$data/collaborations';
	const { img, authors, alt } = collaborations.map;
</script>

<h2 class="design-title">LotR Map</h2>

<section class="design-main collaboration-content">
	<aside class="collaboration-aside">
		<img class="collaboration-image" src="/images/collaborations/{img}" {alt} />
		<p class="collaboration-authors">{authors}</p>
	</aside>
	<div class="collaboration-description">
		<p>
			This project is a comprehensive, interactable, customizable Lord of the Rings map and
			timeline, which shows the journey of each member of the Fellowship of the Ring throughout the
			trilogy. It was created for the Information Visualization course. Among the most
			labour-intensive of the projects I’ve worked on, it required manual data collection from all
			three books.
		</p>
		<p>
			The process for completing the project involved working in a team on the design and
			functionality of the map, but also long hours on my own spent creating an extensive, detailed
			spreadsheet of characters, places, dates and events spanning the whole Lord of the Rings
			trilogy, which I reread and annotated for this purpose over the course of a month.
		</p>
		<p>
			The final product is something I am very proud of and very happy to have worked on with my
			group. At the time of writing, the There and Back Again map is still hosted and available to
			explore at <a
				target="blank"
				href="https://lotr-project.vercel.app/"
				class="collaboration-file-link">vercel</a
			>, while the dataset can be viewed
			<a
				target="blank"
				href="/static/data/collaborations/cloud/Workbook.pdf"
				class="collaboration-file-link">here</a
			>.
		</p>
	</div>
</section>
