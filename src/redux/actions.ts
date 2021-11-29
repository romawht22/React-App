import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';
import {
  CreatePostActionType,
  CREATE_POST,
  InputTextActionType,
  INPUT_TEXT,
  LogInActionType,
  LogOutActionType,
  LOG_IN,
  LOG_OUT,
  SetCurrentPageActionType,
  SetNewUsersActionType,
  SetUsersActionType,
  SET_CURRENT_PAGE,
  SET_NEW_USERS,
  SET_USERS,
} from './types';

export type UsersActionTypes = InputTextActionType | SetNewUsersActionType | SetCurrentPageActionType | LogInActionType | LogOutActionType | SetUsersActionType | CreatePostActionType
export function createPost(post:{name:string,id:string}):CreatePostActionType {
  return {
    type: CREATE_POST,
    post,
  };
}
export function inputText(text:string):InputTextActionType {
  return {
    type: INPUT_TEXT,
    text,
  };
}

export function setUsers():ThunkAction<Promise<void>, RootState, unknown, UsersActionTypes>{
  return async (dispatch)=> {
    const res = await axios.get('https://api.github.com/users?per_page=3');
    const data = res.data;
    dispatch({
      type: SET_USERS,
      data,
    });
  };
}
export function loginUser():LogInActionType {
  return {
    type: LOG_IN,
  };
}
export function logoutUser():LogOutActionType {
  return {
    type: LOG_OUT,
  };
}
export function setNewUsers(data:{}[]):SetNewUsersActionType {
  return {
    type: SET_NEW_USERS,
    data,
  };
}
export function setCurrentPage(currentPage:number):SetCurrentPageActionType {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
}
