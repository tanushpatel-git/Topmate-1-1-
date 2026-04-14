import { createSlice } from "@reduxjs/toolkit";

const signUpSlice = createSlice({
    name: "signUp",
    initialState: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        country: "India",
        currency: "Indian Rupee",
        expertise: [],
        linkedInUrl: "",
        twitterUrl: "",
        instagramUrl: "",
        whatAppsNumber: "",
        availablity: {
            monday: {
                isAvailable: false,
                startingTime: "",
                endingTime: ""
            },
            tuesday: {
                isAvailable: false,
                startingTime: "",
                endingTime: ""
            },
            wednesday: {
                isAvailable: false,
                startingTime: "",
                endingTime: ""
            },
            thursday: {
                isAvailable: false,
                startingTime: "",
                endingTime: ""
            },
            friday: {
                isAvailable: false,
                startingTime: "",
                endingTime: ""
            },
            saturday: {
                isAvailable: true,
                startingTime: "10:00",
                endingTime: "18:00"
            },
            sunday: {
                isAvailable: true,
                startingTime: "10:00",
                endingTime: "18:00"
            }
        },
        service: {
            resumeReview: false,
            mockInterview: false,
            careerGuidance: false,
            interviewPreparationNTips: false,
            oneOnoneMentorship: false,
            discoveryCall: false,
            qickChat: false,
        },
    },
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setCountry: (state, action) => {
            state.country = action.payload
        },
        setCurrency: (state, action) => {
            state.currency = action.payload
        },
        setExpertise: (state, action) => {
            state.expertise = action.payload
        },
        setLinkedInUrl: (state, action) => {
            state.linkedInUrl = action.payload
        },
        setTwitterUrl: (state, action) => {
            state.twitterUrl = action.payload
        },
        setInstagramUrl: (state, action) => {
            state.instagramUrl = action.payload
        },
        setAvailablity: (state, action) => {
            state.availablity = action.payload
        },
        setWhatAppsNumber: (state, action) => {
            state.whatAppsNumber = action.payload
        },
        setService: (state, action) => {
            state.service = action.payload
        }
    }
})

export default signUpSlice.reducer
export const { setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setCountry,
    setCurrency,
    setExpertise,
    setLinkedInUrl,
    setTwitterUrl,
    setInstagramUrl,
    setAvailablity,
    setWhatAppsNumber,
    setService } = signUpSlice.actions