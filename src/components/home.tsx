import React, { useEffect, useState } from 'react'
import { Settings, Plus, Database, Sparkles, Grid, Activity } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useNavigate } from 'react-router-dom';
import { getAccountInfo } from '@/lib/algorand/account'
import { useAlgorandClient } from '@/contexts/AlgorandClientProvider'
import algosdk from 'algosdk'
import { formatAddress, formatAlgoAmount } from '@/lib/algorand/utils'
import useLocalStorage from '@/hooks/useLocalStorage'
import { CustomAccount } from '@/types'

export const Home = () => {
  const navigate = useNavigate();
  const { currentAccount } = useAlgorandClient();
  const [accountInfo, setAccountInfo] = useState<algosdk.modelsv2.Account | null>(null);
  const [accounts, setAccounts] = useLocalStorage<CustomAccount[]>('accounts', []);
  const googleAccount = accounts.find((account => {
    if (account.type == "google") {
      return true
    }
    return false;
  }))

  useEffect(() => {
    const fetchAccountInfo = async () => {
      try {
        if (currentAccount) {
          const result = await getAccountInfo('mainnet', currentAccount.address)
          setAccountInfo(result);
        } else {
          console.error('No account selected');
        }
      } catch (error) {
        console.error('Error fetching account info:', error);
      }
    }

    fetchAccountInfo();
  }, [currentAccount])

  return (
    <div className="p-3 space-y-6 flex flex-col h-full-screen mb-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-600" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5"></path>
          </svg>
          <span className="text-xl font-semibold">Algorand Wallet</span>
        </div>
        <Settings className="w-6 h-6 text-gray-400" />
      </div>

      <Card className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <CardContent className="p-4 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Accounts</h2>
          <Select defaultValue="current">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select account" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current">CURRENT</SelectItem>
            </SelectContent>
          </Select>
          {googleAccount && <div className="bg-white rounded-lg p-3 flex items-center space-x-3">
            <img src="img/google.png" className='w-4 h-4' alt="" />
            <div className="flex-grow min-w-0">
              <div className="text-sm text-gray-600 truncate max-w-[200px]">{googleAccount.email}</div>
              <div className="text-xs text-gray-400 truncate">{formatAddress(googleAccount.account.addr.publicKey.toString())}</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </div>}

          <div className="bg-white rounded-lg p-3 flex items-center space-x-3">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <div className="flex-grow min-w-0">
              <div className="text-sm text-gray-600 truncate max-w-[200px]">{formatAddress(currentAccount?.address ?? '')}</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex justify-between items-center">
            <Button variant="ghost" className="text-gray-600">
              <Database className="w-4 h-4 mr-2" />
              MANAGE
            </Button>
            <Button
              variant="ghost"
              className="text-blue-600"
              onClick={() => navigate('/add-account')}
            >
              <Plus className="w-4 h-4 mr-2" />
              ADD
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <span className="text-sm text-gray-500 uppercase font-bold">Portfolio</span>
      </div>

      <div className="bg-blue-50 rounded-lg p-4">
        <h2 className="text-3xl font-bold flex items-baseline justify-center">
          {formatAlgoAmount(accountInfo?.amount || 0)} <span className="text-xl text-gray-500 ml-1">Algo</span>
        </h2>
        <div className="flex justify-center space-x-4 mt-4">
          <Button variant="outline" size="lg" className="w-1/3">Send</Button>
          <Button variant="outline" size="lg" className="w-1/3">Swap</Button>
        </div>
        <div className="flex items-center justify-center mt-4 text-blue-600">
          <Database className="w-5 h-5 mr-2" />
          <span className="font-medium">Currently Staked</span>
          <span className="ml-2">0 Algo</span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">MY COINS</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="img/algo_logo_dark.png" alt="Algorand Logo" className="w-8 h-8 mr-3" />
            <div>
              <div className="font-medium">Algo</div>
              <div className="text-sm text-gray-500">ALGO</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium">{formatAlgoAmount(accountInfo?.amount || 0)}</div>
          </div>
        </div>
      </div>

      {/* <div className="space-y-4">
        <h3 className="text-lg font-semibold">
          {accountInfo?.totalAssetsOptedIn ?? 0} UNRECOGNIZED COIN{accountInfo?.totalAssetsOptedIn !== 1 ? 'S' : ''}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-400 rounded-full mr-3 flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-medium">USDC</div>
              <div className="text-sm text-gray-500">Send</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium">116.52 US...</div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
