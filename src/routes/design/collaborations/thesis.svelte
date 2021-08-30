<script lang="ts">
	import collaborations from '$data/collaborations';
	const { img, authors, alt } = collaborations.thesis;
</script>

<h2 class="design-title">Thesis</h2>

<section class="design-main collaboration-content">
	<aside class="collaboration-aside">
		<img class="collaboration-image" src="/images/collaborations/{img}" {alt} />
		<p class="collaboration-authors">{authors}</p>
	</aside>
	<div class="collaboration-description">
		<p>
			My Bachelor’s thesis, in collaboration with Marin Karamihalev and under the supervision of dr
			inż. Rafał Jóźwiak, focuses on an automatic web system for downloading, processing, and
			visualizing precipitation data obtained via NASA’s Global Precipitation Measurement Mission.
			The system was developed for use by the Warsaw-based firm Satagro, which provides farmers with
			data useful in determining crop maintenance needs and predicting crop yields.
		</p>
		<p>
			The system's functionalities take into account the specific requirements of the agricultural
			community and enable more efficient use of global precipitation data on farmland through
			accessing and processing specific geospatial data over a given time period. PDPVWS provides
			extensive visualization options and simplifies the integration of processed data with
			forecasting models.
		</p>
		<p>
            The full text of the thesis is available <a
            target="blank"
            href="/static/data/collaborations/cloud/Workbook.pdf"
            class="collaboration-file-link">here</a>.
		</p>
	</div>
</section>
