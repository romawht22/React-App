import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/setUsers',
    async function(){
        const res = await axios.get('https://api.github.com/users?per_page=3');
        const data = res.data;
        return data
    }
)

type UserType={
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
}
const userPageSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
      setUsers(state,action){
        const Users = action.payload.map((user:UserType) => {
            return {
              login: user.login,
              id: user.id,
              avatar_url: user.avatar_url,
            };
          });
          state.users = [...Users]
      },
      setNewUsers(state,action){
        const Users = action.payload.map((user:UserType) => {
            return {
              login: user.login,
              id: user.id,
              avatar_url: user.avatar_url,
            };
          });
          state.users = [...Users]
      },
      setCurrentPage(state,action){
        state.selectedPage = action.payload
    }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending, (state, action) => { 
          });
          builder.addCase(fetchUsers.fulfilled, (state, action) => {
              state.users=[...action.payload]
          });
          builder.addCase(fetchUsers.rejected, (state, action) => {
        });
    }
})

export const {setUsers,setNewUsers,setCurrentPage} = userPageSlice.actions

export default userPageSlice.reducer