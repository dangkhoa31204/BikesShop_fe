import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        {/* Spinner */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin"></div>
        </div>
        
        {/* Text */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Đang tải...
        </h2>
        <p className="text-gray-600 text-sm">
          Vui lòng chờ một chút
        </p>
      </div>
    </div>
  );
}