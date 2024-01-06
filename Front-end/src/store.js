import {configureStore, createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:"authToken",
    initialState:{value:{"token":""}},
    reducers:{
        seToken:(state,action)=>{
            state.value=action.payload
        },
        
    }  
})

export const {setToken}=userSlice.actions

export const store = configureStore({
    reducer:{
        authToken:userSlice.reducer
    }
})