import type { GetServerSideProps, NextPage } from "next";
import Posts from "../components/Posts";
import Main from "../layout/Main";
import axios from "axios";
import config from "../app.config";
import type { Post } from "../types/Post";
import type { Category } from "../types/Category";
import Categories from "../components/Categories";

type Props = {
	posts: Post[];
	categories: Category[];
};

const Home: NextPage<Props> = ({ posts, categories }) => {
	return (
		<Main>
			<div className="grid lg:grid-cols-post grid-cols-1 gap-4">
				<div>
					<Posts posts={posts} />
				</div>
				<div className="flex mt-11 flex-col gap-6 relative lg:sticky top-0 self-start">
					<Categories categories={categories} />
				</div>
			</div>
		</Main>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
	const posts = (await axios.get(`${config.appUrl}/api/posts?depth=3`)).data;
	const categories = (await axios.get(`${config.appUrl}/api/categories`)).data;

	return {
		props: {
			posts,
			categories,
		},
	};
};
