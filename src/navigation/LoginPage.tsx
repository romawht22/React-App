import { Redirect } from 'react-router';
import { useAppSelector } from '../redux/store';

const LoginPage:React.FC = () => {
  const isAuth = useAppSelector((state) => {
    const { auth } = state;
    return auth.isAuth;
  });
  return <>{isAuth ? <Redirect to='/profile' /> : <div>Please Login</div>}</>;
};

export default LoginPage;
