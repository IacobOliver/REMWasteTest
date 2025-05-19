import React from 'react';
import { MapPin, Trash2, Package, FileCheck, Calendar, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface BookingStepperProps {
  currentStep: number;
}

const steps = [
  { id: 1, name: 'Postcode', icon: MapPin, color: 'text-blue-500' },
  { id: 2, name: 'Waste Type', icon: Trash2, color: 'text-blue-500' },
  { id: 3, name: 'Select Skip', icon: Package, color: 'text-blue-500' },
  { id: 4, name: 'Permit Check', icon: FileCheck, color: 'text-gray-400' },
  { id: 5, name: 'Choose Date', icon: Calendar, color: 'text-gray-400' },
  { id: 6, name: 'Payment', icon: CreditCard, color: 'text-gray-400' },
];

const BookingStepper: React.FC<BookingStepperProps> = ({ currentStep }) => {
  return (
    <div className="w-full bg-[#111827] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="hidden md:flex items-center justify-between">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isActive = step.id <= currentStep;
            const isCompleted = step.id < currentStep;
            
            return (
              <React.Fragment key={step.id}>
                {index > 0 && (
                  <div className="flex-1 h-[2px] mx-4">
                    <div 
                      className={clsx(
                        'h-full transition-colors duration-300',
                        isActive ? 'bg-blue-500' : 'bg-gray-700'
                      )}
                    />
                  </div>
                )}
                
                <div className="flex items-center">
                  <StepIcon 
                    className={clsx(
                      'w-6 h-6 mr-2',
                      isActive ? 'text-blue-500' : 'text-gray-400'
                    )}
                  />
                  <span 
                    className={clsx(
                      'text-sm font-medium',
                      isActive ? 'text-white' : 'text-gray-400'
                    )}
                  >
                    {step.name}
                  </span>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        
        {/* Mobile Stepper */}
        <div className="md:hidden">
          <div className="flex items-center">
            <div className="flex-1">
              <div className="relative">
                <div className="overflow-hidden h-2 rounded-full bg-gray-700">
                  <motion.div 
                    className="h-full bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between mt-4">
            <div className="flex items-center">
              {(() => {
                const MobileStepIcon = steps[currentStep - 1].icon;
                return <MobileStepIcon className="w-5 h-5 text-blue-500 mr-2" />;
              })()}
              <span className="text-sm font-medium text-white">
                {steps[currentStep - 1].name}
              </span>
            </div>
            <div>
              <span className="text-sm text-gray-400">
                Step {currentStep} of {steps.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingStepper;