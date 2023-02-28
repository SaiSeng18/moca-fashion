import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header({ scrollY }) {
	const [close, setClose] = useState(true);
	const scale = useTransform(scrollY, [0, 100], [2, 1]);

	return (
		<header>
			<Image src="" width={32} height={32} />
			<nav>
				<motion.div style={{ scale: scale }} transition={{ duration: 5 }}>
					<Link href="/">01</Link>
				</motion.div>

				<motion.div style={{ scale: scale }} transition={{ duration: 5 }}>
					<Link href="/02">02</Link>
				</motion.div>
			</nav>
			<button onClick={() => setClose(!close)}>
				{close ? (
					<Icon icon="tabler:menu" color="black" width={30} height={30} />
				) : (
					<Icon icon="gg:close" color="black" width={30} height={30} />
				)}
			</button>
		</header>
	);
}
