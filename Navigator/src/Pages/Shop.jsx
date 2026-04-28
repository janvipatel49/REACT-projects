import React from "react";
import "./page.css";

const products = [
  {
    id: 1,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-06-2.jpg?v=1736500658",
    name: "Cleansing Oil",
    price: "$21.00",
  },
  {
    id: 2,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-08-2.jpg?v=1736500681",
    name: "Eye Cream",
    price: "$19.00",
  },
  {
    id: 3,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-09-2.jpg?v=1736500640",
    name: "Moisture Mask",
    price: "$35.00",
  },
  {
    id: 4,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-04-1.jpg?v=1736500674",
    name: "Facial Oil",
    price: "$15.00",
    old: "$21.00",
    tag: "Sale",
  },
  {
    id: 5,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-10-3.jpg?v=1736500664",
    name: "Body Balm",
    price: "$20.00",
  },
  {
    id: 6,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-07-2.jpg?v=1736500635",
    name: "Glow Serum",
    price: "$27.00",
    tag: "New",
  },
  {
    id: 7,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-01-1.jpg?v=1736500601",
    name: "Hair Oil",
    price: "$18.00",
    tag: "Sale",
  },
  {
    id: 8,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-02-2.jpg?v=1736500620",
    name: "Sea Salt Spray",
    price: "$27.00",
  },
];

const Shop = () => {
  return (
    <div className="shop-container">
      <h1 className="shop-title">Our Products</h1>

      <div className="product-grid">
        {products.map((item) => (
          <div className="card" key={item.id}>
            
            {item.tag && <span className="tag">{item.tag}</span>}

            <img src={item.img} alt={item.name} />

            <h3>{item.name}</h3>

            <p className="price">
              {item.old && <span className="old">{item.old}</span>}
              {item.price}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;