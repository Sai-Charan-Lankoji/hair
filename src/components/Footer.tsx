import { Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';
<ArrowRight />

import React from 'react'; 
//import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  const brandName = 'HairOriginals';
  const address = '1236 P Basement, Sector 52, Gurugram, 122003';
  const cin = 'US19099HR2018PTC074470';
  const contactNumber = '+91 8700797103';

  const quickLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Return & Exchanges', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Shipping Policy', href: '#' },
  ];

  const helpLinks = [
    { label: 'Track Your Order', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'My Account', href: '#' },
    { label: 'Buying Guide', href: '#' },
    { label: 'FAQs', href: '#' },
  ];

  const socialLinks = [
    { label: 'Facebook', href: '#', icon: <Facebook /> },
    { label: 'Twitter', href: '#', icon: <Twitter /> },
    { label: 'Instagram', href: '#', icon: <Instagram /> },
    { label: 'YouTube', href: '#', icon: <Youtube /> },
  ];

  return (
    <>
    <hr/>
    <footer className="bg-white text-gray-800 py-10 md:py-20">
      
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-medium mb-4">{brandName}</h3>
          <p className="text-sm">{address}</p>
          <p className="text-sm">CIN: {cin}</p>
          <p className="text-sm">Contact Number: {contactNumber}</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-gray-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Help</h3>
            <ul className="text-sm space-y-2">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-gray-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end space-y-4">
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">JOIN US</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className=" border-2 rounded-md py-2 px-4 text-sm w-full outline-2"
              />
              <button className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-900 rounded-md px-4 py-1 text-sm h">
              <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;