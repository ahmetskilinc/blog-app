import Link from "next/link";
import Tag from "../components/Tag";
import moment from "moment";
import type { Post } from "../types/Post";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
				<div className="relative max-w-lg">
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
			<ul className="divide-y divide-gray-200 dark:divide-gray-700">
				{!filteredBlogPosts.length && "No posts found."}
				{displayPosts.map((post) => {
					const { publishedOn, excerpt, title, tags, slug } = post;
					return (
						<li key={slug} className="py-12">
							<article>
								<div className="space-y-2 lg:grid lg:grid-cols-4 lg:items-baseline lg:space-y-0">
									<dl>
										<dt className="sr-only">Published on</dt>
										<dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
											<time dateTime={publishedOn}>
												{moment(
													new Date(post.publishedOn),
													"YYYYMMDD"
												).fromNow()}
											</time>
										</dd>
									</dl>
									<div className="space-y-5 lg:col-span-3">
										<div className="space-y-6">
											<div>
												<h2 className="text-2xl font-bold leading-8 tracking-tight">
													<Link
														href={`/p/${slug}`}
														className="text-gray-900 dark:text-gray-100"
													>
														{title}
													</Link>
												</h2>
												<div className="flex flex-wrap">
													{tags.map((tag) => (
														<Tag key={tag} text={tag} />
													))}
												</div>
											</div>
											<div className="prose max-w-none text-gray-500 dark:text-gray-400">
												{excerpt}
											</div>
										</div>
										<div className="text-base font-medium leading-6">
											<Link
												href={`/blog/${slug}`}
												className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
												aria-label={`Read "${title}"`}
											>
												<a className="hover:underline flex items-center ml-0 gap-2">
													Read more{" "}
													<FontAwesomeIcon
														icon={faArrowRight}
														size="1x"
														className="mr-1 h-4"
													/>
												</a>
											</Link>
										</div>
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
