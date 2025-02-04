import { AppBar, Avatar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import c from './Sidebar.module.css';
import { signOut } from "firebase/auth";
import { authInfo } from '../firebase/firebase-config';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { logOut } from '../redux/authSlice';


const Header:React.FC = () => {
  const dispath = useAppDispatch()
  const logOutUser = async() =>{
    await signOut(authInfo)
    dispath(logOut())
  }
  const isAuth = useAppSelector((state)=>{
    const {auth} = state
    return auth.isAuth
  }) 
   
  return (
    <header className='header'>
      <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" size='small'  color="inherit" aria-label="menu">
    <img
          className='logo'
          src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/creative-logo-or-icon-design-template-d6cdd0b35fc4b69ddc3288a7abd52ff3_screen.jpg?ts=1578260767'
          alt='logo'
        />
    </IconButton>
    <Typography variant="h6" className={c.title}>
      React App
    </Typography>
    {isAuth ? 
      <div className={c.smallUserInfo}>
        <Avatar 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSheI9UkWllIpSNbs2UdE18KLLswgDON9qzXg&usqp=CAU' alt='avatar'
        />
        <Button color="inherit" onClick={logOutUser}>LogOut</Button>
      </div>
         : null}
  </Toolbar>
</AppBar>
    </header>
  );
};

export default Header;
