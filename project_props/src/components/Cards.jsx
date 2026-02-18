import React from 'react'
import products from "../data/products";



const Cards = () => {
  return (
   <div className="products">

      <h2>Featured Products</h2>

      <div className="product-list">

        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}

      </div>

    </div>

  )
}

export default Cards