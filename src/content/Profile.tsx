import { Input} from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
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
        <img src='https://tinypng.com/images/social/website.jpg' alt='panda' />
      </div>
      <div className={`${classes.bio}`}>
        <h1>Roma White</h1>
        <p>Date of Birth: 24 august</p>
        <p>City: 2Risk</p>
        <p>Education: Self-Educated</p>
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
