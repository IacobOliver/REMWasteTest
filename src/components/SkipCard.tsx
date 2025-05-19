import React from 'react';
import { CheckCircle, Info } from 'lucide-react';
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
        relative rounded-xl overflow-hidden transition-all duration-300
        ${isSelected ? 'ring-4 ring-teal-500 shadow-lg' : 'border border-gray-200 hover:border-teal-300 hover:shadow-md'} 
        cursor-pointer bg-white
      `}
      onClick={onSelect}
      whileHover={{ y: -5 }}
    >
      <div className="p-4 pb-0">
        <div className="relative overflow-hidden rounded-lg h-48 bg-gray-100">
          <img 
            src={skip.imageUrl} 
            alt={`${skip.size} Yard Skip`} 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-3 right-3 rounded-full font-bold 
            text-white text-sm px-3 py-1 bg-teal-600 shadow-md">
            {skip.size} Yards
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-xl font-bold text-gray-900">{skip.size} Yard Skip</h3>
          <p className="text-gray-600 mt-1 flex items-center">
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mr-2">
              {skip.hirePeriod} day hire period
            </span>
            <button className="text-gray-400 hover:text-teal-600 transition-colors">
              <Info size={16} />
            </button>
          </p>
          
          <div className="text-gray-500 mt-3 text-sm">
            <p>Perfect for: {skip.suitableFor}</p>
            <p className="mt-1">Approx. capacity: {skip.capacity}</p>
          </div>
          
          <div className="mt-4">
            <span className="text-3xl font-bold text-teal-600">£{skip.price}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4 pt-3">
        <motion.button
          className={`
            w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center
            transition-colors duration-300
            ${isSelected 
              ? 'bg-teal-600 text-white hover:bg-teal-700' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
          `}
          whileTap={{ scale: 0.98 }}
        >
          {isSelected ? (
            <>
              <CheckCircle className="w-5 h-5 mr-2" />
              Selected
            </>
          ) : (
            'Select This Skip'
          )}
        </motion.button>
      </div>
      
      {isSelected && (
        <div className="absolute top-0 left-0 w-0 h-0 border-solid border-t-[80px] border-l-[80px] border-transparent border-l-teal-500">
          <CheckCircle className="absolute -top-[55px] -left-[55px] w-6 h-6 text-white" />
        </div>
      )}
    </motion.div>
  );
};

export default SkipCard;