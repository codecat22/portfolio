<script>
	import Sidebar from '$components/Sidebar.svelte';
</script>

<slot />

<Sidebar
	links={[
		{ label: 'Web Design', href: '/design/web' },
		{ label: 'Collab', href: '/design/collaborations' },
		{ label: 'Graphic Design', href: '/design/graphic' }
	]}
/>
