<script context="module">
	export const load = async ({ url }) => ({
		props: {
			key: url
		}
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat&family=Lalezar&family=Open+Sans&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css?family=Cabin|Roboto:400,700|Roboto+Condensed:400,700"
		rel="stylesheet"
	/>
	<link href="https://fonts.googleapis.com/css?family=Merriweather|Muli:300" rel="stylesheet" />

	<link rel="stylesheet" href="/global.css" />
	<title>Portfolio - Siyana Ivanova</title>
</svelte:head>

<slot />
