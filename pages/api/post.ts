import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import config from "../../app.config";
import type { Post } from "../../types/Post";

const Post = async (req: NextApiRequest, res: NextApiResponse<Post>) => {
	if (req.method === "GET") {
		const post = await axios({
			method: "GET",
			url: `${config.payloadEndpoint}/posts/${req.query.id}`,
		})
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				console.error("Error: ", error);
			});
		res.statusCode = 200;
		res.json(post);
		res.end();
	}

	res.statusCode = 405;
	res.end();
};

export default Post;
