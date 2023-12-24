import React from "react";
import "./Contact.css";
import Back from "../common/Back/Back";
const Contact = () => {
  const map =
    "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d252230.2559148128!2d38.6129825!3d8.9631402!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1703416485634!5m2!1sen!2set";
  //   width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"

  return (
    <>
      <Back title="Contact Us" />
      <section className="contact padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>CONTACT US</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS: </h4>
                <p>198 west 21st street, suite 751 New York NY 10016</p>
              </div>
              <div className="box">
                <h4>Email: </h4>
                <p>info@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE: </h4>
                <p>+123 456 7898</p>
              </div>
            </div>
            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="email" placeholder="Subject" />
              <textarea cols="30" rows="10">
                create a message here ...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>
            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
