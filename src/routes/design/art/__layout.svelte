<script>
	import Sidebar from '$components/Sidebar.svelte';
</script>

<slot />

<Sidebar
	links={[
		{ label: 'Web Design', href: '/design' },
		{ label: 'Collab', href: '/design/collaborations' },
		{ label: 'Other Projects', href: '/design/other' }
	]}
/>
