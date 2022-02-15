import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte"],
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [imagetools()]
		},
	},
};

export default config;
