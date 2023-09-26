/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.scss';

const Exercise1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFetchData = async (param) => {
    setLoading(true);
    return axios
      .get(`https://jsonplaceholder.typicode.com/${param}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    handleFetchData('users');
  }, []);
  return (
    <>
      <section className="container">
        <h1>Exercise 1</h1>
        <div className="container__menu">
          <button onClick={() => handleFetchData('users')}>Users</button>
          <button onClick={() => handleFetchData('posts')}>Posts</button>
          <button onClick={() => handleFetchData('comments')}>Comments</button>
          <button onClick={() => handleFetchData('todos')}>Todos</button>
        </div>
        {loading ? (
          <div className="container__loader">
            <p>...Loading...</p>
          </div>
        ) : (
          <div className="container__data">
            <ul className="container__data__item">
              {data.map((item, index) => (
                <li key={index} className="container__data__item__content">
                  {item.name || item.title || item.body}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
};

export default Exercise1;
