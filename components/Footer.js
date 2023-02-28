import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<footer>
			<div className="footer-container">
				<Image src="" width={36} height={36} />
				<ul>
					<li>
						<Link href="/">Newsletter</Link>
					</li>
					<li>
						<Link href="/">App</Link>
					</li>
					<li>
						<Link href="/">Store</Link>
					</li>
					<li>
						<Link href="/">Follow Us</Link>
					</li>
					<li>
						<Link href="/">Legal & Privacy</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}
