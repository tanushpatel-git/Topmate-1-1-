import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "./signIn/signInSlice";
import signUpReducer from "./signUp/signUpSlice";
import userDetailsReducer from "./userData/userDetails";
import userProfileReducer from "./userProfileDesign/profile";

const store = configureStore({
    reducer: {
        signIn: signInReducer,
        signUp: signUpReducer,
        userData: userDetailsReducer,
        userProfile: userProfileReducer,
    }
})

export default store