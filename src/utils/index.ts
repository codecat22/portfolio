export const deviceIsMobile = (): boolean =>
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

export const unique = (): string =>
	(Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();

export const makeTagsFromUrls = (urls: string[]): string[] => [
	...new Set(
		urls
			.map((it) =>
				it
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
