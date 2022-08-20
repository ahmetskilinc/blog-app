import "../styles/globals.css";
import "../styles/prism.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Main from "../layout/Main";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import Script from "next/script";
import { useEffect } from "react";
import { pageview } from "../lib/gtag";
import config from "../app.config";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: any) => {
			pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<title>{`Ahmet's Blog`}</title>
			</Head>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${config.gaId}`}
			/>
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${config.gaId}', {
						page_path: window.location.pathname,
						});
					`,
				}}
			/>
			<Navbar />
			<Main>
				<MDXProvider components={MDXComponents}>
					<Component {...pageProps} />
				</MDXProvider>
			</Main>
		</>
	);
};

export default MyApp;
