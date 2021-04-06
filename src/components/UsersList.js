import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import User from './User';
import getUsers from '../services/getUsers';
import Pagination from './Pagination';

function UsersList(props) {
  const [users, setUsers] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();
  const [currentPage, setCurrentPage] = useState();
  const { page } = useParams();
  
  useEffect(async () => { 
    const res = await getUsers(page, props.perPage);
    setNumberOfPages(res.data.total_pages);
    setCurrentPage(res.data.page);
    setUsers(res.data.data);
  }, []);

  return (
    <React.Fragment>
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
      <Pagination totalPages={numberOfPages} currentPage={currentPage}/>
    </React.Fragment>
  )
}

export default UsersList;
