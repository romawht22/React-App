import React from 'react';
import c from './UserPage.module.css';
import { NavLink } from 'react-router-dom';

type PropsType={
  name:string
  img:string
  id:number
}

const User:React.FC<PropsType> = ({ name, img, id }) => {
  return (
    <div className={c.user}>
      <div className={c.imgBlock}>
        <img src={img} className={c.userImg} alt='asd' />
      </div>
      <div className={c.userInfo}>
        <NavLink to={`/users/${id}`}>
          <h2>{name}</h2>
        </NavLink>
      </div>
    </div>
  );
};

export default User;
