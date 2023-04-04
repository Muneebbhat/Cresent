import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./franchiseSlider.css";
import { FranchiseSection } from "./franchiseStyle";
import { Title } from "../../Components/index";
import FranchiseCard from "./FranchiseCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Franchise = ({modelHandler}) => {
  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FiChevronLeft className="left_arrow" />
      </div>
    );
  };

  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FiChevronRight className="right_arrow" />
      </div>
    );
  };

  const sliderProperties = {
    lazyLoad: true,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    autoplay: true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const mySlider = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <FranchiseSection>
      <Title title="Our Franchise" lineWidth={230} />
      <div className="franchise_slider_wrapper">
        <Slider  className="custom_slider" {...sliderProperties}>
          {mySlider.map((curr, i) => (
            <FranchiseCard key={i} modelHandler={modelHandler}/>
          ))}
        </Slider>
      </div>
    </FranchiseSection>
  );
};

export default Franchise;
