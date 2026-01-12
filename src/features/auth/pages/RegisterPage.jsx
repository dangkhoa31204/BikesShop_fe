import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('buyer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Vui lòng nhập tên';
    if (!formData.email) newErrors.email = 'Vui lòng nhập email';
    if (!formData.password) newErrors.password = 'Vui lòng nhập mật khẩu';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu không khớp';
    }
    if (userType === 'seller' && !formData.phone) {
      newErrors.phone = 'Người bán cần cung cấp số điện thoại';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // TODO: Submit to API
    alert(`Đăng ký ${userType === 'buyer' ? 'người mua' : 'người bán'} (TODO: API Integration)`);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🚴 BikeShop</h1>
          <h2 className="text-xl font-semibold text-gray-900">Tạo tài khoản</h2>
          <p className="text-gray-600 text-sm mt-2">Bắt đầu mua hoặc bán xe đạp</p>
        </div>

        {/* User Type Selector */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setUserType('buyer')}
            className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
              userType === 'buyer'
                ? 'bg-teal-500 text-white'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
          >
            👤 Người mua
          </button>
          <button
            onClick={() => setUserType('seller')}
            className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
              userType === 'seller'
                ? 'bg-teal-500 text-white'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
          >
            🏪 Người bán
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-sm space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Họ và tên
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nguyễn Văn A"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="user@example.com"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Mật khẩu
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Xác nhận mật khẩu
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Phone (for sellers) */}
          {userType === 'seller' && (
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Số điện thoại
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0912345678"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
          )}

          {/* Address (for sellers) */}
          {userType === 'seller' && (
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Địa chỉ
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Đường Abc, TP HCM"
                rows="2"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors mt-6"
          >
            ✓ Đăng ký
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Đã có tài khoản?{' '}
            <Link to="/login" className="text-teal-600 hover:text-teal-700 font-medium">
              Đăng nhập
            </Link>
          </p>
        </form>

        {/* Terms */}
        <p className="text-center text-xs text-gray-500 mt-6">
          Bằng cách đăng ký, bạn đồng ý với{' '}
          <a href="#" className="text-teal-600 hover:text-teal-700">
            Điều khoản dịch vụ
          </a>{' '}
          và{' '}
          <a href="#" className="text-teal-600 hover:text-teal-700">
            Chính sách bảo mật
          </a>
        </p>
      </div>
    </div>
  );
}
