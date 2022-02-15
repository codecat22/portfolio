<script>
	import BackButton from '../components/BackButton.svelte';
	import contact from '../stores/contact';
</script>

<div style="height: {!$contact ? '0%' : '100%'}">
	<p><b>Email</b></p>
	<p>siyana.ivanova13@gmail.com</p>
	<p>siyanai@kth.se</p>

	<br />

	<p><b>Social media</b></p>
	<p>Instagram: <a href="https://www.instagram.com/kotbot94">@kotbot94</a></p>
	<p>LinkedIn: <a href="https://www.linkedin.com/in/siyana-ivanova-24b48b1a1">Siyana Ivanova</a></p>

	<br />

	<p><b>Resume</b></p>
	<p>Download <a href="/data/contact/Resume2022.pdf" target="blank">here</a></p>

	<BackButton class="back-button" on:click={() => contact.set(false)} />
</div>

<style>
	a {
		text-decoration: none;
		color: #7d8491;
	}

	div > :global(.back-button) {
		position: absolute;
		bottom: 2%;
		transform: rotate(180deg);
	}

	div {
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
	}

	p {
		max-width: 50ch;
		white-space: pre-line;
		text-align: center;
		color: var(--green);
		line-height: 1.15em;
		--val: 2.2vw;
	}

	br {
		margin: 1rem;
	}

	b {
		font-weight: 800 !important;
		font: inherit;
	}
</style>
