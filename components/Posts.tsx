import Link from "next/link";
import Tag from "../components/Tag";
import moment from "moment";
import type { Post } from "../types/Post";
import { useState } from "react";

type Props = { posts: Post[]; showSearch: boolean };

const Posts = ({ posts, showSearch }: Props) => {
	const [searchValue, setSearchValue] = useState("");
	const filteredBlogPosts = posts.filter((frontMatter) => {
		const searchContent = frontMatter.title + frontMatter.excerpt + frontMatter.tags.join(" ");
		return searchContent.toLowerCase().includes(searchValue.toLowerCase());
	});

	const displayPosts = posts.length > 0 && !searchValue ? posts : filteredBlogPosts;

	return (
		<>
			{showSearch && (
				<div className="relative max-w-lg mt-4">
					<input
						aria-label="Search articles"
						type="text"
						onChange={(e) => setSearchValue(e.target.value)}
						placeholder="Search articles"
						className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
					/>
					<svg
						className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</div>
			)}
			<ul>
				{!filteredBlogPosts.length && "No posts found."}
				{displayPosts.map((post) => {
					return (
						<li key={post.slug} className="py-4">
							<article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
								<dl>
									<dt className="sr-only">Published on</dt>
									<dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
										<time dateTime={post.publishedOn}>
											{moment(
												new Date(post.publishedOn),
												"YYYYMMDD"
											).fromNow()}
										</time>
									</dd>
								</dl>
								<div className="space-y-3 xl:col-span-3">
									<h3 className="text-2xl font-bold leading-8 tracking-tight">
										<Link
											href={`/posts/${post.slug}`}
											className="text-gray-900 dark:text-gray-100"
										>
											{post.title}
										</Link>
									</h3>
									<div className="flex flex-wrap">
										{post.tags.map((tag) => (
											<Tag key={tag} text={tag} />
										))}
									</div>
									<div className="prose max-w-none text-gray-500 dark:text-gray-400">
										{post.excerpt}
									</div>
								</div>
							</article>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Posts;
