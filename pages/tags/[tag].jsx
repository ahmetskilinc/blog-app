import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Posts from "../../components/Posts";
import getPosts from "../../lib/getPosts";
import getTags from "../../lib/getTags";
import kebabCase from "../../lib/utils/kebabCase";

export async function getStaticPaths() {
	const tags = await getTags();

	return {
		paths: Object.keys(tags).map((tag) => ({
			params: {
				tag,
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const allPosts = await getPosts();
	const filteredPosts = allPosts.filter(
		(post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(params.tag)
	);

	return { props: { posts: filteredPosts, tag: params.tag } };
}

export default function Tag({ posts, tag }) {
	// Capitalize first letter and convert space to dash
	const title = tag[0].toUpperCase() + tag.split(" ").join("-").slice(1);
	return (
		<>
			<div className="space-y-2 pt-6 pb-4 md:space-y-5">
				<h1 className="text-3xl font-extrabold text-neutral-700 dark:text-neutral-200">
					{title}
				</h1>
				<Link href="/tags">
					<a className="hover:underline flex items-center ml-0 gap-2">
						<FontAwesomeIcon icon={faArrowLeft} size="1x" className="ml-1 h-4" />
						Back to tags
					</a>
				</Link>
			</div>
			<Posts posts={posts} />
		</>
	);
}
