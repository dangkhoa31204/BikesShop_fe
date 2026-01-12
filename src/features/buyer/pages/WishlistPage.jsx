import React, { useState, useEffect } from 'react';
import ListingCard from '../../listings/components/ListingCard';

export default function WishlistPage() {
  const [wishlisted, setWishlisted] = useState([]);

  useEffect(() => {
    // Mock wishlist data
    setWishlisted([
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
        id: 3,
        title: 'Specialized Rockhopper 2024',
        price: 12000000,
        image: 'https://via.placeholder.com/300x200?text=Specialized',
        condition: 'like-new',
        bikeType: 'mountain',
        isInspected: true,
        seller: { name: 'Cửa hàng C', rating: 4.9 },
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">♡ Xe yêu thích</h1>

        {wishlisted.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlisted.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg p-12 text-center">
            <p className="text-6xl mb-4">♡</p>
            <p className="text-gray-500 mb-4">Chưa có xe yêu thích nào</p>
            <a href="/bikes" className="text-teal-600 hover:text-teal-700 font-medium">
              Bắt đầu tìm kiếm xe →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}