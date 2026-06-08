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
        from: "",
        recomdationText: "",
    },
    highlightLink: {
        url: "",
        imageUrl: "",
    },
    testimonial: {
        from: "",
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
            const data = action.payload;
            if (data.user) state.user = data.user;
            if (data.color) state.color = data.color;
            if (data.profileImage) state.profileImage = data.profileImage;
            if (data.firstName !== undefined) state.firstName = data.firstName;
            if (data.lastName !== undefined) state.lastName = data.lastName;
            if (data.displayName !== undefined) state.displayName = data.displayName;
            if (data.topmateIntro !== undefined) state.topmateIntro = data.topmateIntro;
            if (data.aboutYourself !== undefined) state.aboutYourself = data.aboutYourself;
            if (data.socialLink !== undefined) state.socialLink = data.socialLink;
            if (data.recomdation) state.recomdation = { ...state.recomdation, ...data.recomdation };
            if (data.highlightLink) state.highlightLink = { ...state.highlightLink, ...data.highlightLink };
            if (data.testimonial) state.testimonial = { ...state.testimonial, ...data.testimonial };
            if (data.offer !== undefined) state.offer = data.offer;
            if (data.donation !== undefined) state.donation = data.donation;
            if (data.services) state.services = data.services;
            if (data.badges) state.badges = data.badges;
            if (data.imageFun) state.imageFun = data.imageFun;
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
        clearHighlightLink: (state) => {
            state.highlightLink = { url: "", imageUrl: "" };
        },
        clearRecomdation: (state) => {
            state.recomdation = { from: "", recomdationText: "" };
        },
        clearTestimonial: (state) => {
            state.testimonial = { from: "", testimonialText: "" };
        },
        clearOffer: (state) => {
            state.offer = "";
        },
        clearDonation: (state) => {
            state.donation = "";
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
    clearHighlightLink,
    clearRecomdation,
    clearTestimonial,
    clearOffer,
    clearDonation,
    resetUserProfile,
} = userProfileSlice.actions;

export default userProfileSlice.reducer;