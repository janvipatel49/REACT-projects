import React from 'react'
 import './page.css';

const Contactus = () => {
  return (
    <>
     <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-box">
        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            className="input-field"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="input-field"
          />

          <textarea
            placeholder="Your Message"
            className="textarea-field"
          ></textarea>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>  
  
    </>
  )
}

export default Contactus