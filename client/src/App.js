import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Signup from './components/Signup';
import Header from './components/Header';
import Signin from './components/Signin';
import { setUser } from './store/user/actions';
import Homepage from './components/Homepage';

function App() {
  const [loading, setLoading] = useState(0);
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
        <Header />
        <div className="container">
          <Switch>
            <Route path="/auth/signup">
              <Signup />
            </Route>
            <Route path="/auth/signin">
              <Signin />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  color: ${(props) => (props.loading ? 0.5 : 1)};
`;

export default App;
