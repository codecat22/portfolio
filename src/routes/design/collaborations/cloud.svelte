<script lang="ts">
	import collaborations from '../../../data/collaborations';
	const { img, authors, alt, title } = collaborations.cloud;
</script>

<h2 class="design-title">{title}</h2>

<section class="design-main collaboration-content">
	<aside class="collaboration-aside">
		<img class="collaboration-image" src="/images/collaborations/{img}" {alt} />
		<p class="collaboration-authors">{authors}</p>
	</aside>
	<div class="collaboration-description">
		<p>
			The Cloud is a productivity and life-balance aid we designed as part of the Media Technology
			and Interaction Design course. It alters the ambiance of a room in accordance with one’s
			schedule, and so facilitates healthy routines during lockdown.
		</p>
		<p>
			The idea for The Cloud took shape following a series of target group interviews, which showed
			that the 2020 lockdowns were having an adverse effect on young people’s ability to strike a
			good work/study/life balance. Many of the potential users wished that they could both bring
			some structure to the different activities now happening within the same space and feel more
			connected to friends and colleagues online. These are the main issues we tried to address with
			our design.
		</p>
		<p>
			“Cloud Connected” was the first larger project I worked on at KTH. It was developed in
			accordance with the Double Diamond model, resulting in a prototype and a <a
				target="blank"
				href="/data/collaborations/cloud/Workbook.pdf"
				class="collaboration-file-link">workbook</a
			>. Work on The Cloud involved user research, focus and brainstorming sessions, sketching and
			prototyping, and finally, presenting a finished design.
		</p>
	</div>
</section>
