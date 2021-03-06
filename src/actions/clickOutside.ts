const clickOutside = (node: HTMLElement) => {
	const handleClick = (event) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented)
			node.dispatchEvent(new CustomEvent('click-outside'));
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
};

export default clickOutside;
