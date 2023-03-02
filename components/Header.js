import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import { motion, useTransform } from "framer-motion";

export default function Header({ scrollY, setMenu, menu }) {
	const scale = useTransform(scrollY, [0, 100], [2, 1]);

	return (
		<header>
			<div className="header-logo">
				<Link href="/">
					<Image
						src="/image/logo/logo-no-background.png"
						fill
						alt="Header Logo"
						sizes="100px"
						priority
					/>
				</Link>
			</div>

			<nav>
				<motion.div style={{ scale: scale }} transition={{ duration: 5 }}>
					<Link href="/">01</Link>
				</motion.div>

				<motion.div style={{ scale: scale }} transition={{ duration: 5 }}>
					<Link href="/02">02</Link>
				</motion.div>
			</nav>
			<motion.button
				onClick={() => setMenu(!menu)}
				initial={{ rotate: 0, opacity: 1 }}
				animate={menu ? { rotate: 45, opacity: 0 } : {}}
				transition={{ duration: 0.2, ease: "easeInOut" }}>
				<Icon icon="tabler:menu" color="black" width={30} height={30} />
			</motion.button>
		</header>
	);
}
