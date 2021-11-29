import { UsersActionTypes } from './actions';
import { SET_CURRENT_PAGE, SET_NEW_USERS, SET_USERS } from './types';

export type UserType={
login:string,
id:number,
avatar_url:string
}
type InitialStateType={
  users:Array<UserType>,
  selectedPage:number
}

const initialState:InitialStateType = {
  users: [],
  selectedPage: 1,
};


const userPageReducer = (state = initialState, action:UsersActionTypes):InitialStateType => {
  switch (action.type) {
    case SET_USERS: {
      const setUsers = action.data.map((user:UserType) => {
        return {
          login: user.login,
          id: user.id,
          avatar_url: user.avatar_url,
        };
      });
      return {
        ...state,
        users: [...setUsers],
      };
    }
    case SET_NEW_USERS: {
      const setUsers = action.data.map((user:UserType) => {
        return {
          login: user.login,
          id: user.id,
          avatar_url: user.avatar_url,
        };
      });
      return {
        ...state,
        users: [...setUsers],
      };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, selectedPage: action.currentPage };
    }
    default:
      return state;
  }
};
export default userPageReducer;
