# Topmate Clone - Interview Questions and Answers

## Architecture & Design

### Q1: What is the high-level architecture of this project?

**Answer:** The project follows a client-server architecture with a React frontend and an Express.js backend, communicating over HTTP REST APIs.

- **Frontend (Port 5175):** React + Vite SPA with TailwindCSS v4, Redux Toolkit for UI state, TanStack React Query for server state, and React Router v7 for routing.
- **Backend (Port 8001):** Express.js with Mongoose ODM connecting to MongoDB. JWT authentication via httpOnly cookies.
- **External Services:** MongoDB (database), Cloudinary (media storage), Zoom API (video meetings), Gmail SMTP (emails), Firebase (Google OAuth).

Data flows: Frontend → Axios (withCredentials) → Express Routes → Controllers → Models → MongoDB. The `ProtectedRoute` component bridges Redux and React Query by fetching the current user and dispatching it to Redux for synchronous access across the app.

---

### Q2: Why use both Redux Toolkit and TanStack React Query instead of just one?

**Answer:** They serve different purposes:

- **Redux Toolkit** manages client-side UI state — form data in the multi-step signup wizard, sign-in form fields, current user object for synchronous access, and profile design customization.
- **TanStack React Query** manages all server state — API data fetching, caching, background refetching, and optimistic updates. It automatically handles loading/error states, deduplicates requests, and invalidates cache after mutations.

The pattern is: React Query fetches server data and keeps it in sync; Redux holds UI-only transient state that doesn't need to persist across sessions. This avoids over-complicating either solution and follows the principle of using the right tool for each job.

---

### Q3: How does the booking system prevent double-booking conflicts?

**Answer:** Double-booking prevention works at two levels:

1. **Database Level:** A MongoDB compound unique index on `{ creator: 1, time: 1 }` ensures no two bookings can exist at the same time for the same creator. If two requests arrive simultaneously, MongoDB will reject the second one with a duplicate key error.

2. **Application Level:** The availability calendar filters out already-booked slots before presenting them to the seeker, so the UI never shows unavailable times.

The database-level constraint is the source of truth — it guarantees correctness even under concurrent requests.

---

### Q4: How is file upload handled in this project?

**Answer:** File uploads use a two-step pipeline:

1. **Multer (disk storage):** On service creation, files are uploaded to a local `uploads/` directory on the server. The file paths are stored temporarily.
2. **Cloudinary:** On service update, the local files are uploaded to Cloudinary's cloud storage, and the local copies are cleaned up. Cloudinary URLs are permanently stored in the database.

This approach avoids storing large files on the server long-term while keeping the initial create operation fast. For the update endpoint specifically, files go through Multer → Cloudinary → URL storage.

---

### Q5: How does Zoom integration work without user interaction?

**Answer:** The project uses Zoom's **Server-to-Server OAuth** flow, which doesn't require user interaction or redirects. The backend:

1. Exchanges an Account ID, Client ID, and Client Secret (from env variables) for an access token.
2. Caches the token in memory with its expiry time to avoid unnecessary API calls.
3. Automatically refreshes the token when it expires by requesting a new one.
4. When a booking is confirmed, calls Zoom's API to create a meeting and stores the returned meeting link and ID in the booking record.

---

## Authentication & Security

### Q6: How is authentication implemented?

**Answer:** Authentication uses JWT tokens stored in **httpOnly cookies** (not localStorage) for security:

1. **Sign-up:** User registers via a 5-step wizard. Password is hashed with bcrypt (10 salt rounds) before storage.
2. **Sign-in:** Email/password credentials are verified against the database using bcrypt compare.
3. **JWT Generation:** On successful auth, a JWT (1 day expiry) is signed and sent as an httpOnly, SameSite=Strict cookie.
4. **Verification:** The `jsonWebTokenCheck` middleware reads the token from cookies, verifies it, and attaches `req.user` to the request.
5. **Google OAuth:** Firebase SDK handles the Google sign-in flow on the frontend; the resulting token is sent to the backend for verification and user creation/login.
6. **Passwordless OTP:** Users can request a one-time code sent via Gmail SMTP, stored in an in-memory Map (expires or is deleted after verification).

---

### Q7: Why use httpOnly cookies instead of localStorage for JWTs?

