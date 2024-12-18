import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const companyInfo = {
    importedBy: 'Kris Originals Pvt. Ltd.',
    brandName: 'HairOriginals',
    address: '1236 P Basement, Sector 52, Gurugram, 122003',
    cin: 'US19099HR2018PTC074470',
    contactNumber: '+91 8700797103',
  };

  const informationLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Lookbook', href: '#' },
    { label: 'Influencer Partnership', href: '#' },
    { label: 'Shop all products', href: '#' },
  ];

  const helpLinks = [
    { label: 'Track Your Order', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'My Account', href: '#' },
    { label: 'Buying Guide', href: '#' },
    { label: 'FAQs', href: '#' },
  ];

  const quickLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Return & Exchanges', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Shipping Policy', href: '#' },
  ];

  const socialLinks = [
    { label: 'Facebook', href: '#', icon: <Facebook className="w-5 h-5 " color='black' /> },
    { label: 'Twitter', href: '#', icon: <Twitter className="w-5 h-5" color='black'/> },
    { label: 'Instagram', href: '#', icon: <Instagram className="w-5 h-5" color='black'/> },
    { label: 'YouTube', href: '#', icon: <Youtube className="w-5 h-5" color='black'/> },
  ];

  return (
    <>
    <hr/>
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Company Info Column */}
          <div className="md:col-span-3 space-y-4">
            <div className="mb-6">
              <img
                src="https://cdn.shopify.com/s/files/1/0797/7245/1107/files/HO_Logo_PNG_1_adad6e88-9909-422c-8595-c9e5425cec00.png?v=1711696355"
                alt="HairOriginals Logo"
                className="w-auto h-20"
              />
            </div>
            <div className="space-y-4 text-sm text-gray-600">
              <p><span className="font-medium">Imported & Marketed By:</span> {companyInfo.importedBy}</p>
              <p><span className="font-medium">Brand Name:</span> {companyInfo.brandName}</p>
              <p><span className="font-medium">Address:</span> {companyInfo.address}</p>
              <p><span className="font-medium">CIN:</span> {companyInfo.cin}</p>
              <p><span className="font-medium">Contact Number:</span> {companyInfo.contactNumber}</p>
            </div>
          </div>

          {/* Information Column */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-medium mb-6">Information</h3>
            <ul className="space-y-3">
              {informationLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-medium mb-6">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Link Column */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-medium mb-6">Quick link</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-medium mb-6">JOIN US</h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe for store updates and discounts.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-600 hover:text-gray-900"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-end space-x-6 pt-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;

