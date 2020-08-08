import React from 'react';
import { useSelector } from 'react-redux';
import NewTicket from './NewTicket';

const Homepage = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="d-flex flex-column">Homepage{user && <NewTicket />}</div>
  );
};

export default Homepage;
