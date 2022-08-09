import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>{`Ahmet's Blog`}</title>
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
