import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";
import Layout from "../components/Layout.js";

export default function Show() {
	return (
		<Layout>
			<main>
				<div className="container">
					<Section order="order-1" index="001" imgSrc="" title="Original Model" />
					<Section order="order-2" index="002" imgSrc="" title="Adverse Design" />
					<Section order="order-1" index="003" imgSrc="" title="Original Model" />
					<Section order="order-2" index="004" imgSrc="" title="Adverse Design" />
					<Section order="order-1" index="005" imgSrc="" title="Original Model" />
					<Section order="order-2" index="006" imgSrc="" title="Adverse Design" />
				</div>
			</main>
		</Layout>
	);
}

function Section({ order, index, imgSrc, title }) {
	return (
		<div className={`sec ${order}`}>
			<div className="img">
				<div className="img-container">
					<Image src={imgSrc} alt="02-Image" />
				</div>
			</div>
			<div className="content">
				<p className="title">
					{title.split(" ").map((word) => (
						<span>{word}</span>
					))}
				</p>
				<div className="star">
					<motion.div
						animate={
							order === "order-1" ? { x: -100, rotate: -180 } : { x: 100, rotate: 180 }
						}
						whileInView={{ x: 0, rotate: 0 }}
						transition={{ duration: 0.7, ease: "easeInOut" }}
						style={{ originY: 0.5 }}>
						*
					</motion.div>
				</div>
				<p>
					オリジナルでモデルを生成して、
					ブランディングやプロモーション等で顧客に最適化しながら展開
				</p>
				<div className="index">
					<span>{index}</span>
					<p>GENERATED MODELS COULD BE USED FOR BRANDING, PROMOTION, ETC.</p>
				</div>
				<motion.div
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1, transition: { duration: 0.7 } }}
					className="divider"
					style={{ originX: order === "order-1" ? 1 : 0 }}></motion.div>
			</div>
		</div>
	);
}
