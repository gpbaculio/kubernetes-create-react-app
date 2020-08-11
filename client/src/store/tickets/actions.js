const { ADD_TICKET, ADD_TICKETS, ON_LOG_OUT } = require('./constants');

export const addTicket = (ticket) => ({
  type: ADD_TICKET,
  payload: { ticket },
});

export const addTickets = (tickets) => ({
  type: ADD_TICKETS,
  payload: { tickets },
});

export const onLogout = () => ({ type: ON_LOG_OUT });
