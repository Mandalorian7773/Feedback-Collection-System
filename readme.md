## Feedback Collection System

A simple full-stack web application that allows users to submit feedback and enables admins to view submitted feedback through a protected interface.

# Tech Stack

# Frontend

React (JavaScript)

Material UI (Star Rating)

# Backend

Node.js

Express

Prisma ORM

Database

PostgreSQL

Features

Public feedback submission form

Star-based rating system (1–5)

Admin-only feedback listing

Pagination support

Sorted by newest feedback first

Simple and clean REST APIs

# Project Structure
Backend/
 ├─ src/
 │  ├─ server.js
 │  ├─ controllers/
 │  ├─ routes/
 │  └─ middleware/
 ├─ prisma/
 │  └─ schema.prisma
 └─ .env

Frontend/
 ├─ src/
 │  ├─ components/
 │  ├─ pages/
 │  └─ App.js

# Setup Instructions
1. Clone the repository
git clone <repository-url>
cd Feedback-Collection-System

2. Backend Setup
cd Backend
npm install


Create a .env file:

DATABASE_URL=postgresql://username:password@localhost:5432/feedback_db
ADMIN_EMAIL=admin@company.com
ADMIN_PASSWORD=admin123
PORT=3000


# Sync database schema:

npx prisma db push


Start backend server:

npm run dev


Backend runs at:

http://localhost:3000

3. Frontend Setup
cd Frontend
npm install
npm start


Frontend runs at:

http://localhost:3000

# API Endpoints
Submit Feedback
POST /feedback

Get Feedback (Admin)
GET /admin/feedback?page=1&limit=10


# Authentication:

Basic Auth
Email: admin@company.com
Password: admin123

