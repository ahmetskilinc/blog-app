export type Post = {
	data: {
		title: string;
		author: string;
		publishedOn: any;
		category?: string;
		tags: string[];
	};
	content: any;
	slug: string;
};
