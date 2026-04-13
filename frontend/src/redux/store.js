import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "./signIn/signInSlice";

const store = configureStore({
    reducer: {
        signIn: signInReducer,
    }
})

export default store