import React, { useState } from 'react';
import BookingStepper from '../components/BookingStepper';
import SkipSelectionGrid from '../components/SkipSelectionGrid';
import SelectedSkipSummary from '../components/SelectedSkipSummary';
import { Skip } from '../types';
import { skips } from '../data';

const SkipSelectionPage: React.FC = () => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(skips[1]); // Default to 5 Yard Skip

  const handleSelectSkip = (skip: Skip) => {
    setSelectedSkip(skip);
  };

  return (
    <div className="flex flex-col min-h-screen">
     
      
      <main className="flex-1 container mx-auto px-4 pb-6 md:pb-8 lg:pb-12 max-w-6xl">
         <BookingStepper currentStep={2} />
        
        <div className="mt-8 md:mt-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Choose Your Skip Size
          </h1>
          
          <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
            Select the skip size that best suits your needs. Not sure which to choose? 
            View our size guide below to help you decide.
          </p>
          
          <SkipSelectionGrid 
            skips={skips} 
            selectedSkip={selectedSkip} 
            onSelectSkip={handleSelectSkip} 
          />
        </div>
      </main>
      
      {selectedSkip && (
        <SelectedSkipSummary 
          selectedSkip={selectedSkip}
        />
      )}
    </div>
  );
};

export default SkipSelectionPage;