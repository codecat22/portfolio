<script lang="ts">
	import Contact from '../components/Contact.svelte';
	import contact from '../stores/contact';
</script>

<main>
	<aside>
		<h3 class="portfolio-title">Interactive Portfolio</h3>
		<a href="/design" class="design-link">
			<h1 class="design-header">Design</h1>
		</a>
	</aside>
	<aside>
		<h3 class="name-title">inz. Siyana Ivanova</h3>
		<a href="/writing" class="writing-link">
			<h1 class="writing-header">Writing</h1>
		</a>
	</aside>
	<h2>Welcome! En<em>joy your stay.</em></h2>
	<button on:click={() => contact.set(true)}>Contact me</button>
	<Contact />
</main>

<style>
	button {
		text-decoration: none;
		color: var(--white);
		position: absolute;
		transform: translate(-50%, -50%);
		left: 50%;
		bottom: 0;
		background-color: var(--green);
		box-shadow: 0px 2px 3px 0px #0a0a0a80;
		border-radius: 15px;
		border: none;
		--min: 1.2em;
		--val: 1.9vw;
		--max: 3em;
		padding: 0.1em 0.3em 0.1em 0.3em;
		cursor: pointer;
	}

	button:hover {
		transform: translate(-50%, -50%) scale(1.03);
	}

	main {
		overflow: hidden;
		min-height: 100vh;
		display: flex;
		position: relative;
	}

	aside {
		width: 50.2%;
		background-color: var(--brown);
		position: relative;
		display: flex;
		flex-direction: column;
	}

	aside:last-of-type {
		width: 49.8%;
		background-color: var(--yellow);
		position: relative;
	}

	.design-header {
		color: var(--white);
		flex: 1;
		position: absolute;
		left: 33%;
		top: 20%;
		transform: translate(-50%, -50%);
	}

	.writing-link {
		height: 100%;
		text-decoration: none;
		width: 60%;
		margin-left: auto;
		cursor: pointer;
	}

	.design-link {
		height: 100%;
		text-decoration: none;
		width: 60%;
		margin-right: auto;
		cursor: pointer;
	}

	.writing-header {
		color: var(--black);
		position: absolute;
		left: 63%;
		top: 80%;
		transform: translate(-50%, -50%);
	}

	.portfolio-title {
		margin-top: 0.2rem;
		color: var(--yellow);
		text-align: end;
		margin-right: 2rem;
	}

	.name-title {
		margin-top: 0.2rem;
		margin-left: 2rem;
		color: var(--brown);
	}

	h2 {
		text-align: center;
		color: var(--white);
		text-shadow: 1px 2px 3px rgba(10, 10, 10, 0.75);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		pointer-events: none;
		width: 25ch;
		/* width: min-content; */
	}

	h2 > em {
		color: var(--black);
		font-size: inherit;
		text-shadow: 1px 2px 3px rgba(10, 10, 10, 0.25);
	}
</style>
