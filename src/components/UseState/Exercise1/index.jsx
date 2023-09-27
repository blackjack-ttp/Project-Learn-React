/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import LOGO from '@/assets/BLACKJACK-TTP.png';
import './style.scss';

const FlagImage = () => {
  const [flag, setFlag] = useState(false);
  const handleFlagImage = () => {
    setFlag(!flag);
  };
  return (
    <>
      <section className="container">
        {flag && <img src={LOGO} about="image" className="container__image" />}
        <button onClick={handleFlagImage} className="container__btn-show-image">
          Show Image
        </button>
      </section>
    </>
  );
};

export default FlagImage;
