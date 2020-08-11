import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import useRequest from '../hooks/useRequest';

const Ticket = () => {
  const { ticketId } = useParams();
  const [loading, setLoading] = useState(0);
  const [ticket, setTicket] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const getTicket = async () => {
      setLoading(1);
      const { data } = await Axios.get(`/api/tickets/${ticketId}`);
      setTicket(data);
      setLoading(0);
    };
    getTicket();
  }, [dispatch, ticketId]);
  const { doRequest, errors } = useRequest({
    url: '/api/orders',
    method: 'post',
    body: {
      ticketId,
    },
    onSuccess: async (order) => {
      try {
        const { data } = await Axios.get(`/api/orders/${order.id}`);
        history.push({
          pathname: `/orders/${order.id}`,
          state: { order: data },
        });
      } catch (error) {
        console.log('error:', error);
      }
    },
  });
  if (ticket) {
    return (
      <div>
        <h1>{ticket.title}</h1>
        <p>{ticket.price}</p>
        {errors}
        <button
          disabled={loading}
          onClick={() => doRequest()}
          className="btn btn-primary"
        >
          Purchase
        </button>
      </div>
    );
  } else return null;
};

export default Ticket;
