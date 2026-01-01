# Real Trust Business CMS

A full-stack real estate business CMS application built using modern web technologies.  
The project allows managing projects, clients, contacts, and newsletter subscriptions through a backend API with a responsive frontend UI.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Axios
- React Toastify
- CSS (Responsive Design)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

---

## ✨ Features

- Responsive business website UI
- Dynamic Projects & Clients sections
- Contact form with backend integration
- Newsletter subscription functionality
- RESTful APIs for CMS operations
- Toast notifications for user feedback

---

## 🔐 Admin Details

> This project is CMS-ready and admin operations are handled via backend APIs.

**Admin Access (for testing / management):**
- Admin can manage data directly via MongoDB or API routes.
- Admin-related routes are protected logically and can be extended with authentication.

> Note: Authentication can be easily added in future enhancements.
>
> 🔐 Admin Panel Access
## 🔐 Admin Panel Access

This project follows a CMS-based architecture where admin operations are handled through backend APIs and database access.

### Admin Access Method
- There is no separate frontend admin dashboard UI implemented.
- Admin can manage content (Projects, Clients, Contacts, Subscribers) directly via:
  - Backend API endpoints
  - MongoDB database (using MongoDB Compass or Atlas)

### Backend Server


http://localhost:5000


### Example Admin APIs
- View Subscribers  
  `GET /api/subscribers`

- View Projects  
  `GET /api/projects`

- View Clients  
  `GET /api/clients`

Admin actions such as adding, updating, or deleting data can be performed via API requests or database tools.

> This approach keeps the project lightweight and CMS-ready, and authentication can be added as a future

---

## 📂 API Endpoints

### Projects
- `GET /api/projects`

### Clients
- `GET /api/clients`

### Contacts
- `POST /api/contacts`

### Newsletter Subscribers
- `POST /api/subscribers`
- `GET /api/subscribers`

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/real-trust-business-cms.git

2️⃣ Backend Setup
cd backend
npm install
npm start


Create a .env file:

MONGO_URI=your_mongodb_connection_string

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
