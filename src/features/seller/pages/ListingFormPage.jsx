import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ListingFormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    bikeType: 'road',
    condition: 'good',
    brand: '',
    year: new Date().getFullYear(),
    size: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit to API
    alert('Tin đăng sẽ được đẩy lên (TODO: Integration with backend)');
    navigate('/seller/listings');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">📝 Đăng tin xe mới</h1>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-sm space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Tên xe <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="VD: Giant Escape 3 2023"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Giá (VND) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="VD: 8500000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Bike Type & Condition */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Loại xe <span className="text-red-500">*</span>
                </label>
                <select
                  name="bikeType"
                  value={formData.bikeType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="road">Xe đường (Road)</option>
                  <option value="mountain">Xe leo núi (MTB)</option>
                  <option value="hybrid">Xe lai (Hybrid)</option>
                  <option value="bmx">Xe BMX</option>
                  <option value="cruiser">Xe bình dân (Cruiser)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Tình trạng <span className="text-red-500">*</span>
                </label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="like-new">Như mới</option>
                  <option value="good">Tốt</option>
                  <option value="fair">Bình thường</option>
                  <option value="needs-repair">Cần sửa</option>
                </select>
              </div>
            </div>

            {/* Brand & Year */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Hãng xe
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder="VD: Giant, Trek, Specialized"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Năm sản xuất
                </label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Kích thước khung (cm)
              </label>
              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                placeholder="VD: M (56cm)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Mô tả chi tiết <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Mô tả đầy đủ về tình trạng xe, đặc điểm, lý do bán..."
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Images - Placeholder */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Ảnh xe <span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <p className="text-gray-600">📷 Kéo ảnh vào đây hoặc click để chọn</p>
                <p className="text-xs text-gray-500 mt-2">Tối thiểu 3 ảnh, tối đa 10 ảnh</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition-colors"
              >
                ✓ Đăng tin
              </button>
              <button
                type="button"
                onClick={() => navigate('/seller/listings')}
                className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg font-semibold transition-colors"
              >
                Hủy
              </button>
            </div>
          </form>

          {/* Tips */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <h3 className="font-bold text-blue-900 mb-3">💡 Mẹo đăng tin</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>✓ Chọn tên xe rõ ràng (hãng, model, năm)</li>
              <li>✓ Chụp ảnh chất lượng cao, nhiều góc độ</li>
              <li>✓ Mô tả chi tiết giúp bạn bán nhanh hơn</li>
              <li>✓ Giá cạnh tranh để thu hút khách</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}