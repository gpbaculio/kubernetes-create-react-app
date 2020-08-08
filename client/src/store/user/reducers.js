import { SET_USER } from './constants';

const initialState = {
  user: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default reducers;
