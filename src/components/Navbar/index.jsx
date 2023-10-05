/* eslint-disable no-unused-vars */
import React from 'react';
import data from './data';
import { Link, Outlet } from 'react-router-dom';
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
              {item.children && (
                <ul className="dropdown-children">
                  {item.children.map((item_children, index_children) => (
                    <li key={index_children} className="dropdown-children__item">
                      <Link to={item_children.to} className="dropdown-children__item__link">
                        {item_children.lable}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
