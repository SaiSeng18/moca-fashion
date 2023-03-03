import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { productsData } from "../../uils/products";

export const getStaticProps = async () => {
	return {
		props: {
			products: productsData,
		},
	};
};

export default function ProductsPage({ products }) {
	const [filter, setFilter] = useState("");

	return (
		<Layout>
			<div className="product-container">
				<div className="hero-container">
					<div className="hero">
						<div className="hero-content">
							<p className="title">
								/ <span>Sunglasses</span>
							</p>
							<p className="info">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi iure
								in, totam autem vero sit ad qui impedit perspiciatis at animi explicabo
								facilis aliquid illum ullam quibusdam quisquam fugiat earum.
							</p>
							<button>View this item</button>
						</div>
						<div className="hero-img">
							<Image src="/image/products/sunglasses.png" fill alt="Hero Image" />
						</div>
					</div>
					<div className="corners">
						<Icon icon="vaadin:corner-lower-left" />

						<div className="corner-detail">
							<div className="underline"></div>01<div className="underline"></div>
						</div>
					</div>
				</div>
				<div className="category">
					<div className="filter-container">
						<button onClick={() => setFilter("")}>All</button>
						<button onClick={() => setFilter("pants")}>Pants</button>
						<button onClick={() => setFilter("shirt")}>Shirt</button>
						<button onClick={() => setFilter("shoes")}>Shoes</button>
						<button onClick={() => setFilter("accessory")}>Accessory</button>
					</div>
					<div className="search">
						<input type="text" onChange={(e) => setFilter(e.target.value)} />
						<Icon icon="uil:search" />
					</div>
				</div>

				<div className="products-card-container">
					{products
						.filter((e) => {
							if (!filter) {
								return true;
							}
							if (
								e.type.toLowerCase().includes(filter.toLowerCase()) ||
								e.name.toLowerCase().includes(filter.toLowerCase())
							) {
								return true;
							}
						})
						.map((product, idx) => (
							<Product
								name={product.name}
								type={product.type}
								imgUrl={product.imgUrl}
								price={product.price}
								key={idx}
								id={product.id}
							/>
						))}
				</div>
			</div>
		</Layout>
	);
}

function Product({ name, type, imgUrl, price, id }) {
	return (
		<div className="product-card">
			<Link href={`/product/${id}`}>
				<div className="product-image">
					<Image src={imgUrl} fill sizes="500px" alt="Product Image" />
				</div>
				<div className="product-detail">
					<div className="product-info">
						<p className="product-name">{name}</p>
						<p className="product-type">{type}</p>
					</div>
					<p className="product-price">{price}$</p>
				</div>
			</Link>
		</div>
	);
}
