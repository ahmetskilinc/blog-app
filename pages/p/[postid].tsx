import axios from "axios";
import moment from "moment";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import config from "../../app.config";
import Categories from "../../components/Categories";
import Main from "../../layout/Main";
import { serialize } from "../../lib/serializeSlate";
import type { Category } from "../../types/Category";
import type { Post } from "../../types/Post";
import readingTime from "reading-time";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

type Props = { post: Post; categories: Category[]; posts: Post[] };

const Post: NextPage<Props> = ({ post, categories, posts }) => {
	const originalString = serialize(post.content)
		.map((i: any) => {
			return i.props.children[0].props.children;
		})
		.toString();

	return (
		<Main>
			<Head>
				<title>{`${post.title} | Ahmet's Blog`}</title>
			</Head>
			<h1 className="text-2xl lg:text-4xl font-bold my-8">{post.title}</h1>
			<div className="grid lg:grid-cols-post grid-cols-1 gap-4">
				<article className="max-w-none prose prose-stone prose-md dark:prose-invert">
					<p>
						{`Posted by ${post.author.name}, ${moment(
							post.publishedDate,
							"YYYYMMDD"
						).fromNow()} ${post.category ? "in " + post.category?.name : ""} `}
						<FontAwesomeIcon icon={faClock} /> {readingTime(originalString).text}
					</p>
					{serialize(post.content)}
				</article>
				<div className="flex flex-col gap-6 relative lg:sticky top-0 self-start">
					<Categories categories={categories} />
					<div>
						<h1 className="text-lg">More Posts</h1>
						<ul className="list-disc list-inside">
							{posts.length > 0 &&
								posts.map((post, i) => (
									<Link href={`/p/${[post.id]}`} key={i}>
										<a className="hover:underline">
											<li>{post.title}</li>
										</a>
									</Link>
								))}
						</ul>
					</div>
				</div>
			</div>
		</Main>
	);
};

export default Post;

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const post = (await axios.get(`${config.appUrl}/api/post?id=${context.query.postid}`)).data;
		const categories = (await axios.get(`${config.appUrl}/api/categories`)).data;
		const posts = (await axios.get(`${config.appUrl}/api/posts`)).data;

		return {
			props: {
				post,
				categories,
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
