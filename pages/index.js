import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import Main from "../components/Main";
import Welcome from "../components/Welcome";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [loading, setLoading] = useState(true);
	const [isFirstLoad, setIsFirstLoad] = useState(false);

	useEffect(() => {
		// setTimeout(() => setLoading(false), 5000);

		console.log(isFirstLoad);
		localStorage.setItem("isFirstLoad", isFirstLoad);
		setIsFirstLoad(true);
		localStorage.setItem("isFirstLoad", isFirstLoad);
		console.log(isFirstLoad);
	}, []);

	return (
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
	);
}
