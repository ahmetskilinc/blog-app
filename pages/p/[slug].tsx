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
import { Fragment } from "react";

type Props = { post: Post; categories: Category[]; posts: Post[] };

const PostHeader = ({ post }: { post: Post }) => {
	return (
		<>
			<h1 className="text-2xl lg:text-4xl font-bold my-8">{post.title}</h1>
			<p className="opacity-70">
				Posted
				{post.author ? (
					<>
						{` by `}
						<Link href={`/a/${post.author.name}`}>
							<a className="hover:underline">{post.author.name}</a>
						</Link>
						{", "}
					</>
				) : (
					" "
				)}
				{moment(post.publishedDate, "YYYYMMDD").fromNow()}
				{post.category && (
					<>
						{" in "}
						<Link href={`${post.category?.name}`}>
							<a className="hover:underline">{post.category?.name}</a>
						</Link>
					</>
				)}
			</p>
			{post.tags.length > 0 && (
				<p className="opacity-60">
					Tags:{" "}
					{post.tags.map((tag, i) => (
						<Fragment key={tag.name}>
							<Link href={`/t/${tag.name}`}>
								<a className="hover:underline">{tag.name}</a>
							</Link>
							{i === post.tags.length - 1 ? "" : ", "}
						</Fragment>
					))}
				</p>
			)}
		</>
	);
};

const Post: NextPage<Props> = ({ post, categories, posts }) => {
	return (
		<Main>
			<Head>
				<title>{`${post.title} | Ahmet's Blog`}</title>
			</Head>
			<PostHeader post={post} />
			<div className="grid lg:grid-cols-post grid-cols-1 gap-4 mt-4">
				<article className="max-w-none prose prose-stone prose-md dark:prose-invert">
					{serialize(post.content)}
				</article>
				<div className="flex flex-col gap-6 relative lg:sticky top-0 self-start">
					<Categories categories={categories} />
					<div>
						<h1 className="text-lg">More Posts</h1>
						<ul className="list-disc list-inside">
							{posts.length > 0 &&
								posts.map((post, i) => (
									<li key={i}>
										<Link href={`/p/${post.slug}`}>
											<a className="hover:underline opacity-70 hover:opacity-100">
												{post.title}
											</a>
										</Link>
									</li>
								))}
						</ul>
					</div>
					<div className="h-52 w-full bg-slate-700">
						<p>I would like to serve uninvasive ads here</p>
					</div>
				</div>
			</div>
		</Main>
	);
};

export default Post;

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const post = (await axios.get(`${config.appUrl}/api/post?slug=${context.query.slug}`)).data;
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
