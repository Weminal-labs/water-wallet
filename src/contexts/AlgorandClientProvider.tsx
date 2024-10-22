import { Account } from '@/types';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AlgorandClientContextType {
  network: string;
  setNetwork: (network: string) => void;
  currentAccount: Account | null;
  setCurrentAccount: (account: Account | null) => void;
}

const AlgorandClientContext = createContext<AlgorandClientContextType | undefined>(undefined);

export const useAlgorandClient = () => {
  const context = useContext(AlgorandClientContext);
  if (!context) {
    throw new Error('useAlgorandClient must be used within an AlgorandClientProvider');
  }
  return context;
};

interface AlgorandClientProviderProps {
  children: ReactNode;
}

export const AlgorandClientProvider: React.FC<AlgorandClientProviderProps> = ({ children }) => {
  const [network, setNetwork] = useState<string>('mainnet');
  const [currentAccount, setCurrentAccount] = useState<Account | null>(
    {
      address: 'DTUA424DKCJYPHF5MLO6CL4R2BWOTH2GLOUQA257K5I7G65ENHSDJ4TTTE',
      mnemonic: ""
    }
  );

  const value = {
    network,
    setNetwork,
    currentAccount,
    setCurrentAccount,
  };

  return <AlgorandClientContext.Provider value={value}>{children}</AlgorandClientContext.Provider>;
};

