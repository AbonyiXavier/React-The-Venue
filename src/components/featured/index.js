import React from "react";
import Carousel from "./Carrousel";
import CountTimer from "./CountTimer";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel />

      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>

      <CountTimer />
    </div>
  );
};

export default Featured;
