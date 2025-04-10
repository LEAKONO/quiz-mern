import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call your backend to get the real token (correct URL)
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
  
      const data = await response.json();
  
      if (response.ok && data.token) {
        const token = data.token; // Extract the token from the response
        login(token); // Pass the real token to the login function
        navigate('/dashboard');  // Redirect to Dashboard after login
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  
  

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <h2 className="text-2xl">Login</h2>
      <input
        placeholder="Email"
        className="p-2 w-full"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 w-full"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button className="bg-green-600 text-white p-2 w-full">Login</button>
    </form>
  );
}
