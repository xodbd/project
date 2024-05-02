import { configureStore, createSlice } from '@reduxjs/toolkit'
import { auth } from './firebase'

let fbLogin = createSlice({
    name: "fbLogin",
    initialState: auth.currentUser,
});

let userName = createSlice({
    name: "userName",
    initialState: "",
    reducers: {
        setUserName: (state, action) => {
            state = action.payload;
        }
    }
})
export let {setUserName} = userName.actions

export default configureStore({
    reducer: { 
        fbLogin : fbLogin.reducer,
        userName : userName.reducer,
    }
}) 