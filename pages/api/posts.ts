import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import config from "../../app.config";
import type { Post } from "../../types/Post";

const Posts = async (req: NextApiRequest, res: NextApiResponse<Post[]>) => {
	if (req.method === "GET") {
		const posts = await axios({
			method: "GET",
			url: `${config.payloadEndpoint}/posts?sort=-publishedDate`,
		})
			.then((response) => {
				return response.data.docs;
			})
			.catch((error) => {
				console.error("Error: ", error);
			});
		res.statusCode = 200;
		res.json(posts);
		res.end();
	}

	res.statusCode = 405;
	res.end();
};

export default Posts;
