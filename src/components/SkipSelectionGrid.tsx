import React from 'react';
import SkipCard from './SkipCard';
import { Skip } from '../types';
import { motion } from 'framer-motion';

interface SkipSelectionGridProps {
  skips: Skip[];
  selectedSkip: Skip | null;
  onSelectSkip: (skip: Skip) => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const SkipSelectionGrid: React.FC<SkipSelectionGridProps> = ({ 
  skips, 
  selectedSkip, 
  onSelectSkip 
}) => {
  return (
    <motion.div 
      className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {skips.map((skip) => (
        <SkipCard
          key={skip.id}
          skip={skip}
          isSelected={selectedSkip?.id === skip.id}
          onSelect={() => onSelectSkip(skip)}
        />
      ))}
    </motion.div>
  );
};

export default SkipSelectionGrid;