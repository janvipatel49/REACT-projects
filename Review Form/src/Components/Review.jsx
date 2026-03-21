import { useState } from "react";
import "./Review.css";


const Review = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag4dXdAzJlKhPxlQy75DJCVXHz_rYx60ZxQ&s",
      reviews: [],
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      image: "https://imageio.forbes.com/specials-images/imageserve/60a91f9a5f6002a4c8174108/0x0.jpg?format=jpg&crop=1077,1013,x139,y0,safe&height=900&width=1600&fit=bounds",
      reviews: [],
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0buGSj_w0-WMCWnA0z-WwdYRrZFT2B3xWbg&s",
      reviews: [],
    },
  ]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState("");
  const [selected, setSelected] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message || !rating) {
      alert("Please fill all fields");
      return;
    }

    const updated = products.map((p) => {
      if (p.id === selected) {
        const newReview = {
          id: Date.now(),
          name,
          message,
          rating,
        };

        return {
          ...p,
          reviews: [...p.reviews, newReview],
        };
      }
      return p;
    });

    setProducts(updated);
    setSelected(null);
    setName("");
    setMessage("");
    setRating("");
  };

  return (
    <>
     
      <h2 className="title">Products</h2>

      <div className="card-container">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button onClick={() => setSelected(p.id)}>
              Give Review
            </button>
          </div>
        ))}
      </div>

      {/*  Review Form */}
      {selected && (
        <form className="form" onSubmit={handleSubmit}>
          <h2>Write Review</h2>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Your Review"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Select Rating</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      )}

      {/*  Reviews */}
      <h2 className="title">All Reviews</h2>

      <div className="review-container">
        {products.map((p) =>
          p.reviews.map((r) => (
            <div className="review-card" key={r.id}>
              <h4>{p.name}</h4>
              <p><b>{r.name}</b></p>
              <p>{r.message}</p>
              <p>{r.rating} ⭐</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Review;