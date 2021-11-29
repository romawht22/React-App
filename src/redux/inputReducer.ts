import { UsersActionTypes } from './actions';
import { INPUT_TEXT } from './types';

type InitialStateType = {
  text:string
}

const initialState: InitialStateType = {
  text: '',
};

const postsReducer = (state = initialState, action:UsersActionTypes):InitialStateType => {
  switch (action.type) {
    case INPUT_TEXT:
      return { ...state, text: action.text };
    default:
      break;
  }
  return state;
};
export default postsReducer;
