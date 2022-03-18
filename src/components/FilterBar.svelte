<script lang="ts">
	import { slide } from 'svelte/transition';

	export let filter: FilterOptions = 'featured';
	export let tags: string[] = [];
	export let selectedTags: string[] = [];

	let tagsClicked = false;
	$: if (filter !== 'tags') tagsClicked = false;
	$: showTags = filter === 'tags' && tagsClicked === true;

	const handleTagClick = (tag: string) => {
		if (selectedTags.includes(tag)) selectedTags = selectedTags.filter((t) => t !== tag);
		else selectedTags = [...selectedTags, tag];
	};
</script>

<div class="filters-bar design-title">
	<div class="filters">
		<button
			class="filter"
			class:selected-filter={filter === 'featured'}
			on:click={() => (filter = 'featured')}
		>
			<p class="filter-label">Featured</p>
		</button>
		<button
			class="filter"
			class:selected-filter={filter === 'tags'}
			on:click={() => {
				filter = 'tags';
				tagsClicked = !tagsClicked;
			}}
		>
			<p class="filter-label">Tags</p>
		</button>
		<button
			class="filter"
			class:selected-filter={filter === 'all'}
			on:click={() => (filter = 'all')}
		>
			<p class="filter-label">All</p>
		</button>
	</div>
	{#if showTags}
		<div class="tags" transition:slide>
			{#each tags.sort() as tag}
				<button
					class="tag"
					class:selected={selectedTags.includes(tag)}
					on:click={() => handleTagClick(tag)}>{tag}</button
				>
			{/each}
		</div>
	{/if}
</div>

<style>
	.tags {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: center;
		margin-top: 2em;
	}

	.tag {
		margin: 0 1ch 1ch 1ch;
		font-family: var(--font-main);
		font-size: 1em;
		background: transparent;
		color: white;
		border: none;
		cursor: pointer;
	}

	.tag.selected {
		color: var(--sea-green);
	}

	.filters-bar {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 1em;
		padding-left: 3%;
		padding-right: 3%;
	}

	.filters {
		display: flex;
		flex-flow: row wrap;
		justify-self: center;
	}

	.filter::after {
		display: block;
		content: '';
		width: 100%;
		height: 1px;
		right: 0.009em;
		top: 105%;
		position: absolute;
		background-color: transparent;
		transition: all 0.2s ease;
		transform: scaleX(0);
	}

	.filter.selected-filter::after {
		background-color: white;
		transform: scaleX(1);
	}

	.filter {
		position: relative;
		cursor: pointer;
		border: none;
		background: transparent;
		transition: all 0.1s ease;
	}

	.filter:first-child {
		margin-right: 4em;
	}

	.filter:last-child {
		margin-left: 4em;
	}

	.filter-label {
		color: white;
		font-family: var(--font-header);
		font-size: 1em;
	}
</style>
