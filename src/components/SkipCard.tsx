import React from 'react';
import { CheckCircle, Info, AlertTriangle } from 'lucide-react';
import { Skip } from '../types';
import { motion } from 'framer-motion';

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: () => void;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};
const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
  return (
    <motion.div 
      variants={item}
      className={`
        relative rounded-lg overflow-hidden transition-all duration-300
        ${isSelected ? 'ring-4 ring-teal-400 shadow-teal-800/40' : 'border border-gray-700 hover:border-teal-400 hover:shadow-md'} 
        cursor-pointer bg-gray-900 text-white
      `}
      onClick={onSelect}
      whileHover={{ y: -4 }}
    >
      <div className="p-3 pb-0">
        <div className="relative overflow-hidden rounded-md h-32 sm:h-52 bg-gray-800">
          <img 
            src={"images/4-yarder-skip.jpg"} 
            alt={`${skip.size} Yard Skip`} 
            className="w-full h-full object-cover object-center"
          />
          
          {!skip.allowed_on_road && (
            <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-background text-yellow-300 text-[10px] font-medium px-2 py-0.5 rounded-full shadow-sm">
              <AlertTriangle size={12} className="inline-block" />
              Not On Road
            </div>
          )}

          <div className="absolute top-2 right-2 rounded-full font-semibold 
            text-white text-xs px-2 py-0.5 bg-teal-500 shadow">
            {skip.size} Yards
          </div>
        </div>

        <div className="pt-3">
          <h3 className="text-lg font-semibold text-white">{skip.size} Yard Skip</h3>
          <p className="text-gray-400 mt-1 flex items-center">
            <span className="inline-block bg-yellow-900/30 text-yellow-300 text-[10px] px-2 py-0.5 rounded-full mr-2">
              {skip.hire_period_days} day hire
            </span>
            <button className="text-gray-500">
              <Info size={14} />
            </button>
          </p>
          
          <div className="mt-3">
            <span className="text-2xl font-bold text-teal-400">£{skip.price_before_vat}</span>
          </div>
        </div>
      </div>
      
      <div className="p-3 pt-2">
        <motion.button
          className={`
            w-full py-2 px-3 rounded-md font-medium flex items-center justify-center
            transition-colors duration-300 text-sm
            ${isSelected 
              ? 'bg-teal-500 text-white hover:bg-teal-600' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}
          `}
          whileTap={{ scale: 0.98 }}
        >
          {isSelected ? (
            <>
              <CheckCircle className="w-4 h-4 mr-2" />
              Selected
            </>
          ) : (
            'Select Skip'
          )}
        </motion.button>
      </div>
      
      {isSelected && (
        <div className="absolute top-0 left-0 w-0 h-0 border-solid border-b-[40px] border-l-[40px] border-transparent border-l-teal-500"></div>
      )}
    </motion.div>
  );
};

export default SkipCard;
