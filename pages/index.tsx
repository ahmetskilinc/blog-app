import type { GetServerSideProps, NextPage } from "next";
import Posts from "../components/Posts";
import type { Post } from "../types/Post";
import { getPosts } from "../lib/getPosts";

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
		const posts = getPosts();

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
