import { ADD_TICKET, ADD_TICKETS, ON_LOG_OUT } from './constants';

const reducers = (state = {}, action) => {
  switch (action.type) {
    case ADD_TICKET:
      const { ticket } = action.payload;
      return {
        ...state,
        [ticket.id]: ticket,
      };
    case ADD_TICKETS:
      //normalized tickets
      const { tickets } = action.payload;
      return {
        ...tickets,
      };
    case ON_LOG_OUT:
      return {};
    default:
      return state;
  }
};

export default reducers;
