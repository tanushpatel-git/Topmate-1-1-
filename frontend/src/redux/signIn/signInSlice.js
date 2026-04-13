import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
    name: "signIn",
    initialState: {
        email:"",
        password:"",
        otp:""
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setOtp: (state, action) => {
            state.otp = action.payload
        },
    }
})

export const { setEmail, setPassword, setOtp } = signInSlice.actions
export default signInSlice.reducer