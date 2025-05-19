import React, { useEffect, useState } from 'react';
import BookingStepper from '../components/BookingStepper';
import SkipSelectionGrid from '../components/SkipSelectionGrid';
import SelectedSkipSummary from '../components/SelectedSkipSummary';
import { Skip } from '../types';
import Loader from '../components/Loader/Loader';
import { Container } from 'lucide-react';

const SkipSelectionPage: React.FC = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
        if (!response.ok) {
          throw new Error('Failed to fetch skip data.');
        }
        const data = await response.json();
        console.log(data)
        setSkips(data);
        setSelectedSkip(data[1] || data[0] || null); // Set a default if available
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  const handleSelectSkip = (skip: Skip) => {
    setSelectedSkip(skip);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 pb-6 md:pb-8 lg:pb-12 max-w-6xl">
        <BookingStepper currentStep={2} />

        <div className="mt-8 md:mt-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            Choose Your Skip Size
          </h1>
          
          <p className="mt-3 text-center text-gray-400 max-w-2xl mx-auto">
            Select the skip size that best suits your needs. Not sure which to choose? 
            View our size guide below to help you decide.
          </p>

          {loading && (
            <div className='flex items-center justify-center my-16'>
            <Loader />
            </div>
          )}

          {error && (
            <p className="text-center mt-6 text-red-500">Error: {error}</p>
          )}

          {!loading && !error && skips.length > 0 && (
            <SkipSelectionGrid 
              skips={skips} 
              selectedSkip={selectedSkip} 
              onSelectSkip={handleSelectSkip} 
            />
          )}
        </div>
      </main>

      {selectedSkip && (
        <SelectedSkipSummary selectedSkip={selectedSkip} />
      )}
    </div>
  );
};

export default SkipSelectionPage;
