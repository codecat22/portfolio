<script lang="ts">
	import data from '$data/web-design';
	import placeholder from '$actions/placeholder';
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
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero, possimus consequatur
			quod ipsa enim odio asperiores iure expedita nam iste harum mollitia illo vero. Voluptates
			fugit at fuga neque?
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, quas deleniti porro minus
			provident, adipisci totam voluptatem iure aspernatur soluta doloribus, nihil et dolorum
			quaerat deserunt. Quas sit eaque tenetur!
		</p>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, perferendis ipsam
			numquam, veritatis repudiandae officia vel, magnam non magni expedita sapiente. Incidunt nihil
			necessitatibus praesentium! Ut sunt amet at assumenda!
		</p>
	</div>
</section>
