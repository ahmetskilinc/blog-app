import axios from "axios";
import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import MorePosts from "../components/MorePosts";
import { Post } from "../types/Post";

type Props = {
	children: ReactNode;
	posts: Post[];
};

const PostWrapper: FunctionComponent<Props> = ({ children }) => {
	const [posts, setPosts] = useState<Post[]>([] as Post[]);
	useEffect(() => {
		const fetchPosts = () => {
			axios.get(`${process.env.URL}/posts`).then((result) => setPosts(result.data));
		};
		fetchPosts();
	}, []);

	return (
		<>
			<article className="mt-6 max-w-none prose prose-stone prose-md dark:prose-invert">
				{children}
			</article>
			<MorePosts posts={posts} />
		</>
	);
};

export default PostWrapper;
