/* eslint-disable react-refresh/only-export-components */
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users : [
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "age": 28,
    "country": "USA"
  },
  {
    "id": 2,
    "name": "Ravi Mehta",
    "email": "ravi.mehta@example.com",
    "age": 34,
    "country": "India"
  },
  {
    "id": 3,
    "name": "Maria Gonzalez",
    "email": "maria.gonzalez@example.com",
    "age": 25,
    "country": "Spain"
  },
  {
    "id": 4,
    "name": "Chen Wei",
    "email": "chen.wei@example.com",
    "age": 41,
    "country": "China"
  },
  {
    "id": 5,
    "name": "Liam O'Reilly",
    "email": "liam.oreilly@example.com",
    "age": 31,
    "country": "Ireland"
  },
  {
    "id": 6,
    "name": "Fatima Al-Sayed",
    "email": "fatima.sayed@example.com",
    "age": 29,
    "country": "UAE"
  }
]
}

export const UserReducer = createSlice({
    name: "users",
    initialState,
    reducers : {
        userDelete : (state,action)=>{
            state.users.splice(action.payload,1)
        }
    }
})


export default UserReducer.reducer;
export const  {userDelete} = UserReducer.actions;