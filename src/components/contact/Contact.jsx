import React from "react";
import "./Contact.scss";
import { useState } from "react";
function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/hands.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thank you for you email I will reply ASAP!</span>}
        </form>
        <h5>My Resume`</h5>
      </div>
    </div>
  );
}

export default Contact;
