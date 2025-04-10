import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate API call to register
    await API.post('/auth/register', form);
    navigate('/login');  // Redirect to login after successful registration
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <h2 className="text-2xl">Register</h2>
      <input
        placeholder="Username"
        className="p-2 w-full"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
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
      <button className="bg-blue-600 text-white p-2 w-full">Register</button>
    </form>
  );
}
