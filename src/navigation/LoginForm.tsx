import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { logIn, setUserInfo } from '../redux/authSlice'
import { useAppDispatch} from '../redux/store'
import c from './Login.module.css'
import { useFormik } from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object({
  login: yup.string().required('Login is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
});
const LoginForm:React.FC = () => {
  const formik = useFormik({
    initialValues: {
      login: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(setUserInfo({
        login:values.login,
        email:values.email
      }))
     loginHandler()
    },
  });
  
    const dispatch = useAppDispatch()
  const loginHandler = () => {
    dispatch(logIn())
  };
    return (
        <div >
            <h1>Auth Required</h1>
            <form className={c.loginForm} onSubmit={formik.handleSubmit}>
            <TextField
            fullWidth 
            name='login'
            id='login'
            error={formik.touched.login && Boolean(formik.errors.login)}
            helperText={formik.touched.login && formik.errors.login}
            value={formik.values.login}  onChange={formik.handleChange}  label="Login" variant="filled" />
             <TextField 
            name='email'
            id='email'
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            value={formik.values.email}  onChange={formik.handleChange}  label="Email" variant="filled" />
            <TextField 
            name='password'
            id='password'
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            value={formik.values.password}  onChange={formik.handleChange} label="Password" variant="filled" type="password" />
            <Button type='submit' variant="contained" >LogIn</Button>
            </form>
        </div>
    )
}

export default LoginForm
