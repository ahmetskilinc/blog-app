import Link from "next/link";
import React from "react";
import { Category } from "../types/Category";

type Props = { categories: Category[] };

const Categories = ({ categories }: Props) => {
	return (
		<div>
			<h1 className="text-lg">Categories</h1>
			<ul className="list-disc list-inside">
				{categories.length > 0 &&
					categories.map((category, i) => (
						<li key={i}>
							<Link href={`/c/${category.name}`}>
								<a className="hover:underline opacity-70 hover:opacity-100">
									{category.name}
								</a>
							</Link>
						</li>
					))}
			</ul>
		</div>
	);
};

export default Categories;
