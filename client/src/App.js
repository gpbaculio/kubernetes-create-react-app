import React, { useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Signup from './components/Signup';
import Header from './components/Header';
import Signin from './components/Signin';
import NewTicket from './components/NewTicket';

function App() {
  useEffect(() => {
    const getUser = async () => {
      const { data } = await Axios.get('/api/users/currentuser');
      console.log('data ', data);
    };
    getUser();
  }, []);
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/auth/signup">
            <Signup />
          </Route>
          <Route path="/auth/signin">
            <Signin />
          </Route>
          <Route path="/tickets/new">
            <NewTicket />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
