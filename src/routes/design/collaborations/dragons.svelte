<script lang="ts">
	import collaborations from '../../../data/collaborations';
	const { img, authors, alt, title, description } = collaborations.dragons;
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
			The player takes care of a dragon egg, which eventually hatches into a small pet dragon. If
			the dragon is fed and kept happy, eventually it learns to fly! For more photos and details
			check the project's
			<a
				target="blank"
				href="https://codecat22.github.io/dragon-site/"
				class="collaboration-file-link">page</a
			>.
		</p>
	</div>
</section>
