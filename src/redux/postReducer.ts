import { UsersActionTypes } from './actions';
import { CREATE_POST } from './types';
type InitialStateType = {
  posts:{name:string,id:string}[]
}

const initialState:InitialStateType = {
  posts: [
    { name: 'post1', id: '1' },
    { name: 'post2', id: '2' },
  ],
};

const postsReducer = (state = initialState, action: UsersActionTypes):InitialStateType => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.post] };

    default:
      break;
  }
  return state;
};
export default postsReducer;
