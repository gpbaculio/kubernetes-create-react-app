import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Signup from './components/Signup';
import Header from './components/Header';
import Signin from './components/Signin';
import { setUser } from './store/user/actions';
import Homepage from './components/Homepage';
import Ticket from './components/Ticket';
import Order from './components/Order';
import NewTicket from './components/NewTicket';
import Orders from './components/Orders';
import { UserRoute, GuestRoute } from './components/Routes';

function App() {
  const [loading, setLoading] = useState(0);

  const { user } = useSelector(({ user }) => ({ user }));
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      setLoading(1);
      const { data } = await Axios.get('/api/users/currentuser');
      dispatch(setUser(data.currentUser));
      setLoading(0);
    };
    getUser();
  }, [dispatch]);
  return (
    <Router>
      <AppContainer loading={loading}>
        <Header isAuth={user.user} />
        <div className="container">
          <Switch>
            <GuestRoute
              exact
              isAuth={user.user}
              path="/auth/signup"
              component={Signup}
            />
            <GuestRoute
              exact
              isAuth={user.user}
              path="/auth/signin"
              component={Signin}
            />
            <UserRoute
              exact
              isAuth={user.user}
              path="/tickets/new"
              component={NewTicket}
            />
            <UserRoute
              exact
              isAuth={user.user}
              path="/tickets/:ticketId"
              component={Ticket}
            />
            <UserRoute
              exact
              isAuth={user.user}
              path="/orders/:orderId"
              component={Order}
            />
            <UserRoute
              exact
              isAuth={user.user}
              path="/orders"
              component={Orders}
            />
            <UserRoute exact isAuth={user.user} path="/" component={Homepage} />
          </Switch>
        </div>
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.loading ? 0.5 : 1)};
`;

export default App;
