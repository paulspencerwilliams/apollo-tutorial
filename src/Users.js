import React from "react";
import './Users.scss';

function Users(props) {
  return (
      props.users.map(user => (
          <li key={user.id}>{user.firstName} {user.lastName}</li>
      ))
  )
}

export default Users;
