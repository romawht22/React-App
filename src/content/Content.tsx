import React from 'react';
import Posts from './Posts';
import classes from './Content.module.css';
import Profile from './Profile';
import { Redirect } from 'react-router-dom';
import { useAppSelector } from '../redux/store';
const Content:React.FC = () => {
  const isAuth = useAppSelector((state)=>{
    const {auth} = state
    return auth.isAuth
  })
  console.log(isAuth);
   
 
  return (
    <>
      {isAuth ? (
        <div className={classes.content}>
          <Profile />
          <div className={classes.posts}>
            <Posts/>
          </div>
        </div>
      ) : (
        <Redirect to='/login' />
      )}
    </>
  );
};

export default Content;
