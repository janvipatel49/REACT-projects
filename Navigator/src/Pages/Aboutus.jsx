import React from 'react'
 import './page.css';

const Aboutus = () => {
  return (
    <>
      <div className="about">

      {/* Section 1 */}
      <div className="about-section">
        <div className="about-text">
          <h1>About us</h1>
          <p>
            Welcome to <span>GLOWING</span> 🌸  
            We provide high-quality skin care products that make your skin healthy,
            glowing, and beautiful.
          </p>
          <p>
            Our mission is to give you natural and safe products for every skin type.
          </p>
        </div>

        <div className="about-img">
          <img
            src="https://glowing-theme.myshopify.com/cdn/shop/files/banner-32.jpg?v=1736739547"
            alt="skincare"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="about-section reverse">
        <div className="about-img">
          <img
            src="https://glowing-theme.myshopify.com/cdn/shop/files/countdown-08.jpg?v=1746699405"
            alt="beauty"
          />
        </div>

        <div className="about-text">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔ 100% Natural Products</li>
            <li>✔ Dermatologically Tested</li>
            <li>✔ Suitable for All Skin Types</li>
            <li>✔ Affordable & Premium Quality</li>
          </ul>
        </div>
      </div>

      {/* Section 3 */}
      <div className="about-center">
        <h2>Our Promise..</h2>
        <p>
          We care about your skin and confidence. Our products are made with love
          and tested for the best results.
        </p>
      </div>

    </div>
    
    </>
  )
}

export default Aboutus;