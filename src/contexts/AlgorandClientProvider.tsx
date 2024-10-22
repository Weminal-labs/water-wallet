import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Account } from 'algosdk';

interface AlgorandClientContextType {
  network: string;
  setNetwork: (network: string) => void;
  account: Account | null;
  setAccount: (account: Account | null) => void;
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
  const [account, setAccount] = useState<Account | null>(null);

  const value = {
    network,
    setNetwork,
    account,
    setAccount,
  };

  return <AlgorandClientContext.Provider value={value}>{children}</AlgorandClientContext.Provider>;
};

