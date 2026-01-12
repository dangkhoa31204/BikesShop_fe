import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [bike, setBike] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showChatModal, setShowChatModal] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Mock data - thay bằng API call thực
    setTimeout(() => {
      setBike({
        id: parseInt(id),
        title: 'Giant Escape 3 2023 - Xe đạp thể thao chất lượng cao',
        price: 8500000,
        images: [
          'https://via.placeholder.com/600x400?text=Bike+View+1',
          'https://via.placeholder.com/600x400?text=Bike+View+2',
          'https://via.placeholder.com/600x400?text=Bike+View+3',
          'https://via.placeholder.com/600x400?text=Bike+View+4',
        ],
        condition: 'like-new',
        bikeType: 'road',
        isInspected: true,
        inspectionDate: '2024-01-05',
        seller: {
          id: 'seller_001',
          name: 'Cửa hàng Xe Đạp Sài Gòn',
          rating: 4.8,
          reviews: 125,
          joinDate: '2022-05-15',
          phone: '0123456789',
          address: '123 Nguyễn Hue, Q1, TP HCM',
        },
        specs: {
          brand: 'Giant',
          year: 2023,
          size: 'M (56cm)',
          weight: '9.5kg',
          material: 'Aluminium 6061',
          gears: '21 tốc độ',
          brakes: 'V-Brake',
          wheelSize: '700C',
          color: 'Bạc',
        },
        description: `Xe đạp Giant Escape 3 model 2023 - chiếc xe hoàn hảo cho những người vừa bắt đầu tìm hiểu về đạp xe thể thao.

Đặc điểm nổi bật:
- Khung nhôm 6061 siêu nhẹ và bền
- Hệ thống 21 tốc độ mượt mà
- Phanh V-Brake đáng tin cậy
- Thoải mái cho những chuyến dài
- Bảo hành gốc còn 2 năm

Tình trạng:
- Sử dụng 6 tháng
- Được bảo trì định kỳ
- Lốp xe còn mới
- Không có trầy xước đáng kể

Lý do bán:
- Nâng cấp lên xe khác
- Muốn tìm owner mới yêu thích nó`,
        reviews: [
          {
            id: 1,
            author: 'Nguyễn Minh',
            rating: 5,
            text: 'Xe rất tốt, seller uy tín, giao dịch nhanh gọn',
            date: '2024-01-03',
          },
          {
            id: 2,
            author: 'Trần Hùng',
            rating: 4,
            text: 'Xe như hình, giao hàng nhanh, đóng gói cẩn thận',
            date: '2024-01-02',
          },
        ],
      });
      setLoading(false);
    }, 500);
  }, [id]);

  const handleChatClick = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    setShowChatModal(true);
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    // TODO: Send message to seller
    console.log('Message sent:', message);
    setMessage('');
    setShowChatModal(false);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin">⏳ Đang tải...</div>
      </div>
    );
  }

  if (!bike) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Không tìm thấy xe</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Images & Details */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="bg-white rounded-lg overflow-hidden mb-4">
              <div className="relative bg-gray-200 h-96">
                <img
                  src={bike.images[selectedImage]}
                  alt={bike.title}
                  className="w-full h-full object-cover"
                />
                {bike.isInspected && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <span>✓</span>
                    <span>Đã kiểm định</span>
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              <div className="p-4 flex gap-3 overflow-x-auto">
                {bike.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded border-2 overflow-hidden ${
                      selectedImage === idx ? 'border-teal-500' : 'border-gray-300'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{bike.title}</h2>
              <div className="prose max-w-none text-gray-700 whitespace-pre-wrap">
                {bike.description}
              </div>
            </div>

            {/* Specs */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Thông số kỹ thuật</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(bike.specs).map(([key, value]) => (
                  <div key={key} className="pb-3 border-b border-gray-200">
                    <p className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                    <p className="font-semibold text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Đánh giá từ khách hàng</h3>
              <div className="space-y-4">
                {bike.reviews.map(review => (
                  <div key={review.id} className="pb-4 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-semibold text-gray-900">{review.author}</p>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Seller Info & Actions */}
          <div className="lg:col-span-1">
            {/* Price Card */}
            <div className="bg-white rounded-lg p-6 mb-6 sticky top-20">
              <p className="text-4xl font-bold text-teal-600 mb-6">{formatPrice(bike.price)}</p>

              {/* Seller Card */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Người bán</h4>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-lg">
                    🏪
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{bike.seller.name}</p>
                    <div className="flex items-center gap-1 text-yellow-500 text-sm">
                      <span>★</span>
                      <span className="text-gray-600">
                        {bike.seller.rating} ({bike.seller.reviews} đánh giá)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={handleChatClick}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  💬 Chat với người bán
                </button>
                <button
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 py-3 rounded-lg font-semibold transition-colors"
                >
                  ♡ Lưu vào wishlist
                </button>
              </div>

              {/* Seller Details */}
              <div className="mt-6 space-y-2 text-sm">
                <p className="text-gray-700">
                  <span className="text-gray-600">📱</span> {bike.seller.phone}
                </p>
                <p className="text-gray-700">
                  <span className="text-gray-600">📍</span> {bike.seller.address}
                </p>
                <p className="text-gray-700">
                  <span className="text-gray-600">📅</span> Tham gia từ {new Date(bike.seller.joinDate).toLocaleDateString('vi-VN')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Modal */}
      {showChatModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-bold mb-4">Gửi tin nhắn cho {bike.seller.name}</h3>
            
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Nhập tin nhắn của bạn..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows="4"
            />

            <div className="flex gap-3">
              <button
                onClick={() => setShowChatModal(false)}
                className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg font-medium transition-colors"
              >
                Hủy
              </button>
              <button
                onClick={handleSendMessage}
                className="flex-1 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-colors"
              >
                Gửi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
