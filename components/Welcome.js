import { motion } from "framer-motion";
import Image from "next/image";
const box = {
	show: {
		transition: {
			staggerChildren: 0.35,
		},
	},
};

const boxItem = {
	hidden: { opacity: 0, scale: 0.5 },
	show: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			ease: [0.6, 0.01, 0.05, 0.9],
			duration: 1.6,
		},
	},
	exit: {
		opacity: 0,
		y: -200,
		transition: {
			ease: "easeInOut",
			duration: 0.8,
			delay: 1,
		},
	},
};

const boxMain = {
	hidden: { opacity: 0, scale: 0.5 },
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			ease: [0.6, 0.01, 0.05, 0.9],
			duration: 1.6,
		},
	},
};

export default function Welcome({ setLoading }) {
	return (
		<>
			<motion.div
				id="welcome"
				className="welcome"
				onAnimationComplete={() => setLoading(false)}
				variants={box}
				initial="hidden"
				animate="show"
				exit="exit">
				<motion.div className="welcome__card" variants={boxItem}>
					<Image
						src="https://images.unsplash.com/photo-1557777586-f6682739fcf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
						height={300}
						width={300}
						alt="Welcome Image"
					/>
				</motion.div>
				<motion.div className="welcome__card" variants={boxItem}>
					<Image
						src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
						height={300}
						width={300}
						alt="Welcome Image"
					/>
				</motion.div>
				<motion.div className="welcome__card" variants={boxItem}>
					<Image
						src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80"
						height={300}
						width={300}
						alt="Welcome Image"
					/>
				</motion.div>
				<motion.div className="welcome__card" variants={boxItem}>
					<Image
						src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
						height={300}
						width={300}
						alt="Welcome Image"
					/>
				</motion.div>
				<motion.div variants={boxMain} className="transition-image">
					<motion.div
						className="main-image-1"
						layoutId="main-image-1"
						transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}>
						<Image
							src="https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
							alt="Main Image"
							fill
							sizes="(max-width: 768px) 600px,(max-width: 1200px) 1000px,2000px"
						/>
					</motion.div>
				</motion.div>
			</motion.div>
		</>
	);
}
