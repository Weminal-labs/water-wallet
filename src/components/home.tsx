import React, { useState } from 'react'
import { Settings, Plus, Database, Sparkles, Grid, Activity } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useNavigate } from 'react-router-dom';

export const Home = () => {

  const navigate = useNavigate();

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
          <div className="bg-white rounded-lg p-3 flex items-center space-x-3">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#4285F4">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <div className="flex-grow">
              <div className="text-sm text-gray-600 truncate">lekhacthanhtung...Portfolio</div>
              <div className="text-xs text-gray-400">0xb4b2...915d</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
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

      <div className="bg-gray-200 h-6 rounded-full w-full"></div>

      <div className="flex justify-center">
        <span className="text-sm text-gray-500 uppercase font-bold">lekhacthanhtung...Portfolio</span>
      </div>

      <div className="bg-blue-50 rounded-lg p-4">
        <h2 className="text-3xl font-bold flex items-baseline">0.993995484 <span className="text-xl text-gray-500 ml-1">Algo</span></h2>
        <div className="flex space-x-2 mt-2">
          <Button variant="outline" size="sm">Send</Button>
          <Button variant="outline" size="sm">Swap</Button>
        </div>
        <div className="flex items-center mt-4 text-blue-600">
          <Database className="w-5 h-5 mr-2" />
          <span className="font-medium">Currently Staked</span>
          <span className="ml-2">10 Algo</span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">MY COINS</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-400 rounded-full mr-3 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-medium">Algo</div>
              <div className="text-sm text-gray-500">ALGO</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium">0.993995...</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">1 UNRECOGNIZED COIN</h3>
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
      </div>
    </div>
  )
}
