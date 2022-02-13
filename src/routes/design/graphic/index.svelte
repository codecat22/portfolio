<script lang="ts">
	import Sidebar from '$components/Sidebar.svelte';
</script>

<h2 class="design-title">Graphic Design</h2>

<section class="design-main">
	<h1>Coming Soon</h1>
</section>

<Sidebar
	links={[
		{ label: 'Web Design', href: '/design/web' },
		{ label: 'Collab', href: '/design/collaborations' },
		{ label: 'Visual Art', href: '/design/art' }
	]}
/>

<style>
	h1 {
		color: var(--white);
		display: grid;
		place-content: center;
		height: 60%;
	}
</style>
