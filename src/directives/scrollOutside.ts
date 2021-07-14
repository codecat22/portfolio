const scrollOutside = (node: HTMLElement) => {
	const handleClick = (event) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented)
			node.dispatchEvent(new CustomEvent('click-outside'));
	};

	document.addEventListener('scroll', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('scroll', handleClick, true);
		}
	};
};

export default scrollOutside;
