// src/features/listings/pages/ListingsPage.jsx
import React, { useState, useEffect } from 'react';
import SearchFilter from '../components/SearchFilter';
import ListingCard from '../components/ListingCard';

export default function ListingsPage() {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    minPrice: 0,
    maxPrice: 100000000,
    bikeType: 'all',
    condition: 'all',
  });

  useEffect(() => {
    // Mock data - thay bằng API call thực
    const mockListings = [
      {
        id: 1,
        title: 'Giant Escape 3 2023',
        price: 8500000,
        image: 'https://via.placeholder.com/300x200',
        condition: 'like-new',
        bikeType: 'road',
        seller: { name: 'Cửa hàng A', rating: 4.5 },
        isInspected: true,
      },
      {
        id: 2,
        title: 'Trek FX 3 2022',
        price: 6500000,
        image: 'https://via.placeholder.com/300x200',
        condition: 'good',
        bikeType: 'hybrid',
        seller: { name: 'Cửa hàng B', rating: 4.8 },
        isInspected: false,
      },
    ];
    setListings(mockListings);
    setFilteredListings(mockListings);
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    
    // Apply filters
    const filtered = listings.filter(item => {
      const matchSearch = item.title.toLowerCase().includes(newFilters.search.toLowerCase());
      const matchPrice = item.price >= newFilters.minPrice && item.price <= newFilters.maxPrice;
      const matchType = newFilters.bikeType === 'all' || item.bikeType === newFilters.bikeType;
      const matchCondition = newFilters.condition === 'all' || item.condition === newFilters.condition;
      
      return matchSearch && matchPrice && matchType && matchCondition;
    });

    setFilteredListings(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Xe đạp thể thao</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <SearchFilter filters={filters} onChange={handleFilterChange} />
          </div>

          {/* Listings Grid */}
          <div className="lg:col-span-3">
            {filteredListings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredListings.map(listing => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Không tìm thấy xe phù hợp</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
