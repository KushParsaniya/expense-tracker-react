import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLogged: false,
    userData: null,
    jwtToken: null
}


const authSlice = createSlice({
        name: "auth",
        initialState,
        reducers: {
            login(state, action) {
                state.isLogged = true;
                state.userData = action.payload.userData;
                state.jwtToken = action.payload.jwtToken;
            },
            logout(state) {
                state.isLogged = false;
                state.userData = null;
                state.jwtToken = null;
            }
        }
    }
);

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;

