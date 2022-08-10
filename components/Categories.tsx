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
						<Link href={`/c/${category.name}`} key={i}>
							<a className="hover:underline">
								<li>{category.name}</li>
							</a>
						</Link>
					))}
			</ul>
		</div>
	);
};

export default Categories;
