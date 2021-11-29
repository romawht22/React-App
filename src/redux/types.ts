export const CREATE_POST = 'CREATE_POST';
export const INPUT_TEXT = 'INPUT_TEXT';
export const SET_USERS = 'SET_USERS';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SET_NEW_USERS = 'SET_NEW_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export type CreatePostActionType = {
    type : typeof CREATE_POST
    post:{name:string,id:string}
  }
export type InputTextActionType = {
    type : typeof INPUT_TEXT
    text:string

  } 
  export type SetUsersActionType = {
    type : typeof SET_USERS
    data: any
  }
  export type LogInActionType = {
    type : typeof LOG_IN
  }
  export type LogOutActionType = {
    type : typeof LOG_OUT
  }
  export type SetNewUsersActionType = {
    type : typeof SET_NEW_USERS
    data: any
  }
  export type SetCurrentPageActionType = {
    type : typeof SET_CURRENT_PAGE
    currentPage:number
  }