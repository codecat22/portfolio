<script lang="ts">
	import collaborations from '$data/collaborations';
	const { img, authors, alt } = collaborations.yunak;
</script>

<h2 class="design-title">Yunak</h2>

<section class="design-main collaboration-content">
	<aside class="collaboration-aside">
		<img class="collaboration-image" src="/images/collaborations/{img}" {alt} />
		<p class="collaboration-authors">{authors}</p>
	</aside>
	<div class="collaboration-description">
		<p>
			<a
				target="blank"
				href="/static/data/collaborations/cloud/Workbook.pdf"
				class="collaboration-file-link">Yunak</a
			> is a 2D puzzle game demo based on Bulgarian folk tales, created for the Computer Game Design
			course. The demo consists of snakes-and-ladders style puzzles and multipath dialogue scenes, introducing
			the player to various folklore creatures and leading to one of three possible endings.
		</p>
		<p>
			Yunak (which means “Hero” in Bulgarian) is targeted at people who love puzzle games,
			interactive fiction, story-centric games, and single-player gaming experiences. The story,
			central to the game’s concept, revolves around the Bulgarian folk tale trope of “travelling
			through nine mountains to a tenth” to achieve a goal or fulfill a purpose. In each “mountain”
			the player meets the beings that inhabit the Balkan folkloric imagination.
		</p>
		<p>
			In this project, I was responsible for creating the characters, the story, the <a
				target="blank"
				href="/static/data/collaborations/cloud/Workbook.pdf"
				class="collaboration-file-link">script</a
			>
			for the demo including a limited soundtrack, and a
			<a
				target="blank"
				href="/static/data/collaborations/cloud/Workbook.pdf"
				class="collaboration-file-link">reference encyclopedia</a
			>
			for the monsters, people, and items involved in the narrative. The full demo can be found at
			<a target="blank" href="https://yunakteam.itch.io/yunak" class="collaboration-file-link"
				>yunak</a
			>, and a documentation of the creative process for the story and characters is available
			<a
				target="blank"
				href="/static/data/collaborations/cloud/Workbook.pdf"
				class="collaboration-file-link">here</a
			>.
		</p>
	</div>
</section>
