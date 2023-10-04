/* eslint-disable no-unused-vars */
import React from 'react';
import data from './data';
import { Link } from 'react-router-dom';
import './style.scss';

const Navbar = () => {
  return (
    <>
      <div className="navbar-wrapper">
        <ul className="navbar-wrapper__menu">
          {data.map((item, index) => (
            <li key={index} className="navbar-wrapper__menu__item">
              <Link to={item.to} className="navbar-wrapper__menu__item__link">
                {item.lable}
              </Link>
              {item.chirder && (
                <ul className="dropdown-chirder">
                  {
                    item.chirder.map((item, index) => (
                      <li key={index} className="dropdown-chirder__item">
                        <Link to={item.to} className="dropdown-chirder__item__link">
                          {item.lable}
                        </Link>
                      </li>
                    ))
                  }
                </ul>)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
