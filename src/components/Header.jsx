import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getNavLinks = () => {
    if (!user) {
      return [
        { label: 'Duyệt xe', path: '/bikes', icon: '🚴' },
      ];
    }

    const baseLinks = [
      { label: 'Duyệt xe', path: '/bikes', icon: '🚴' },
    ];

    const roleLinks = {
      buyer: [
        { label: 'Home', path: '/buyer/home', icon: '🏠' },
        { label: 'Chat', path: '/buyer/chat', icon: '💬' },
        { label: 'Đơn hàng', path: '/buyer/orders', icon: '📦' },
        { label: 'Wishlist', path: '/buyer/wishlist', icon: '♡' },
      ],
      seller: [
        { label: 'Dashboard', path: '/seller/dashboard', icon: '📊' },
        { label: 'Đăng tin', path: '/seller/listings/new', icon: '📝' },
        { label: 'Quản lý tin', path: '/seller/listings', icon: '📋' },
      ],
      admin: [
        { label: 'Dashboard', path: '/admin/dashboard', icon: '⚙️' },
      ],
      inspector: [
        { label: 'Yêu cầu', path: '/inspector/requests', icon: '✓' },
      ],
    };

    return [...baseLinks, ...(roleLinks[user.role] || [])];
  };

  const navLinks = getNavLinks();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl">🚴</span>
            <span className="text-xl font-bold text-teal-600 hidden sm:block">BikeShop</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-teal-600 font-medium text-sm transition-colors"
              >
                <span className="mr-1">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="flex items-center gap-2 px-3 py-2 bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-colors"
                >
                  <span>👤</span>
                  <span className="hidden sm:block text-sm font-medium">{user.name}</span>
                  <span className="text-xs">▼</span>
                </button>

                {/* User Menu Dropdown */}
                {showMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-600">{user.email}</p>
                      <span className="inline-block mt-1 px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded font-semibold">
                        {user.role === 'buyer' ? 'Người mua' :
                         user.role === 'seller' ? 'Người bán' :
                         user.role === 'admin' ? 'Quản trị viên' : 'Kiểm định viên'}
                      </span>
                    </div>

                    {/* Role-specific menu items */}
                    {user.role === 'buyer' && (
                      <>
                        <Link to="/buyer/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          🏠 Trang chủ
                        </Link>
                        <Link to="/buyer/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          📦 Đơn hàng của tôi
                        </Link>
                        <Link to="/buyer/wishlist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          ♡ Wishlist
                        </Link>
                      </>
                    )}

                    {user.role === 'seller' && (
                      <>
                        <Link to="/seller/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          📊 Dashboard
                        </Link>
                        <Link to="/seller/listings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          📋 Quản lý tin
                        </Link>
                        <Link to="/seller/listings/new" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          ➕ Đăng tin mới
                        </Link>
                      </>
                    )}

                    <div className="border-t border-gray-200 mt-2 pt-2">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        🚪 Đăng xuất
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-teal-600 hover:text-teal-700 font-medium transition-colors"
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium transition-colors"
                >
                  Đăng ký
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden text-gray-700 hover:text-teal-600 text-xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {showMobileMenu && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-gray-200 pt-4">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                <span className="mr-2">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
