import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="p-4">
        <button onClick={onClose} className="absolute right-4 top-4">
          <X className="w-6 h-6" />
        </button>
        <nav className="mt-16 space-y-6">
          <a href="#" className="block text-lg font-medium">BESTSELLER</a>
          <a href="#" className="block text-lg font-medium">SHOP FOR WOMEN</a>
          <a href="#" className="block text-lg font-medium">SHOP FOR MEN</a>
          <a href="#" className="block text-lg font-medium">ABOUT</a>
          <a href="#" className="block text-lg font-medium">EXPERIENCE CENTERS</a>
          <a href="#" className="block text-lg font-medium">CONTACT</a>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;