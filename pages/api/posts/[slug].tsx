import type { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "../../../lib/getPosts";
import type { Post } from "../../../types/Post";

const Posts = async (req: NextApiRequest, res: NextApiResponse<Post[]>) => {
	const { limit } = req.query;
	if (req.method === "GET") {
		const posts = await getPosts(parseInt(limit as string))
			.then((response) => {
				return response;
			})
			.catch((error) => {
				console.error("Error: ", error);
			});
		res.statusCode = 200;
		res.json(posts as Post[]);
		res.end();
	}
	res.statusCode = 405;
	res.end();
};

export default Posts;
