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
    }, 2000);
    return () => {
      clearInterval(slider);
    };
  }, [current, length]);
  return (
    <>
      <section className="slider">
        <FaArrowAltCircleLeft className="slider__leftArrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="slider__rightArrow" onClick={nextSlide} />
        {ImageSliderData.map((item, index) => {
          return (
            <div
              key={index}
              className={index === current ? 'slider__item slider__item--active' : 'slider__item'}
            >
              {index === current && (
                <>
                  <img
                    src={item.image}
                    key={index}
                    alt={item.title}
                    className="slider__item__image"
                  />
                  <div className="slider__item__itemContent">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
        <div className="slider__container-dots">
          {Array.from({ length: 5 }).map((item, index) => (
            <div
              onClick={() => moveDot(index)}
              className={
                current === index
                  ? 'slider__container-dots__dot slider__container-dots__dot--active'
                  : 'slider__container-dots__dot'
              }
            ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Slider;
