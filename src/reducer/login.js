import { createSlice } from "@reduxjs/toolkit"

const initState={
    loginINFO:null
}

const login = createSlice({
    name:'setLogin',
    initialState:initState,
    reducers:{
        loginINFO:(state, action)=>{
            state.loginINFO = action.payload;
        }
    }
});

export default login.reducer;
export const {loginINFO} = login.actions;