**Answer:** httpOnly cookies are not accessible via JavaScript, making them immune to XSS (Cross-Site Scripting) attacks. If an attacker injects malicious scripts, they cannot read the token from an httpOnly cookie. localStorage, in contrast, is accessible via `window.localStorage`, so any XSS vulnerability would expose the token. Additionally, with `SameSite=Strict`, the cookie is not sent on cross-origin requests, providing CSRF protection.

---

### Q8: How are passwords stored?

**Answer:** Passwords are hashed using **bcrypt** with 10 salt rounds in `/backend/src/utility/bcrypt.js`. When a user signs up, the plain-text password is hashed before being saved to MongoDB. During sign-in, the provided password is compared against the stored hash using bcrypt's compare function. Raw passwords are never stored or logged.

---

## Database & Models

### Q9: What are the main MongoDB collections and their relationships?

**Answer:** There are 4 collections:

1. **users** — Core user data (profile, availability, settings, social links). References `services[]` by ID.
2. **userservices** — Services offered by creators (title, price, category, files). References `user` (creator).
3. **bookings** — Booking records linking seekers to creators' services (date, time, status, meeting link). References `seeker`, `creator`, and `service`.
4. **userprofiles** — Public profile customization (theme, badges, testimonials). One-to-one with `user`.

Users have services and bookings; bookings link seekers to creators through a specific service.

---

### Q10: How is search implemented for the marketplace?

**Answer:** Search uses MongoDB's **text indexes**. The `userservices` collection has a compound text index on the `title` and `description` fields. When a user searches, the backend controller (`userServices.controller.js`) builds a regex-based query that searches across these fields with case-insensitive matching. The marketplace also supports filtering by category (15+ categories like technology, marketing, health, etc.) via URL query parameters.

---

### Q11: How are availability and time slots modeled?

**Answer:** A creator's availability is stored as an array of day-of-week objects in the User model:

```javascript
availability: [{
  day: String,       // e.g., "Monday"
  slots: [{          // available time ranges for that day
    start: String,   // e.g., "09:00"
    end: String      // e.g., "17:00"
  }]
}]
```

Each creator also has settings for `slotDuration` (default 30 minutes), `timezone`, `noticePeriod` (minimum advance booking time), and `bookingPeriod` (how far out bookings are accepted). The frontend availability calendar calculates discrete time slots based on these settings and filters out already-booked slots.

---

## Backend

### Q12: What middleware does the Express app use?

**Answer:** The middleware chain in `/backend/src/app.js` processes requests in this order:

1. `cookie-parser` — Parses cookies from incoming requests.
2. `express.json()` — Parses JSON request bodies.
3. `express.urlencoded({ extended: true })` — Parses URL-encoded bodies.
4. `cors` — Configures Cross-Origin Resource Sharing (origin: `http://localhost:5175`, credentials: true).
5. Route-specific `jsonWebTokenCheck` middleware — Verifies JWT for protected routes.

---

### Q13: How are reminder emails sent?

**Answer:** A **node-cron** job runs every 10 minutes (configured in `/backend/src/Services/cronJobs.js`). It:

1. Queries the Bookings collection for confirmed bookings where `reminderSent` is false and `reminderTime` (30 minutes before the booking) has passed.
2. Uses a concurrency-limited queue (max 5 simultaneous emails) to send reminder emails via Nodemailer/Gmail SMTP.
3. Updates each booking's `reminderSent` flag to true after sending.

This prevents overwhelming the SMTP server while ensuring timely reminders.

---

### Q14: How does the analytics endpoint work?

**Answer:** The analytics endpoint (`GET /api/dashboardAnalytics/:type`) accepts a period type (`weekly`, `monthly`, or `yearly`) and uses MongoDB's **aggregation pipeline** to calculate:

- Total bookings in the period
- Revenue (sum of booking prices)
- Booking counts grouped by service
- Comparison with the previous period (growth percentage)

The aggregation pipeline uses `$match`, `$group`, `$sort`, and `$lookup` stages to compute these statistics efficiently on the database side.

---

### Q15: What happens when a booking is created?

**Answer:** Creating a booking triggers a multi-step process:

