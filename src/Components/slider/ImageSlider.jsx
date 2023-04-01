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

  const sliderProperties = {
    dots: true,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="main_slider">
      <Slider {...sliderProperties}>
        {data.images.map((currImg, i) => (
          <div key={i} className="iamge_slider_wrapper">
            <img
              src={currImg}
              alt="Image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
