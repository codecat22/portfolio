<script lang="ts">
	import collaborations from '../../../data/collaborations';
	const { img, authors, alt, title, description } = collaborations.connected;
</script>

<h2 class="design-title">{title}</h2>

<section class="design-main collaboration-content">
	<aside class="collaboration-aside">
		<img class="collaboration-image" src="/images/collaborations/{img}" {alt} />
		<p class="collaboration-authors">{authors}</p>
	</aside>
	<div class="collaboration-description">
        <p>
            {description}
        </p>
		<p>
			The gamification of learning and the strong visual element can help retain knowledge and keep
			the students' interest on the tasks at hand. The project is only a demo, but it still allows
			for building a basic circuit and exploring some tools. For more information see the project's
			<a
				target="blank"
				href="https://raaavioli.github.io/Connected/index.html"
				class="collaboration-file-link">page</a
			>.
		</p>
	</div>
</section>
