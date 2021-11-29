import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { loginUser, logoutUser } from '../redux/actions';
import {useAppDispatch, useAppSelector } from '../redux/store'
import c from './Sidebar.module.css';

const Header:React.FC = () => {
// Use throughout your app instead of plain `useDispatch` and `useSelector`
 const dispatch = useAppDispatch()
  const isAuth = useAppSelector((state) => {
    const { auth } = state;
    return auth.isAuth;
  });
  const loginHandler = () => {
    dispatch(loginUser())
  };
  const logoutHandler = () => {
    dispatch(logoutUser());
  };
  return (
    <header className='header'>
      {/* <div>
        <img
          className='logo'
          src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/creative-logo-or-icon-design-template-d6cdd0b35fc4b69ddc3288a7abd52ff3_screen.jpg?ts=1578260767'
          alt='logo'
        />
      </div>
      <div>
        {isAuth ? (
          <button onClick={logoutHandler}>LogOut</button>
        ) : (
          <button onClick={loginHandler}>LogIn</button>
        )}
      </div> */}
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