1. **Validation:** Check that the requested time slot is available and within the creator's availability settings.
2. **Database Insert:** Create the booking document. The compound unique index prevents double-booking.
3. **Zoom API Call:** If the booking is a 1:1 call or workshop, a Zoom meeting is auto-created via the Server-to-Server OAuth integration.
4. **Calendar Invite:** An `.ics` file is generated with the meeting details.
5. **Email Notifications:** Confirmation emails with the `.ics` attachment are sent to both the seeker and the creator via Nodemailer/Gmail SMTP.

---

## Frontend

### Q16: How is routing structured?

**Answer:** The app uses React Router v7 with **lazy loading** for all page components. Routes are defined in `App.jsx` inside a `<Suspense>` wrapper. Key route groups:

- **Public:** `/`, `/marketplace`, `/about`, `/contact`, `/signin`, `/signup/*`
- **Protected:** `/dashboard` (creator), `/seker-dashboard` (seeker), `/booking/*`, `/profile/*`
- **Dynamic:** `/@:username` (public profile pages)

The `ProtectedRoute` component wraps all authenticated routes. It uses React Query to fetch the current user and dispatches the result to Redux for global access. If the user is not authenticated, it redirects to `/signin`.

---

### Q17: How are API calls organized on the frontend?

**Answer:** API calls follow a three-layer pattern:

1. **Service Layer** (`/frontend/src/services/`) — Raw Axios API calls organized by domain (userAuthServices, CreatorService, booking-services). Each function creates an HTTP request and returns the response data.
2. **Hook Layer** (`/frontend/src/hooks/`) — Custom React Query hooks that wrap service functions. Each hook defines query keys, caching behavior, stale times, and mutation callbacks with automatic cache invalidation.
3. **Component Layer** — Pages and components call the hooks directly (e.g., `useGetCurrUser()`) and receive `{ data, isLoading, error }`.

This separation ensures components never make raw Axios calls and don't need to manage loading/error states manually.

---

### Q18: How is the 5-step signup wizard implemented?

**Answer:** The signup wizard uses **Redux Toolkit** to manage form state across 5 steps, each rendered as a separate page component:

1. **SignUp** — First name, last name, email, password
2. **SignUp2** — Username, expertise area(s)
3. **SignUp3** — LinkedIn, Twitter, Instagram URLs
4. **SignUp4** — WhatsApp number, country, currency
5. **SignUp5** — Availability configuration (day-by-day slot setting)

The `signUpSlice` Redux slice holds all fields. Each step dispatches actions to update the slice. On the final step, all accumulated data is sent to the backend as a single signup request. The wizard validates each step before allowing navigation to the next.

---

### Q19: How are creator and seeker dashboards structured?

**Answer:** Both dashboards are layout components with nested routing:

- **CreatorDashboard** — Sidebar (navigation) + main content area with 11 nested routes: home (analytics overview), bookings, queries (priority DMs), services list, create service, service customization, calendar settings, profile customization, general settings, and more.
- **SeekerDashboard** — Same layout pattern with 4 nested routes: home (booking history/goals), bookings, profile management, and rewards.

The sidebar adapts its navigation items based on the user's role. Both dashboards share a common layout structure but have completely different content components.

---

### Q20: What UI libraries and tools are used?

**Answer:** The frontend uses:
- **TailwindCSS v4** — Utility-first CSS framework for styling
- **Framer Motion** — Page transitions, animations, and micro-interactions
- **GSAP** — Complex animations (hero sections, scroll-triggered effects)
- **Swiper** — Touch-enabled carousels and sliders
- **React Hot Toast** — Toast notification system for success/error messages
- **Lucide React & React Icons** — Icon libraries

---

## Integrations

### Q21: What external services does the project integrate with?

**Answer:** The project integrates with 4 external services:

1. **MongoDB (Atlas/Local)** — Primary database for all application data.
2. **Cloudinary** — Cloud-based media storage for service files (images, PDFs, videos) and user profile images.
3. **Zoom API** — Automatic video meeting creation via Server-to-Server OAuth for confirmed bookings.
4. **Gmail SMTP (Nodemailer)** — Sends transactional emails: OTP codes, booking confirmations, priority DM responses, and session reminders.

### Q22: How does the OTP-based passwordless login work?

