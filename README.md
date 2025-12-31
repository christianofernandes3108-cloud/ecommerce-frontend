# E-Commerce Platform

## Overview
A full-stack e-commerce application built to simulate a real-world online shopping system. The platform supports authenticated users and administrators, with role-based access control, product management, and cart/checkout functionality.

This project demonstrates practical full-stack development, business logic implementation, and secure user workflows.

---

## Tech Stack
Frontend:
- React
- HTML
- CSS

Backend:
- Node.js
- Express

Database:
- MongoDB

Authentication:
- JSON Web Tokens (JWT)

---

## Features

User Features:
- User registration and login
- Secure authentication with protected routes
- Product browsing
- Shopping cart functionality
- Checkout logic

Admin Features:
- Admin-only access control
- Product creation, update, and deletion (CRUD)
- User management
- Secure role-based authorization

---

## Application Flow
1. Users register or log in
2. Authenticated users can browse products and manage their cart
3. Admin users can manage products and users
4. Role-based access ensures secure separation between user and admin functionality

---

## Setup Instructions

Prerequisites:
- Node.js installed
- MongoDB installed or MongoDB Atlas account

Installation:
1. Clone the repository:
   git clone https://github.com/christianofernandes3108-cloud/ecommerce-frontend.git

2. Navigate to the project directory:
   cd ecommerce-frontend

3. Install dependencies:
   npm install

4. Create a `.env` file and configure environment variables:
   MONGO_URI=your_mongodb_connection_string  
   JWT_SECRET=your_jwt_secret  

5. Run the application:
   npm start

---

## Future Improvements
- Payment gateway integration
- Order history and tracking
- API testing
- UI/UX enhancements
- Deployment to a cloud platform

---

## Author
Christiano Fernandes  
Junior Backend / Full-Stack Developer