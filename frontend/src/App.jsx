import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TakeQuiz from './pages/TakeQuiz';
import Results from './pages/Results';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz/:id" element={<TakeQuiz />} />
          <Route path="/results/:id" element={<Results />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
