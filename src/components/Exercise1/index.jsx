/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.scss';

const Exercise1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
          <button onClick={() => handleFetchData('users')}>All Users</button>
          <button onClick={() => handleFetchData('posts')}>All Posts</button>
          <button onClick={() => handleFetchData('comments')}>All Comments</button>
          <button onClick={() => handleFetchData('todos')}>All Todos</button>
        </div>
        <div className="container__item">
          {loading && <div>Loading...</div>}
          <ul>
            {!loading &&
              data.map((item) => (
                <li key={item.id}>{item.name || item.title || item.body || ''}</li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Exercise1;
