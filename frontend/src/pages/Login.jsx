import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post('/auth/login', form);
    login(res.data.token);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <h2 className="text-2xl">Login</h2>
      <input placeholder="Email" className="p-2 w-full" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" className="p-2 w-full" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button className="bg-green-600 text-white p-2 w-full">Login</button>
    </form>
  );
}
