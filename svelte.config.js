import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: [
					{ find: '$components', replacement: resolve('./src/components') },
					{ find: '$stores'    , replacement: resolve('./src/stores')     },
					{ find: '$actions'   , replacement: resolve('./src/actions')    },
					{ find: '$data'      , replacement: resolve('./src/data')       },
					{ find: '$utils'     , replacement: resolve('./src/utils')      }  
				]
			}
		}
	}
};

export default config;
