<script lang="ts">
	import collaborations from '$data/collaborations';
	const { img, authors, alt } = collaborations.transfer;
</script>

<h2 class="design-title">Transfer</h2>

<section class="design-main collaboration-content">
	<aside class="collaboration-aside">
		<img class="collaboration-image" src="/images/collaborations/{img}" {alt} />
		<p class="collaboration-authors">{authors}</p>
	</aside>
	<div class="collaboration-description">
		<p>
			This project, created for the Machine Learning Workshop course, is a program which performs
			style transfer from one image to another: in simple terms, it takes two images as input - one
			from which the style will be extracted and one to which it will be applied - and outputs a
			filtered version of the content image, changed to emulate the chosen style. The algorithm is
			largely based on a 2015 paper called “A Neural Algorithm of Artistic Style” by Gatys, Ecker,
			and Bethge.
		</p>
		<p>
			We used the methods described in Gatys’ paper to achieve style transfer from one input image
			to another. The creation of the output image required finding a good match between the content
			of the first input image (in our case a photograph) and the style of the second image (in our
			case a piece of art). In the result, the arrangement of objects in the photograph remains the
			same, but colours and local detail are determined by the style image; visually, the stylistic
			appearance of an input artwork is applied to any input photograph. For more details, please
			refer to the <a
				target="blank"
				href="/static/data/collaborations/cloud/Workbook.pdf"
				class="collaboration-file-link">paper</a
			> that resulted from this project.
		</p>
	</div>
</section>
