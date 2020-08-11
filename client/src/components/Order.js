import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { useSelector } from 'react-redux';
import useRequest from '../hooks/useRequest';

const Order = () => {
  const { user } = useSelector((state) => state.user);
  const history = useHistory();
  const {
    state: { order },
  } = useLocation();
  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id,
    },
    onSuccess: (response) => {
      console.log('response: ', response);
      history.push('/orders');
    },
  });
  const [timeLeft, setTimeLeft] = useState('');
  useEffect(() => {
    const getTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };
    getTimeLeft();
    const timerId = setInterval(getTimeLeft, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [order.expiresAt]);
  if (timeLeft < 0) return <div>Order expired</div>;
  return (
    <div>
      {timeLeft} seconds left to pay
      <StripeCheckout
        token={({ id }) => doRequest({ token: id })}
        stripeKey={'pk_test_6JM54c0kGpnXss9Y1WkpTs9N00LXZ43PrV'}
        amount={order.ticket.price * 100}
        email={user && user.email}
      />
    </div>
  );
};

export default Order;
