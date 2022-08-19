import Link from "next/link";
import moment from "moment";
import type { Post } from "../types/Post";

type Props = { posts: Post[] };

const MorePosts = ({ posts }: Props) => {
	return (
		<div className="mt-7">
			<h1 className="text-xl font-bold">Latest Posts:</h1>
			{posts.length > 0 ? (
				posts.map((post) => {
					return (
						<div className="my-3" key={post.title}>
							<Link href={`/posts/${post.slug}`}>
								<a className="hover:underline">
									<h2 className="text-md">{post.title}</h2>
								</a>
							</Link>
							<div className="flex flex-row gap-16">
								<p className="text-sm">
									{moment(new Date(post.publishedOn), "YYYYMMDD").fromNow()}
								</p>
							</div>
						</div>
					);
				})
			) : (
				<p>no posts</p>
			)}
		</div>
	);
};

export default MorePosts;
