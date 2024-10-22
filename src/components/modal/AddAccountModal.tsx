import React from 'react';
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

interface AddAccountModalProps {
  onClose: () => void;
}

export const AddAccountModal: React.FC<AddAccountModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add Account</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="absolute top-2 right-2">
            <X className="w-5 h-5" />
          </Button>
        </div>

        <Button variant="outline" className="w-full mb-2 flex items-center">
          <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
          Sign in with Google
        </Button>

        <Button variant="outline" className="w-full mb-2 flex items-center bg-purple-600 text-white">
          <img src="/twitch-icon.png" alt="Twitch" className="w-5 h-5 mr-2" />
          Sign in with Twitch
        </Button>

        <Button variant="outline" className="w-full mb-4 flex items-center">
          <img src="/ledger-icon.png" alt="Ledger" className="w-5 h-5 mr-2" />
          Set up Ledger
        </Button>

        <div className="text-sm text-gray-500 mb-2">CREATE NEW</div>

        <Button variant="outline" className="w-full mb-2">
          Create a new Passphrase Account
        </Button>

        <div className="text-sm text-gray-500 mb-2">IMPORT EXISTING ACCOUNTS</div>

        <Button variant="outline" className="w-full mb-2">
          Import Passphrase
        </Button>

        <Button variant="outline" className="w-full">
          Import Private Key
        </Button>
      </div>
    </div>
  );
};
