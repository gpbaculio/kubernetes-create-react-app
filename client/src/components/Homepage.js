import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewTicket from './NewTicket';

import Axios from 'axios';
import { normalize } from 'normalizr';
import { ticket } from '../normalizr/schemas';
import { addTickets } from '../store/tickets/actions';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const { user, tickets } = useSelector(({ user, tickets }) => ({
    user,
    tickets,
  }));
  const [loading, setLoading] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const getTickets = async () => {
      setLoading(1);
      const { data } = await Axios.get('/api/tickets');
      const { entities } = normalize(data, [ticket]);
      dispatch(addTickets(entities.tickets));
      setLoading(0);
    };
    console.log('homepage');
    if (user.user) getTickets();
  }, [dispatch, user.user]);
  const UserTable = () => {
    const ticketList = Object.values(tickets).map((ticket) => (
      <tr key={ticket.id}>
        <td>
          <Link to={`/tickets/${ticket.id}`}>{ticket.title} </Link>
        </td>
        <td>{ticket.price}</td>
      </tr>
    ));
    return (
      <div>
        <h4>Your tickets</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{ticketList}</tbody>
        </table>
      </div>
    );
  };
  console.log('user ', user);
  return (
    <Container loading={loading} className="d-flex flex-column">
      <h3>{user.user ? `You&apos;re signed in!` : `You're signed out`}</h3>
      {user.user && (
        <>
          <NewTicket />
          <UserTable />
        </>
      )}
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
  background-color: ${(props) => (props.loading ? 0.5 : 1)};
`;
