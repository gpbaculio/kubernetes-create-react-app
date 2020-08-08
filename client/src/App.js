import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Signup from './components/Signup';
import Header from './components/Header';
import Signin from './components/Signin';
import NewTicket from './components/NewTicket';

function App() {
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
