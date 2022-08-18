import "../styles/globals.css";
import "../styles/prism.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";
import { Router } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Main from "../layout/Main";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>{`Ahmet's Blog`}</title>
				<meta
					name="description"
					content="My blog for tutorials and my experiences with web development."
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;1,500;1,600&display=swap"
				/>
			</Head>
			<Navbar />
			<Main>
				<MDXProvider components={MDXComponents}>
					<Component {...pageProps} />
				</MDXProvider>
			</Main>
			<Footer />
		</>
	);
}

export default MyApp;
