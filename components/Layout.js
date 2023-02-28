import { useScroll } from "framer-motion";
import React, { useRef } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
	const ref = useRef();
	const { scrollY } = useScroll({
		target: ref,
		offset: ["start start", "start start"],
	});

	return (
		<>
			<Header scrollY={scrollY} />
			<div className="layout-children" ref={ref}>
				{children}
			</div>
			<Footer />
		</>
	);
}
