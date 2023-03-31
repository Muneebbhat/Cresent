import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./imageSlider.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import data from "../../assets/local-data/Data.json";

const ImageSlider = () => {
  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FiChevronLeft fontSize="30px" color="white" />
      </div>
    );
  };

  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FiChevronRight style={{ color: "white", fontSize: "30px" }} />
      </div>
    );
  };
  return (
    <div style={{}}>
      <Slider dots={true} prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} >
        {data.images.map((currImg, i) => (
          <div key={i}>
            <img
              src={currImg}
              alt="Image"
              style={{ width: "100%", height: "500px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
