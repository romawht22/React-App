import { Button} from '@material-ui/core'
import React,{useState} from 'react'
import SignIn from './SignIn'
import Login from './Login'
import c from './Login.module.css'

const LoginForm:React.FC = () => {
  const [isRegister,setRegister] = useState(true)
    return (
        <div >
            <h1>Auth Required</h1>
            <Button type='submit' variant="contained" onClick={()=>setRegister(true)}>SignIn</Button>
            <Button type='submit' variant="contained" onClick={()=>setRegister(false)}>LogIn</Button>
            <button type="button" className={`${c.loginWithGoogleBtn}`}>
                Sign in with Google
            </button>
            {isRegister?<SignIn/>:<Login/>}
        </div>
    )
}

export default LoginForm
