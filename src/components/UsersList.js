import React, { useState, useEffect } from 'react';
import User from './User';
import getUsers from '../services/getUsers';

function UsersList(props) {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState();

  // setCurrentPage(props.match.params.page);
  console.log(props.match.params.page);
  
  useEffect(async () => {
    const res = await getUsers(props.match.params.page);
    setUsers(res.data.data);
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => <User key={user.id} id={user.id} email={user.email} first_name={user.first_name} last_name={user.last_name} />)}
      </tbody>  
    </table>
  )
}

export default UsersList;
