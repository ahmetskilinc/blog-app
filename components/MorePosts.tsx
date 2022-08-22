import Link from "next/link";
import moment from "moment";
import type { Post } from "../types/Post";

type Props = { posts: Post[] };

const MorePosts = ({ posts }: Props) => {
	return (
		<div className="mt-7">
			<h1 className="text-xl font-bold">More Posts:</h1>
			<div className="grid grid-rows-3 grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 gap-1 lg:gap-8">
				{posts.length > 0 ? (
					posts.map((post) => {
						return (
							<Link href={`/posts/${post.slug}`} key={post.title}>
								<a className="hover:underline my-3  bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 hover:dark:bg-neutral-900 rounded-lg p-6 flex flex-col gap-3">
									<h2 className="text-md">{post.title}</h2>
									{post.publishedOn && (
										<div className="flex flex-row gap-16">
											<p className="text-sm">
												{moment(
													new Date(post.publishedOn),
													"YYYYMMDD"
												).fromNow()}
											</p>
										</div>
									)}
								</a>
							</Link>
						);
					})
				) : (
					<p>no posts</p>
				)}
			</div>
		</div>
	);
};

export default MorePosts;
