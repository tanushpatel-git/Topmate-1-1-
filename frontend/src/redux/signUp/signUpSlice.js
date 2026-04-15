import { createSlice } from "@reduxjs/toolkit";

const signUpSlice = createSlice({
    name: "signUp",
    initialState: {
        firstName: "",
        lastName: "",
        userName:"",
        email: "",
        password: "",
        country: "India",
        currency: "Indian Rupee",
        expertise: [],
        linkedInUrl: "",
        twitterUrl: "",
        instagramUrl: "",
        whatsAppNumber: "",
        availability: {
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
                startingTime: "09:00",
                endingTime: "20:00"
            },
            sunday: {
                isAvailable: true,
                startingTime: "09:00",
                endingTime: "20:00"
            }
        },
        service: ["Resume review", "Discovery Call", "Quick chat"],
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
        setAvailability: (state, action) => {
            const { day, starting, ending } = action.payload
            const days = Array.isArray(day) ? day : [day]
            Object.keys(state.availability).forEach(d => {
                if (days.includes(d)) {
                    state.availability[d].isAvailable = true
                    state.availability[d].startingTime = starting
                    state.availability[d].endingTime = ending
                } else {
                    state.availability[d].isAvailable = false
                }
            })
        },
        setWhatsAppNumber: (state, action) => {
            state.whatsAppNumber = action.payload
        },
        setService: (state, action) => {
            state.service = action.payload
        },
        setUserName : (state, action) => {
            state.userName = action.payload
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
    setAvailability,
    setWhatsAppNumber,
    setUserName,
    setService } = signUpSlice.actions