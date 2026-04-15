import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "./signIn/signInSlice";
import signUpReducer from "./signUp/signUpSlice";

const store = configureStore({
    reducer: {
        signIn: signInReducer,
        signUp: signUpReducer,
    }
})

export default store