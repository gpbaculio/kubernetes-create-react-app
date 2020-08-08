import React, { useState } from 'react';
import styled from 'styled-components';
import useRequest from '../hooks/useRequest';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email,
      password,
    },
  });
  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up now</h1>
      <div className="form-group">
        <label htmlFor="email">
          Email Address
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="password">
          Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
          />
        </label>
      </div>
      {errors}
      <Button>Sign Up now 23123</Button>
    </form>
  );
};

export default Signup;
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
