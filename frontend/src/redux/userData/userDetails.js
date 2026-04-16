import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
    name: "userDetails",
    initialState: {
        userName: null,
        userImage: null,
    },
    reducers: {
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
        setUserImage: (state, action) => {
            state.userImage = action.payload;
        },
    },
})

export const { setUserName, setUserImage } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;