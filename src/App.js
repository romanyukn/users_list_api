import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Pagination from './components/Pagination';
import UsersList from './components/UsersList';

function App() {
  return (
    <Router>
      <Route path="/:page" render={(props) => <UsersList {...props}/>} />
      <Pagination/>
    </Router>
  );
}

export default App;
