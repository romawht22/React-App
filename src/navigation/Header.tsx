import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import {useAppDispatch, useAppSelector } from '../redux/store'
import c from './Sidebar.module.css';
import {logIn,logOut} from '../redux/authSlice'

const Header:React.FC = () => {
 const dispatch = useAppDispatch()
  const isAuth = useAppSelector((state) => {
    const { auth } = state;
    return auth.isAuth;
  });
  const loginHandler = () => {
    dispatch(logIn())
  };
  const logoutHandler = () => {
    dispatch(logOut());
  };
  return (
    <header className='header'>
      <AppBar position="static">
  <Toolbar>
    <IconButton edge="start"  color="inherit" aria-label="menu">
    <img
          className='logo'
          src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/creative-logo-or-icon-design-template-d6cdd0b35fc4b69ddc3288a7abd52ff3_screen.jpg?ts=1578260767'
          alt='logo'
        />
    </IconButton>
    <Typography variant="h6" className={c.title}>
      React App
    </Typography>
    {isAuth ? (
          <Button color="inherit" onClick={logoutHandler}>LogOut</Button>
        ) : (
          <Button color="inherit" onClick={loginHandler}>LogIn</Button>
        )}
  </Toolbar>
</AppBar>
    </header>
  );
};

export default Header;
