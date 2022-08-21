import type { GetServerSideProps, NextPage } from "next";
import Posts from "../components/Posts";
import type { Post } from "../types/Post";
import { getPosts } from "../lib/getPosts";
import axios from "axios";
import config from "../app.config";

type Props = {
	posts: Post[];
};

const Home: NextPage<Props> = ({ posts }) => {
	return (
		<div>
			<Posts posts={posts} />
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
