export const deviceIsMobile = (): boolean =>
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

export const unique = (): string =>
	(Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();

export const makeTagsFromUrls = (urls: string[]): string[] => [
	...new Set(
		urls
			.map((it) =>
				it
					.replace(/\[.*\] /, '')
					.split('/')
					.pop()
					.split('.')[0]
					.split(',')
					.filter((v) => isNaN(parseInt(v)))
					.map((v) => v.trim())
			)
			.flat(1)
	)
];

export const getNamesFromUrls = (urls: string[]): string[] => [
	...new Set(
		urls
			.map((it) => {
				const split = it.split(/[[\]]/);
				return split.length === 3 ? split[1] : '[Unnamed]';
			})
			.flat(1)
	)
];

export const checkPlaceholder = (p: string): string =>
	p === '[placeholder]' ? '/images/placeholder-cat.jpg' : p;
