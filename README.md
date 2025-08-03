# 🩺 DocQ — Doctor Appointment Booking Platform

DocQ is a full-stack web application that allows users to search, explore, and book appointments with trusted doctors. The platform provides a seamless user experience, fetching real-time doctor data and offering an intuitive interface for appointments.

---

## 🚀 Tech Stack & Libraries used

### 🌐 Frontend:
- **React.js** – Component-based UI
- **React Router DOM** – Routing and navigation
- **Tailwind CSS** – Utility-first CSS framework
- **React Icons** – Iconography
- **Fetch API** – Data fetching from backend

### 🖥️ Backend:
- **Node.js** – JavaScript runtime
- **Express.js** – Backend server and API routing
- **CORS** – Handling cross-origin requests

---

## 📁 Folder Structure

├── frontend/ # React frontend

└── backend/ # Express backend API


---

## 📸 Features

- 🔍 **Search** doctors by name or specialization
- 📆 **Availability status** (Available Today / On Leave / Fully Booked)
- 🧑‍⚕️ **Doctor profiles** with detailed info and image
- 💸 **Consultation fees** displayed clearly
- 📲 **Responsive design** Fully responsive layout that adapts seamlessly across all the devices
- 🔗 **Booking redirects** to doctor profile pages

---

## 🔧 Installation (Local)

1. **Clone the Repository:**

```bash
git clone https://github.com/yaswanthbb/DocQ.git
cd DocQ
```

2. **Install Backend Dependencies:**

```bash
cd backend
npm install
```

3. **Start Backend Server**

```bash
npm start
```

4. **Install Frontend Dependencies:**

```bash
cd ../frontend
npm install
```

5.**Start Frontend Dev Server:**

```bash
npm run dev
```

🌐 **Deployment**

The application is deployed and accessible online:

Frontend Live URL: https://doc-jxpbfmmdh-yaswanthbbs-projects.vercel.app/

Backend API URL: https://docq-xu1o.onrender.com/doctors


### 🛠️ Future Improvements

If given more time, here are features and refinements I'd like to implement:

🔐 Authentication & User Roles – Sign up/login for users

📅 Real Appointment Booking with Time Slot Blocking - A booking system where users can select from available time slots and Once a slot is booked, it should be marked as unavailable for others to prevent double-booking.

📈 Database Integration – Use MongoDB/PostgreSQL for real-time storage

✉️ Email Notifications – Appointment confirmations and reminders

🎨 Improved UI/UX Animations – Smooth transitions, skeleton loaders

### 🧩 Challenges Faced and Solutions

- 🔄 **Incorrect Use of filter() Instead of find() (Backend):-**
While fetching a specific doctor profile by ID, I mistakenly used filter(), which returns an array, instead of find(), which returns a matching object. This caused rendering issues on the frontend where an object was expected. I resolved this by switching to find(), aligning the data structure with what the frontend logic required.

- ⏳ **Conditional Rendering Before API Response (Frontend):-**
The doctors.map() method threw errors because the API response hadn't been received yet (i.e., the data was still undefined). To solve this, I changed the initial state to an empty array and implemented a loading state with conditional rendering to ensure .map() only executes once the data is fetched and available.

- 🔁 **Unsupported Prop used for Routing (Frontend):**
I initially tried accessing route parameters using *props.match.params.id*, which worked in React Router v5. However, this approach is unsupported in React Router v6. I resolved this by using the modern useParams() hook.

