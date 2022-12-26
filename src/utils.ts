import { ICON_MAP } from "./iconMap";

export const setValue = (
	selector: string,
	value: string | number,
	{ parent = document as Document | HTMLElement } = {}
) => {
	const element = parent.querySelector(`[data-${selector}]`)!;
	element.textContent = value.toString();
};

export const getIconUrl = (iconCode: number) => {
	return `icons/${ICON_MAP.get(iconCode)}.svg` || "";
};

export const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, {
	weekday: "long",
});

export const HOUR_FORMATTER = new Intl.DateTimeFormat(undefined, {
	hour: "numeric",
});
