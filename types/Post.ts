export type Post = {
	id: string;
	title: string;
	author: {
		id: string;
		email: string;
		name: string;
	};
	publishedDate: any;
	category?: {
		id: string;
		name: string;
	};
	tags: {
		name: string;
	}[];
	content: any;
};
