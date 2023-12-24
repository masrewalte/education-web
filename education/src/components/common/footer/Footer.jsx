import React from "react";
import "./Footer.css";
import { blog } from "../../../dummydata";
const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter -Stay tune and get the latest update</h1>
            <span>far far away, behind the world mountains</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>ACADEMIA</h1>
            <span>online education & learning</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              itaque est repellendus neque consequatur, cum molestiae tenetur
              rem sapiente veniam libero, adipisci eos aspernatur voluptatibus.
            </p>
            <i class="fa-brands fa-facebook-f icon"></i>
            <i class="fa-brands fa-instagram icon"></i>
            <i class="fa-brands fa-twitter icon"></i>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
            </ul>
          </div>

          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
            </ul>
          </div>

          <div className="bxo">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => {
              return (
                <div className="items flexSB">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <span>
                      <i className="fa fa-user"></i>
                      <label htmlFor="">{val.type} </label>
                    </span>
                    <span>
                      <i className="fa fa-calendar"></i>
                      <label htmlFor="">{val.date} </label>
                    </span>
                    <h4>{val.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                203 Fake ST. Mount View , san francisio california ,USA
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +123 456 7898
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                example@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright &copy;2022 All rights reserved | This template is made with  
          <i className="fa fa-heart"></i> by GorkhCoder
        </p>
      </div>
    </>
  );
};

export default Footer;
