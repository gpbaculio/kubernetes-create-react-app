import { SET_USER, ON_LOG_OUT } from './constants';

const initialState = {
  user: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case ON_LOG_OUT:
      return {};
    default:
      return state;
  }
};

export default reducers;
