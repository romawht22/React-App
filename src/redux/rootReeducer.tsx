import { combineReducers } from 'redux';
import dialogsReducer from './dialogsReducer';
import messagesReducer from './messagesReducer';
import postsReducer from './postReducer';
import inputReducer from './inputReducer';
import userPageReducer from './userpageReducer';
import authReducer from './authReducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  dialogs: dialogsReducer,
  messages: messagesReducer,
  text: inputReducer,
  users: userPageReducer,
  auth: authReducer,
});