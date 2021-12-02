import { Input} from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { useAppSelector } from '../redux/store';
import classes from './Content.module.css';
import SnackBar from './SnackBar';

const Profile:React.FC = () => {
  const [status, setStatus] = useState('hello this is my status');
  const [editMode, setEditMode] = useState(false);
  const [isSnackOpen,setisSnackOpen] = useState(false)
  const editModeHandler = () => {
    setEditMode(true);
  };
  const statusHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };
  const blurHandler = () =>{
    setEditMode(false)
    setisSnackOpen(true)
  }
  const userInfo = useAppSelector((store)=>{
    const {auth} = store
    return auth.userInfo
  })
  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setisSnackOpen(false);
  };
  return (
    <div className={classes.userInfo}>
      <div className='avatar'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSheI9UkWllIpSNbs2UdE18KLLswgDON9qzXg&usqp=CAU' alt='avatar' />
      </div>
      <div className={`${classes.bio}`}>
        <h1>{userInfo.login}</h1>
        <p>Email:{userInfo.email}</p>
        <p>Website: https://some-site.com</p>
        <p>Status:</p>
        {editMode ? (
          <Input 
          value={status}
          onBlur={blurHandler}
          onChange={statusHandler}
          autoFocus={true}
           />
        ) : (
          <span onDoubleClick={editModeHandler}>{status}</span>
        )}
      </div>
      <SnackBar open={isSnackOpen} close={handleClose} message={'Status Changed!'}/>
    </div>
  );
};

export default Profile;
