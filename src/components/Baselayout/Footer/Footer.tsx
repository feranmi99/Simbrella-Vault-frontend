"use client";

import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ShoppingCart, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#00b53f] text-white pt-16 pb-8">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="relative bg-white text-gray-900 rounded-xl p-6 mb-12 shadow-lg max-w-4xl mx-auto overflow-hidden">
            <div className="absolute border inset-0 opacity-5 bg-[url('https://res.cloudinary.com/demo/image/upload/v1633450996/ankara_pattern.png')]"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <ShoppingCart className="text-[#00b53f] mr-2" size={24} />
                  <h3 className="text-2xl font-bold text-[#00b53f]">Naijamart Updates</h3>
                </div>
                <p className="text-gray-600">Get the best deals and marketplace news in Nigeria</p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
                />
                <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-r-lg font-medium transition-colors">
                  Join Now
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-white text-[#00b53f] font-bold text-xl p-2 rounded mr-2 flex items-center justify-center w-10 h-10">
                  <ShoppingCart size={20} />
                </div>
                <span className="text-2xl font-bold">Naijamart</span>
              </div>
              <p className="text-green-100 mb-6">
                Nigeria's trusted marketplace connecting buyers and sellers across all 36 states.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-green-300 pb-2 flex items-center">
                <ShoppingCart className="mr-2" size={18} />
                Marketplace
              </h3>
              <ul className="space-y-3">
                <li><Link href="/categories" className="text-green-100 hover:text-orange-300 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  All Categories
                </Link></li>
                <li><Link href="/trending" className="text-green-100 hover:text-orange-300 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  Trending Products
                </Link></li>
                <li><Link href="/electronics" className="text-green-100 hover:text-orange-300 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  Electronics
                </Link></li>
                <li><Link href="/fashion" className="text-green-100 hover:text-orange-300 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  Fashion
                </Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-green-300 pb-2 flex items-center">
                <span className="text-orange-400 mr-2">₦</span>
                For Sellers
              </h3>
              <ul className="space-y-3">
                <li><Link href="/sell" className="text-green-100 hover:text-orange-300 transition-colors">Sell on Naijamart</Link></li>
                <li><Link href="/seller-guide" className="text-green-100 hover:text-orange-300 transition-colors">Seller Guide</Link></li>
                <li><Link href="/pricing" className="text-green-100 hover:text-orange-300 transition-colors">Pricing</Link></li>
                <li><Link href="/seller-protection" className="text-green-100 hover:text-orange-300 transition-colors">Seller Protection</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-green-300 pb-2 flex items-center">
                <Phone className="text-orange-400 mr-2" size={18} />
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="mt-1 mr-3 flex-shrink-0 text-orange-300" size={18} />
                  <span>Lagos | Abuja | Port Harcourt | Nationwide</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 text-orange-300" size={18} />
                  <div>
                    <p>0700-NAIJAMART</p>
                    <p className="text-sm text-green-100">(0814-9445103)</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 text-orange-300" size={18} />
                  <span>help@naijamart.ng</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar with Nigerian Flag Colors */}
          <div className="border-t border-green-300 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-green-100 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Naijamart NG. Proudly Nigerian.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/privacy" className="text-green-100 hover:text-orange-300 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-green-100 hover:text-orange-300 transition-colors">Terms</Link>
              <Link href="/cookies" className="text-green-100 hover:text-orange-300 transition-colors">Cookies</Link>
              <Link href="/safety" className="text-green-100 hover:text-orange-300 transition-colors">Safety</Link>
              <Link href="/accessibility" className="text-green-100 hover:text-orange-300 transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
