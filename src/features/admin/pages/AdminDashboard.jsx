import React, { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    listings: 0,
    orders: 0,
    revenue: 0,
  });

  useEffect(() => {
    // Mock data
    setStats({
      users: 342,
      listings: 1253,
      orders: 456,
      revenue: 5234500000,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">⚙️ Admin Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Users */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Tổng người dùng</p>
                <p className="text-3xl font-bold text-blue-600">{stats.users}</p>
              </div>
              <div className="text-4xl">👥</div>
            </div>
          </div>

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

          {/* Orders */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Tổng đơn hàng</p>
                <p className="text-3xl font-bold text-purple-600">{stats.orders}</p>
              </div>
              <div className="text-4xl">📦</div>
            </div>
          </div>

          {/* Revenue */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Tổng doanh thu</p>
                <p className="text-2xl font-bold text-green-600">
                  {(stats.revenue / 1000000000).toFixed(1)}B
                </p>
              </div>
              <div className="text-4xl">💰</div>
            </div>
          </div>
        </div>

        {/* Management Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Management */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">👥 Quản lý người dùng</h2>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                Danh sách người dùng
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                Duyệt tài khoản seller
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                Khóa/Mở khóa người dùng
              </button>
            </div>
          </div>

          {/* Listings Management */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">📝 Quản lý tin đăng</h2>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                Duyệt tin đăng mới
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                Tin đăng chờ kiểm định
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                Xóa tin đăng vi phạm
              </button>
            </div>
          </div>

          {/* Order Management */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">📦 Quản lý đơn hàng</h2>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                Xem tất cả đơn hàng
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                Giải quyết tranh chấp
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                Hoàn tiền/Hủy đơn
              </button>
            </div>
          </div>

          {/* Inspection Management */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">✓ Quản lý kiểm định</h2>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                Danh sách yêu cầu kiểm định
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                Gán inspector
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                Xem kết quả kiểm định
              </button>
            </div>
          </div>
        </div>

        {/* System Logs */}
        <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">📋 Nhật ký hệ thống</h2>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            <div className="flex items-center gap-3 p-3 border-l-4 border-blue-500 bg-blue-50">
              <span>👤</span>
              <span className="text-sm text-gray-700">User "seller_002" đã đăng tin mới</span>
              <span className="text-xs text-gray-500 ml-auto">5 phút trước</span>
            </div>
            <div className="flex items-center gap-3 p-3 border-l-4 border-green-500 bg-green-50">
              <span>✓</span>
              <span className="text-sm text-gray-700">Tin đăng ID 145 được duyệt</span>
              <span className="text-xs text-gray-500 ml-auto">15 phút trước</span>
            </div>
            <div className="flex items-center gap-3 p-3 border-l-4 border-yellow-500 bg-yellow-50">
              <span>⚠️</span>
              <span className="text-sm text-gray-700">Đơn hàng ID 98 báo cáo tranh chấp</span>
              <span className="text-xs text-gray-500 ml-auto">1 giờ trước</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}