import React from 'react';
import { ThumbsUp, X } from 'lucide-react';

interface TransactionDetailsModalProps {
  date: string;
  gasFee: string;
  explorerUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const TransactionDetailsModal: React.FC<TransactionDetailsModalProps> = ({ date, gasFee, explorerUrl, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-center mb-4">Transaction</h2>

          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <ThumbsUp className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <p className="text-gray-500 text-center mb-6">{date}</p>

          <div className="bg-blue-50 rounded-lg p-4 mb-4">
            <p className="text-gray-600 mb-2">GAS FEES</p>
            <div className="flex justify-between">
              <span className="text-gray-800">You Paid</span>
              <span className="text-gray-800 font-semibold">{gasFee} ALGO</span>
            </div>
          </div>

          <a
            href={explorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-white border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-50 transition duration-300"
          >
            VIEW ON EXPLORER
          </a>
        </div>

        <div className="bg-gray-100 px-6 py-4">
          <div className="w-8 h-1 bg-gray-300 mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export { TransactionDetailsModal };
