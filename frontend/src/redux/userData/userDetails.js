import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
    name: "userData",
    initialState: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        country: "India",
        currency: "Indian Rupee",
        expertise: [],
        linkedInUrl: "",
        twitterUrl: "",
        instagramUrl: "",
        whatsAppNumber: "",
        availability: null,
        service: null,
        userImage: null,
        graduationYear: new Date().getFullYear() - 4,
    },
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setCountry: (state, action) => {
            state.country = action.payload;
        },
        setCurrency: (state, action) => {
            state.currency = action.payload;
        },
        setExpertise: (state, action) => {
            state.expertise = action.payload;
        },
        setLinkedInUrl: (state, action) => {
            state.linkedInUrl = action.payload;
        },
        setTwitterUrl: (state, action) => {
            state.twitterUrl = action.payload;
        },
        setInstagramUrl: (state, action) => {
            state.instagramUrl = action.payload;
        },
        setWhatsAppNumber: (state, action) => {
            state.whatsAppNumber = action.payload;
        },
        setAvailability: (state, action) => {
            state.availability = action.payload;
        },
        setService: (state, action) => {
            state.service = action.payload;
        },
        setUserImage: (state, action) => {
            state.userImage = action.payload;
        },
        setGraduationYear: (state, action) => {
            state.graduationYear = action.payload;
        },
<<<<<<< HEAD
        clearUserDetails: (state) => {
            state.firstName = "";
            state.lastName = "";
            state.userName = "";
            state.email = "";
            state.country = "India";
            state.currency = "Indian Rupee";
            state.expertise = [];
            state.linkedInUrl = "";
            state.twitterUrl = "";
            state.instagramUrl = "";
            state.whatsAppNumber = "";
            state.availability = null;
            state.service = null;
            state.userImage = null;
            state.graduationYear = new Date().getFullYear() - 4;
        },
=======
        setJoinDate: (state, action) => {
            state.joinDate = action.payload;
        },

>>>>>>> nikesh
    },
})

export const { 
    setFirstName, 
    setLastName, 
    setUserName, 
    setEmail, 
    setCountry, 
    setCurrency, 
    setExpertise, 
    setLinkedInUrl, 
    setTwitterUrl, 
    setInstagramUrl, 
    setWhatsAppNumber, 
    setAvailability, 
    setService, 
    setUserImage,
    setGraduationYear,
<<<<<<< HEAD
    clearUserDetails,
=======
    setJoinDate,

>>>>>>> nikesh
} = userDetailsSlice.actions;
export default userDetailsSlice.reducer;