<script lang="ts">
	import collaborations from '$data/collaborations';
	const { img, authors, alt } = collaborations.robot;
</script>

<h2 class="design-title">Furhat</h2>

<section class="design-main collaboration-content">
	<aside class="collaboration-aside">
		<img class="collaboration-image" src="/images/collaborations/{img}" {alt} />
		<p class="collaboration-authors">{authors}</p>
	</aside>
	<div class="collaboration-description">
		<p>
			Using the robot Furhat, we created an interactive cooking assistant/ instructor for beginner
			home cooks. Furhat walks users through recipes, allowing them to ask questions and revisit
			steps along the way.
		</p>
		<p>
			The project involved designing and implementing the interaction, then conducting an user
			evaluation with two groups of participants - one using the robot to cook, one not. Results
			showed that while the robot did not significantly improve efficiency, the users were engaged
			in the experience and often reported increased enjoyment.
		</p>
		<p>
			The report detailing our project and pilot study can be found <a
				target="blank"
				href="/static/data/collaborations/cloud/Workbook.pdf"
				class="collaboration-file-link">here</a
			>, and a video showing off the Furhat Instructor is available to watch
			<a
				target="blank"
				href="/static/data/collaborations/cloud/Workbook.pdf"
				class="collaboration-file-link">here</a
			>.
		</p>
	</div>
</section>
