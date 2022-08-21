import axios from "axios";
import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import config from "../app.config";
import MorePosts from "../components/MorePosts";
import { Post } from "../types/Post";

type Props = {
	children: ReactNode;
	posts: Post[];
};

const PostWrapper: FunctionComponent<Props> = ({ children }) => {
	const [posts, setPosts] = useState<Post[]>([] as Post[]);
	useEffect(() => {
		const fetchPosts = async () => {
			const posts = await axios.get(`${config.appUrl}/api/posts`);
			setPosts(
				posts.data.sort((a: Post, b: Post) => {
					return new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime();
				})
			);
		};

		fetchPosts();
	}, []);

	return (
		<div className="md:pb-20 pb-2">
			<article className="my-10 max-w-none prose prose-neutral prose-md dark:prose-invert">
				{children}
			</article>
			<MorePosts posts={posts} />
		</div>
	);
};

export default PostWrapper;
