import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import type { Post } from "../types/Post";
import { serialize } from "../lib/serializeSlate";
import readingTime from "reading-time";

type Props = { posts: Post[] };

const Posts = ({ posts }: Props) => {
	return (
		<>
			{posts.length > 0 ? (
				posts.map((post) => {
					const originalString = serialize(post.content)
						.map((i: any) => {
							return i.props.children[0].props.children;
						})
						.toString();
					return (
						<div className="my-11 flex flex-col" key={post.id}>
							<Link href={`/p/${[post.id]}`}>
								<a className="hover:underline">
									<h2 className="text-xl">{post.title}</h2>
								</a>
							</Link>
							<div className="flex flex-row gap-16">
								<p className="text-sm">
									<FontAwesomeIcon icon={faCalendarDays} />{" "}
									{moment(post.publishedDate, "YYYYMMDD").fromNow()}
								</p>
								<p className="text-sm">
									<FontAwesomeIcon icon={faClock} />{" "}
									{readingTime(originalString).text}
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
