import moment from "moment";
import React from "react";

type Props = {
	title: string;
	author: string;
	tags: string[];
	category: string;
	date?: string;
};

const PostHeader = ({ title, author, tags, category, date }: Props) => {
	return (
		<>
			<h1 className="text-2xl lg:text-4xl font-bold my-8 text-neutral-700 dark:text-neutral-200">
				{title}
			</h1>
			<p className="opacity-70 ">
				Posted
				{author ? ` by ${author}, ` : " "}
				{date && moment(new Date(date), "YYYYMMDD").fromNow()}
			</p>
		</>
	);
};

export default PostHeader;
