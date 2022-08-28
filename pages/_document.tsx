import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta
					name="description"
					content="My blog for tutorials and my experiences with web development."
				/>
				<meta
					name="keywords"
					content="Ahmet Kilinc, Blog, Ahmet Kilinc Dev Blog, Ahmet Kilinc Dev, Web Development, Front End, Frontend, Developer, AhmetK Dev Blog, AhmetK Dev"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link
					href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className="bg-[#f1f1f1] text-[#1f1f1f] dark:bg-[#1f1f1f] dark:text-[#f1f1f1] overflow-x-hidden">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
