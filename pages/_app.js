import "../styles/globals.css";
import "../styles/scss/style.scss";
import localFont from "next/font/local";
import Head from "next/head";

const SKG = localFont({
	variable: "--primary-font",
	src: [
		{
			path: "../fonts/SKGoldilocks-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../fonts/SKGoldilocks-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../fonts/SKGoldilocks-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../fonts/SKGoldilocks-Bold.ttf",
			weight: "700",
			style: "normal",
		},
	],
});

const Moniqa = localFont({
	variable: "--secondary-font",
	src: [
		{
			path: "../fonts/Moniqa/Moniqa-LightDisplay.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../fonts/Moniqa/Moniqa-MediumItalicDisplay.ttf",
			weight: "500",
			style: "italic",
		},
		{
			path: "../fonts/Moniqa/Moniqa-MediumDisplay.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../fonts/Moniqa/Moniqa-BoldDisplay.ttf",
			weight: "700",
			style: "normal",
		},
	],
});

function MyApp({ Component, pageProps }) {
	return (
		<main className={`${SKG.variable} ${Moniqa.variable}`}>
			<Head>
				<title>UNISON</title>
				<link rel="shortcut icon" href="/favicon.png" />
			</Head>
			<Component {...pageProps} />
		</main>
	);
}

export default MyApp;
