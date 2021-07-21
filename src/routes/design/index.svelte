<script lang="ts">
	import Sidebar from '../../components/Sidebar.svelte';
</script>

<h3 class="design-title">Web Design</h3>
<section class="design-main" />

<Sidebar
	links={[
		{ label: 'Visual Art', href: '/design/art' },
		{ label: 'Collab', href: '/design/collaborations' },
		{ label: 'Other Projects', href: '/design/other' }
	]}
/>
