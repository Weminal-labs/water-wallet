import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ThumbsUp, Eye } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '@/hooks/useLocalStorage';
import algosdk, { Account } from 'algosdk';
import { CustomAccount } from '@/types';

export const CreateAccountSuccessPage = () => {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useLocalStorage<CustomAccount[]>('accounts', []);
  const [mnemonic, setMnemonic] = useState<string>('');

  useEffect(() => {
    const account = algosdk.generateAccount();
    account.addr.publicKey.toString()
    const mnemonicPhrase = algosdk.secretKeyToMnemonic(account.sk);
    setAccounts([...accounts, { type: "mnemonic", account }]);
    setMnemonic(mnemonicPhrase);
  }, []);

  return (
    <div className="h-full fixed inset-0 bg-white">
      <Card className="h-screen w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
        <CardContent className="p-6 text-center">
          {/* Success Icon */}
          <div className="mb-4">
            <ThumbsUp className="h-12 w-12 text-green-500 mx-auto" />
          </div>

          {/* Title */}
          <h1 className="text-xl font-bold mb-4">Wallet Created Successfully!</h1>

          {/* Recovery Phrase Section */}
          <h2 className="text-sm font-bold mb-1">RECOVERY PHRASE</h2>
          <p className="text-xs text-gray-600 mb-2">
            Your recovery phrase makes it easy to back up and restore your account.
          </p>

          {/* Recovery Phrase Display */}
          <div className="bg-gray-100 p-3 rounded-md relative mb-3">
            <p className="text-xs break-words">
              {mnemonic}
            </p>
            <Eye className="h-4 w-4 text-gray-400 absolute right-2 bottom-2 cursor-pointer" />
          </div>

          {/* Warning */}
          <p className="text-xs font-bold text-red-500 mb-1">WARNING</p>
          <p className="text-xs text-gray-600 mb-3">
            Never disclose your secret recovery phrase. Anyone can take over your account with it.
          </p>

          {/* Checkbox */}
          <div className="flex items-center space-x-2 mb-4">
            <Checkbox id="savedRecoveryPhrase" />
            <label
              htmlFor="savedRecoveryPhrase"
              className="text-xs leading-none"
            >
              I saved my recovery phrase
            </label>
          </div>

          {/* Open Wallet Button */}
          <Button className="w-full bg-black text-white text-sm py-2 hover:bg-gray-800" onClick={() => { navigate('/') }}>
            Open Algorand Wallet
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
