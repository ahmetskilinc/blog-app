import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta
					name="description"
					content="My blog for tutorials and my experiences with web development."
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;1,500;1,600&display=swap"
				/>
			</Head>
			<body className="bg-[#f1f1f1] text-[#1f1f1f] dark:bg-[#1f1f1f] dark:text-[#f1f1f1]">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
