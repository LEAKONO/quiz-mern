import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">Quiz App</h1>
      <div className="space-x-4">
        <Link to="/">Dashboard</Link>
        {user ? (
          <>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}
