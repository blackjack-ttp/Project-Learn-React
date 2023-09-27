/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.scss';

const Project1 = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const handleFetchData = async () => {
    setLoading(true);
    return axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClearSearch = () => {
    setSearch('');
  };

  const filterData = data
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });

  useEffect(() => {
    handleFetchData();
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="container__title">Project Search Data</h1>
        <div className="container__search">
          <h1>Search</h1>
          <input
            type="text"
            placeholder="Enter the name you want to search"
            value={search}
            onChange={handleChange}
          />
          <button onClick={handleClearSearch}>Clear</button>
        </div>
        {loading ? (
          <div className="container__loader">
            <p>...LOADING...</p>
          </div>
        ) : (
          <div className="container__data">
            <ul className="container__data__item">
              {filterData.map((item, index) => (
                <li key={index} className="container__data__item__content">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
        {error && (
          <div className="container__error">
            <p>...ERROR...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Project1;
