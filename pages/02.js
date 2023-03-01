import { motion } from "framer-motion";
import Head from "next/head.js";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import Layout from "../components/Layout.js";

export default function Show() {
	return (
		<>
			<Head>
				<title>UNISON | 02</title>
			</Head>
			<Layout>
				<main>
					<div className="container">
						<Section
							key="1"
							order="order-1"
							index="001"
							imgSrc="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
							title="Original Model"
							eng="Fashion is not just about clothes, it's about expressing your personality and creativity."
							jp="ファッションは服だけではなく、あなたの個性と創造性を表現することです。"
						/>
						<Section
							key="2"
							order="order-2"
							index="002"
							imgSrc="https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							title="Adverse Design"
							eng="Wear what makes you feel confident and comfortable. Fashion is all about self-expression."
							jp="自信と快適さを感じるものを着用してください。ファッションは自己表現のすべてです。"
						/>
						<Section
							key="3"
							order="order-1"
							index="003"
							imgSrc="https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
							title="Original Model"
							eng="Create your own style, don't follow the trends. Be unique and stand out!"
							jp="自分だけのスタイルを作りましょう。トレンドに追随するのではなく、ユニークで目立つ存在になりましょう！"
						/>
						<Section
							key="4"
							order="order-2"
							index="004"
							imgSrc="https://images.unsplash.com/photo-1531901599143-df5010ab9438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
							title="Adverse Design"
							eng="Fashion is a form of art, use your body as the canvas and create a masterpiece."
							jp="ファッションはアートの一形態です。体をキャンバスとして使用し、傑作を作り出しましょう。 "
						/>
						<Section
							key="5"
							order="order-1"
							index="005"
							imgSrc="https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
							title="Original Model"
							eng="Don't be afraid to mix and match different styles. Fashion is about experimentation and having fun."
							jp="異なるスタイルをミックス＆マッチすることを恐れないでください。ファッションは実験と楽しみのすべてです。"
						/>
						<Section
							key="6"
							order="order-2"
							index="006"
							imgSrc="https://images.unsplash.com/photo-1512646605205-78422b7c7896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
							title="Adverse Design"
							eng="Dress for yourself, not for others. Fashion is about being true to who you are."
							jp="他人のためではなく、自分のために服を着ましょう。ファッションはあなたが誰であるかに忠実であることについてです。"
						/>
					</div>
				</main>
			</Layout>
		</>
	);
}

function Section({ order, index, imgSrc, title, eng, jp }) {
	return (
		<div className={`sec ${order}`}>
			<div className="img">
				<div className="img-container">
					<Image src={imgSrc} alt="02-Image" fill />
				</div>
			</div>
			<div className="content">
				<p className="title">
					{title.split(" ").map((word, index) => (
						<span key={index}>{word}</span>
					))}
				</p>
				<div className="star">
					<motion.div
						animate={
							order === "order-1"
								? {
										x: -100,
										rotate: -180,
								  }
								: { x: 100, rotate: 180 }
						}
						whileInView={{ x: 0, rotate: 0 }}
						transition={{ duration: 0.7, ease: "easeInOut" }}
						style={{ originY: 0.5 }}>
						*
					</motion.div>
				</div>
				<p>{jp}</p>
				<div className="index">
					<span>{index}</span>
					<p>{eng}</p>
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
