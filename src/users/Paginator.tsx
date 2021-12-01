import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import c from './UserPage.module.css';
import {setNewUsers,setCurrentPage} from '../redux/userPageSlice'

type PropsType = {
  totalUsersCount:number
  pageSize:number
  portionSize?:number
}

const Paginator:React.FC<PropsType> = ({ totalUsersCount, pageSize, portionSize = 5 }) => {
  const dispatch = useAppDispatch();
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages:Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const portionCount = Math.ceil(pagesCount / portionSize);
  const activePage = useAppSelector((state) => {
    const { users } = state;
    return users.selectedPage;
  });
  const onPageChanged = async (p:number) => {
    const resp = await fetch(
      `https://api.github.com/users?per_page=3&since=${activePage}`
    );
    const data = await resp.json();
    dispatch(setCurrentPage(p));
    dispatch(setNewUsers(data));
  };
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionNumber = portionNumber * portionSize;
  return (
    <div className={c.pages}>
      {portionNumber > 1 && (
        <Button variant='outlined' color='primary' size='small' onClick={() => setPortionNumber(portionNumber - 1)}>
          prev
        </Button>
      )}
      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionNumber)
        .map((p) => {
          return (
            <span
              className={`${activePage === p && c.selected}`}
              key={p}
              onClick={(e) => onPageChanged(p)}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <Button color='primary' size='small' variant='outlined' onClick={() => setPortionNumber(portionNumber + 1)}>
        next
      </Button>
      )}
    </div>
  );
};

export default Paginator;
