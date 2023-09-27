/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Form from './form_item';
import data from './data';
import './style.scss';

const FormRegister = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <section className="container">
        <form action="" onSubmit={handleSubmit}>
          <h1 className="container__title">Register</h1>
          {data.map((item, index) => (
            <Form
              key={index}
              {...item}
              placeholder={item.placeholder}
              value={values[item.name]}
              onChange={onChange}
            />
          ))}
          <button>Submit</button>
        </form>
      </section>
    </>
  );
};

export default FormRegister;
