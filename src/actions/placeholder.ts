const defaultPath = '/images/placeholder-cat.jpg';
const defaultAlt = 'Default placeholder image';

const placeholder = (node: HTMLElement, path?: string) => {
	const src = node.getAttribute('src');
	node.setAttribute('src', src === '[placeholder]' ? path || defaultPath : src);
	node.setAttribute('alt', src === '[placeholder]' ? defaultAlt : node.getAttribute("alt"));
	return {};
};

export default placeholder;
