import { createSlice } from "@reduxjs/toolkit";


const postsSlice = createSlice({
    name:'posts',
    initialState:{
        text: '',
        posts:[
            { name: 'post1', id: '1' },
            { name: 'post2', id: '2' },
          ],
      },
    reducers:{
      inputText(state,action){
          state.text = action.payload
      },
      createPost(state,action){
          state.posts = [...state.posts,action.payload]
      }
    }
})
export const {inputText,createPost}=postsSlice.actions
export default postsSlice.reducer