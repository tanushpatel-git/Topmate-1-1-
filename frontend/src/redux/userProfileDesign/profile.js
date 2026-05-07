import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    color: "#d9534f",
    profileImage:
        "https://topmate.io/cdn-cgi/image/width=640,quality=90/https://static.topmate.io/hx96Mufeu9YdiLZqySeJeU.png",
    firstName: "",
    lastName: "",
    displayName: "",
    topmateIntro: "",
    aboutYourself: "",
    socialLink: "",
    userNameLink: "",
    recomdation: {
        form: "",
        recomdationText: "",
    },
    highlightLink: {
        url: "",
        imageUrl: "",
    },
    testimonial: {
        form: "",
        testimonialText: "",
    },
    offer: "",
    donation: "",
    services: [],
    badges: [],
    imageFun:
        "https://topmate.io/images/public-profile/testimonial-covers/testimonial-cover-heart.svg",
};

const userProfileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers: {
        setUserProfile: (state, action) => {
            state.user = action.payload;
        },
        setColor: (state, action) => {
            state.color = action.payload;
        },
        setProfileImage: (state, action) => {
            state.profileImage = action.payload;
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setDisplayName: (state, action) => {
            state.displayName = action.payload;
        },
        setTopmateIntro: (state, action) => {
            state.topmateIntro = action.payload;
        },
        setAboutYourself: (state, action) => {
            state.aboutYourself = action.payload;
        },
        setSocialLink: (state, action) => {
            state.socialLink = action.payload;
        },
        setRecomdation: (state, action) => {
            state.recomdation = {
                ...state.recomdation,
                ...action.payload
            };
        },
        setUserNameLink: (state, action) => {
            state.userNameLink = action.payload;
        },
        setHighlightLink: (state, action) => {
            state.highlightLink = {
                ...state.highlightLink,
                ...action.payload
            };
        },
        setTestimonial: (state, action) => {
            state.testimonial = {
                ...state.testimonial,
                ...action.payload
            };
        },
        setOffer: (state, action) => {
            state.offer = action.payload;
        },
        setDonation: (state, action) => {
            state.donation = action.payload;
        },
        setServices: (state, action) => {
            state.services = action.payload;
        },
        setBadges: (state, action) => {
            state.badges = action.payload;
        },
        setImageFun: (state, action) => {
            state.imageFun = action.payload;
        },
        resetUserProfile: () => initialState,
    },
});

export const {
    setUserProfile,
    setColor,
    setProfileImage,
    setFirstName,
    setLastName,
    setDisplayName,
    setTopmateIntro,
    setAboutYourself,
    setSocialLink,
    setRecomdation,
    setUserNameLink,
    setHighlightLink,
    setTestimonial,
    setOffer,
    setDonation,
    setServices,
    setBadges,
    setImageFun,
    resetUserProfile,
} = userProfileSlice.actions;

export default userProfileSlice.reducer;