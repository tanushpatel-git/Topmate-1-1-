# Code Flow Documentation

![MERN](https://img.shields.io/badge/Stack-MERN-green)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Node](https://img.shields.io/badge/Backend-Node.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Firebase](https://img.shields.io/badge/Auth-Firebase-orange)
![Zoom API](https://img.shields.io/badge/API-Zoom-blueviolet)
![Status](https://img.shields.io/badge/Status-Production--Ready-success)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

> **Platform**: Creator monetization (1:1 calls, workshops, cohorts, products, priority DMs)
> **Architecture**: Full-stack MERN (MongoDB, Express, React, Node.js) + Firebase Auth + Zoom API

---

## Table of Contents

1. [System Architecture](#1-system-architecture)
2. [Directory Structure](#2-directory-structure)
3. [Request Lifecycle (End-to-End Flow)](#3-request-lifecycle)
4. [Authentication Flow](#4-authentication-flow)
5. [State Management Flow](#5-state-management-flow)
6. [Service Management Flow](#6-service-management-flow)
7. [Booking Flow](#7-booking-flow)
8. [Dashboard Flows](#8-dashboard-flows)
9. [Public Profile Flow](#9-public-profile-flow)
10. [Email Notification Flow](#10-email-notification-flow)
11. [Zoom Integration Flow](#11-zoom-integration-flow)
12. [Cron Job Flow](#12-cron-job-flow)
13. [File Upload Flow](#13-file-upload-flow)
14. [Analytics Flow](#14-analytics-flow)
15. [Database Schema & Relationships](#15-database-schema--relationships)
16. [API Route Map](#16-api-route-map)

---

## 1. System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (React + Vite)                  │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌───────────┐    │
│  │  React   │  │  React   │  │  Redux   │  │  TanStack │    │
│  │  Router  │  │  Lazy    │  │  Toolkit │  │  React    │    │
│  │  (v7)    │──│  Load    │──│  (4      │──│  Query    │    │
│  │          │  │  Pages   │  │  slices) │  │  (v5)     │    │
│  └──────────┘  └──────────┘  └──────────┘  └───────────┘    │
│        │              │            │              │         │
│        └──────────────┴────────────┴──────────────┘         │
│                          │                                  │
│                    ┌─────┴──────┐                           │
│                    │   Axios    │                           │
│                    │  Instance  │                           │
│                    │ (cookie    │                           │
│                    │  withCred) │                           │
│                    └─────┬──────┘                           │
│                          │ http://localhost:8001/api        │
└──────────────────────────┼──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    BACKEND (Express + Node)                 │
│                                                             │
│  ┌────────────┐    ┌──────────────┐    ┌────────────────┐   │
│  │  cookie-   │───▶│  express.json│───▶│     CORS       │   │
│  │  parser    │    │  (body)      │    │  (origin:5175) │   │
│  └────────────┘    └──────────────┘    └────────────────┘   │
│                          │                                  │
│                    ┌─────┴──────┐                           │
│                    │   Routes   │                           │
│                    │  /api/*    │                           │
│                    └─────┬──────┘                           │
│                          │                                  │
│               ┌──────────┼──────────┐                       │
│               ▼          ▼          ▼                       │
│         ┌──────────┐ ┌────────┐ ┌───────────┐               │
│         │  User    │ │Service │ │  Booking  │               │
│         │Controller│ │Control │ │ Controller│               │
│         └────┬─────┘ └───┬────┘ └─────┬─────┘               │
│              │           │            │                     │
│              ▼           ▼            ▼                     │
│         ┌─────────────────────────────────────┐             │
│         │          Models (Mongoose)          │             │
│         │  User │ Service │ Booking │ Profile │             │
│         └─────────────────┬───────────────────┘             │
│                           │                                 │
│         ┌─────────────────┴────────────────────────┐        │
│         │           External Services              │        │
│         │  ┌─────────┐ ┌────────┐ ┌────────────┐   │        │
│         │  │MongoDB  │ │Zoom API│ │ Cloudinary │   │        │
│         │  │(Atlas)  │ │(OAuth) │ │ (Media)    │   │        │
│         │  └─────────┘ └────────┘ └────────────┘   │        │
│         │  ┌─────────┐ ┌────────────────────┐      │        │
│         │  │Gmail    │ │ node-cron (every   │      │        │
│         │  │SMTP     │ │ 10 min reminders)  │      │        │
│         │  └─────────┘ └────────────────────┘      │        │
│         └──────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Directory Structure

```
Topmate-1-1-/
│
├── backend/                              # Express API server (port 8001)
│   ├── server.js                         # Entry point: DB connect, Cloudinary, cron, listens
│   ├── src/
│   │   ├── app.js                        # Express app: middleware chain + route mounting
│   │   ├── controllers/
│   │   │   ├── user.controler.js         # Auth (signup, signin, OTP, Google, logout) + user CRUD
│   │   │   ├── userServices.controller.js# Service CRUD + search
│   │   │   ├── Booking.controler.js      # Booking lifecycle + DM queries
│   │   │   ├── userProfileDesign.controller.js  # Profile customization & public pages
│   │   │   └── getAnalytics.controler.js # Booking analytics aggregation
│   │   ├── models/
│   │   │   ├── user.model.js             # User: profile, availability, settings, goals
│   │   │   ├── userService.model.js      # Service: 5 categories, pricing, files
│   │   │   ├── Booking.model.js          # Booking: seeker↔creator, meeting, reminders
│   │   │   └── userProfile.model.js      # Public profile: theme, badges, testimonials
│   │   ├── routes/
│   │   │   ├── user.route.js             # 14 endpoints under /api/user
│   │   │   ├── Service.route.js          # 8 endpoints under /api/service
│   │   │   ├── Booking.routes.js         # 5 endpoints under /api/booking
│   │   │   └── analyticsDetails.routes.js # 1 endpoint under /api/dashboardAnalytics
│   │   ├── Middleware/
│   │   │   └── jsonWebTokenCheck.js      # JWT verification from httpOnly cookie
│   │   ├── Services/
│   │   │   ├── sendBookingEmails.js       # Confirmation emails with .ics attachment
│   │   │   ├── sendReminderEmails.js      # Session reminder (30 min before)
│   │   │   ├── sendPriorityDMResponseEmail.js  # DM answer notification
│   │   │   └── cronJobs.js               # Every-10-min reminder scheduler
│   │   ├── utility/
│   │   │   ├── mongoDB.js                # Mongoose connection
│   │   │   ├── jwToken.js                # JWT sign/verify helpers
│   │   │   ├── bcrypt.js                 # Password hash/compare (10 rounds)
│   │   │   ├── nodeMail.js               # Gmail SMTP transporter
│   │   │   ├── CloudInary.js             # Cloudinary config
│   │   │   ├── Zoom.js                   # Zoom OAuth + meeting creation
│   │   │   ├── Multer.js                 # Disk storage for file uploads
│   │   │   └── createICS.js             # .ics calendar file generator
│   │   └── uploads/                      # Temp file storage (Multer)
│   ├── .env                              # Sensitive credentials
│   └── package.json
│
├── frontend/                             # React SPA (port 5175)
│   ├── index.html                        # HTML shell with <div id="root">
│   ├── vite.config.js                    # Vite: port 5175, host 0.0.0.0, Tailwind plugin
│   ├── src/
│   │   ├── main.jsx                      # Entry: BrowserRouter + Redux Provider + QueryClientProvider
│   │   ├── App.jsx                       # Route definitions (lazy-loaded, Suspense)
│   │   ├── auth/                         # Auth pages
│   │   │   ├── SignIn.jsx                #   Email/password + OTP + Google sign-in
│   │   │   ├── SignUp.jsx                #   Step 1: name, email, password
│   │   │   ├── SignUp2.jsx               #   Step 2: username, country, currency
│   │   │   ├── SignUp3.jsx               #   Step 3: expertise selection
│   │   │   ├── SignUp4.jsx               #   Step 4: social links, WhatsApp
│   │   │   └── SignUp5.jsx               #   Step 5: availability calendar
│   │   ├── pages/                        # Lazy-loaded route pages
│   │   │   ├── Home.jsx                  #   Landing page
│   │   │   ├── Marketplace.jsx           #   Service marketplace
│   │   │   ├── CreatorDashboard.jsx      #   Creator panel (nested routes)
│   │   │   ├── SekerDashboard.jsx        #   Seeker panel (nested routes)
│   │   │   ├── BookingPages.jsx          #   Booking flow (nested)
│   │   │   ├── PublicProfile.jsx         #   User public profile
│   │   │   └── ...                       #   About, Contact, Terms, Privacy, Pricing, etc.
│   │   ├── components/                   # Feature-based components
│   │   │   ├── commonCompo/
│   │   │   │   └── ProtectedRoute.jsx    #   Auth guard wrapper
│   │   │   ├── CreatorDashboard/         #   11 dashboard components
│   │   │   ├── SeekerDashboarPage/       #   8 dashboard components
│   │   │   ├── Booking/                  #   OnetoOne, Products, BookingConfirm, BookingSuccess
│   │   │   ├── ProfileComponent/         #   Profile customization UI
│   │   │   ├── MarketPlaceComponent/     #   Category nav, search, service cards
│   │   │   ├── HomePageComponent/        #   Landing page sections
│   │   │   ├── VideoCall/                 #   Zoom call UI
│   │   │   └── ui/                       #   Skeleton, ProgressStepper, Cards
│   │   ├── hooks/                        # 23 custom React Query hooks
│   │   │   ├── useSignIn.js              #   Sign-in mutation
│   │   │   ├── useSignUp.js              #   Sign-up mutation
│   │   │   ├── useGetCurrUser.js         #   Current user query
│   │   │   ├── GetAllServiceHook.js      #   All services query
│   │   │   ├── CreateBookingHook.js      #   Create booking function
│   │   │   └── ...                       #   All other mutations/queries
│   │   ├── services/                     # Axios API service wrappers
│   │   │   ├── userAuthServices/         #   11 auth-related API calls
│   │   │   ├── CreatorService/           #   7 service CRUD API calls
│   │   │   ├── booking-services/         #   9 booking API calls
│   │   │   └── ScrollOnTop.jsx           #   Scroll restoration
│   │   ├── redux/                        # Redux Toolkit slices
│   │   │   ├── store.js                  #   Store configuration
│   │   │   ├── signIn/signInSlice.js     #   Sign-in form state
│   │   │   ├── signUp/signUpSlice.js     #   Multi-step sign-up form state
│   │   │   ├── userData/userDetails.js   #   Current user data (hydrated by ProtectedRoute)
│   │   │   └── userProfileDesign/profile.js  # Public profile customization state
│   │   ├── utility/
│   │   │   ├── axios.js                  #   Axios instance (baseURL, withCredentials)
│   │   │   └── fireBase.js              #   Firebase init (Auth + Google provider)
│   │   ├── index.css                     # Tailwind v4 global styles
│   │   └── assets/                       # Images, SVGs, homepage data
│   ├── .env                              # Backend URL + Firebase config
│   └── package.json
│
└── README.md                             # Project overview & setup
```

---

## 3. Request Lifecycle

### End-to-End Request Path

```
User Action (click, form submit, navigation)
        │
        ▼
┌─────────────────────────────────┐
│  1. React Component             │
│     (e.g., OnetoOne.jsx)        │
│     Event handler fires         │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  2. Custom Hook                 │
│     (e.g., CreateBookingHook)   │
│     Calls the API service fn    │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  3. Service Function            │
│     (e.g., createBookingAPI)    │
│     Calls axiosInstance         │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  4. Axios Instance              │
│     axios.js:                   │
│     - baseURL from env          │
│     - withCredentials: true     │
│     Sends HTTP request          │
└─────────────┬───────────────────┘
              │
              ▼
        Network (localhost:8001)
              │
              ▼
┌─────────────────────────────────┐
│  5. Express Middleware Chain    │
│     (in app.js order):          │
│     a. cookieParser()           │
│     b. express.json()           │
│     c. express.urlencoded()     │
│     d. cors()                   │
│     e. Route matching           │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  6. Route Handler               │
│     (e.g., Booking.routes.js)   │
│     POST /api/booking/create    │
│     Calls controller function   │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  7. Controller                  │
│     (e.g., createBooking)       │
│     - Validates input           │
│     - Reads JWT from cookies    │
│     - Interacts with Model      │
│     - Calls external services   │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  8. Mongoose Model              │
│     (e.g., Booking.model.js)    │
│     - Validates schema          │
│     - Runs pre-save hooks       │
│     - Queries MongoDB           │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│  9. External Services (maybe):  │
│     - Zoom API (create meeting) │
│     - Cloudinary (upload media) │
│     - Nodemailer (send email)   │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│ 10. Response                    │
│     JSON sent back to client    │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│ 11. React Query                 │
│     - Cache updated             │
│     - Related queries refetched │
│     - Loading states resolved   │
└─────────────┬───────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│ 12. React Component Re-render   │
│     - Toast notification        │
│     - Navigation (maybe)        │
│     - UI updated with new data  │
└─────────────────────────────────┘
```

---

## 4. Authentication Flow

### There are 3 authentication methods:

```
                          ┌─────────────────────┐
                          │   ProtectedRoute    │
                          │  (checks auth on    │
                          │   every protected   │
                          │   route mount)      │
                          └──────────┬──────────┘
                                     │
                    ┌────────────────┼────────────────┐
                    │                │                │
                    ▼                ▼                ▼
          ┌─────────────────┐ ┌──────────┐ ┌──────────────────┐
          │ Method A:       │ │Method B: │ │ Method C:        │
          │ Email/Password  │ │Password- │ │ Google OAuth     │
          │ Sign-In         │ │less OTP  │ │ (Firebase)       │
          └────────┬────────┘ └────┬─────┘ └────────┬─────────┘
                   │               │                 │
                   ▼               ▼                 ▼
              ┌─────────────────────────────────────────┐
              │     POST /api/user/signin               │
              │     POST /api/user/email-check          │
              │     POST /api/user/otp-verification     │
              │     POST /api/user/signin-with-google   │
              │     POST /api/user/signup               │
              └───────────────────┬─────────────────────┘
                                  │
                                  ▼
              ┌─────────────────────────────────────────┐
              │  Controller: user.controler.js          │
              │                                         │
              │  1. Validate credentials / token        │
              │  2. Hash/compare password (bcrypt)      │
              │  3. Generate JWT (1 day expiry)         │
              │  4. Set httpOnly cookie:                │
              │     res.cookie("token", jwt, {          │
              │       httpOnly: true,                   │
              │       sameSite: "strict",               │
              │       secure: true/false (dev/prod)     │
              │     })                                  │
              │  5. Return user JSON                    │
              └───────────────────┬─────────────────────┘
                                  │
                                  ▼
              ┌─────────────────────────────────────────┐
              │  Frontend receives response             │
              │                                         │
              │  1. React Query caches ["currUser"]     │
              │  2. ProtectedRoute dispatches to Redux  │
              │  3. User redirected to dashboard        │
              └─────────────────────────────────────────┘
```

### A. Email/Password Sign-Up (5-step wizard):

```
SignUp.jsx  ──▶ Redux signUpSlice (step 1: name, email, password)
    │
    ▼
SignUp2.jsx ──▶ Redux signUpSlice (step 2: username, country, currency)
    │
    ▼
SignUp3.jsx ──▶ Redux signUpSlice (step 3: expertise tags)
    │
    ▼
SignUp4.jsx ──▶ Redux signUpSlice (step 4: social links, WhatsApp)
    │
    ▼
SignUp5.jsx ──▶ useSignUp() hook
                    │
                    ▼
              POST /api/user/signup
                    │
                    ▼
              user.controler.js → signUp():
                1. Hash password (bcrypt, 10 rounds)
                2. Create User document in MongoDB
                3. Generate JWT, set cookie
                4. Return user data
```

### B. Passwordless OTP Sign-In:

```
SignIn.jsx → User enters email
    │
    ▼
emailCheckReq.js → POST /api/user/email-check
    │
    ▼
user.controler.js → emailCheckReq():
    1. Check if user exists in DB
    2. Generate 6-digit OTP
    3. Store OTP in in-memory Map (key: email)
    4. Send OTP email via Nodemailer (Gmail SMTP)
    5. Return { status: true }
    │
    ▼
User enters OTP → otpVerification.js → POST /api/user/otp-verification
    │
    ▼
user.controler.js → otpCheck():
    1. Compare input OTP with stored OTP
    2. If match: sign JWT, set cookie, return user
    3. If mismatch: return error
```

### C. Google OAuth:

```
SignIn.jsx → "Continue with Google" button
    │
    ▼
fireBase.js → signInWithPopup(auth, googleProvider)
    │
    ▼
Firebase returns: { displayName, email, photoURL, uid }
    │
    ▼
signInWithGoogleReq.js → POST /api/user/signin-with-google
    │
    ▼
user.controler.js → signInWithGoogle():
    1. Look up user by email
    2. If found: sign JWT, set cookie, return user
    3. If not found: pre-fill Redux signUpSlice, redirect to /signup2
```

### Token Verification on Protected Routes:

```
ProtectedRoute.jsx mounts
    │
    ▼
useGetCurrUser() hook fires
    │
    ▼
GET /api/user/getCurrUser (cookie: token=jwt...)
    │
    ▼
user.controler.js → getUser():
    1. Read req.cookies.token
    2. jwt.verify(token, JWT_SECRET)
    3. Find user by decoded ID
    4. Return user data
    │
    ▼
React Query caches ["currUser"]
ProtectedRoute dispatches data to Redux userDetails slice
Renders children (the protected component)
```

---

## 5. State Management Flow

```
┌──────────────────────────────────────────────────────────────┐
│                   STATE MANAGEMENT ARCHITECTURE              │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │                   REDUX TOOLKIT                        │  │
│  │  (Client-side UI state)                                │  │
│  │                                                        │  │
│  │  ┌──────────────┐  ┌──────────────┐                    │  │
│  │  │  signInSlice  │  │  signUpSlice │                   │  │
│  │  │              │  │              │                    │  │
│  │  │ • email      │  │ • firstName  │  (5-step form      │  │
│  │  │ • password   │  │ • lastName   │   state persists   │  │
│  │  │ • otp        │  │ • userName   │   across wizard    │  │
│  │  │ • loading    │  │ • email      │   pages)           │  │
│  │  │ • error      │  │ • password   │                    │  │
│  │  └──────────────┘  │ • country    │                    │  │
│  │                     │ • currency   │                   │  │
│  │  ┌──────────────┐  │ • expertise  │                    │  │
│  │  │ userDetails  │  │ • socials    │                    │  │
│  │  │              │  │ • availability│                   │  │
│  │  │ • _id        │  │ • timezone   │                    │  │
│  │  │ • name/email │  └──────────────┘                    │  │
│  │  │ • role       │                                      │  │
│  │  │ • settings   │  ┌──────────────────────────────┐    │  │
│  │  │ • availability│  │    userProfileDesign         │   │  │
│  │  └──────────────┘  │                               │   │  │
│  │                     │ • color / theme               │  │  |
│  │                     │ • badges, testimonials        │  │  |
│  │                     │ • highlights, services order  │  │  |
│  │                     │ • profile layout config       │  │  |
│  │                     └──────────────────────────────┘   │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │              TANSTACK REACT QUERY                      │  │
│  │  (Server-state cache + synchronization)                │  │
│  │                                                        │  │
│  │  Query Keys:              Stale Time:                  │  │
│  │  ─────────────────────    ─────────────────            │  │
│  │  ["currUser"]             5 minutes                    │  │
│  │  ["my-services"]          Immediate refetch on mutate  │  │
│  │  ["all-services"]         Immediate refetch on mutate  │  │
│  │  ["creator-bookings"]     Immediate refetch on mutate  │  │
│  │  ["seeker-bookings"]      Immediate refetch on mutate  │  │
│  │  ["single-service", id]   Immediate refetch on mutate  │  │
│  │  ["one-to-one", id]       Immediate refetch on mutate  │  │
│  │  ["all-users"]            Immediate refetch on mutate  │  │
│  │                                                        │  │
│  │  Mutations auto-invalidate relevant queries:           │  │
│  │  createBooking    → ["seeker-bookings"]                │  │
│  │  cancelBooking    → ["creator-bookings",               │  │
│  │                      "seeker-bookings"]                │  │
│  │  createService    → ["my-services"]                    │  │
│  │  updateService    → ["my-services",                    │  │
│  │                      "single-service"]                 │  │
│  │  deleteService    → ["my-services"]                    │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  DATA FLOW BETWEEN REDUX AND REACT QUERY               │  │
│  │                                                        │  │
│  │  ProtectedRoute.jsx:                                   │  │
│  │    1. useGetCurrUser() → React Query → fetch user      │  │
│  │    2. dispatch(setUser(data)) → Redux userDetails      │  │
│  │    3. Components read from Redux for synchronous       │  │
│  │       access (no loading state needed)                 │  │
│  │                                                        │  │
│  │  For all other data: components use hooks directly     │  │
│  │  (useGetMyServices, etc.) which return {data,loading,  │  │
│  │  error} from React Query. Redux is NOT used for these. │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

---

## 6. Service Management Flow

### Create Service Flow:

```
CreatorDashboard → "Add Service" → CreateService.jsx
    │
    ▼
User fills form:
  • Category (one-to-one | priorityDm | workshop | product | package)
  • Title, description, longDescription
  • Price, duration
  • Mode (online/offline), meeting link
  • Cover image, thumbnail
  • Files (PDF, image, video, link)
    │
    ▼
AddServiceHook.js → AddService.js (axios)
    │
    ▼
POST /api/service/create (multipart/form-data with files)
    │
    ▼
Service.route.js → userServices.controller.js → createService():
    1. Save files temporarily via Multer (to /uploads)
    2. Create slug: slugify(title) + "-" + Date.now()
    3. Create Service document in MongoDB
    4. Push service ID to user.services array
    5. Return created service
    │
    ▼
Frontend: React Query invalidates ["my-services"]
          Toast: "Service created successfully"
          Navigate to service list
```

### Update Service Flow (with Cloudinary):

```
ServiceCustomize.jsx → Edit existing service
    │
    ▼
useUpdateService.js → updateService.js (axios)
    │
    ▼
PUT /api/service/update/:serviceId (multipart/form-data)
    │
    ▼
userServices.controller.js → updateService():
    1. Find service by ID and user match
    2. If new files: upload to Cloudinary
    3. Update service document
    4. Return updated service
    │
    ▼
Frontend: React Query invalidates ["my-services"], ["single-service"]
```

### Service Search Flow:

```
Marketplace.jsx or Search.jsx → User types/search/filter
    │
    ▼
GET /api/service/search?query=...&category=...&minPrice=...&maxPrice=...
    │
    ▼
userServices.controller.js → searchServices():
    1. Build MongoDB query:
       - Text search on title/description (if query provided)
       - Category filter
       - Price range filter
       - isActive: true filter
    2. Populate user (creator) data
    3. Sort by creation date descending
    4. Return results
```

---

## 7. Booking Flow

### Complete Booking Lifecycle:

```
┌─────────────────────────────────────────────────────────────────────┐
│                       BOOKING LIFE CYCLE                            │
│                                                                     │
│  STEP 1: DISCOVERY                                                  │
│  ─────────────────────                                              │
│  User browses Marketplace or Public Profile                         │
│  Views service details → clicks "Book Now"                          │
│                                                                     │
│  STEP 2: BOOKING PAGE                                               │
│  ─────────────────────                                              │
│  OnetoOne.jsx / Products.jsx:                                       │
│    1. Load service + creator data (OneToOneHook)                    │
│    2. Creator's availability calendar shown                         │
│    3. User selects date + time slot                                 │
│    4. User clicks "Confirm Booking"                                 │
│                                                                     │
│  STEP 3: CONFIRMATION                                               │
│  ─────────────────────                                              │
│  BookingConfirm.jsx:                                                │
│    1. Shows booking summary (service, date, time, price)            │
│    2. User clicks "Pay" or "Confirm"                                │
│                                                                     │
│  STEP 4: API CALL                                                   │
│  ─────────────────────                                              │
│  CreateBookingHook.js → createBookingAPI.js → axios                 │
│  POST /api/booking/create                                           │
│  Body: { seeker, creator, service, date, time, duration, price }    │
│                                                                     │
│  STEP 5: BACKEND CONTROLLER                                         │
│  ─────────────────────                                              │
│  Booking.controler.js → createBooking():                            │
│    1. Validate required fields                                      │
│    2. Check for time conflict (unique index: creator+time)          │
│    3. Create Booking document (status: "confirmed")                 │
│    4. Set reminderTime = meetingTime - 30 minutes                   │
│    5. Call Zoom API → createZoomMeeting():                          │
│       a. Check/cache OAuth token                                    │
│       b. POST https://api.zoom.us/v2/users/me/meetings              │
│       c. Get join_url + meeting_id                                  │
│    6. Save zoomMeetingId & meetingLink to booking                   │
│    7. Send confirmation emails (seeker + creator):                  │
│       a. Generate .ics calendar attachment                          │
│       b. Send via Nodemailer (Gmail SMTP)                           │
│    8. Return booking JSON                                           │
│                                                                     │
│  STEP 6: SUCCESS                                                    │
│  ─────────────────────                                              │
│  BookingSuccess.jsx:                                                │
│    1. Shows meeting link + details                                  │
│    2. React Query invalidates ["seeker-bookings"]                   │
│    3. Toast: "Booking confirmed!"                                   │
│                                                                     │
│  STEP 7: PRE-SESSION REMINDER (cron)                                │
│  ─────────────────────                                              │
│  Every 10 minutes: cronJobs.js checks bookings where                │
│  reminderTime is within ±30 seconds window                          │
│  Sends reminder emails to both parties                              │
│  Marks reminderSent: true                                           │
│                                                                     │
│  STEP 8: VIDEO CALL (Zoom)                                          │
│  ─────────────────────                                              │
│  At meeting time:                                                   │
│  VideoCall.jsx loads the Zoom meeting link                          │
│  Both parties join via the Zoom join URL                            │
│                                                                     │
│  STEP 9: CANCELLATION (optional)                                    │
│  ─────────────────────                                              │
│  User clicks "Cancel Booking":                                      │
│  CancelBookingHook → PUT /api/booking/cancel/:bookingId             │
│  Status updated to "cancelled"                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Priority DM Flow (special booking type):

```
Seeker purchases "Priority DM" service
    │
    ▼
createBookingForDm() → Creates DM booking (question field set)
    │
    ▼
CreatorDashboard → PriorityDmPending.jsx shows unanswered DMs
    │
    ▼
Creator clicks "Answer" → PriorityDmAnswer.jsx
    │
    ▼
Creator writes answer → UpdateBookingDMhook()
    │
    ▼
PUT /api/booking/dm/:bookingId → updateBookingdm()
    1. Updates booking.answer field
    2. Sends notification email to seeker
       (sendPriorityDMResponseEmail.js)
    │
    ▼
Seeker receives email: "Your question has been answered!"
```

---

## 8. Dashboard Flows

### A. Creator Dashboard

```
/creator-dashboard/* (protected by ProtectedRoute)
         │
         ├── /home
         │     └── CreatorHome.jsx
         │         • Booking summary cards (total, this week, pending)
         │         • Recent bookings list
         │         • Quick stats
         │
         ├── /calls/:type/:status
         │     └── CreatorBooking.jsx
         │         • Tab filtering: upcoming | past | cancelled
         │         • Type filtering: all | one-to-one | workshop | etc.
         │         • Each booking shows: seeker info, date, time, meeting link
         │         • Cancel action available
         │
         ├── /queries/pending
         │     └── PriorityDmPending.jsx
         │         • Lists unanswered DM queries
         │         • Click to answer → navigates to /queries/answer/:id
         │
         ├── /queries/answer
         │     └── PriorityDmAnswer.jsx
         │         • Shows seeker's question
         │         • Textarea for answer
         │         • Submit → UpdateBookingDMhook()
         │
         ├── /services/:type
         │     └── CreatorServices.jsx
         │         • Lists services by category
         │         • Actions: edit, delete, toggle active
         │
         ├── /services/:type/create
         │     └── CreateService.jsx
         │         • Multi-field form for new service
         │
         ├── /services/:type/edit/:serviceId
         │     └── ServiceCustomize.jsx
         │         • Edit existing service
         │
         ├── /calendar/setting
         │     └── CreatorCalender.jsx
         │         • Set availability per day (Mon-Sun)
         │         • Configure slot duration, timezone
         │         • Notice period, reschedule policy, booking period
         │         • Saves via useCreatorCalender() → PATCH /api/user/update-settings
         │
         └── /profile
               └── Profile.jsx
                   • Profile customization: color theme, badges, testimonials
                   • Account settings: name, email, password
                   • Public profile preview
```

### B. Seeker Dashboard

```
/seeker-dashboard/* (protected by ProtectedRoute)
         │
         ├── /home
         │     └── SeekerHome.jsx
         │         • Upcoming bookings
         │         • Recommended experts/services
         │         • Goals tracking
         │
         ├── /booking
         │     └── SeekerBooking.jsx
         │         • List of all bookings (past & upcoming)
         │         • Meeting links for confirmed bookings
         │         • Cancel option
         │
         ├── /profile
         │     └── SeekerProfile.jsx
         │         • Edit personal info
         │         • Manage goals
         │
         └── /reward
               └── SeekerReward.jsx
                   • Reward points/achievements
```

---

## 9. Public Profile Flow

```
User navigates to /profile/:userId
    │
    ▼
PublicProfile.jsx mounts
    │
    ▼
useGetService() → GET /api/service/id/:serviceId
    │
    (or directly from URL params)
    │
    ▼
GET /api/user/marketplace (for creator data)
    │
    ▼
userProfileDesign.controller.js → getPublicProfile():
    1. Find user by ID
    2. Find profile design settings
    3. Find user's active services
    4. Return all data
    │
    ▼
Renders:
  • Profile header (name, image, tagline)
  • Custom color theme (from profile design)
  • Badges section
  • Testimonials
  • Services list (with prices, book buttons)
  • Highlight links
  • About section
```

---

## 10. Email Notification Flow

```
┌──────────────────────────────────────────────────────────────┐
│                    EMAIL SERVICE ARCHITECTURE                │
│                                                              │
│  ┌──────────────────────────────────────────┐                │
│  │         nodeMail.js (Transporter)        │                │
│  │                                          │                │
│  │  nodemailer.createTransport({            │                │
│  │    service: "gmail",                     │                │
│  │    auth: { user, pass }                  │                │
│  │  })                                      │                │
│  └────────────────┬─────────────────────────┘                │
│                   │                                          │
│         ┌─────────┼──────────┐                               │
│         ▼         ▼          ▼                               │
│  ┌──────────┐ ┌────────┐ ┌──────────────┐                    │
│  │  send    │ │ send   │ │ sendPriority │                    │
│  │ Booking  │ │Reminder│ │ DM Response  │                    │
│  │ Emails   │ │ Emails │ │ Email        │                    │
│  └────┬─────┘ └───┬────┘ └──────┬───────┘                    │
│       │           │             │                            │
│       ▼           ▼             ▼                            │
│  ┌──────────────────────────────────────────────────────┐    │
│  │              createICS.js                            │    │
│  │  Generates .ics calendar file for booking invites    │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  EMAIL TRIGGERS:                                             │
│  ─────────────────────                                       │
│  • Booking confirmed:  → seeker + creator                    │
│    (from createBooking controller)                           │
│                                                              │
│  • Session reminder:   → seeker + creator                    │
│    (from cronJobs.js, 30 min before)                         │
│                                                              │
│  • DM answered:        → seeker only                         │
│    (from updateBookingdm controller)                         │
│                                                              │
│  • OTP for login:      → user email                          │
│    (from emailCheckReq controller)                           │
└──────────────────────────────────────────────────────────────┘
```

---

## 11. Zoom Integration Flow

```
┌──────────────────────────────────────────────────────────────┐
│                    ZOOM API INTEGRATION                      │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │                 Zoom.js (Utility)                    │    │
│  │                                                      │    │
│  │  Server-to-Server OAuth:                             │    │
│  │  ────────────────────────                            │    │
│  │  1. getZoomToken():                                  │    │
│  │     a. Check if cached token is still valid          │    │
│  │     b. If expired: POST to Zoom OAuth endpoint       │    │
│  │        with accountId, clientId, clientSecret        │    │
│  │     c. Cache new token with expiry tracking          │    │
│  │     d. Return access_token                           │    │
│  │                                                      │    │
│  │  2. createZoomMeeting(topic, startTime, duration):   │    │
│  │     a. Get valid token from getZoomToken()           │    │
│  │     b. POST https://api.zoom.us/v2/users/me/meetings │    │
│  │        Headers: Authorization: Bearer <token>        │    │
│  │        Body: {                                       │    │
│  │          topic, type: 2 (scheduled),                 │    │
│  │          start_time, duration, timezone,             │    │
│  │          settings: {                                 │    │
│  │            join_before_host: true,                   │    │
│  │            participant_video: true,                  │    │
│  │            host_video: true                          │    │
│  │          }                                           │    │
│  │        }                                             │    │
│  │     c. Return { join_url, meeting_id }               │    │
│  │                                                      │    │
│  │  Called from: Booking.controller.js                  │    │
│  │  ────────────────────────────────────────            │    │
│  │  createBooking() → createZoomMeeting()               │    │
│  │  → saves meetingLink + zoomMeetingId to booking      │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │             VideoCall.jsx (Frontend)                 │    │
│  │                                                      │    │
│  │  Loads Zoom meeting URL from booking data            │    │
│  │  Opens Zoom link in new tab or embeds                │    │
│  └──────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

---

## 12. Cron Job Flow

```
┌──────────────────────────────────────────────────────────────┐
│                     CRON JOB SCHEDULER                       │
│                                                              │
│  File: cronJobs.js                                           │
│  Schedule: */10 * * * * (every 10 minutes)                   │
│  Started in: server.js (after DB connection)                 │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │  Every 10 minutes:                                   │    │
│  │                                                      │    │
│  │  1. Query MongoDB for bookings where:                │    │
│  │     - reminderTime: { $gte: now-30s, $lte: now+30s } │    │
│  │     - reminderSent: false                            │    │
│  │     - status: "confirmed"                            │    │
│  │                                                      │    │
│  │  2. For each booking found:                          │    │
│  │     a. Send reminder email to seeker                 │    │
│  │     b. Send reminder email to creator                │    │
│  │     c. Mark booking.reminderSent = true              │    │
│  │                                                      │    │
│  │  3. Concurrency limit: 5 simultaneous email sends    │    │
│  │                                                      │    │
│  │  4. Error handling: catches & logs per-booking       │    │
│  │     (one failure doesn't block others)               │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  KEY FIELDS ON BOOKING MODEL:                                │
│  ───────────────────────────────────                         │
│  reminderTime: Date   (meetingTime - 30 min)                 │
│  reminderSent: Boolean (default: false)                      │
│  status: String       ("confirmed")                          │
│                                                              │
│  DB Index: { reminderTime:1, reminderSent:1, status:1 }      │
│  (ensures fast query for unreminded bookings)                │
└──────────────────────────────────────────────────────────────┘
```

---

## 13. File Upload Flow

```
┌──────────────────────────────────────────────────────────────┐
│                    FILE UPLOAD PIPELINE                      │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │           Multer.js (Disk Storage)                   │    │
│  │                                                      │    │
│  │  Storage: disk (uploads/ directory)                  │    │
│  │  Destination: ./src/uploads/                         │    │
│  │  Filename: Date.now() + "-" + originalname           │    │
│  │                                                      │    │
│  │  Used in: createService route                        │    │
│  │  (temporary storage before DB save)                  │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  CREATE SERVICE FLOW:                                        │
│  ─────────────────────                                       │
│  Files → Multer (disk) → Service URLs stored as              │
│  local paths in DB                                           │
│                                                              │
│  UPDATE SERVICE FLOW:                                        │
│  ─────────────────────                                       │
│  Files → Multer (disk) → Cloudinary upload →                 │
│  Cloudinary URLs stored in DB                                │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │         CloudInary.js (Cloud Storage)                │    │
│  │                                                      │    │
│  │  cloudinary.v2.config({                              │    │
│  │    cloud_name, api_key, api_secret                   │    │
│  │  })                                                  │    │
│  │                                                      │    │
│  │  Used for: permanent media storage                   │    │
│  │  File types: images, PDFs, videos                    │    │
│  └──────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

---

## 14. Analytics Flow

```
┌──────────────────────────────────────────────────────────────┐
│                   ANALYTICS AGGREGATION                      │
│                                                              │
│  Route: GET /api/dashboardAnalytics/:type                    │
│  Middleware: jsonWebTokenCheck (JWT auth required)           │
│                                                              │
│  Controller: getAnalytics.controler.js → getDataOfBooking()  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │  Type parameter: weekly | monthly | yearly           │    │
│  │                                                      │    │
│  │  MongoDB Aggregation Pipeline:                       │    │
│  │                                                      │    │
│  │  1. $match:                                          │    │
│  │     - creator: req.user.id                           │    │
│  │     - createdAt: within appropriate date range       │    │
│  │     - status: "confirmed" or "completed"             │    │
│  │                                                      │    │
│  │  2. $group:                                          │    │
│  │     By date formatted string:                        │    │
│  │     - weekly:  %Y-%U (year-week number)              │    │
│  │     - monthly: %Y-%m (year-month)                    │    │
│  │     - yearly:  %Y    (year)                          │    │
│  │     Fields: count, totalRevenue (sum of price)       │    │
│  │                                                      │    │
│  │  3. Post-processing:                                 │    │
│  │     Fill missing periods with 0 values               │    │
│  │     Return array of { period, count, revenue }       │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  Frontend: CreatorHome.jsx renders charts using this data    │
└──────────────────────────────────────────────────────────────┘
```

---

## 15. Database Schema & Relationships

### Entity-Relationship Diagram (Text):

```
┌─────────────────┐          ┌─────────────────────┐
│      USER       │          │   USER PROFILE      │
│                 │          │                     │
│  PK _id         │ 1      1 │  PK _id             │
│  firstName      │◄────────►│  FK user → User     │
│  lastName       │          │  color              │
│  userName       │          │  profileImage       │
│  email (unique) │          │  displayName        │
│  password (hash)│          │  topmateIntro       │
│  country        │          │  aboutYourself      │
│  currency       │          │  badges []          │
│  expertise []   │          │  testimonials []    │
│  socialLinks    │          │  highlightLinks []  │
│  whatsAppNumber │          │  services []        │
│  availability[] │          │  imageFun           │
│  timezone       │          └─────────────────────┘
│  slotDuration   │
│  noticePeriod   │          ┌─────────────────────┐
│  reschedulePol. │          │      SERVICE        │
│  bookingPeriod  │          │                     │
│  services [] ───┼──┐  1   │  PK _id              │
│  goals []       │  │  │   │  FK user → User      │
│  userImageUrl   │  │  │   │  title               │
│  role (enum)    │  │  │   │  slug (unique)       │
│  joinDate       │  │  │   │  description         │
│  notifications  │  │  │   │  longDescription     │
│  gradYear       │  │  │   │  category (enum)     │
└─────────────────┘  │  │   │  duration            │
                     │  │   │  price              │
                     │  │   │  mode (enum)        │
                     │  │   │  meetingLink        │
                     │  │   │  maxBookings        │
                     │  │   │  startDate/endDate  │
                     │  │   │  coverImage         │
                     │  │   │  thumbnail          │
                     │  │   │  status (enum)      │
                     │  │   │  isActive           │
                     │  │   │  files []           │
                     │  │   │  createdAt          │
                     │  │   └────────┬────────────┘
                     │  │            │
                     │  │            │ 1
                     │  │            │
                     │  │   ┌────────┴────────────┐
                     │  │   │      BOOKING        │
                     │  │   │                     │
                     │  └───┤  FK seeker → User   │
                     │      │  FK creator → User  |
                     │   *  │  FK service→Service │
                     │      │  question (DM)      │
                     |─────>┤   answer (DM)       │
                            │  date               │
                            │  time               │
                            │  duration           │
                            │  price              │
                            │  status (enum)      │
                            │  meetingLink        │
                            │  zoomMeetingId      │
                            │  reminderSent       │
                            │  reminderTime       │
                            │  createdAt          │
                            └─────────────────────┘
```

### Collections Summary:

| Collection | Key Indexes | Unique Constraints |
|---|---|---|
| **users** | email (unique) | email, userName |
| **userservices** | user + isActive + createdAt, text(title, description) | slug |
| **bookings** | creator + time (compound unique), reminderTime + reminderSent + status | creator+time |
| **userprofiles** | user (unique) | user |

### Booking Status Transitions:

```
confirmed ──▶ completed (automatic after session ends)
    │
    └──▶ cancelled (user-initiated, optional)
```

### Service Status Transitions:

```
draft ──▶ published ──▶ archived
              │
              └──▶ draft (edit back)
```

---

## 16. API Route Map

### User Routes (`/api/user`)

| Method | Endpoint | Controller Function | Auth | Description |
|--------|----------|-------------------|------|-------------|
| POST | `/signup` | `signUp` | No | Register new user with hashed password |
| POST | `/signin` | `signIn` | No | Email/password login → JWT cookie |
| POST | `/signin-with-google` | `signInWithGoogle` | No | Google OAuth → JWT cookie |
| POST | `/email-check` | `emailCheckReq` | No | Send OTP email for passwordless login |
| POST | `/otp-verification` | `otpCheck` | No | Verify OTP → JWT cookie |
| GET | `/getCurrUser` | `getUser` | Yes | Get authenticated user from JWT cookie |
| POST | `/logout` | `logout` | Yes | Clear JWT cookie |
| POST | `/update-profile` | `updateAccount` | Yes | Update user profile fields |
| PATCH | `/update-settings` | `updateUserSettings` | Yes | Update availability/scheduling settings |
| GET | `/delete-account` | `deleteAccount` | Yes | Delete user and associated data |
| GET | `/get-all-users` | `getAllUsers` | No | List all registered users |
| GET | `/getUser/:userId` | `getUserById` | No | Get single user by ID |
| GET | `/marketplace` | `getMarketplaceData` | No | Get creators + services for marketplace |

### Service Routes (`/api/service`)

| Method | Endpoint | Controller Function | Auth | Description |
|--------|----------|-------------------|------|-------------|
| POST | `/create` | `createService` | Yes | Create service with file uploads |
| GET | `/my` | `getMyServices` | Yes | Get current user's services |
| GET | `/id/:serviceId` | `getServiceById` | No | Get single service by ID |
| GET | `/search` | `searchServices` | No | Full-text search with category/price filters |
| GET | `/one-to-one/:id` | `getSingleService` | No | Get service + populated creator data |
| PUT | `/update/:serviceId` | `updateService` | Yes | Update service (with Cloudinary upload) |
| DELETE | `/:serviceId` | `deleteService` | Yes | Delete service |
| GET | `/get-all-services` | `getAllServices` | No | List all active services |

### Booking Routes (`/api/booking`)

| Method | Endpoint | Controller Function | Auth | Description |
|--------|----------|-------------------|------|-------------|
| POST | `/create` | `createBooking` | Yes | Create booking → Zoom meeting → emails |
| POST | `/dm` | `createBookingForDm` | Yes | Create priority DM booking |
| GET | `/seeker/:seekerId` | `getSeekerBookings` | Yes | Get all bookings for a seeker |
| GET | `/creator/:creatorId` | `getCreatorBookings` | Yes | Get all bookings for a creator |
| GET | `/:bookingId` | `getBookingById` | Yes | Get single booking details |
| PUT | `/cancel/:bookingId` | `cancelBooking` | Yes | Cancel a booking |
| PUT | `/confirm/:bookingId` | `confirmBooking` | Yes | Confirm/complete a booking |
| PUT | `/dm/:bookingId` | `updateBookingdm` | Yes | Answer a priority DM query |

### Analytics Routes (`/api/dashboardAnalytics`)

| Method | Endpoint | Controller Function | Auth | Description |
|--------|----------|-------------------|------|-------------|
| GET | `/:type` | `getDataOfBooking` | Yes | Aggregated booking stats (weekly/monthly/yearly) |

### Profile Design Routes (mounted under `/api`)

| Method | Endpoint | Controller Function | Auth | Description |
|--------|----------|-------------------|------|-------------|
| POST | `/profileDesign` | `makeProfileDesign` | Yes | Save/create profile design |
| GET | `/profileDesign` | `getProfileDesign` | Yes | Get own profile design |
| GET | `/profileDesign/:userId` | `getPublicProfile` | No | Get public profile by user ID |

---

## Key Technical Decisions & Patterns

| Decision | Rationale |
|----------|-----------|
| **Redux for UI state, React Query for server state** | Separation of concerns — Redux handles multi-step form persistence and synchronous UI needs; React Query handles caching, refetching, and loading states for API data |
| **httpOnly JWT cookies** | Prevents XSS attacks (JavaScript cannot read the token) |
| **In-memory OTP storage (Map)** | Simple, no DB writes for transient OTPs; caveat: lost on server restart |
| **MongoDB text indexes for search** | Native full-text search without needing Elasticsearch for MVP scale |
| **Compound unique index on creator+time** | Prevents double-booking at the database level |
| **Zoom Server-to-Server OAuth** | No user interaction needed for meeting creation; fully automated |
| **node-cron for reminders** | Simple scheduled task without needing Redis/Queue for MVP |
| **Slug with timestamp suffix** | Guarantees unique slugs without DB lookups |
| **Lazy-loaded route pages** | Code splitting for faster initial load |
| **Feature-based component directories** | Scalable organization as the app grows |

---

## 17. Code Flow Analysis

### Architecture Analysis

```
                        ┌──────────────────────────────────────────────────┐
                        │           THREE-LAYER API PATTERN               │
                        │                                                  │
                        │  Component Layer (Pages/Components)              │
                        │    ↓ calls hooks                                 │
                        │  ──────────────────────────────────────────      │
                        │  Hook Layer (custom React Query hooks)           │
                        │    ↓ wraps service functions                     │
                        │  ──────────────────────────────────────────      │
                        │  Service Layer (raw Axios API calls)             │
                        │    ↓ HTTP requests                               │
                        │  ──────────────────────────────────────────      │
                        │  Express Backend (Routes → Controllers → Models) │
                        └──────────────────────────────────────────────────┘
```

**Pros of this pattern:**
- Components never make raw HTTP calls
- Hooks encapsulate caching, invalidation, loading/error states
- Service layer is testable in isolation
- If the backend API changes, only the service layer needs updates

**Cons:**
- Three files per feature (component + hook + service) increases boilerplate
- Potential over-abstraction for simple read-only endpoints

### State Management Analysis

```
┌─────────────────────────────────────────────────────────────────────┐
│                   STATE MANAGEMENT DECISION MAP                      │
│                                                                      │
│  Is it server data (API response)?                                   │
│    └─Yes → React Query (cache, refetch, invalidate)                  │
│    └─No  → Is it transient UI form state?                            │
│             └─Yes → Redux Toolkit (signUpSlice, signInSlice)          │
│             └─No  → Is it globally needed user data?                  │
│                      └─Yes → Redux (userDetails)                     │
│                      └─No  → Component-local useState/useReducer     │
│                                                                      │
│  React Query Query Keys:                                             │
│  ───────────────────────                                             │
│  ["currUser"]           → ProtectedRoute hydration                    │
│  ["my-services"]        → Creator's service list                     │
│  ["all-services"]       → Marketplace browsing                       │
│  ["creator-bookings"]   → Creator dashboard                          │
│  ["seeker-bookings"]    → Seeker dashboard                           │
│  ["single-service", id] → Service detail/edit                        │
│  ["one-to-one", id]     → Booking page for a service                 │
│  ["all-users"]          → Admin panel                                │
│  ["analytics", type]    → Creator analytics chart                    │
│                                                                      │
│  Cache invalidation triggers (automatic after mutations):            │
│  ─────────────────────────────────────────────                       │
│  createBooking  → ["seeker-bookings"]                                │
│  cancelBooking  → ["creator-bookings", "seeker-bookings"]            │
│  answerDM       → ["creator-bookings"] (refetches to update status)   │
│  createService  → ["my-services"]                                    │
│  updateService  → ["my-services", "single-service"]                  │
│  deleteService  → ["my-services"]                                    │
│  updateProfile  → ["currUser"]                                       │
└─────────────────────────────────────────────────────────────────────┘
```

### Data Flow Analysis: Booking Creation (Critical Path)

```
Timing breakdown of POST /api/booking/create:

  1. Request validation        ~5ms
  2. DB conflict check         ~10ms
  3. Booking document create   ~15ms
  4. Zoom API call             ~800-1500ms (network latency dependent)
  5. .ics file generation      ~2ms
  6. Email send (seeker)       ~200-500ms (SMTP dependent)
  7. Email send (creator)      ~200-500ms (SMTP dependent)
                              ──────────────
  Total: ~1.2-2.5s

  Note: Steps 4-7 are sequential. For better UX, steps 4-7 could be
  offloaded to a background job queue, returning immediately after
  step 3 with a "Processing" state.
```

### Security Flow Analysis

```
┌─────────────────────────────────────────────────────────────────────┐
│                  SECURITY LAYERS (Defense in Depth)                  │
│                                                                      │
│  Layer 1: Transport                                                  │
│    CORS restricted to http://localhost:5175                          │
│    (production: HTTPS + specific domain)                             │
│                                                                      │
│  Layer 2: Authentication                                             │
│    JWT in httpOnly cookie (not accessible via JS)                    │
│    SameSite=Strict (not sent on cross-origin requests)               │
│    Cookie signed by server-side JWT_SECRET                           │
│                                                                      │
│  Layer 3: Authorization                                              │
│    jsonWebTokenCheck middleware on protected routes                  │
│    adminAuth middleware for admin-only endpoints                     │
│    Controllers verify user owns resources (e.g., service belongs to  │
│    authenticated creator before update/delete)                       │
│                                                                      │
│  Layer 4: Input                                                      │
│    Manual field validation in controllers                            │
│    Mongoose schema validation at model level                         │
│    Missing: centralized input validation library                     │
│                                                                      │
│  Layer 5: Password Storage                                           │
│    bcrypt with 10 salt rounds                                        │
│    Never logged or returned in API responses                         │
│                                                                      │
│  Gap Analysis:                                                       │
│  ──────────────────                                                  │
│  ❌ No rate limiting on auth endpoints (brute force risk)            │
│  ❌ No request size limiting (Multer files)                          │
│  ❌ No Helmet.js for HTTP security headers                           │
│  ❌ No input sanitization (XSS via service title/description)        │
│  ✅ httpOnly cookies (XSS protection)                                │
│  ✅ bcrypt password hashing                                          │
│  ✅ JWT with expiry                                                  │
└─────────────────────────────────────────────────────────────────────┘
```

### Scalability Analysis

| Scaling Dimension | Current State | Limit | Recommendation |
|-------------------|---------------|-------|----------------|
| **Backend Instances** | Single process | Single-core CPU-bound | Horizontal scaling with PM2 cluster or Docker + load balancer |
| **Session/OAuth State** | In-memory Map | Lost on restart, broken across instances | Redis for OTP storage and Zoom token cache |
| **Email Sending** | Synchronous in request lifecycle | Blocks response, SMTP rate limits | Async job queue (Bull + Redis) for all email notifications |
| **File Uploads** | Through backend server | Consumes server bandwidth and disk | Direct-to-Cloudinary uploads via presigned URLs |
| **Database** | Single MongoDB instance | Connection pool exhaustion, read pressure | MongoDB Atlas with read replicas, connection pooling |
| **Frontend Assets** | Vite dev server | No CDN, no compression | Production build served via CDN with gzip/brotli |
| **Cron Jobs** | Single node-cron | Only one instance should run | Use distributed lock (Redis) or dedicated worker |

### Design Pattern Analysis

| Pattern | Where Used | Evaluation |
|---------|-----------|------------|
| **Repository/DAO** | Models encapsulate DB logic | ✅ Clean separation |
| **Middleware Chain** | Express middleware pipeline | ✅ Standard Express pattern |
| **Observer (Pub-Sub)** | React Query cache invalidation | ✅ Efficient reactive updates |
| **Container/Presenter** | Pages as containers, components as presenters | ✅ Partial — some pages mix concerns |
| **Singleton** | Axios instance, Redux store, Zoom token cache | ✅ Appropriate usage |
| **Strategy** | Different booking types (1:1, DM, workshop) | ✅ Shared controller with type branching |
| **Aggregation Pipeline** | Analytics endpoint | ✅ Efficient server-side computation |

### Dependency Analysis

```
Critical dependencies (app breaks without these):
  Express, Mongoose, MongoDB, jsonwebtoken, bcrypt
  React, React Router, React Query, Axios

Important dependencies (key features break without these):
  Razorpay (payments), Zoom API (meetings), Cloudinary (media),
  Nodemailer (emails), Multer (uploads), Firebase (Google Auth)

Utility dependencies (non-critical, replaceable):
  slugify, cookie-parser, cors, morgan, Framer Motion,
  TailwindCSS, Lucide React, Swiper, GSAP
```

---

*Document generated from codebase analysis. For setup instructions, see [README.md](./README.md).*
