import { useState } from 'react';
import { Menu, Phone, Search, Scissors, ShoppingCart } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-[#eeb882] text-center py-3 text-sm">
        Call us @8700797103
      </div>
      <div className=" mx-0 px-4 py-4">
        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-between">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
          <div className="">
            <img 
            src="src/assests/logo.png" 
            alt="HAIR origkkkinals" 
            className="w-32" />
          </div>
          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5" />
            <ShoppingCart className="w-5 h-5" />
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between">
          <div className="text-2xl ">
          <img 
            src="src/assests/logo.png" 
            alt="HAIR origkkkinals" 
            className="w-32" />
          </div>
          <nav className="flex space-x-8">
            <a href="#" className="font-medium hover:text-gray-600 transition-colors">BESTSELLER</a>
            <div className="relative group">
              <a href="#" className="font-medium hover:text-gray-600 transition-colors">SHOP FOR WOMEN</a>
              <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2">DIY HAIR EXTENSIONS</h3>
                    <ul className="space-y-2 text-sm">
                      <li><a href="#" className="hover:text-gray-600">Buns</a></li>
                      <li><a href="#" className="hover:text-gray-600">Bangs</a></li>
                      <li><a href="#" className="hover:text-gray-600">Streaks</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">HAIR LOSS SOLUTION</h3>
                    <ul className="space-y-2 text-sm">
                      <li><a href="#" className="hover:text-gray-600">Scalp Topper</a></li>
                      <li><a href="#" className="hover:text-gray-600">Wigs</a></li>
                      <li><a href="#" className="hover:text-gray-600">Hair Patch</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="font-medium hover:text-gray-600 transition-colors">SHOP FOR MEN</a>
            <a href="#" className="font-medium hover:text-gray-600 transition-colors">ABOUT</a>
            <a href="#" className="font-medium hover:text-gray-600 transition-colors">EXPERIENCE CENTERS</a>
            <a href="#" className="font-medium hover:text-gray-600 transition-colors">CONTACT</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1">
              <span>INR</span>
              <img src="https://flagcdn.com/w20/in.png" alt="Indian flag" className="w-5" />
            </button>
            <Search className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
            <Scissors className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </div>
  );
};

export default Header;