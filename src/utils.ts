export const setValue = (
	selector: string,
	value: string | number,
	{ parent = document as Document | HTMLElement } = {}
) => {
	const element = parent.querySelector(`[data-${selector}]`)!;
	element.textContent = value.toString();
};
