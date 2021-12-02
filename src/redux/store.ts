import { useDispatch,useSelector,TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice'
import dialogsReducer from '../redux/dialogsSlice'
import postsReducer from '../redux/postsSlice'
import messagesReducer from '../redux/messagesSlice'
import usersReducer from '../redux/userPageSlice'


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const store = configureStore({
    reducer:{
        auth: authReducer,
        dialogs:dialogsReducer,
        posts:postsReducer,
        messages:messagesReducer,
        users:usersReducer
    }
})
export default store