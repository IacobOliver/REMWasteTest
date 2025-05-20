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
      className="sticky bottom-0 w-full bg-gray-900 text-white py-2 md:py-4 px-3 md:px-4 shadow-lg"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        <div className="flex items-start sm:items-center py-1.5 sm:py-0">
          <div className="flex flex-col text-sm sm:text-base">
            
            <div className="flex items-center flex-wrap gap-x-2">
              <span className="text-gray-400 text-xs sm:text-sm">Selected:</span>
              <span className="font-bold">{selectedSkip.size} Yard Skip</span>
              <span className="text-gray-400">•</span>
              <span className="text-teal-400 font-bold">£{selectedSkip.price_before_vat}</span>
            </div>
            <span className="text-sm text-gray-400">{selectedSkip.hire_period_days} day hire</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-sm">
          <motion.button
            className="px-5 py-2.5 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors flex items-center font-medium"
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <ChevronLeft size={14} className="mr-1" />
            Back
          </motion.button>

          <motion.button
            className="px-5 py-2.5 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors flex items-center font-medium"
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.97 }}
          >
            Continue
            <ChevronRight size={14} className="ml-1" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SelectedSkipSummary;