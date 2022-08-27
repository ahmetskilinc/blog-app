import fs from "fs";
import path from "path";
import matter from "gray-matter";
import kebabCase from "./utils/kebabCase";

const getTags = async () => {
	const files = fs.readdirSync(path.join(process.cwd(), "pages", "posts"), {
		withFileTypes: true,
	});

	let tagCount = {};

	files.forEach((file) => {
		const source = fs.readFileSync(
			path.join(process.cwd(), "pages", "posts", file.name),
			"utf-8"
		);
		const { data } = matter(source);
		if (data.tags && data.draft !== true) {
			data.tags.forEach((tag) => {
				const formattedTag = kebabCase(tag);
				if (formattedTag in tagCount) {
					tagCount[formattedTag] += 1;
				} else {
					tagCount[formattedTag] = 1;
				}
			});
		}
	});

	return tagCount;
};

export default getTags;
