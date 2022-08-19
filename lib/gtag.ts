import config from "../app.config";

declare global {
	interface Window {
		gtag: any;
	}
}

export const pageview = (url: any) => {
	window.gtag("config", config.gaId, {
		page_path: url,
	});
};

export const event = ({ action, category, label, value }: any) => {
	window.gtag("event", action, {
		event_category: category,
		event_label: label,
		value: value,
	});
};
