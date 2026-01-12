import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

export default function ListingCard({ listing }) {
  const { user } = useContext(AuthContext);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getConditionBadge = (condition) => {
    const badges = {
      'like-new': { label: 'Như mới', bg: 'bg-green-100', text: 'text-green-800' },
      'good': { label: 'Tốt', bg: 'bg-blue-100', text: 'text-blue-800' },
      'fair': { label: 'Bình thường', bg: 'bg-yellow-100', text: 'text-yellow-800' },
      'needs-repair': { label: 'Cần sửa', bg: 'bg-red-100', text: 'text-red-800' },
    };
    return badges[condition] || badges['good'];
  };

  const conditionBadge = getConditionBadge(listing.condition);

  return (
    <Link to={`/bikes/${listing.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-200 h-48">
          <img 
            src={listing.image} 
            alt={listing.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badge - Inspected */}
          {listing.isInspected && (
            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
              <span>✓</span>
              <span>Đã kiểm định</span>
            </div>
          )}

          {/* Condition Badge */}
          <div className={`absolute top-2 left-2 ${conditionBadge.bg} ${conditionBadge.text} px-2 py-1 rounded text-xs font-semibold`}>
            {conditionBadge.label}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-teal-600">
            {listing.title}
          </h3>

          {/* Price */}
          <p className="text-2xl font-bold text-teal-600 mb-3">
            {formatPrice(listing.price)}
          </p>

          {/* Seller Info */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
            <div className="text-sm">
              <p className="text-gray-700 font-medium">{listing.seller.name}</p>
              <div className="flex items-center gap-1 text-yellow-500">
                <span>★</span>
                <span className="text-gray-600 text-xs">{listing.seller.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>

          {/* Footer - Quick Actions */}
          <div className="flex gap-2 mt-auto">
            <button 
              className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-2 rounded font-medium text-sm transition-colors"
              onClick={(e) => {
                e.preventDefault();
                // TODO: Add to wishlist
              }}
            >
              ♡ Lưu
            </button>
            <button 
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 py-2 rounded font-medium text-sm transition-colors"
              onClick={(e) => {
                e.preventDefault();
                // TODO: Open chat
              }}
            >
              💬 Chat
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}