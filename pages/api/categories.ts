import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import config from "../../app.config";
import type { Category } from "../../types/Category";

const Categories = async (req: NextApiRequest, res: NextApiResponse<Category[]>) => {
	if (req.method === "GET") {
		const categories = await axios({
			method: "GET",
			url: `${config.payloadEndpoint}/categories`,
		})
			.then((response) => {
				return response.data.docs;
			})
			.catch((error) => {
				console.error("Error: ", error);
			});
		res.statusCode = 200;
		res.json(categories);
		res.end();
	}

	res.statusCode = 405;
	res.end();
};

export default Categories;
