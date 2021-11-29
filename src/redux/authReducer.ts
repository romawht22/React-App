import { LOG_IN, LOG_OUT } from './types';

export type InitialStateType ={
  isAuth:boolean
}

const initialState:InitialStateType = {
  isAuth: false,
};

const authReducer = (state = initialState, action:any):InitialStateType => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isAuth: true};
    case LOG_OUT:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
export default authReducer;
