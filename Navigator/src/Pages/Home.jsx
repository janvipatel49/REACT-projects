import React from 'react'

const Home = () => {
  return (
   <>
     <div
      className="home-hero"
      style={{ backgroundImage: `url(https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/QXXGETWOHRD2DP4VK2UQGASLRU.jpeg)` }}
    >
      <div className="overlay">
        <div className="hero-content">
          <p className="small-text">Cleanser Concentrate</p>

          <h1>
            The 3-Step <br /> Skincare Routine
          </h1>

          <button className="discover-btn">
            Discover Now →
          </button>
        </div>
      </div>
    </div>
    {/* Offer Section */}
<div className="offer-section">

  {/* Left Card */}
  <div className="offer-card light">
    <p className="small">NEW COLLECTION</p>
    <h2>Intensive Glow C+ Serum</h2>
    <button>Explore More</button>
  </div>

  {/* Right Card */}
  <div className="offer-card pink">
    <h2>25% off Everything</h2>
    <p>Makeup with extended range in colors for every human.</p>
    <button>Shop Sale</button>
  </div>

</div>

{/* Features Section */}
<div className="features-section">

  <div className="feature">
    <h3>📦 Free Shipping</h3>
    <p>Free shipping for orders over ₹1000</p>
  </div>

  <div className="feature">
    <h3>🔄 Returns</h3>
    <p>Within 30 days for exchange</p>
  </div>

  <div className="feature">
    <h3>💬 Support</h3>
    <p>24/7 customer support</p>
  </div>

  <div className="feature">
    <h3>💳 Payment</h3>
    <p>Multiple payment options</p>
  </div>

</div>
   </>
  )
}

export default Home