import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";
import Link from "next/link";
import { v4 as uuid } from "uuid";

export const serialize = (children) =>
	children.map((node, i) => {
		if (Text.isText(node)) {
			let text;
			if (node.bold) {
				text = <strong key={i + uuid()}>{node.text}</strong>;
			}
			if (node.code) {
				text = <code key={i + uuid()}>{node.text}</code>;
			}
			if (node.italic) {
				text = <em key={i + uuid()}>{node.text}</em>;
			}
			return <Fragment key={i + uuid()}>{node.text}</Fragment>;
		}

		if (!node) {
			return null;
		}

		switch (node.type) {
			case "h1":
				return <h1 key={i + uuid()}>{serialize(node.children)}</h1>;
			case "h2":
				return <h2 key={i + uuid()}>{serialize(node.children)}</h2>;
			case "h3":
				return <h3 key={i + uuid()}>{serialize(node.children)}</h3>;
			case "h4":
				return <h4 key={i + uuid()}>{serialize(node.children)}</h4>;
			case "h5":
				return <h5 key={i + uuid()}>{serialize(node.children)}</h5>;
			case "h6":
				return <h6 key={i + uuid()}>{serialize(node.children)}</h6>;
			case "quote":
				return <blockquote key={i + uuid()}>{serialize(node.children)}</blockquote>;
			case "ul":
				return <ul key={i + uuid()}>{serialize(node.children)}</ul>;
			case "ol":
				return <ol key={i + uuid()}>{serialize(node.children)}</ol>;
			case "li":
				return <li key={i + uuid()}>{serialize(node.children)}</li>;
			case "indent":
				return <blockquote key={i + uuid()}>{serialize(node.children)}</blockquote>;
			case "link":
				return (
					<Link href={escapeHTML(node.url)} key={i + uuid()}>
						<a>{serialize(node.children)}</a>
					</Link>
				);
			default:
				return <p key={i + uuid()}>{serialize(node.children)}</p>;
		}
	});
