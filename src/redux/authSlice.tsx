import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        isAuth: false,
        userInfo:{
            login:'',
            email:''
        }
    },
    reducers:{
      logIn(state){
          state.isAuth = true
      },
      logOut(state){
          state.isAuth = false
      },
      setUserInfo(state,action){
        state.userInfo = action.payload
    },
    }
})

export const {logIn,logOut,setUserInfo} = authSlice.actions

export default authSlice.reducer