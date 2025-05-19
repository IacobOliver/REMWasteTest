import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Skip } from '../types';
import { motion } from 'framer-motion';

interface SelectedSkipSummaryProps {
  selectedSkip: Skip;
}

const SelectedSkipSummary: React.FC<SelectedSkipSummaryProps> = ({ selectedSkip }) => {
  return (
    <motion.div 
      className="sticky bottom-0 w-full bg-gray-900 text-white py-4 px-4 shadow-lg"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="flex flex-col">
            <span className="text-gray-400 text-sm">Selected:</span>
            <div className="flex items-center">
              <span className="text-xl font-bold">{selectedSkip.size} Yard Skip</span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-teal-400 text-xl font-bold">£{selectedSkip.price_before_vat}</span>
            </div>
            <span className="text-sm text-gray-400">{selectedSkip.hire_period_days} day hire</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <motion.button 
            className="px-5 py-2.5 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors flex items-center font-medium"
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <ChevronLeft size={16} className="mr-1" />
            Back
          </motion.button>
          
          <motion.button 
            className="px-5 py-2.5 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors flex items-center font-medium"
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.97 }}
          >
            Continue
            <ChevronRight size={16} className="ml-1" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SelectedSkipSummary;