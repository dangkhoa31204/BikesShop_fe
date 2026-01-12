import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ManageListingsPage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Mock data
    setListings([
      {
        id: 1,
        title: 'Giant Escape 3 2023',
        price: 8500000,
        status: 'active',
        views: 245,
        likes: 12,
        createdDate: '2024-01-10',
      },
      {
        id: 2,
        title: 'Trek FX 3 2022',
        price: 6500000,
        status: 'sold',
        views: 482,
        likes: 25,
        createdDate: '2024-01-08',
      },
      {
        id: 3,
        title: 'Specialized Rockhopper 2024',
        price: 12000000,
        status: 'active',
        views: 156,
        likes: 8,
        createdDate: '2024-01-12',
      },
    ]);
  }, []);

  const getStatusBadge = (status) => {
    return status === 'active'
      ? { label: 'Đang bán', bg: 'bg-green-100', text: 'text-green-800' }
      : { label: 'Đã bán', bg: 'bg-gray-100', text: 'text-gray-800' };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">📋 Quản lý tin đăng</h1>
          <Link
            to="/seller/listings/new"
            className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition-colors"
          >
            ➕ Đăng tin mới
          </Link>
        </div>

        {/* Filter */}
        <div className="bg-white rounded-lg p-4 mb-6 shadow-sm flex gap-4 flex-wrap">
          <button className="px-4 py-2 bg-teal-100 text-teal-700 rounded-lg font-medium">
            Tất cả ({listings.length})
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            Đang bán ({listings.filter(l => l.status === 'active').length})
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            Đã bán ({listings.filter(l => l.status === 'sold').length})
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <table className="w-full">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Tên xe</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Giá</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Trạng thái</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Lượt xem</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Yêu thích</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {listings.map(listing => {
                const badge = getStatusBadge(listing.status);
                return (
                  <tr key={listing.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {listing.title}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-teal-600">
                      {listing.price.toLocaleString('vi-VN')} đ
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}
                      >
                        {badge.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      👁️ {listing.views}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      ♡ {listing.likes}
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-teal-600 hover:text-teal-700 font-medium">
                        Sửa
                      </button>
                      <button className="text-red-600 hover:text-red-700 font-medium">
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}