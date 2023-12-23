import React from "react";
import PriceCard from "../Price/PriceCard";
import Title from "../common/title/Title";

const Hprice = () => {
  return (
    <>
      <section className="hprice padding">
        <Title subtitle="our pricing" title="pricing & packages" />
        <div className="container grid price ">
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Hprice;
