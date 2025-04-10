# Full Stack Application

This is a full-stack application with a backend built using Express.js and a frontend built with React (using Vite). The backend API exposes endpoints for authentication and quizzes, while the frontend interacts with these APIs for user login and quiz management.

## Project Setup

### Backend (Express.js)
The backend provides authentication and quiz-related functionalities.

#### Steps to Set Up Backend:
1. **Clone the repository**:

   ```bash
   git clone https://github.com/LEAKONO/quiz-mern.git
Navigate to the backend directory:

```bash
cd backend
```
#### Install dependencies:

```bash

npm install
```
### #Configure environment variables in .env:

- DB_URI: MongoDB connection string

- JWT_SECRET: Secret for signing JWT tokens

#### Start the server:

```bash

npm start
```
The backend will be running on http://localhost:5000.

## Frontend (React + Vite)
 - The frontend is built with React and Vite, and it communicates with the backend API for user authentication and quiz functionality.

#### Steps to Set Up Frontend:
Navigate to the frontend directory:

```bash

cd frontend
```
#### Install dependencies:

```bash

npm install
```
#### Start the development server:

```bash

npm run dev
```
The frontend will be available at http://localhost:5173.

### Project Structure
#### Backend:
- config/db.js: MongoDB connection setup

- models/User.js: User model for authentication

- routes/authRoutes.js: Authentication routes

- routes/quizRoutes.js: Quiz routes

### Frontend:
- src/App.jsx: Main app component with routing

- src/context/AuthContext.jsx: Context for managing authentication

- src/pages/Login.jsx: Login page

- src/pages/Dashboard.jsx: Dashboard page

- src/components/ProtectedRoute.jsx: Protected route component

### Running in Production
Frontend:
Deploy on platforms like Vercel, Netlify.

Backend:
Deploy on platforms like Heroku, AWS.

Ensure proper production configurations, including environment variables.

### License
This project is licensed under the MIT License - see the LICENSE file for details.
