**Answer:** The OTP flow:
1. User enters their email on the sign-in page and selects "Send OTP."
2. Frontend calls the email-check endpoint. If the email exists, it sends an OTP generation request.
3. Backend generates a 6-digit code, stores it in an in-memory Map keyed by email with a TTL, and sends it via Nodemailer/Gmail SMTP.
4. User enters the OTP on the frontend. The frontend calls the OTP verification endpoint.
5. Backend compares the provided OTP against the stored value. On match, it issues a JWT and removes the OTP from the Map.
6. User is now authenticated without a password.

The OTP Map is in-memory, so a server restart would invalidate all pending OTPs — acceptable for an MVP but a production system would use Redis or a database-backed store.

---

## Performance & Optimization

### Q23: What performance optimizations are in place?

**Answer:** Several optimizations across the stack:

- **Code Splitting:** All page components are `lazy()` loaded with React Suspense, reducing the initial bundle size.
- **React Query Caching:** Server data is cached and automatically refetched in the background, reducing redundant API calls.
- **MongoDB Indexes:** Compound indexes on booking (creator+time for conflict prevention) and text indexes on services (for search) optimize query performance.
- **Concurrency-Limited Cron Jobs:** Reminder emails are sent with a concurrency limit of 5 to avoid overwhelming the SMTP server.
- **Zoom Token Caching:** The Zoom access token is cached in memory with expiry tracking to avoid re-authenticating on every booking.

---

### Q24: How could this application be scaled?

**Answer:** To scale this application:

- **Database:** Move from a single MongoDB instance to MongoDB Atlas with replication and sharding. Use Redis for session/OTP storage instead of in-memory Maps.
- **Backend:** Horizontally scale with multiple Node.js instances behind a load balancer. Make file uploads directly to Cloudinary (presigned URLs) instead of through the server to reduce server load.
- **Caching:** Add Redis caching for marketplace search results and frequently accessed public profiles.
- **Emails:** Offload email sending to a dedicated queue (Bull/Redis) or a service like SendGrid/Mailgun instead of direct Nodemailer calls.
- **Frontend:** Implement CDN serving, further code splitting, and service worker caching for offline support.
- **Microservices:** Split the monolith into domain-specific services (auth, booking, notifications, analytics).

---

## Design Decisions & Trade-offs

### Q25: Why was MongoDB chosen over a SQL database?

**Answer:** MongoDB was chosen for several reasons:

- **Flexible Schema:** The service model has variable fields (different file types, optional meeting links, different pricing structures). MongoDB's schemaless nature accommodates this without migrations.
- **Embedded Documents:** Availability slots, social links, and service files are naturally stored as embedded arrays within their parent documents, avoiding joins.
- **Rapid Prototyping:** The project is an MVP. MongoDB allows fast iteration without schema migrations.
- **Text Search:** Built-in text indexes provide adequate search functionality without needing a separate search service like Elasticsearch.

The trade-off is that relational queries (e.g., "all bookings for a user with service details") require either aggregation pipelines or application-level joins, which are more complex than SQL joins.

---

### Q26: Why use a monolithic backend instead of microservices?

**Answer:** For an MVP, a monolithic architecture provides:

- **Simpler Development:** Single codebase, single deployable, no inter-service communication complexity.
- **Faster Iteration:** Changes across domains (auth, booking, notifications) can be made in one place.
- **Transactional Consistency:** Booking creation involves multiple steps (DB insert + Zoom API + email). In a monolith, this is straightforward; in microservices, it requires sagas or distributed transactions.
- **Lower Operational Overhead:** No need for service discovery, API gateways, or message queues.

The architecture is structured with clear route/controller separation, making it feasible to extract microservices later if scaling demands it.

---

### Q27: Why store JWTs in cookies rather than the Authorization header?

**Answer:** The project uses cookies over the Authorization header because:

- **httpOnly Flag:** Cookies can be marked httpOnly, preventing JavaScript access and mitigating XSS attacks. The Authorization header would require the token to be accessible in JS (typically from localStorage or a JS variable).
- **Automatic Attachment:** Cookies are automatically sent with every request to the matching domain. No need for Axios interceptors to manually attach headers.
- **Simpler Frontend:** The frontend doesn't need to manage token lifecycle (storage, retrieval, refresh logic) since the browser handles it.

