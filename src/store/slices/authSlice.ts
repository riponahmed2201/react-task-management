import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

// const decoded = jwt_decode();

const initialState = {
    token: '',
    user: {}
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.user = jwtDecode(action.payload),
                state.token = action.payload
        }
    }
});


export const { login } = authSlice.actions;

export default authSlice.reducer;