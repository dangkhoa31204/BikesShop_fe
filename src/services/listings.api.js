// src/services/listings.api.js
export const listingsAPI = {
  getAll: async (filters = {}) => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/listings', { params: filters });
    // return response.json();
    return {
      data: [],
      message: 'Success'
    };
  },

  getById: async (id) => {
    // TODO: Replace with actual API call
    return {
      data: { id, title: 'Sample bike' },
      message: 'Success'
    };
  },

  create: async (listingData) => {
    // TODO: For sellers to create listing
    return {
      data: { id: 1, ...listingData },
      message: 'Listing created'
    };
  },
};