The trade-off is that cookie-based auth requires proper CORS and SameSite configuration, and is slightly more complex for mobile/non-browser clients.

---

## General

### Q28: What file structure conventions does the project follow?

**Answer:** Both frontend and backend use **feature-based organization**:

- **Backend:** Files grouped by role — `models/` (schemas), `routes/` (endpoint definitions), `controllers/` (business logic), `utility/` (helpers), `Services/` (business services like email, cron).
- **Frontend:** Components grouped by feature domain — `CreatorDashboard/`, `SeekerDashboarPage/`, `Booking/`, `MarketPlaceComponent/`, `ProfileComponent/`, `VideoCall/`. Shared components are in `commonCompo/`. Pages are flat in `pages/` with lazy-loaded routing.
- **Services and Hooks:** Separate directories for service functions (Axios calls) and custom React Query hooks, organized by domain.

This structure scales well because related files are co-located, making it easy to find and modify feature-specific code.

---

### Q29: How are environment variables managed?

**Answer:** Environment variables are stored in `.env` files at the project root and in both `frontend/` and `backend/` directories. The `.gitignore` excludes `.env` files. Key variables include:

- **Backend:** MongoDB URI, JWT secret, Gmail SMTP credentials (user, app password), Zoom API credentials (Account ID, Client ID, Client Secret), Cloudinary credentials (cloud name, API key, secret).
- **Frontend:** Vite-exposed variables for backend URL, Firebase config.

The backend uses `dotenv` to load variables. The frontend uses Vite's `import.meta.env` pattern.

---

### Q30: What testing strategy does this project use?

**Answer:** The project does not currently have automated tests. Testing is manual through the development server. For production readiness, the following would be recommended:

- **Backend:** Unit tests for controllers and utility functions (Jest/Mocha), integration tests for API endpoints (Supertest), and database-level tests for model validations and indexes.
- **Frontend:** Component tests (React Testing Library) for critical UI flows (signup wizard, booking flow) and integration tests for hook-service chains.
- **E2E:** Cypress or Playwright tests for critical user journeys (signup → create service → book → receive confirmation).

The booking conflict prevention (compound unique index) and auth middleware would be priority areas for test coverage.

---

### Q31: How does the project handle errors?

**Answer:** Error handling is implemented at multiple levels:

- **Backend Controllers:** Wrap logic in try-catch blocks. Errors are caught and sent as JSON responses with appropriate HTTP status codes (400 for validation, 401 for auth, 404 for not found, 500 for server errors).
- **Express Error Middleware:** A centralized error handler catches unhandled errors and returns consistent error responses.
- **Frontend React Query:** Each hook exposes `isError` and `error` states. Components display error messages or toast notifications via React Hot Toast.
- **Axios Interceptors:** The Axios instance could be extended with response interceptors for global error handling (e.g., redirect to sign-in on 401).

---

### Q32: What is the role of the `userProfile` collection and how does it differ from the `user` collection?

**Answer:** The `users` collection stores core, operational user data (authentication credentials, availability settings, social links, expertise) that the application needs to function. The `userprofiles` collection stores public-facing customization data (theme colors, badges, testimonials, profile image, display name, "about" section) that only affects how the user appears on their public profile page.

This separation keeps the auth/settings data lean and secure while allowing the profile to have a different schema with optional, presentation-focused fields. A user can have exactly one profile (one-to-one relationship via the `user` reference with a unique constraint).

---

### Q33: How does the marketplace discovery page work?

**Answer:** The marketplace (`/marketplace` route) provides:

- **Category Navigation:** Users can browse services by 15+ categories (e.g., Technology, Marketing, Health, Finance, Career, etc.) displayed in a horizontal navbar.
- **Search Bar:** Text search across service titles and descriptions using MongoDB's text indexes.
- **Service Cards:** Each card displays the service title, creator name/avatar, price, duration, and a brief description.
- **Details View:** Clicking a card navigates to a detailed view with full description, file attachments, creator info, and a "Book Now" call-to-action.

The marketplace fetches data via React Query hooks that pass category filters and search terms as query parameters to the backend.

---

### Q34: How is the priority DM feature different from regular booking?

**Answer:** Priority DM is a separate service category where:

