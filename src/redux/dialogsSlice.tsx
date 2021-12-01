import { createSlice } from "@reduxjs/toolkit";

const dialogsSlice = createSlice({
    name:'dialogs',
    initialState:{
        dialogs: [
            {
              name: 'marci',
              id: 1,
              isOnline: false,
              avatar:
                'https://www.dotabuff.com/assets/heroes/marci-1bc877846f3b4c9d78363b7d4b0875e49e2929fb20b27748bb63657a01120052.jpg',
            },
            {
              name: 'pl',
              id: 2,
              isOnline: true,
              avatar:
                'https://uk.dotabuff.com/assets/heroes/phantom-lancer-554de93dee0b9d0c80bd4536d4d777ebec1f3efb4b653673e9ba86f0dd4c10d6.jpg',
            },
            {
              name: 'void spirit',
              id: 3,
              isOnline: false,
              avatar:
                'https://uk.dotabuff.com/assets/heroes/void-spirit-35ae623572b26131a54ae8761dfd5ddc208bdf79202995768c050492f1808c94.jpg',
            },
          ],
    },
    reducers:{
      dialogs(state,action){
          return state
      
    }}
})

export const {dialogs} = dialogsSlice.actions

export default dialogsSlice.reducer