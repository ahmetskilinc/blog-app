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
						<div className="my-11" key={post.title}>
							<Link href={`/posts/${post.slug}`}>
								<a className="hover:underline">
									<h2 className="text-xl">{post.title}</h2>
								</a>
							</Link>
							<div className="flex flex-row gap-16">
								<p className="text-sm">
									<FontAwesomeIcon icon={faCalendarDays} />{" "}
									{moment(new Date(post.publishedOn), "YYYYMMDD").fromNow()}
								</p>
							</div>
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
