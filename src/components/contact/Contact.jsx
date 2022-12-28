import React from "react";
import "./Contact.scss";

import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xzboyzky");
  if (state.succeeded) {
    return <p>Thanks for emailing me!</p>;
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/hands.svg" alt="" style={{ margin: "100px 40px" }} />
      </div>
      <div className="right">
        <h2 className="">Contact.</h2>
        <form onSubmit={handleSubmit}>
          <br></br>
          <input id="email" type="email" name="email" placeholder="Email" />
          <br></br>
          <input placeholder="Full name" />
          <br></br>
          <input placeholder="Number" />
          <br></br>
          <input placeholder="Company" />
          <br></br>
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea id="message" name="message" placeholder="Message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
