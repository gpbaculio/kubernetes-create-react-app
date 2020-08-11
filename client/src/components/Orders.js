import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Axios from 'axios';

const Orders = () => {
  const [loading, setLoading] = useState(0);
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getOrders = async () => {
      setLoading(1);
      const { data } = await Axios.get('/api/orders');
      setOrders(data);
      setLoading(0);
    };
    getOrders();
  }, [dispatch]);
  return (
    <ul>
      {orders.map((o) => (
        <li key={o.id}>
          {o.ticket.title}:{o.status}
        </li>
      ))}
    </ul>
  );
};

export default Orders;
