import { configureStore, createSlice } from '@reduxjs/toolkit'
import { auth } from './firebase'

/* let userName = createSlice({
    name: "userName",
    initialState: auth.currentUser.displayName
}) */

export default configureStore({
    reducer: { 
        // userName : userName.reducer
    }
}) 