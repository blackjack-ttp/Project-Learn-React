/* eslint-disable no-unused-vars */
import React from 'react';

const Catogories = ({ categories, activeCategory, onFilterItems }) => {
  return (
    <>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              key={index}
              className={`${activeCategory === category ? 'filter-btn active' : 'filter-btn'}`}
              onClick={() => onFilterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Catogories;
