import { Redirect } from 'react-router';
import { useAppSelector } from '../redux/store';
import LoginForm from './LoginForm';

const LoginPage:React.FC = () => {
  const isAuth = useAppSelector((state)=>{
    const {auth} = state
    return auth.isAuth
  })
  return <>{isAuth ? <Redirect to='/profile'/>  : <LoginForm/>}</>;
};

export default LoginPage;
