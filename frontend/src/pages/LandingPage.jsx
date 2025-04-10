// src/pages/LandingPage.jsx
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="hero bg-blue-500 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Welcome to the Quiz App</h1>
      <p className="mt-4 text-xl">Sign up or login to access the Dashboard</p>
      <div className="mt-6 space-x-4">
        <Link to="/register" className="bg-green-600 text-white py-2 px-4 rounded">
          Register
        </Link>
        <Link to="/login" className="bg-yellow-600 text-white py-2 px-4 rounded">
          Login
        </Link>
      </div>
    </div>
  );
}
