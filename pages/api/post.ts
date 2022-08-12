import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import config from "../../app.config";
import type { Post } from "../../types/Post";
import qs from "qs";

const Post = async (req: NextApiRequest, res: NextApiResponse<Post>) => {
	if (req.method === "GET") {
		const slug = req.query.slug as String;
		const stringifiedQuery = qs.stringify(
			{
				where: {
					slug: {
						equals: slug.replace("/", ""),
					},
				},
			},
			{ addQueryPrefix: true }
		);

		const post = await axios({
			method: "GET",
			url: `${config.payloadEndpoint}/posts/${stringifiedQuery}`,
		})
			.then((response) => {
				return response.data.docs[0];
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
