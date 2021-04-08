import React from 'react';

function UserCard({id}) {
  return (
  <div id="modalId" className="modal" tabIndex="-1" role="dialog" stye={'display: block'}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Profile</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <p>ID: {id}</p>
          <p>First Name:</p> 
          <p>Last Name:</p>
          <p>Email:</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserCard;
