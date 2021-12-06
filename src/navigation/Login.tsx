import { Button, TextField } from '@material-ui/core'
import c from './Login.module.css'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAppDispatch } from '../redux/store';
import { logIn, setUserInfo } from '../redux/authSlice';
import {  signInWithEmailAndPassword } from 'firebase/auth'
import { authInfo } from '../firebase/firebase-config';





const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
  });

const Login = () => {
  const dispatch = useAppDispatch()
  const login =  async(email:string,password:string)=>{
    await signInWithEmailAndPassword(authInfo,email,password).then(()=>dispatch(logIn()))
    }
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          dispatch(setUserInfo({
            email:values.email,
            password:values.password
          }))
          login(values.email,values.password)
        },
      });
    return (
        <div>
            <form className={c.loginForm} onSubmit={formik.handleSubmit}>
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
            <Button type='submit' color='primary' variant="contained">LogIn</Button>
            </form>
        </div>
    )
}

export default Login
