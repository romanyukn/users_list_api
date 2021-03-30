import React from 'react';

function User({id, email, first_name, last_name}) {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{email}</td>
      <td>{first_name}</td>
      <td>{last_name}</td>
    </tr>
  )
}

export default User;
