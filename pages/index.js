import { useState } from "react";
import Main from "../components/Main";
import Welcome from "../components/Welcome";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Head from "next/head";

export default function Home() {
	const [loading, setLoading] = useState(true);

	return (
		<>
			<Head>
				<title>UNISON</title>
			</Head>
			<div className="home">
				<LayoutGroup>
					<AnimatePresence>
						{loading ? (
							<motion.div key="loader">
								<Welcome setLoading={setLoading} />
							</motion.div>
						) : (
							<Main layoutId="main-image-1" />
						)}
						{/* <Welcome /> */}
						{/* <Main /> */}
					</AnimatePresence>
				</LayoutGroup>
			</div>
		</>
	);
}
