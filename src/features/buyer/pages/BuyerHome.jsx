import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { ChatContext } from '../../../context/ChatContext';
import ListingCard from '../../listings/components/ListingCard';

export default function BuyerHome() {
  const { user } = useContext(AuthContext);
  const { totalUnread } = useContext(ChatContext);
  const [stats, setStats] = useState({ wishlisted: 0, orders: 0, unreadChats: 0 });
  const [recentListings, setRecentListings] = useState([]);

  useEffect(() => {
    // Mock stats
    setStats({
      wishlisted: 5,
      orders: 2,
      unreadChats: totalUnread,
    });

    // Mock recent listings
    setRecentListings([
      {
        id: 1,
        title: 'Giant Escape 3 2023',
        price: 8500000,
        image: 'https://via.placeholder.com/300x200?text=Giant+Escape+3',
        condition: 'like-new',
        bikeType: 'road',
        isInspected: true,
        seller: { name: 'Cửa hàng A', rating: 4.5 },
      },
      {
        id: 2,
        title: 'Trek FX 3 2022',
        price: 6500000,
        image: 'https://via.placeholder.com/300x200?text=Trek+FX+3',
        condition: 'good',
        bikeType: 'hybrid',
        isInspected: false,
        seller: { name: 'Cửa hàng B', rating: 4.2 },
      },
      {
        id: 3,
        title: 'Specialized Rockhopper 2024',
        price: 12000000,
        image: 'https://via.placeholder.com/300x200?text=Specialized',
        condition: 'like-new',
        bikeType: 'mountain',
        isInspected: true,
        seller: { name: 'Cửa hàng C', rating: 4.9 },
      },
      {
        id: 4,
        title: 'Cannondale Quick 4 2023',
        price: 7200000,
        image: 'https://via.placeholder.com/300x200?text=Cannondale',
        condition: 'good',
        bikeType: 'hybrid',
        isInspected: false,
        seller: { name: 'Cửa hàng D', rating: 4.6 },
      },
    ]);
  }, [totalUnread]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-2">Chào mừng, {user?.name}! 👋</h1>
          <p className="text-teal-100">Tìm chiếc xe đạp hoàn hảo dành cho bạn ngay hôm nay</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Wishlist */}
          <Link
            to="/buyer/wishlist"
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Xe yêu thích</p>
                <p className="text-4xl font-bold text-red-500">{stats.wishlisted}</p>
              </div>
              <div className="text-5xl">♡</div>
            </div>
          </Link>

          {/* Orders */}
          <Link
            to="/buyer/orders"
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Đơn hàng</p>
                <p className="text-4xl font-bold text-purple-500">{stats.orders}</p>
              </div>
              <div className="text-5xl">📦</div>
            </div>
          </Link>

          {/* Unread Chats */}
          <Link
            to="/buyer/chat"
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Tin nhắn</p>
                <p className="text-4xl font-bold text-teal-500">{stats.unreadChats}</p>
              </div>
              <div className="text-5xl">💬</div>
            </div>
          </Link>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Hành động nhanh</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/bikes"
              className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition-colors text-center"
            >
              🔍 Duyệt xe
            </Link>
            <Link
              to="/buyer/wishlist"
              className="px-6 py-3 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-semibold transition-colors text-center"
            >
              ♡ Xe yêu thích
            </Link>
            <Link
              to="/buyer/orders"
              className="px-6 py-3 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg font-semibold transition-colors text-center"
            >
              📦 Đơn hàng
            </Link>
            <Link
              to="/buyer/chat"
              className="px-6 py-3 bg-teal-100 hover:bg-teal-200 text-teal-700 rounded-lg font-semibold transition-colors text-center"
            >
              💬 Tin nhắn
            </Link>
          </div>
        </div>

        {/* Recommended Listings */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Xe gợi ý hôm nay</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
          <h2 className="text-xl font-bold text-blue-900 mb-6">💡 Lời khuyên cho người mua</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <span className="text-3xl flex-shrink-0">🔍</span>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Kiểm tra kỹ thông tin</h3>
                <p className="text-blue-800 text-sm">
                  Đọc mô tả chi tiết, xem tất cả ảnh và kiểm tra tình trạng xe trước khi mua
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl flex-shrink-0">💬</span>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Liên hệ người bán</h3>
                <p className="text-blue-800 text-sm">
                  Hỏi chi tiết, yêu cầu ảnh thêm hoặc hẹn xem xe trực tiếp
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl flex-shrink-0">✓</span>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Yêu cầu kiểm định</h3>
                <p className="text-blue-800 text-sm">
                  Sử dụng dịch vụ kiểm định để đảm bảo chất lượng xe trước mua
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl flex-shrink-0">💳</span>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Thanh toán an toàn</h3>
                <p className="text-blue-800 text-sm">
                  Chỉ thanh toán thông qua nền tảng BikeShop để bảo vệ quyền lợi
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Sellers */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6">⭐ Người bán nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Cửa hàng Xe Đạp Sài Gòn', rating: 4.9, reviews: 248, active: true },
              { name: 'Specialized Saigon Store', rating: 4.8, reviews: 156, active: true },
              { name: 'Giant Experience Store', rating: 4.7, reviews: 192, active: false },
            ].map((seller, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">🏪</div>
                <h3 className="font-semibold text-gray-900 mb-2">{seller.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-3">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-bold text-gray-900">{seller.rating}</span>
                  <span className="text-gray-500 text-sm">({seller.reviews} đánh giá)</span>
                </div>
                <p className={`text-sm font-medium ${seller.active ? 'text-green-600' : 'text-gray-500'}`}>
                  {seller.active ? '● Đang hoạt động' : '● Không hoạt động'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}