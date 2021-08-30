const scrollOutside = (node: HTMLElement) => {
	const handleScroll = (event) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented)
			node.dispatchEvent(new CustomEvent('scroll-outside'));
	};

	document.addEventListener('scroll', handleScroll);

	return {
		destroy() {
			document.removeEventListener('scroll', handleScroll);
		}
	};
};

export default scrollOutside;
