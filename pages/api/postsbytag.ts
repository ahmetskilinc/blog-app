import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import config from "../../app.config";
import type { Post } from "../../types/Post";
import qs from "qs";

const Posts = async (req: NextApiRequest, res: NextApiResponse<void | Post[]>) => {
	if (req.method === "GET") {
		const stringifiedQuery = qs.stringify(
			{
				where: {
					tags: {
						contains: req.query.name,
					},
				},
			},
			{ addQueryPrefix: true }
		);

		const posts = await axios({
			method: "GET",
			url: `${config.payloadEndpoint}/posts${stringifiedQuery}&sort=-publishedDate`,
		})
			.then((response) => {
				const data: Post[] = response.data.docs;
				return data;
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
