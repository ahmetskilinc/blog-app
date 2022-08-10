import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import config from "../../app.config";
import type { Post } from "../../types/Post";
import qs from "qs";

const Posts = async (req: NextApiRequest, res: NextApiResponse<Post[]>) => {
	if (req.method === "GET") {
		const stringifiedQuery = qs.stringify(
			{
				where: {
					author: {
						name: {
							equals: req.query.name,
						},
					},
				},
			},
			{ addQueryPrefix: true }
		);

		console.log(`${config.payloadEndpoint}/posts${stringifiedQuery}`);

		const posts = await axios({
			method: "GET",
			url: `${config.payloadEndpoint}/posts${stringifiedQuery}`,
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
