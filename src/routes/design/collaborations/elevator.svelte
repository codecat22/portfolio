<script lang="ts">
	import collaborations from '$data/collaborations';
	const { img, authors, alt } = collaborations.elevator;
</script>

<h2 class="design-title">Elevator</h2>

<section class="design-main collaboration-content">
	<aside class="collaboration-aside">
		<img class="collaboration-image" src="/images/collaborations/{img}" {alt} />
		<p class="collaboration-authors">{authors}</p>
	</aside>
	<div class="collaboration-description">
		<p>
			In this project we used Soma Design to create an elevator prototype for the Interaction Design
			as a Reflective Practice course, based on a brief provided by ManyOne. Soma Design practices
			focus on subjective bodily experiences and movements and the feelings and meaning they evoke
			or create; in our project, we focused on the somatic experience in the feet.
		</p>
		<p>
			The elevator design introduces two somatic interactions: first, a malleable floor which swells
			and sinks in the direction of the force as the elevator travels up/ down, making the user
			think about their balance; second, a shapeshifting material which responds to the pressure of
			feet onto it and becomes coarser or softer depending on how heavily one steps. Our aim was to
			make the experience of riding an elevator more interesting and create some less-than-expected
			somatic experiences for the users.
		</p>
		<p>
			A documentation of the process that led us to our final design and a detailed description of
			the prototype can be found in the <a
				target="blank"
				href="/static/data/collaborations/cloud/Workbook.pdf"
				class="collaboration-file-link">report</a
			>. The project also included a
			<a
				target="blank"
				href="/static/data/collaborations/cloud/Workbook.pdf"
				class="collaboration-file-link">video</a
			>.
		</p>
	</div>
</section>
