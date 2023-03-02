import { Icon } from "@iconify/react";
import { animate, AnimatePresence, motion, useScroll } from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const nav = {
	animate: {
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.2,
			ease: "easeInOut",
		},
	},
};

const navItem = {
	initial: {
		opacity: 0,
		y: "100%",
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export default function Layout({ children }) {
	const [menu, setMenu] = useState(false);
	const ref = useRef();
	const { scrollY } = useScroll({
		target: ref,
		offset: ["start start", "start start"],
	});

	return (
		<>
			<Header scrollY={scrollY} setMenu={setMenu} menu={menu} />
			<div className="layout-children" ref={ref}>
				{children}
			</div>
			<Footer />
			<AnimatePresence>
				{menu ? <Menu setMenu={setMenu} menu={menu} /> : null}
			</AnimatePresence>
		</>
	);
}

function Menu({ setMenu, menu }) {
	return (
		<motion.div
			initial={{ y: "100%" }}
			animate={{ y: 0 }}
			exit={{ x: "-100%" }}
			transition={{ duration: 0.75, ease: [0.6, 0.01, -0.05, 0.9] }}
			className="menu">
			<div className="icon">
				<motion.button
					onClick={() => setMenu(!menu)}
					initial={{ rotate: 0, opacity: 1 }}
					animate={menu ? {} : { rotate: 180, opacity: 0 }}
					transition={{ duration: 0.2, ease: "easeInOut" }}>
					<Icon
						icon="material-symbols:close-rounded"
						color="black"
						width={30}
						height={30}
					/>
				</motion.button>
			</div>
			<motion.div
				variants={nav}
				className="nav"
				animate="animate"
				initial="initial">
				<motion.div variants={navItem}>
					<Link href="/">HOME</Link>
				</motion.div>
				<motion.div variants={navItem}>
					<Link href="/product">STORE</Link>
				</motion.div>
				<motion.div variants={navItem}>
					<Link href="/gallery">Gallery</Link>
				</motion.div>
				<motion.div variants={navItem}>
					<Link href="/02">CONTACT US</Link>
				</motion.div>
				<motion.div variants={navItem}>
					<Link href="/joinclub">JOIN CLUB</Link>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
