import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="bg-[#f1f1f1] text-[#1f1f1f] dark:bg-[#1f1f1f] dark:text-[#f1f1f1]">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
