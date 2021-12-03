import { collection, getDocs } from '@firebase/firestore'
import React, { useEffect,useState } from 'react'
import db from '../firebase/firebase-config'

const Settings:React.FC = () => {
    type UserType ={
           login:string
           email:string
           id:string
    }
    const [users,setUsers] = useState<any>([])
console.log(process.env);
    useEffect(()=>{
        const getUsers = async()=>{
            const usersCollectionRef = collection(db,'users')
            const data  = await getDocs(usersCollectionRef)
            const fetchedUsers = data.docs.map((doc)=>({...doc.data(),id:doc.id}))
            setUsers(fetchedUsers)
        }
        getUsers()
    },[])
    return (
        <div>
            {users.map((user:UserType)=>{
                return <div key={user.id}>{user.login}</div>
            })}
        </div>
    )
}

export default Settings
