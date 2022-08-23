import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "../types/Post";

export const getPosts = async (limit?: number) => {
	const dirFiles = fs.readdirSync(path.join(process.cwd(), "pages", "posts"), {
		withFileTypes: true,
	});

	const posts = dirFiles
		.map((file) => {
			if (!file.name.endsWith(".mdx")) return;

			const fileContent = fs.readFileSync(
				path.join(process.cwd(), "pages", "posts", file.name),
				"utf-8"
			);
			const { data } = matter(fileContent);

			const slug = file.name.replace(/.mdx$/, "");
			return {
				title: data.title,
				category: data.category,
				publishedOn: data.publishedOn,
				tags: data.tags,
				slug,
				excerpt: data.excerpt,
			};
		})
		.filter((post) => post);

	if (limit) {
		return posts
			.sort((a: any, b: any) => {
				return new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime();
			})
			.splice(0, 3) as any as Post[];
	}

	return posts as any as Post[];
};
