'use client';

// import { X } from 'lucide-react';

import { IoClose } from "react-icons/io5";

interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BudgetModal({ isOpen, onClose }: BudgetModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Set up annual budgets by account category
              </h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                <IoClose size={20} />
              </button>
            </div>
            
            <div className="mt-2">
              <p className="text-sm text-gray-500 mb-4">
                Allocate funds across income and expense lines with full visibility.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Track actuals vs budget in real time</h4>
                  <p className="text-sm text-gray-500">
                    See how your community is performing against plan, month by month.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Adjust figures and forecast with ease</h4>
                  <p className="text-sm text-gray-500">
                    Edit amounts, apply percentage changes, or roll forward last year's data—all in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
            >
              Create Budget
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}