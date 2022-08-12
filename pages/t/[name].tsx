import type { GetServerSideProps, NextPage } from "next";
import Posts from "../../components/Posts";
import Main from "../../layout/Main";
import axios from "axios";
import config from "../../app.config";
import type { Post } from "../../types/Post";
import type { Category } from "../../types/Category";
import Categories from "../../components/Categories";
import qs from "qs";
import { useRouter } from "next/router";

type Props = {
	posts: Post[];
	categories: Category[];
};

const PostsByCategory: NextPage<Props> = ({ posts, categories }) => {
	const router = useRouter();
	return (
		<Main>
			<>
				<h1 className="text-3xl font-bold">{`Posts tagged ${router.query.name}`}</h1>
				<div className="grid lg:grid-cols-post grid-cols-1 gap-4">
					<div>
						<Posts posts={posts} />
					</div>
					<div className="flex mt-11 flex-col gap-6 relative lg:sticky top-0 self-start">
						<Categories categories={categories} />
						<div className="h-52 w-full bg-slate-700">
							<p>I would like to serve uninvasive ads here</p>
						</div>
					</div>
				</div>
			</>
		</Main>
	);
};

export default PostsByCategory;

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const posts = (
			await axios.get(`${config.appUrl}/api/postsbytag?name=${context.query.name}`)
		).data;
		const categories = (await axios.get(`${config.appUrl}/api/categories`)).data;

		return {
			props: {
				posts,
				categories,
			},
		};
	} catch (error) {
		console.error("Error", error);
		return {
			notFound: true,
		};
	}
};
