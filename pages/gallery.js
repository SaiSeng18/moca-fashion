import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const letter = {
	animate: {
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.1,
		},
	},
};

const letterAni = {
	initial: { y: -150 },
	animate: {
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 0.5,
		},
	},
};

export default function gallery() {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>UNISON | GALLERY</title>
			</Head>
			<div className="gallery">
				<div className="back-home">
					<div className="button">
						<Link href="/">
							<Image src="/image/logo/logo-no-background.png" fill />
						</Link>
					</div>
				</div>
				<div className="back">
					<button onClick={() => router.back()}>
						<Icon icon="material-symbols:arrow-back-rounded" width={36} height={36} />
					</button>
				</div>
				<GalleryItem
					index="01"
					eng="Stylish fashion incorporating trends is popular."
					jp="トレンドを取り入れたスタイリッシュなファッションが人気です。"
					imgSrc="https://images.unsplash.com/photo-1591926870242-9b01d19110d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				/>
				<GalleryItem
					index="02"
					eng="There are plenty of fashion items with a reputation for beauty in simple designs."
					jp="シンプルなデザインが美しいと評判のファッションアイテムが豊富です。"
					imgSrc="https://images.unsplash.com/photo-1586483567820-10d1c5f744d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				/>
				<GalleryItem
					index="03"
					eng="Casual fashion using denim material matches any occasion."
					jp="デニム素材を使ったカジュアルなファッションはどんな場面でもマッチします。"
					imgSrc="https://images.unsplash.com/photo-1566661983144-883ee0a8c0c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1207&q=80"
				/>
				<GalleryItem
					index="04"
					eng="Monotone fashion that gives a sophisticated and elegant impression is rapidly gaining popularity."
					jp="大人っぽく上品な印象を与えるモノトーンのファッションが人気急上昇中です。"
					imgSrc="https://images.unsplash.com/photo-1591926870242-9b01d19110d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				/>
				<GalleryItem
					index="05"
					eng="Cool clothing perfect for summer is abundant."
					jp="夏にぴったりの涼しげな服装が充実しています。 "
					imgSrc="https://images.unsplash.com/photo-1591926870242-9b01d19110d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				/>
				<GalleryItem
					index="06"
					eng="Fashion incorporating retro items has a unique and distinctive appeal."
					jp="レトロなアイテムを取り入れたファッションは、ユニークで個性的な魅力があります。"
					imgSrc="https://images.unsplash.com/photo-1591926870242-9b01d19110d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				/>
				<GalleryItem
					index="07"
					eng="Colorful and vivid fashion gives a glamorous impression."
					jp="色彩豊かで鮮やかなファッションは、華やかな印象を与えます。"
					imgSrc="https://images.unsplash.com/photo-1591926870242-9b01d19110d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				/>
				<GalleryItem
					index="08"
					eng="Eco-friendly fashion using organic materials provides a style that is considerate of the environment."
					jp="オーガニック素材を使用したエコフレンドリーなファッションは、環境に配慮したスタイルを提供します。"
					imgSrc="https://images.unsplash.com/photo-1591926870242-9b01d19110d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				/>
			</div>
		</>
	);
}

function GalleryItem({ index, eng, jp, imgSrc }) {
	return (
		<section>
			<Image
				src={imgSrc}
				alt="Gallery Image"
				fill
				sizes="(max-width: 768px) 600px,(max-width: 1200px) 1000px,2000px"
			/>
			<div className="gallery-content">
				<div className="gallery-container">
					<div className="title">
						<motion.div
							className="index"
							variants={letter}
							initial="initial"
							whileInView="animate">
							{[...index].map((num, index) => (
								<motion.div key={index} variants={letterAni}>
									{num}
								</motion.div>
							))}
						</motion.div>
						<p className="message">{eng}</p>
					</div>

					<motion.div
						className="divider"
						style={{ originX: 0 }}
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1, transition: { duration: 1 } }}></motion.div>
					<p>{jp}</p>
				</div>
			</div>
		</section>
	);
}
