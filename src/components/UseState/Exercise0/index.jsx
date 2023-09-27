/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './style.scss';

const Count = () => {
  const [count, setCount] = useState(0);
  const handleIncreaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecreasedCount = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <section className="container">
        <h1 className="container__title">COUNT: {count}</h1>
        <div className="container__menu-button">
          <button
            type="button"
            className="container__menu-button__item"
            onClick={handleIncreaseCount}
          >
            Increase Count
          </button>
          <button
            type="button"
            className="container__menu-button__item"
            onClick={handleDecreasedCount}
          >
            Decreased Count
          </button>
        </div>
      </section>
    </>
  );
};

export default Count;
