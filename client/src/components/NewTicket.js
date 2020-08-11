import React, { useState } from 'react';
import useRequest from '../hooks/useRequest';
import { useDispatch } from 'react-redux';
import { addTicket } from '../store/tickets/actions';

const NewTicket = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(0);
  const dispatch = useDispatch();
  const onBlur = () => {
    const value = parseFloat(price);

    if (Number.isNaN(value)) return;

    setPrice(value.toFixed(2));
    return true;
  };
  const { errors, doRequest } = useRequest({
    url: '/api/tickets',
    method: 'post',
    body: { title, price },
    onSuccess: (data) => {
      console.log('data', data);
      dispatch(addTicket(data));
      setTitle('');
      setPrice('');
    },
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(1);
    await doRequest();
    setLoading(0);
  };
  return (
    <div>
      <h1>Create a Ticket</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">
            Title
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="price">
            Price
            <input
              value={price}
              onBlur={onBlur}
              onChange={(e) => setPrice(e.target.value)}
              className="form-control"
            />
          </label>
        </div>
        {errors}
        <button disabled={loading} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewTicket;
