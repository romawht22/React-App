import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
    name:'messages',
    initialState:{
        messages: [
          { message: 'imba',id:1 },
          { message: 'mnogo',id:2 },
          { message: 'best hero',id:3 },
        ],
      },
    reducers:{
      messages(state,action){
          return state
      },
    }
})

export const {messages} = messagesSlice.actions

export default messagesSlice.reducer
