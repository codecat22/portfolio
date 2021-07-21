<script lang="ts">
	import { slide } from 'svelte/transition';

	export let filter: FilterOptions = 'featured';
	export let tags: string[] = [];
	export let selectedTags: string[] = [];

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
			on:click={() => (filter = 'tags')}
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
	{#if filter === 'tags'}
		<div class="tags" transition:slide>
			{#each tags.sort() as tag}
				<button class="tag" class:selected={selectedTags.includes(tag)} on:click={() => handleTagClick(tag)}>{tag}</button>
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
		font-family: 'Open Sans', sans-serif;
		font-weight: 300;
		background: transparent;
		color: var(--light-gray);
		border: none;
		cursor: pointer;
	}

	.tag.selected {
		color: var(--pink);
	}

	.filters-bar {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 1em;
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
		background-color: var(--white);
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
		color: var(--white);
		font-family: 'Open Sans', sans-serif;
		font-size: 0.9em;
	}
</style>
