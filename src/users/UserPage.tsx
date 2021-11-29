import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { setUsers } from '../redux/actions';
import { useAppDispatch, useAppSelector } from '../redux/store';
import Paginator from './Paginator';
import User from './User';
import c from './UserPage.module.css';

const UserPage:React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => {
    const { users } = state;
    return users.users;
  });
  useEffect(() => {
    dispatch(setUsers());
  }, [dispatch]);
  return (
    <div className={c.wrapper}>
     <Typography variant="h4" component="span">
       Users:
     </Typography>
      <div>
        {users.map((user) => { 
          return (
            <User name={user.login} key={user.id} id={user.id} img={user.avatar_url} />
          );
        })}
      </div>
      <div className={c.paginator}>
      <Paginator totalUsersCount={150} pageSize={5} />
      </div>
    </div>
  );
};

export default UserPage;