- **Pricing:** Seekers pay a fixed price (set by the creator) to send a direct message/question.
- **No Scheduling:** Unlike 1:1 calls or workshops, DMs have no time/date component — they are asynchronous.
- **Seeker Flow:** The seeker pays, writes their question, and waits for a response.
- **Creator Flow:** Creators see pending DMs in their dashboard under "Queries," can read the question, write an answer, and submit it. The answer is sent to the seeker via email.
- **Booking Record:** DMs are stored in the same Bookings collection but with a `question` field, an `answer` field, and no meeting link or time slot.

---

---

## Code Quality & Analysis

### Q35: What is the overall code quality assessment of this project?

**Answer:** The project demonstrates good architectural decisions for an MVP but has areas for improvement:

**Strengths:**
- **Clean separation of concerns** — Three-layer API pattern (Component → Hook → Service) on frontend; Routes → Controllers → Models on backend.
- **Consistent naming** — Files and functions follow predictable naming conventions across the codebase.
- **Feature-based organization** — Related files are co-located, making navigation intuitive.
- **Security-first decisions** — httpOnly cookies, bcrypt hashing, SameSite cookies.
- **Error handling** — Try-catch blocks in controllers with meaningful HTTP status codes.

**Areas for improvement:**
- **No automated tests** — Zero test coverage across the entire project. Critical booking and payment flows are untested.
- **No input validation library** — Manual validation in each controller is error-prone and inconsistent.
- **No TypeScript** — The entire codebase is JavaScript. TypeScript would catch type-related bugs at compile time.
- **Inconsistent error responses** — No standardized error response format across controllers.
- **Hardcoded values** — Some configuration values (timezone, slot durations) appear in both frontend and backend code.
- **Missing centralized error middleware** — Express error handlers could be unified.

---

### Q36: How does this project compare to production-grade standards?

**Answer:** The project is at a solid **MVP/Prototype stage** — functional but with gaps for production:

| Dimension | Current State | Production Standard |
|-----------|---------------|-------------------|
| **Testing** | None | Unit + Integration + E2E (80%+ coverage) |
| **Monitoring** | None | APM (New Relic/Datadog), error tracking (Sentry), structured logging (Winston) |
| **CI/CD** | None | GitHub Actions / GitLab CI with lint, test, build, deploy stages |
| **Containerization** | None | Docker + docker-compose for reproducible environments |
| **API Documentation** | README only | OpenAPI/Swagger with auto-generated docs |
| **Rate Limiting** | None | express-rate-limit on auth and public endpoints |
| **Input Validation** | Manual | Zod/Joi schemas with auto-generated TypeScript types |
| **Secrets Management** | .env files | Vault / AWS Secrets Manager / encrypted CI variables |
| **Database Migrations** | None | Migrate / Mongoose migration framework |
| **Health Checks** | None | /health endpoint with DB connectivity check |
| **Graceful Shutdown** | None | SIGTERM handler for DB disconnection and ongoing request draining |

---

### Q37: What technical debt exists in this project?

**Answer:** Key areas of technical debt:

1. **In-memory OTP storage** — A JavaScript Map cannot survive server restarts or scale across multiple instances. Requires Redis.

2. **Synchronous email sending** — Booking creation blocks the HTTP response while waiting for SMTP. Should be async via a job queue.

3. **No pagination** — API endpoints like `/get-all-users`, `/get-all-services`, and booking lists return all records without pagination. Will become slow with real data volumes.

4. **File upload inefficiency** — Multer writes to disk before Cloudinary upload. Creates unnecessary I/O and temporary files that need cleanup.

5. **Duplicate env configuration** — Some defaults (timezone, slot duration) exist in both backend and frontend without a single source of truth.

6. **No migration system** — Schema changes require manual MongoDB updates or dropping collections.

7. **Mixed concerns in controllers** — Some controllers handle both business logic and response formatting, making unit testing harder.

8. **No logging framework** — Only `morgan` for HTTP logs and `console.log` scattered throughout. No structured logging.

9. **Cron reliability** — Single-process node-cron will miss jobs if the server is down. No retry mechanism.

10. **No type safety** — Full JavaScript codebase means runtime errors from undefined properties are common.

---

### Q38: How would you migrate this project to TypeScript?

**Answer:** A phased migration approach:

