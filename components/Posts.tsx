import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import type { Post } from "../types/Post";

type Props = { posts: Post[] };

const Posts = ({ posts }: Props) => {
	return (
		<>
			{posts.length > 0 ? (
				posts.map((post) => {
					return (
						<div
							className="my-11 text-neutral-600 dark:text-neutral-200"
							key={post.title}
						>
							<Link href={`/posts/${post.slug}`}>
								<a className="hover:underline">
									<h2 className="text-xl">{post.title}</h2>
								</a>
							</Link>
							{post.publishedOn && (
								<div className="flex flex-row gap-16 mb-1">
									<p className="text-sm text-neutral-500">
										<FontAwesomeIcon icon={faCalendarDays} />{" "}
										{moment(new Date(post.publishedOn), "YYYYMMDD").fromNow()}
									</p>
								</div>
							)}
							{post.excerpt && (
								<div>
									<p>{post.excerpt}</p>
								</div>
							)}
						</div>
					);
				})
			) : (
				<p>no posts</p>
			)}
		</>
	);
};

export default Posts;
