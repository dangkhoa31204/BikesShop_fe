import React, { useState, useEffect } from 'react';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Mock data
    setOrders([
      {
        id: 'order_1',
        bikeTitle: 'Giant Escape 3 2023',
        price: 8500000,
        status: 'pending', // pending, approved, shipped, delivered, cancelled
        createdDate: '2024-01-10',
        sellerName: 'Cửa hàng Xe Đạp Sài Gòn',
      },
      {
        id: 'order_2',
        bikeTitle: 'Trek FX 3 2022',
        price: 6500000,
        status: 'approved',
        createdDate: '2024-01-09',
        sellerName: 'Cửa hàng B',
      },
    ]);
  }, []);

  const getStatusBadge = (status) => {
    const badges = {
      pending: { label: 'Chờ duyệt', bg: 'bg-yellow-100', text: 'text-yellow-800' },
      approved: { label: 'Đã duyệt', bg: 'bg-blue-100', text: 'text-blue-800' },
      shipped: { label: 'Đang giao', bg: 'bg-purple-100', text: 'text-purple-800' },
      delivered: { label: 'Đã giao', bg: 'bg-green-100', text: 'text-green-800' },
      cancelled: { label: 'Hủy', bg: 'bg-red-100', text: 'text-red-800' },
    };
    return badges[status] || badges['pending'];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">📦 Đơn hàng của tôi</h1>

        {orders.length > 0 ? (
          <div className="space-y-4">
            {orders.map(order => {
              const badge = getStatusBadge(order.status);
              return (
                <div key={order.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="font-semibold text-gray-900">{order.bikeTitle}</h3>
                      <p className="text-sm text-gray-500">{order.sellerName}</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-teal-600">
                        {order.price.toLocaleString('vi-VN')} đ
                      </p>
                      <p className="text-xs text-gray-500">{order.createdDate}</p>
                    </div>
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${badge.bg} ${badge.text}`}>
                        {badge.label}
                      </span>
                    </div>
                    <div className="flex gap-2 justify-end">
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-lg p-12 text-center">
            <p className="text-gray-500 mb-4">Chưa có đơn hàng nào</p>
            <a href="/bikes" className="text-teal-600 hover:text-teal-700 font-medium">
              Bắt đầu tìm kiếm xe →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}