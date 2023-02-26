import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

export default function Header() {
	const [close, setClose] = useState(true);
	return (
		<header>
			<Image src="" width={32} height={32} />
			<nav>
				<Link href="/">01</Link>
				<Link href="/show">02</Link>
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
