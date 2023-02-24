<script lang="ts">
	import Contact from '../components/Contact.svelte';
	import contact from '../stores/contact';
</script>

<main>
	<aside>
		<h3 class="portfolio-title font-main">Interactive Portfolio</h3>
		<a href="/design" class="design-link">
			<h1 class="design-header font-header">Design</h1>
		</a>
	</aside>
	<aside>
		<h3 class="name-title font-main">Siyana M. Ivanova</h3>
		<a href="/writing" class="writing-link">
			<h1 class="writing-header font-header">Writing</h1>
		</a>
	</aside>
	<h2 class="font-main">Welcome! En<em>joy your stay.</em></h2>
	<button class="font-main" on:click={() => contact.set(true)}>Contact me</button>
	<Contact />
</main>

<style>
	button {
		text-decoration: none;
		color: var(--black);
		position: absolute;
		transform: translate(-50%, -50%);
		left: 50%;
		bottom: 1%;
		background-color: var(--anti-flash-white);
		box-shadow: 0px 2px 3px 0px #0a0a0a80;
		border-radius: 25px;
		border: none;
		--min: 0.8em;
		--val: 1.5vw;
		--max: 3em;
		cursor: pointer;
		font-weight: 300;
		/* padding: 0.5em; */
		padding: 0.5em;
		padding-left: 1em;
		padding-right: 1em;
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
		/* background-color: var(--liberty); */
		background-color: var(--space-cadet);
		position: relative;
		display: flex;
		flex-direction: column;
	}

	aside:last-of-type {
		width: 49.8%;
		background-color: var(--white);
		position: relative;
	}

	.design-header {
		color: var(--white);
		flex: 1;
		position: absolute;
		left: 33%;
		top: 20%;
		transform: translate(-50%, -50%);
		font-family: 'Satisfy', cursive;
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
		color: black;
		position: absolute;
		left: 63%;
		top: 80%;
		transform: translate(-50%, -50%);
		font-family: 'Satisfy', cursive;
	}

	.portfolio-title {
		margin-top: 0.2rem;
		color: var(--white);
		text-align: end;
		margin-right: 2rem;
	}

	.name-title {
		margin-top: 0.2rem;
		margin-left: 2rem;
		color: black;
	}

	h2 {
		text-align: center;
		color: var(--white);
		position: absolute;
		top: 50%;
		left: 50.4%;
		transform: translate(-50%, -50%);
		pointer-events: none;
		width: 25ch;
		font-weight: 400;
		--val: 2.8vw;
	}

	h2 > em {
		color: var(--black);
		font-size: inherit;
	}

	h3 {
		font-weight: 300;
		--val: 1.3vw;
	}
</style>
