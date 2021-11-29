import { UsersActionTypes } from "./actions";

export type InitialStateType={
  messages:{message:string,id:number}[]
}

const initialState:InitialStateType = {
  messages: [
    { message: 'imba',id:1 },
    { message: 'mnogo',id:2 },
    { message: 'best hero',id:3 },
  ],
};
const messagesReducer = (state = initialState, action:UsersActionTypes):InitialStateType => {
  return state;
};
export default messagesReducer;
