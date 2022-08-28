import type { GetServerSideProps, NextPage } from "next";
import Posts from "../components/Posts";
import type { Post } from "../types/Post";
import axios from "axios";
import config from "../app.config";

type Props = {
	posts: Post[];
};

const Home: NextPage<Props> = ({ posts }) => {
	return (
		<div>
			<div className="space-x-2 pt-6 pb-4">
				<h1 className="text-3xl font-extrabold text-neutral-700 dark:text-neutral-200">
					Latest Posts
				</h1>
			</div>
			<Posts posts={posts} showSearch={true} />
		</div>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const posts = await axios.get(`${config.appUrl}/api/posts`).then((result) => {
			const sortedPosts = result.data.sort((a: Post, b: Post) => {
				return new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime();
			});
			return sortedPosts;
		});

		return {
			props: {
				posts,
			},
		};
	} catch (error) {
		console.error("Error", error);
		return {
			notFound: true,
		};
	}
};
