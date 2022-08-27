import moment from "moment";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";
import config from "../app.config";

type Props = {
	title: string;
	author: string;
	tags: string[];
	category: string;
	date?: string;
	excerpt?: string;
};

const PostHeader = ({ title, author, tags, category, date, excerpt }: Props) => {
	const router = useRouter();
	return (
		<>
			<Head>
				{/* Other Meta */}
				<title>{`${title} | Ahmet's Blog`}</title>
				<meta name="keywords" content={`${title}, ${tags}`} />
				<meta name="description" content={excerpt} />

				{/* OG Tags */}
				<meta property="og:url" content={`${config.appUrl}${router.pathname}`} />
				<meta property="og:title" content={`${title} | Ahmet's Blog`} />
				<meta property="og:description" content={excerpt} />
				<meta property="og:type" content="article" />

				{/* Twitter Tags */}
				<meta property="twitter:url" content={`${config.appUrl}${router.pathname}`} />
				<meta property="twitter:card" content="summary" />
				<meta property="twitter:title" content={`${title} | Ahmet's Blog`} />
				<meta property="twitter:description" content={excerpt} />
			</Head>

			<Script
				id="add-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: `{
							"@context": "https://schema.org",
							"@type": "BlogPosting",
							"headline": "${title}",
							"datePublished": "${new Date(date!)}",
							"dateModified": "${new Date(date!)}",
							"author": [{
								"@type": "Person",
								"name": "${author}",
								"url": "https://ahmetk.dev/"
							}]
						}`,
				}}
			/>

			<h1
				className="text-2xl lg:text-4xl font-bold mt-8 mb-2 text-neutral-700 dark:text-neutral-200"
				itemProp="headline"
				itemScope
				itemType="https://schema.org/Text"
			>
				{title}
			</h1>
			<div className="text-neutral-500 flex gap-1 my-0">
				<p className="my-0">Posted</p>
				<p
					className="my-0"
					itemProp="author"
					itemScope
					itemType="https://schema.org/Person"
				>
					{author ? ` by ${author}, ` : " "}
				</p>
				<p
					className="my-0"
					itemProp="datePublished"
					itemScope
					itemType="https://schema.org/Date"
				>
					{date && moment(new Date(date), "YYYYMMDD").fromNow()}
				</p>
			</div>
		</>
	);
};

export default PostHeader;
