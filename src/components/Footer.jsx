import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🚴</span>
              <span className="text-xl font-bold text-white">BikeShop</span>
            </div>
            <p className="text-sm text-gray-400">
              Nền tảng mua bán xe đạp thể thao uy tín, minh bạch và an toàn.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Khám phá</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/bikes" className="hover:text-teal-400 transition-colors">Duyệt xe</Link></li>
              <li><Link to="/bikes?bikeType=road" className="hover:text-teal-400 transition-colors">Xe đường</Link></li>
              <li><Link to="/bikes?bikeType=mountain" className="hover:text-teal-400 transition-colors">Xe leo núi</Link></li>
              <li><Link to="/bikes?bikeType=hybrid" className="hover:text-teal-400 transition-colors">Xe lai</Link></li>
            </ul>
          </div>

          {/* For Sellers */}
          <div>
            <h4 className="text-white font-semibold mb-4">Cho người bán</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/register" className="hover:text-teal-400 transition-colors">Đăng ký bán xe</Link></li>
              <li><a href="#help" className="hover:text-teal-400 transition-colors">Hướng dẫn đăng tin</a></li>
              <li><a href="#help" className="hover:text-teal-400 transition-colors">Chính sách bán hàng</a></li>
              <li><a href="#help" className="hover:text-teal-400 transition-colors">Liên hệ hỗ trợ</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:support@bikeshop.vn" className="hover:text-teal-400 transition-colors">
                  support@bikeshop.vn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <span>0123-456-789</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>TP Hồ Chí Minh, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 BikeShop. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="hover:text-teal-400 transition-colors">Chính sách bảo mật</a>
            <a href="#terms" className="hover:text-teal-400 transition-colors">Điều khoản sử dụng</a>
            <a href="#help" className="hover:text-teal-400 transition-colors">Hỗ trợ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
