import axios from 'axios';
import React, { useState, useEffect } from 'react';
import User from './User';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=2')
    .then((res) =>{ 
      setUsers(res.data.data); 
    })
    .catch((err) => { console.log(err) })
  })

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
