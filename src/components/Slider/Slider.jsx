import { useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./Slider.css";

export const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <FaChevronLeft className="left-arrow" onClick={prevSlide} />
      <FaChevronRight className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"} key={index}>
            {index === current && <img src={slide.image} alt="travel image" className="image" />}
          </div>
        );
      })}
    </section>
  );
};
