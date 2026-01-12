// src/features/auth/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('buyer@test.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');

  const demoUsers = [
    { label: 'Buyer', email: 'buyer@test.com', role: 'buyer' },
    { label: 'Seller', email: 'seller@test.com', role: 'seller' },
    { label: 'Inspector', email: 'inspector@test.com', role: 'inspector' },
    { label: 'Admin', email: 'admin@test.com', role: 'admin' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const found = demoUsers.find((u) => u.email === email);
    if (!found || password !== '123456') {
      setError('Email hoặc mật khẩu không đúng (demo: 123456)');
      return;
    }

    login({
      id: `${found.label.toLowerCase()}_001`,
      name: found.label === 'Buyer' ? 'Nguyễn Văn A' : found.label + ' User',
      email: found.email,
      role: found.role,
      loginTime: new Date().toISOString(),
    });

    if (found.role === 'buyer') navigate('/buyer/home');
    else if (found.role === 'seller') navigate('/seller/dashboard');
    else if (found.role === 'admin') navigate('/admin/dashboard');
    else navigate('/');
  };

  const handleQuickFill = (user) => {
    setEmail(user.email);
    setPassword('123456');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🚴 BikeShop</h1>
          <p className="text-gray-600">Đăng nhập để tiếp tục</p>
        </div>

        {/* Demo accounts */}
        <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Tài khoản demo:</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {demoUsers.map((u) => (
              <button
                key={u.email}
                type="button"
                onClick={() => handleQuickFill(u)}
                className="px-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <div className="font-semibold">{u.label}</div>
                <div className="text-gray-500">{u.email}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-6 shadow-sm space-y-4"
        >
          {error && (
            <div className="bg-red-50 text-red-700 text-sm px-3 py-2 rounded border border-red-200">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Mật khẩu
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="••••••••"
            />
            <p className="text-xs text-gray-500 mt-1">
              Demo password: <span className="font-mono">123456</span>
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors mt-2"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}
