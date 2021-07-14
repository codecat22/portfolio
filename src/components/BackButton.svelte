<nav class={$$props.class} on:click>
	<div />
</nav>

<style>
	nav {
		width: 100%;
		height: 2rem;
		display: flex;
		justify-content: center;
		cursor: pointer;
	}

	div {
		width: 1rem;
		height: 1rem;
		border-bottom: solid var(--arrow-color, var(--black)) 3px;
		border-right: solid var(--arrow-color, var(--black)) 3px;
		transform: rotate(45deg);
		cursor: pointer;
	}

	nav:hover > div {
		transform: rotate(45deg) scale(1.1);
	}
</style>
