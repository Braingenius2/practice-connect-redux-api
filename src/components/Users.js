import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchUsers } from '../redux/users/usersSlice';

const Users = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    console.log('I dispatched');
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={uuidv4()}>
            {user.name.first}
            {' '}
            {user.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
