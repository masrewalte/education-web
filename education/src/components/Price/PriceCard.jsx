import React from "react";
import "./Price.css";
import { price } from "../../dummydata";

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className="items shadow">
          <h4>{val.name} </h4>
          <h1>
            <span>$</span>
            {val.price}
          </h1>
          <p>{val.desc} </p>
          <button className="online-btn">GET STARTED</button>
        </div>
      ))}
    </>
  );
};

export default PriceCard;
