import React from "react";

import "./Hero.css";
import Title from "../../common/title/Title";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education' />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur itaque molestias eius ullam quam obcaecati totam
              doloribus voluptas dicta in nihil provident neque, nam, expedita
              consequatur facilis molestiae sed corporis explicabo hic! Aut,
              eaque repellendus!
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="marign"></div>
    </>
  );
};

export default Hero;
