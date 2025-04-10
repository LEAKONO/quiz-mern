import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TakeQuiz from "./quizzes/TakeQuiz";
import Results from "./quizzes/Results";
import LandingPage from "./pages/LandingPage";  // Import LandingPage
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Default route to LandingPage */}
          <Route path="/" element={<LandingPage />} />
          
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected Route for Dashboard */}
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          
          <Route path="/quiz/:id" element={<TakeQuiz />} />
          <Route path="/results/:id" element={<Results />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
