<script context="module">
	export const load = async ({ page }) => ({
		props: {
			key: page.path
		}
	});
</script>

<script lang="ts">
	import PageTransition from '../components/PageTransition.svelte';
	export let key;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat&family=Lalezar&family=Open+Sans&display=swap"
		rel="stylesheet"
	/>

	<link rel="stylesheet" href="/global.css" />
	<title>Catfolio</title>
</svelte:head>

<PageTransition refresh={key}>
	<slot />
</PageTransition>
