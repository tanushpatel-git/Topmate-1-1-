# Topmate Clone - Creator Monetization Platform

A full-stack creator storefront platform that enables experts, coaches, and mentors to monetize their knowledge through 1:1 meetings, webinars, cohort-based courses, priority DMs, and digital products.

## Features

- **Authentication**: Email/password sign-up, OTP-based passwordless login, Google OAuth (Firebase), JWT with httpOnly cookies
- **5-Step Onboarding Wizard**: Profile setup → Expertise → Services → Availability → Contact
- **Creator Dashboard**: Manage services, bookings, calendar, profile, and settings
- **Seeker Dashboard**: Goal-based career coaching, booking management, expert discovery
- **Service Management**: Full CRUD for 1:1 calls, workshops, cohorts, products, packages, priority DMs
- **Booking System**: Availability calendar with slot management, booking conflict prevention, confirmation/cancellation flow
- **Marketplace**: Browse experts by 15+ categories with search and discovery
- **Profile Pages**: Customizable public profiles with themes, testimonials, badges, and social links


## Tech Stack

### Frontend
- **React 19** + **Vite** + **TailwindCSS v4**
- **Redux Toolkit** (state management)
- **TanStack React Query** (server state)
- **React Router v7** (routing)
- **Firebase** (Google Auth)
- **Framer Motion** + **GSAP** (animations)
- **Axios** (HTTP client)

### Backend
- **Node.js** + **Express 5**
- **MongoDB** + **Mongoose 9**
- **JWT** + **bcrypt** (authentication)
- **Nodemailer** (email/OTP)
- **Cookie-parser** + **CORS**


## Project Structure

```
topmate-1-1/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Route handlers (auth, services, bookings)
│   │   ├── models/          # Mongoose schemas (User, Service, Booking, Profile)
│   │   ├── routes/          # Express route definitions
│   │   └── utility/         # DB connection, JWT, bcrypt, nodemailer
│   ├── server.js            # Entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Route pages (Home, Dashboards, Booking, etc.)
│   │   ├── hooks/           # React Query hooks for API calls
│   │   ├── redux/           # Redux slices (auth, profile, user data)
│   │   ├── auth/            # Firebase config
│   │   ├── services/        # Axios instance & API functions
│   │   └── assets/          # Static assets
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20+
- MongoDB (local or Atlas)

### Environment Variables

**Backend** (`backend/.env`):
```
PORT=8001
JWT_SECRET=<your_jwt_secret>
MONGODB_URI=<mongodb_connection_string>
NODE_HEADEMAIL=<gmail_for_otp>
NODE_HEADEMAIL_PASS=<gmail_app_password>
```

**Frontend** (`frontend/.env`):
```
VITE_BACKEND_URL=http://localhost:8001/api
VITE_FIREBASE_API_KEY=<firebase_api_key>
VITE_FIREBASE_PROJECT_ID=<firebase_project_id>
VITE_FIREBASE_AUTH_DOMAIN=<firebase_auth_domain>
VITE_FIREBASE_STORAGE_BUCKET=<firebase_storage_bucket>
VITE_FIREBASE_MESSAGING_SENDER_ID=<firebase_sender_id>
VITE_FIREBASE_APP_ID=<firebase_app_id>
```

### Local Development

```bash
# Backend
cd backend
npm install
npm run server    # Starts with nodemon on :8001

# Frontend
cd frontend
npm install
npm run dev       # Starts Vite dev server on :5173
```

## API Endpoints

### User (`/api/user`)
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/signup` | POST | Register new user |
| `/signin` | POST | Login with email/password |
| `/signin-with-google` | POST | Google OAuth login |
| `/email-check` | POST | Send OTP for passwordless login |
| `/otp-verification` | POST | Verify OTP |
| `/getCurrUser` | GET | Get current authenticated user |
| `/logout` | POST | Logout (clear cookie) |
| `/update-profile` | POST | Update user profile |
| `/update-settings` | PATCH | Update scheduling settings |
| `/delete-account` | GET | Delete account |
| `/marketplace` | GET | Get marketplace data |
| `/get-all-users` | GET | Get all users |

### Services (`/api/service`)
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/create` | POST | Create a service |
| `/my` | GET | Get my services |
| `/id/:serviceId` | GET | Get service by ID |
| `/search` | GET | Search services |
| `/one-to-one/:id` | GET | Get service with user data |
| `/update/:serviceId` | PUT | Update service |
| `/:serviceId` | DELETE | Delete service |
| `/get-all-services` | GET | Get all services |

### Bookings (`/api/booking`)
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/create` | POST | Create a booking |
| `/seeker/:seekerId` | GET | Get seeker's bookings |
| `/creator/:creatorId` | GET | Get creator's bookings |
| `/cancel/:bookingId` | PUT | Cancel booking |
| `/confirm/:bookingId` | PUT | Confirm booking |

## API Routes

```
/api/user        → user.route.js
/api/service     → Service.route.js
/api/booking     → Booking.routes.js
```
