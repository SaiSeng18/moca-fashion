import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useState } from "react";
import Layout from "../../components/Layout";

const products = [
	{
		name: "Unblinding shade",
		type: "Shirt",
		imgUrl: "/image/products/1.jpg",
		price: "300",
	},
	{
		name: "Be Charmed",
		type: "Shirt",
		imgUrl: "/image/products/2.jpg",
		price: "200",
	},
	{
		name: "Blossom Gift Baskets",
		type: "Accessory",
		imgUrl: "/image/products/3.jpg",
		price: "400",
	},
	{
		name: "Adaline’s Wardrobe",
		type: "Shirt",
		imgUrl: "/image/products/4.jpg",
		price: "500",
	},
	{
		name: "The Brooch of the Baroness",
		type: "Shirt",
		imgUrl: "/image/products/5.jpg",
		price: "600",
	},
	{
		name: "Applause",
		type: "Pants",
		imgUrl: "/image/products/6.jpg",
		price: "320",
	},
	{
		name: "Apple Blossoms",
		type: "Pants",
		imgUrl: "/image/products/7.jpg",
		price: "690",
	},
	{
		name: "Bien Habillé",
		type: "Accessory",
		imgUrl: "/image/products/8.jpg",
		price: "200",
	},
	{
		name: "Bling-a-Ling",
		type: "Shirt",
		imgUrl: "/image/products/9.jpg",
		price: "740",
	},
	{
		name: "Kiwi Bird Boutique",
		type: "Accessory",
		imgUrl: "/image/products/10.jpg",
		price: "500",
	},
	{
		name: "Loire Valley",
		type: "Shoes",
		imgUrl:
			"https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
		price: "500",
	},
	{
		name: "Fashion Gig",
		type: "Shoes",
		imgUrl:
			"https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
		price: "500",
	},
];

export default function ProductPage() {
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
					<button onClick={() => setFilter("")}>All</button>
					<button onClick={() => setFilter("Pants")}>Pants</button>
					<button onClick={() => setFilter("Shirt")}>Shirt</button>
					<button onClick={() => setFilter("Shoes")}>Shoes</button>
					<button onClick={() => setFilter("Accessory")}>Accessory</button>
				</div>

				<div className="products-card-container">
					{products
						.filter((e) => e.type.includes(filter))
						.map((product, idx) => (
							<Product
								name={product.name}
								type={product.type}
								imgUrl={product.imgUrl}
								price={product.price}
								key={idx}
							/>
						))}
				</div>
			</div>
		</Layout>
	);
}

function Product({ name, type, imgUrl, price, key }) {
	return (
		<div className="product-card" key={key}>
			<div className="product-image">
				<Image src={imgUrl} fill sizes="500px" />
			</div>
			<div className="product-detail">
				<div className="product-info">
					<p className="product-name">{name}</p>
					<p className="product-type">{type}</p>
				</div>
				<p className="product-price">{price}$</p>
			</div>
		</div>
	);
}
