import React from "react";


const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h2 className="logo">Smart Electronics</h2>
          <p>Your one-stop shop for trendy and affordable electronics.</p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Offers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Customer Service</h3>
          <ul>
            <li>Help Center</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Track Order</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <i className="ri-facebook-fill"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-twitter-x-line"></i>
            <i className="ri-youtube-fill"></i>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 SHOP.CO. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
