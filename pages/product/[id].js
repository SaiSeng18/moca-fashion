import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import { productsData } from "../../uils/products";

export const getStaticProps = async ({ params }) => {
	const product = productsData.filter((p) => p.id.toString() === params.id);
	const recommended = productsData.filter((p) => p.rating > 4);
	return {
		props: {
			product: product[0],
			recommended,
		},
	};
};

export const getStaticPaths = async () => {
	const paths = productsData.map((product) => ({
		params: {
			id: product.id.toString(),
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export default function ProductPage({ product, recommended }) {
	const router = useRouter();
	return (
		<Layout>
			<div className="single-product">
				<div className="single-product-container">
					<div className="product-image">
						<Image src={product.imgUrl} alt="Product Image" fill />
					</div>
					<div className="single-product-detail">
						<div className="back">
							<button onClick={() => router.back()}>
								<Icon
									icon="material-symbols:arrow-back-rounded"
									width={36}
									height={36}
								/>
							</button>
						</div>
						<p className="product-type">{product.type}</p>
						<p className="product-title">/{product.name}</p>
						<p className="product-id">PRODUCT: {product.id}</p>
						<p className="product-description">{product.description}</p>

						<div className="divider"></div>

						<div className="product-colors">
							<p className="color-text">COLOR</p>
							<div className="color-buttons">
								<button className="color"></button>
								<button className="color"></button>
								<button className="color"></button>
								<button className="color"></button>
							</div>
						</div>

						<div className="divider"></div>

						<div className="product-size">
							<p className="size-text">SIZE</p>
							<p className="size">30 x 50 inch</p>
						</div>

						<div className="divider"></div>

						<p className="product-price">{product.price}$</p>
						<div className="checkout-buttons">
							<button className="cart-button">ADD TO CART</button>
							<button className="fav">
								<Icon icon="mdi:cards-heart" color="white" width={36} height={36} />
							</button>
						</div>
					</div>
				</div>

				<div className="recommended">
					<p className="recommended-text">RECOMMENDED</p>
					<div className="recommended-container">
						{recommended.map((recommended) => (
							<RecommendedCard recommended={recommended} />
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
}

function RecommendedCard({ recommended }) {
	console.log(recommended);
	return (
		<div className="recommended-card">
			<Link href={`/product/${recommended.id}`}>
				<div className="product-image">
					<Image src={recommended.imgUrl} fill sizes="500px" alt="Product Image" />
				</div>
				<div className="product-detail">
					<div className="product-info">
						<p className="product-name">{recommended.name}</p>
						<p className="product-type"></p>
					</div>
					<p className="product-price"></p>
				</div>
			</Link>
		</div>
	);
}
