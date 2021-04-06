import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import UsersList from './components/UsersList';

function App() {
  return (
    <Router>
      <Route path="/:page" render={(props) => <UsersList perPage={3} />} />
    </Router>
  );
}

export default App;
