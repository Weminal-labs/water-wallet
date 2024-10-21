'use client'

import { Settings, Plus, Database, Sparkles, Grid, Activity } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from 'react'
import { Home } from './home'
import { Assets } from './assets'
import { Apps } from './apps'
import { Activity as ActivityPage } from './activity'

const tabs = [
  { id: 'home', icon: Database, label: 'Home' },
  { id: 'assets', icon: Sparkles, label: 'Assets' },
  { id: 'apps', icon: Grid, label: 'Apps' },
  { id: 'activity', icon: Activity, label: 'Activity' },
]

export function WalletInterface() {
  const [activeTab, setActiveTab] = useState('home')

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />
      case 'assets':
        return <Assets />
      case 'apps':
        return <Apps />
      case 'activity':
        return <ActivityPage />
      default:
        return null
    }
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden">
          {renderContent()}

          <div className="flex justify-around items-center border-t border-gray-200 py-4">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant="ghost"
                className={`flex flex-col items-center ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-400'}`}
                onClick={() => {
                  console.log('clicked', tab.id)
                  setActiveTab(tab.id)
                }}
              >
                <tab.icon className="w-6 h-6" />
                <span className="text-xs mt-1">{tab.label}</span>
              </Button>
            ))}
          </div>

          {/* <div className="flex justify-around items-center border-t border-gray-200 py-4">
          <Button variant="ghost" className="flex flex-col items-center text-blue-600">
            <Database className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center text-gray-400">
            <Sparkles className="w-6 h-6" />
            <span className="text-xs mt-1">Assets</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center text-gray-400">
            <Grid className="w-6 h-6" />
            <span className="text-xs mt-1">Apps</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center text-gray-400">
            <Activity className="w-6 h-6" />
            <span className="text-xs mt-1">Activity</span>
          </Button>
        </div> */}
        </div>
      </div>
    </>
  )
}
