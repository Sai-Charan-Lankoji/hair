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
            src="https://www.hairoriginals.com/cdn/shop/files/HO_Logo_PNG_1_adad6e88-9909-422c-8595-c9e5425cec00.png?v=1711696355&width=100" 
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
            src="https://www.hairoriginals.com/cdn/shop/files/HO_Logo_PNG_1_adad6e88-9909-422c-8595-c9e5425cec00.png?v=1711696355&width=100" 
            alt="HAIR origkkkinals" 
            className="w-32" />
          </div>
          <nav className="flex space-x-8">
            <a href="#" className="font-medium hover:text-gray-600 transition-colors">BESTSELLER</a>
            <div className="relative group">
              <a href="#" className="font-medium hover:text-gray-600 transition-colors">SHOP FOR WOMEN</a>
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-screen bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="grid grid-cols-5 gap-2">
  <div>
    <h3 className="font-medium mb-2">DIY HAIR EXTENSIONS</h3>
    <ul className="space-y-2 text-sm">
      <li><a href="#" className="hover:text-gray-600">Buns</a></li>
      <li><a href="#" className="hover:text-gray-600">Bangs</a></li>
      <li><a href="#" className="hover:text-gray-600">Streaks</a></li>
      <li><a href="#" className="hover:text-gray-600">Volumizers & Clip Sets</a></li>
      <li><a href="#" className="hover:text-gray-600">U-Shaped Volumizers</a></li>
      <li><a href="#" className="hover:text-gray-600">Halo Hair Extensions</a></li>
      <li><a href="#" className="hover:text-gray-600">Frontline Hair Extensions</a></li>
      <li><a href="#" className="hover:text-gray-600">One Clip Extensions</a></li>
      <li><a href="#" className="hover:text-gray-600">Side Patches</a></li>
      <li><a href="#" className="hover:text-gray-600">Ponytail</a></li>
      <li><a href="#" className="hover:text-gray-600">Frame my face</a></li>
    </ul>
  </div>
  <div>
    <h3 className="font-medium mb-2">HAIR LOSS SOLUTION</h3>
    <ul className="space-y-2 text-sm">
      <li><a href="#" className="hover:text-gray-600">Scalp Topper</a></li>
      <li><a href="#" className="hover:text-gray-600">Highlighted Scalp Topper</a></li>
      <li><a href="#" className="hover:text-gray-600">Topper With Bangs</a></li>
      <li><a href="#" className="hover:text-gray-600">Wigs</a></li>
      <li><a href="#" className="hover:text-gray-600">Invisible Side Patch</a></li>
      <li><a href="#" className="hover:text-gray-600">Thick Hair Patch</a></li>
      <li><a href="#" className="hover:text-gray-600">Side Patch</a></li>
      <li><a href="#" className="hover:text-gray-600">One Clip Extensions</a></li>
      <li><a href="#" className="hover:text-gray-600">Hair Fiber</a></li>
      <li><a href="#" className="hover:text-gray-600">Hairline Powder</a></li>
    </ul>
  </div>
  <div>
    <h3 className="font-medium mb-2">PERMANENT HAIR EXTENSIONS</h3>
    <ul className="space-y-2 text-sm">
      <li><a href="#" className="hover:text-gray-600">Nano Tip</a></li>
      <li><a href="#" className="hover:text-gray-600">Weft</a></li>
      <li><a href="#" className="hover:text-gray-600">Flat Tip</a></li>
      <li><a href="#" className="hover:text-gray-600">Tape In</a></li>
      <li><a href="#" className="hover:text-gray-600">I Tip</a></li>
      <li><a href="#" className="hover:text-gray-600">U Tip</a></li>
    </ul>
  </div>
  <div>
    <h3 className="font-medium mb-2">MAKEUP & ACCESSORIES</h3>
    <ul className="space-y-2 text-sm">
      <li><a href="#" className="hover:text-gray-600">Hair Fiber & Powder</a></li>
      <li><a href="#" className="hover:text-gray-600">Eyebrow Shaper & Enhancer</a></li>
      <li><a href="#" className="hover:text-gray-600">Bows and Scrunchies</a></li>
      <li><a href="#" className="hover:text-gray-600">Clips And Gift Boxes</a></li>
      <li><a href="#" className="hover:text-gray-600">Magic Braids</a></li>
      <li><a href="#" className="hover:text-gray-600">Hair Chain</a></li>
      <li><a href="#" className="hover:text-gray-600">Tools & Clips</a></li>
    </ul>
  </div>
  <div>
    <h3 className="font-medium mb-2">KIDS RANGE</h3>
    <ul className="space-y-2 text-sm">
      <li><a href="#" className="hover:text-gray-600">Streaks</a></li>
      <li><a href="#" className="hover:text-gray-600">Bangs</a></li>
      <li><a href="#" className="hover:text-gray-600">Magic Braids</a></li>
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