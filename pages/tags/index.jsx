import getTags from "../../lib/getTags";
import kebabCase from "../../lib/utils/kebabCase";
import Link from "next/link";

export async function getStaticProps() {
	const tags = await getTags();
	return { props: { tags } };
}

export default function Tags({ tags }) {
	const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
	return (
		<>
			<div>
				<div className="space-x-2 pt-6 pb-8 md:space-y-5">
					<h1 className="text-3xl font-extrabold text-neutral-700 dark:text-neutral-200">
						Tags
					</h1>
				</div>
				<div className="flex flex-wrap">
					{Object.keys(tags).length === 0 && "No tags found."}
					{sortedTags.map((t) => {
						return (
							<div key={t} className="mt-2 mb-2 mr-5 flex ">
								<Link
									href={`/tags/${kebabCase(t)}`}
									className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
								>
									<a>
										<p className="uppercase">
											{t} {` (${tags[t]})`}
										</p>
									</a>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
