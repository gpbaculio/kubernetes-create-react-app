import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import user from './user/reducers';
import tickets from './tickets/reducers';

const reducer = combineReducers({ user, tickets });

const configureStore = () => {
  const store = createStore(reducer, composeWithDevTools());

  return store;
};

export default configureStore;
