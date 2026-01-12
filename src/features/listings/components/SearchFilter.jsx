import React, { useState } from 'react';

export default function SearchFilter({ filters, onChange }) {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...localFilters, [name]: value };
    setLocalFilters(newFilters);
    onChange(newFilters);
  };

  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...localFilters, [name]: parseInt(value) };
    setLocalFilters(newFilters);
    onChange(newFilters);
  };

  const resetFilters = () => {
    const resetData = {
      search: '',
      minPrice: 0,
      maxPrice: 100000000,
      bikeType: 'all',
      condition: 'all',
    };
    setLocalFilters(resetData);
    onChange(resetData);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm sticky top-20">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Lọc tìm kiếm</h2>
      </div>

      {/* Search Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tên xe
        </label>
        <input
          type="text"
          name="search"
          value={localFilters.search}
          onChange={handleChange}
          placeholder="Nhập tên xe..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Khoảng giá
        </label>
        
        {/* Min Price */}
        <div className="mb-3">
          <label className="text-xs text-gray-600 mb-1 block">
            Giá tối thiểu: {formatPrice(localFilters.minPrice)}
          </label>
          <input
            type="range"
            name="minPrice"
            min="0"
            max="100000000"
            step="500000"
            value={localFilters.minPrice}
            onChange={handleRangeChange}
            className="w-full"
          />
        </div>

        {/* Max Price */}
        <div>
          <label className="text-xs text-gray-600 mb-1 block">
            Giá tối đa: {formatPrice(localFilters.maxPrice)}
          </label>
          <input
            type="range"
            name="maxPrice"
            min="0"
            max="100000000"
            step="500000"
            value={localFilters.maxPrice}
            onChange={handleRangeChange}
            className="w-full"
          />
        </div>
      </div>

      {/* Bike Type */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Loại xe
        </label>
        <select
          name="bikeType"
          value={localFilters.bikeType}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="all">Tất cả loại</option>
          <option value="road">Xe đường (Road)</option>
          <option value="mountain">Xe leo núi (MTB)</option>
          <option value="hybrid">Xe lai (Hybrid)</option>
          <option value="bmx">Xe BMX</option>
          <option value="cruiser">Xe bình dân (Cruiser)</option>
          <option value="gravel">Xe gravel</option>
        </select>
      </div>

      {/* Condition */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tình trạng
        </label>
        <select
          name="condition"
          value={localFilters.condition}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="all">Tất cả tình trạng</option>
          <option value="like-new">Như mới</option>
          <option value="good">Tốt</option>
          <option value="fair">Bình thường</option>
          <option value="needs-repair">Cần sửa</option>
        </select>
      </div>

      {/* Inspection Filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="inspected"
            className="w-4 h-4 text-teal-600 rounded"
          />
          <span className="text-sm text-gray-700">Chỉ hiển thị xe đã kiểm định</span>
        </label>
      </div>

      {/* Reset Button */}
      <button
        onClick={resetFilters}
        className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg font-medium transition-colors"
      >
        ↺ Xóa bộ lọc
      </button>
    </div>
  );
}
