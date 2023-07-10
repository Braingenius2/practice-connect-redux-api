import React from 'react';
import { useSelector } from 'react-redux';

const Users = () => {
  const { usersData, isLoading, error } = useSelector((state) => state.users);

  if (isLoading) {
    return (
      <div>...Loading</div>
    );
  }

  if (error !== null) {
    return (
      <div>
        Error :
        { error }
      </div>
    );
  }

  return (
    <div>
      <ul>
        {usersData.map( user => (
          <li key={user.id.value}>
            {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
