import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "./signIn/signInSlice";
import signUpReducer from "./signUp/signUpSlice";
import userDetailsReducer from "./userData/userDetails";

const store = configureStore({
    reducer: {
        signIn: signInReducer,
        signUp: signUpReducer,
        userData: userDetailsReducer,
    }
})

export default store