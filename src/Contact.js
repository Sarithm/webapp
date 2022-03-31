import React from "react";
import "./Contact.css";
export const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="col-1">
          <div className="content">
            <div>
              <h1>Get in Touch</h1>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                quasi quis cupiditate explicabo velit delectus, nesciunt
                architecto asperiores, adipisci dolorum sed nam excepturi ea
                rerum doloribus quaerat molestiae? Sapiente, autem.
              </p>
            </div>
            <div className="address">
              <p>300 Pasippany Road</p>
              <p>New Jersey, NJ 07054</p>
              <p>support@example.com</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <form action="">
            <input type="text" placeholder="full name" />
            <input type="email" placeholder="Email" />
            <input type="phone" placeholder="Phone" />
            <textarea
              name="message"
              placeholder="Message"
              cols="30"
              rowes="10"
            ></textarea>
            <div className="checkbox">
              <input type="checkbox" />
              <p>
                {" "}
                BY checking this box,you agree to the{" "}
                <span> Privacy Policy</span>
                and
                <span>Cookie Policy</span>.
              </p>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
