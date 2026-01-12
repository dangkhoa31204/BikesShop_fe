import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

export default function SellerDashboard() {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({
    listings: 0,
    views: 0,
    orders: 0,
    revenue: 0,
    rating: 0,
  });

  useEffect(() => {
    // Mock data
    setStats({
      listings: 12,
      views: 3250,
      orders: 8,
      revenue: 85500000,
      rating: 4.8,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">📊 Dashboard Bán Hàng</h1>
            <p className="text-gray-600">Chào mừng {user?.name}</p>
          </div>
          <Link
            to="/seller/listings/new"
            className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition-colors"
          >
            ➕ Đăng tin mới
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {/* Listings */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Tin đăng</p>
                <p className="text-3xl font-bold text-teal-600">{stats.listings}</p>
              </div>
              <div className="text-4xl">📝</div>
            </div>
          </div>

          {/* Views */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Lượt xem</p>
                <p className="text-3xl font-bold text-blue-600">{stats.views.toLocaleString()}</p>
              </div>
              <div className="text-4xl">👁️</div>
            </div>
          </div>

          {/* Orders */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Đơn hàng</p>
                <p className="text-3xl font-bold text-purple-600">{stats.orders}</p>
              </div>
              <div className="text-4xl">📦</div>
            </div>
          </div>

          {/* Revenue */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Doanh thu</p>
                <p className="text-2xl font-bold text-green-600">
                  {(stats.revenue / 1000000).toFixed(1)}M
                </p>
              </div>
              <div className="text-4xl">💰</div>
            </div>
          </div>

          {/* Rating */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Đánh giá</p>
                <p className="text-3xl font-bold text-yellow-600">{stats.rating}</p>
              </div>
              <div className="text-4xl">⭐</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Hành động nhanh</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/seller/listings/new"
              className="px-4 py-3 border-2 border-teal-500 text-teal-600 hover:bg-teal-50 rounded-lg font-medium text-center transition-colors"
            >
              ➕ Đăng tin mới
            </Link>
            <Link
              to="/seller/listings"
              className="px-4 py-3 border-2 border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg font-medium text-center transition-colors"
            >
              📋 Quản lý tin
            </Link>
            <a
              href="#orders"
              className="px-4 py-3 border-2 border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg font-medium text-center transition-colors"
            >
              📦 Xem đơn hàng
            </a>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Hoạt động gần đây</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 border-l-4 border-teal-500 bg-teal-50">
              <span>✓</span>
              <span className="text-sm text-gray-700">Tin "Giant Escape 3" nhận 15 lượt xem</span>
              <span className="text-xs text-gray-500 ml-auto">30 phút trước</span>
            </div>
            <div className="flex items-center gap-3 p-3 border-l-4 border-blue-500 bg-blue-50">
              <span>💬</span>
              <span className="text-sm text-gray-700">Khách hàng mới liên hệ về xe Trek FX 3</span>
              <span className="text-xs text-gray-500 ml-auto">1 giờ trước</span>
            </div>
            <div className="flex items-center gap-3 p-3 border-l-4 border-green-500 bg-green-50">
              <span>📦</span>
              <span className="text-sm text-gray-700">Đơn hàng "Specialized" được duyệt</span>
              <span className="text-xs text-gray-500 ml-auto">3 giờ trước</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}