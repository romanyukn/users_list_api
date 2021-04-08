import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import User from './User';
import getUsers from '../services/getUsers';
import getUser from '../services/getUser';
import Pagination from './Pagination';
import UserCard from './UserCard';

function UsersList(props) {
  const [users, setUsers] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [showUser, setShowUser] = useState(false);
  const [userToShow, setUserToShow] = useState({id: ''});
  const { page } = useParams();
  
  useEffect(async () => { 
    const { data } = await getUsers(page, props.perPage);
    setNumberOfPages(data.total_pages);
    setCurrentPage(data.page);
    setUsers(data.data);
  }, []);

  async function showUserCard(id) {
    const { data } = await getUser(id);
    setUserToShow({id: data.data.id});
    setShowUser(true);
  }

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
          {users.map(user =>
            <User 
              key={user.id}
              id={user.id}
              email={user.email}
              first_name={user.first_name}
              last_name={user.last_name}
              showUser={showUserCard} 
            />)}
        </tbody>  
      </table>
      {showUser && <UserCard id={userToShow.id}/>}
      <Pagination totalPages={numberOfPages} currentPage={currentPage}/>
    </React.Fragment>
  )
}

export default UsersList;
