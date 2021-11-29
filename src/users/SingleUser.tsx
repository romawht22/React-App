import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import c from './UserPage.module.css';

type UseParamsType = {
    userId:string
}
type SingleUserFetchType = {
    id:number
    login:string
    avatar_url:string
}[]
type SingleUserType = {
    id?:number
    name:string
    img:string
}
const SingleUser = () => {
    const {userId} = useParams<UseParamsType>()
    
    const [user,setUser] = useState<SingleUserType>({name:'asd',img:'wht'})
    useEffect(()=>{
        const  fetchUser=async():Promise<SingleUserFetchType>=>{
            const resp = await fetch(`https://api.github.com/users?since=${+userId-1}&per_page=1`)
            const data = resp.json()
            return data
             
        }
        fetchUser().then((data)=>{
            data.map((user:any)=>{
                const {login:name,avatar_url:img} = user
                const newUser:SingleUserType = {name,img}
                return setUser(newUser)
            })        
        })
    },[userId])
    return(
        <div className={c.user}>
      <div className={c.imgBlock}>
        <img src={user.img} className={c.userImg} alt='asd' />
      </div>
      <div className={c.userInfo}>
          <h2>{user.name}</h2>
      </div>
    </div>
    )
}

export default SingleUser