**Phase 1 — Backend (2-3 days)**
1. Rename `.js` to `.ts` incrementally starting with models (they define the data shapes)
2. Add Mongoose schema types with `Interface` definitions
3. Convert utility files (bcrypt, jwToken, Zoom, Cloudinary)
4. Add types for request/response in controllers
5. Convert routes and middleware last
6. Add `ts-node` or compile with `tsc`

**Phase 2 — Frontend (3-4 days)**
1. Rename `.jsx` to `.tsx` starting with service layer (API response types)
2. Define interfaces for all API responses (User, Service, Booking, Profile)
3. Type the Redux slices (typed state + actions)
4. Add generics to React Query hooks
5. Convert components — start with pages, then shared components

**Key types to define:**
```typescript
interface IUser { _id: string; firstName: string; lastName: string; email: string; role: 'user' | 'expert'; availability: IAvailabilitySlot[]; /* ... */ }
interface IService { _id: string; title: string; category: 'one-to-one' | 'priorityDm' | 'workshop' | 'product' | 'package'; price: number; /* ... */ }
interface IBooking { _id: string; seeker: IUser; creator: IUser; service: IService; date: string; time: string; status: 'pending' | 'confirmed' | 'cancelled'; /* ... */ }
```

---

### Q39: How would you add monitoring and observability?

**Answer:** A three-pillar approach:

**1. Logging (Structured)**
```javascript
// Replace console.log with Winston/Pino
import pino from 'pino';
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

// In controllers:
logger.info({ bookingId, userId }, 'Booking created successfully');
logger.error({ err, bookingId }, 'Failed to create booking');
```

**2. Metrics (Application Performance)**
- Use `express-prom-bundle` or OpenTelemetry to expose Prometheus metrics:
  - Request count, duration, error rate per endpoint
  - Database query timing
  - External API call timing (Zoom, Cloudinary, Razorpay)
- Track business metrics: bookings created/hour, revenue, active creators

**3. Error Tracking (Sentry)**
```javascript
import Sentry from '@sentry/node';
Sentry.init({ dsn: process.env.SENTRY_DSN });

// Automatic error capture + manual breadcrumbs
Sentry.setUser({ id: userId, email });
Sentry.captureException(error);
```

**4. Health Checks**
```
GET /health → { status: 'ok', db: 'connected', uptime: 12345 }
Used by load balancers and container orchestrators.
```

---

### Q40: What is the database query performance analysis?

**Answer:** Based on the schema and indexes:

| Query Pattern | Index Used | Performance | Notes |
|---------------|-----------|-------------|-------|
| `User.find({email})` | Unique email index | O(log n), fast | Used on every sign-in |
| `Booking.find({creator, time})` | Compound unique: creator+time | O(log n), fast | Double-booking prevention |
| `Booking.find({reminderTime}, {reminderSent: false})` | Compound: reminderTime+reminderSent+status | O(log n), fast | Cron job query |
| `Service.find({$text: {search}})` | Text index on title+description | O(n) full scan for partial matches | Text indexes use OR logic; consider Atlas Search for production |
| `Booking.aggregate([$match, $group])` | No index on `createdAt` | Collection scan for date filtering | Add index on `{creator: 1, createdAt: -1}` |
| `User.find().populate('services')` | N/A (application-level join) | O(n) — n queries instead of 1 | Use `$lookup` aggregation or denormalize |

**Recommendation:** Add missing compound index `{ creator: 1, createdAt: -1 }` to optimize analytics aggregation queries.

---

### Q41: How would you refactor the booking creation for better performance?

**Answer:** The current booking creation is synchronous and sequential. Here's an async refactoring:

```
Current (synchronous, ~1.5-3s response time):
  validate → insert DB → Zoom API → .ics file → send email seeker → send email creator → respond

Refactored (asynchronous, ~200ms response time):
  validate → insert DB (status: "processing") → respond immediately
                                              ↓
                              Background Job Queue (Bull + Redis):
                               1. Attempt Zoom API (retry 3x on failure)
                               2. Generate .ics file
                               3. Queue email sends (separate jobs)
                               4. Update booking status: "confirmed"
                               5. If Zoom fails → status: "confirmed_no_meeting", log alert
```

