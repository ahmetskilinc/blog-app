import axios from "axios";
import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import config from "../app.config";
import EditThisPage from "../components/EditThisPage";
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
			const posts = await axios.get(`${config.appUrl}/api/posts?limit=3`);
			setPosts(posts.data);
		};

		fetchPosts();
	}, []);

	return (
		<div className="md:pb-20 pb-2" itemScope itemType="https://schema.org/Blog">
			<article
				className="my-4 max-w-none prose prose-neutral prose-md dark:prose-invert"
				itemProp="articleBody"
				itemScope
				itemType="https://schema.org/Text"
			>
				{children}
			</article>
			<EditThisPage />
			<MorePosts posts={posts} />
		</div>
	);
};

export default PostWrapper;
