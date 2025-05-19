import React, { useState, useEffect } from 'react';
import { Truck, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PageHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Truck className="h-8 w-8 text-teal-600" />
          <span className="ml-2 font-bold text-xl text-gray-900">We Want Waste</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Services</a>
          <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">About Us</a>
          <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex items-center">
          <a 
            href="tel:01234567890" 
            className="flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
          >
            <Phone className="h-4 w-4 mr-2" />
            01234 567 890
          </a>
        </div>

        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors py-2">Home</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors py-2">Services</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors py-2">About Us</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors py-2">Contact</a>
              <a 
                href="tel:01234567890" 
                className="flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors py-2"
              >
                <Phone className="h-4 w-4 mr-2" />
                01234 567 890
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default PageHeader;