**Frontend changes:**
- After booking creation, poll or use WebSocket to check when status changes to "confirmed"
- Show "Processing booking..." state with the meeting link appearing once available
- This improves UX (instant response) and reliability (retries, no blocking)

---

### Q42: What is the analysis of the Razorpay payment integration architecture?

**Answer:** Based on the codebase, the payment flow follows Razorpay's standard two-step process:

```
1. Frontend: Create Razorpay Order
   POST /api/booking/create
   → Backend creates Booking document
   → Returns booking details

2. Frontend: Open Razorpay Checkout
   razorpay = new Razorpay({ key, amount, prefill })
   razorpay.open()

3. On Success: Verify Payment
   POST /api/payment/verify
   → Backend verifies razorpay_signature
   → Updates booking payment status
   → Confirms the booking

4. On Failure:
   → Booking remains in "pending_payment" state
   → User can retry or booking auto-cancels after TTL
```

**Analysis:**
- ✅ **Two-step verification** prevents payment forgery
- ⚠️ **No webhook handler** — Razorpay webhooks (for failed payments, refunds) are not implemented. Production requires webhook verification.
- ⚠️ **No refund flow** — If a booking is cancelled, there's no mechanism to process refunds via Razorpay.
- ✅ **Order creation inside booking creation** ensures atomicity — no orphaned payments.

---

## Design Decisions & Trade-offs

### Q43: Why might you choose PostgreSQL over MongoDB for this application?

**Answer:** While MongoDB was chosen for schema flexibility, PostgreSQL would offer:

| Factor | MongoDB (Current) | PostgreSQL (Alternative) |
|--------|------------------|------------------------|
| **Schema flexibility** | ✅ Embedding, no migrations | ❌ Fixed schema, migrations needed |
| **Booking integrity** | Compound unique index | ✅ Multi-column unique constraint + CHECK constraints |
| **Availability query** | Array of embedded docs | ✅ JSONB or separate availability table with exclusion constraints |
| **Analytics** | Aggregation pipeline | ✅ Window functions, CTEs, materialized views |
| **Search** | Text indexes | ✅ Full-text search with ranking, tsvector/tsquery, trigrams |
| **Transactions** | Single-document atomicity | ✅ ACID multi-document transactions |
| **Consistency** | Eventual consistency (replica sets) | ✅ Strong consistency by default |
| **Joins** | Manual population or $lookup | ✅ Native JOINs with proper indexing |

**Verdict:** MongoDB is appropriate for an MVP with varied service structures. PostgreSQL would be better for a production system requiring complex reporting, strict data integrity, and relational queries.

---

### Q44: How does the file upload strategy compare to alternatives?

**Answer:** Three approaches compared:

| Approach | Latency | Server Load | Complexity | Cost |
|----------|---------|-------------|------------|------|
| **Current: Multer → Disk → Cloudinary** | Medium | High (buffers file) | Medium | Low (temp disk) |
| **Alternative 1: Direct-to-Cloudinary (presigned)** | Low | Minimal | Low (frontend SDK) | Low |
| **Alternative 2: Multer → Cloudinary (stream)** | Low | Low | Medium | Low |
| **Alternative 3: S3 + CloudFront** | Low | None | High (AWS setup) | Medium |

**Recommendation:** Switch to **direct-to-Cloudinary uploads** from the frontend using unsigned upload presets (limited to specific file types and sizes) or signed uploads with a backend-generated signature. This eliminates server disk I/O, reduces server load, and improves upload speed.

---

## General

### Q45: How would you add a new service category (e.g., "Podcast")?

**Answer:** Adding "Podcast" as a new service category would require changes in:

1. **Backend Model** (`userService.model.js`) — Add `'podcast'` to the `category` enum.
2. **Backend Controller** — No changes needed if the existing CRUD logic is generic enough; otherwise, add podcast-specific validation.
3. **Frontend Category Constants** — Add "Podcast" to the service type options in the Create Service form (category dropdown).
4. **Frontend Marketplace Category Navbar** — Add "Podcast" to the category filter list.
5. **Frontend Service Card/Display** — Review if any category-specific rendering is needed (e.g., podcast might need an audio player instead of the video/file display).
6. **Booking Flow** — Ensure the booking/create endpoints handle the new category correctly (podcast might be like a 1:1 call or could be asynchronous like a DM).
