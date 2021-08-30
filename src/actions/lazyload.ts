import viewport from "./viewport";

export default function lazyload(node, src) {
  const viewportActions = viewport(node);
  
	function onIntersect(entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				node.setAttribute('src', src);
			}
		});
	}

	observer.observe(node);
	return {
		destroy() {
			observer && observer.unobserve(node);
		}
	};
}
