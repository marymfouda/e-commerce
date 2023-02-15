import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../Component/images/new3.jpg";
import slider2 from "../Component/images/slid2.jpg";
import slider3 from "../Component/images/slid3.jpg";
const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="slider-background" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "700px", width: "1900px" }}
            className=""
            src={slider1}
            alt="First slide"
          />
        </div>
      </Carousel.Item>

      <Carousel.Item className="slider-background3" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "700px", width: "1900px" }}
            className=""
            src={slider2}
            alt="First slide"
          />
        </div>
      </Carousel.Item>

      <Carousel.Item className="slider-background4" interval={2000}>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img
            style={{ height: "700px", width: "1900px" }}
            className=""
            src={slider3}
            alt="First slide"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
