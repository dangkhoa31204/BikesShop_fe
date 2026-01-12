// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ChatProvider } from './context/ChatContext';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import LoginPage from './features/auth/pages/LoginPage';
import RegisterPage from './features/auth/pages/RegisterPage';
import GuestHome from './features/listings/pages/ListingsPage';
import ListingsPage from './features/listings/pages/ListingsPage';
import DetailPage from './features/listings/pages/DetailPage';

import BuyerHome from './features/buyer/pages/BuyerHome';
import ChatPage from './features/buyer/pages/ChatPage';
import OrdersPage from './features/buyer/pages/OrdersPage';
import WishlistPage from './features/buyer/pages/WishlistPage';

import SellerDashboard from './features/seller/pages/SellerDashboard';
import ListingFormPage from './features/seller/pages/ListingFormPage';
import ManageListingsPage from './features/seller/pages/ManageListingsPage';

import AdminDashboard from './features/admin/pages/AdminDashboard';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <ChatProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-1">
              <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* Guest Routes (Browse xe) */}
                <Route path="/" element={<GuestHome />} />
                <Route path="/bikes" element={<ListingsPage />} />
                <Route path="/bikes/:id" element={<DetailPage />} />

                {/* Buyer Routes */}
                <Route
                  path="/buyer/home"
                  element={
                    <ProtectedRoute roles={['buyer']}>
                      <BuyerHome />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/buyer/chat"
                  element={
                    <ProtectedRoute roles={['buyer']}>
                      <ChatPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/buyer/orders"
                  element={
                    <ProtectedRoute roles={['buyer']}>
                      <OrdersPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/buyer/wishlist"
                  element={
                    <ProtectedRoute roles={['buyer']}>
                      <WishlistPage />
                    </ProtectedRoute>
                  }
                />

                {/* Seller Routes */}
                <Route
                  path="/seller/dashboard"
                  element={
                    <ProtectedRoute roles={['seller']}>
                      <SellerDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/seller/listings/new"
                  element={
                    <ProtectedRoute roles={['seller']}>
                      <ListingFormPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/seller/listings/:id/edit"
                  element={
                    <ProtectedRoute roles={['seller']}>
                      <ListingFormPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/seller/listings"
                  element={
                    <ProtectedRoute roles={['seller']}>
                      <ManageListingsPage />
                    </ProtectedRoute>
                  }
                />

                {/* Admin Routes */}
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute roles={['admin']}>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />

                {/* Redirect unknown */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </ChatProvider>
    </AuthProvider>
  );
}

export default App;
