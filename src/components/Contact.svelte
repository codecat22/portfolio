<script>
	import BackButton from '../components/BackButton.svelte';
	import contact from '../stores/contact';
</script>

<div class:up={$contact}>
	<p><b>Email</b></p>
	<p>siyana.ivanova13@gmail.com</p>
	<p class="space-bottom">siyanai@kth.se</p>

	<p><b>Social media</b></p>
	<p>Instagram: <a href="https://www.instagram.com/kotbot94">@kotbot94</a></p>
	<p class="space-bottom">
		LinkedIn: <a href="https://www.linkedin.com/in/siyana-ivanova-24b48b1a1">Siyana Ivanova</a>
	</p>

	<p><b>Resume</b></p>
	<p>Download <a href="/data/contact/Resume2022.pdf" target="blank">here</a></p>

	<BackButton class="back-button" on:click={() => contact.set(false)} />
</div>

<style>
	.up {
		height: 100%;
	}

	.space-bottom {
		margin-bottom: 3rem;
	}

	a {
		text-decoration: none;
		color: var(--liberty);
		--val: 1.2vw;
		font-family: var(--font-main);
	}

	div > :global(.back-button) {
		--val: 1.8vw;
		position: absolute;
		bottom: 2%;
		transform: rotate(180deg);
		font-family: var(--font-main);
	}

	div {
		--val: 1.8vw;
		height: 0%;
		display: flex;
		flex-direction: column;
		background-color: var(--white);
		color: var(--black);
		justify-content: center;
		align-items: center;
		width: 100%;
		position: fixed;
		transition: all 0.5s ease-in;
		z-index: 101;
		overflow-y: hidden;
		top: 0;
		left: 0;
		font-family: var(--font-main);
		gap: 0.5rem;
	}

	p {
		max-width: 50ch;
		white-space: pre-line;
		text-align: center;
		color: var(--bud-green);
		line-height: 1.15em;
		font-family: var(--font-main);
		--val: 1.8vw;
	}

	b {
		/* font-weight: 600 !important; */
		font-style: normal;
		font-size: 25px;
		font-family: var(--font-header);
	}
</style>
