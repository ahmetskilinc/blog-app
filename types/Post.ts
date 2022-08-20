export type Post = {
	title: string;
	author: string;
	publishedOn: string;
	category?: string;
	tags: string[];
	content?: any;
	slug: string;
	excerpt?: string;
};
