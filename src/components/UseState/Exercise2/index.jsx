/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './style.scss';

const ChangeStyleColor = () => {
  const [colors, setColors] = useState([
    { colorId: 0, colorName: 'blue' },
    { colorId: 1, colorName: 'red' },
    { colorId: 2, colorName: 'green' },
    { colorId: 3, colorName: 'yellow' },
    { colorId: 4, colorName: 'orange' },
    { colorId: 5, colorName: 'pink' },
  ]);

  const [currentColorId, setCurrentColorId] = useState(0);

  const handleChangeColor = () => {
    setCurrentColorId((prevId) => (prevId + 1) % colors.length);
  };

  const currentColor = colors.find((color) => color.colorId === currentColorId);

  return (
    <>
      <section className="container">
        {currentColor && (
          <div className="container__title">
            <h1>Current color:</h1>
            <p style={{ color: currentColor.colorName }} className="container__title__color">
              {currentColor.colorName}
            </p>
          </div>
        )}
        <button onClick={handleChangeColor} className="container__btn-change-color">
          Change color
        </button>
      </section>
    </>
  );
};

export default ChangeStyleColor;
