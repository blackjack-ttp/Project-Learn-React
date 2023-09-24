/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './style.scss';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import ImageSliderData from './data';

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = ImageSliderData.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const moveDot = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 1000);
    return () => {
      clearInterval(slider);
    };
  }, [current, length]);
  return (
    <>
      <section className="slider">
        <FaArrowAltCircleLeft
          className="slider__leftArrow"
          onClick={prevSlide}
          direction={'prev'}
        />
        <FaArrowAltCircleRight
          className="slider__rightArrow"
          onClick={nextSlide}
          direction={'next'}
        />
        {ImageSliderData.map((item, index) => {
          return (
            <div
              key={index}
              className={index === current ? 'slider__item slider__item__active' : 'slider__item'}
            >
              <img src={item.image} key={index} alt={item.title} className="slider__item__image" />
              <div className="slider__item__itemContent">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Slider;
