import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function joinclub() {
	return (
		<div className="club">
			<div className="club-card">
				<Link href="/">
					<div className="club-logo">
						<Image
							alt="Club logo"
							fill
							src="/image/logo/logo-no-background.png"
							sizes="100px"
						/>
					</div>
				</Link>
				<h1>Enter your email to join us or sign in.</h1>
				<p>Join us to get promotions and exclusive stuff</p>
				<form>
					<div className="input-container">
						{/* <label htmlFor="username">Username</label> */}
						<input type="text" placeholder="Username" />
					</div>
					<div className="input-container">
						{/* <label htmlFor="email">Email</label> */}
						<input type="email" placeholder="Email" />
					</div>
					<div className="policy-link">
						By continuing, I agree to Moca’s <Link href="/02">Privacy Policy</Link>{" "}
						and <Link href="/02">Term of Use.</Link>
					</div>
					<button type="submit">Continue</button>
				</form>
			</div>
		</div>
	);
}
