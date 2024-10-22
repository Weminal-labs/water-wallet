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
      <div className="flex justify-center items-center bg-gray-100 h-[520px]">
        <div className="h-full w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col">
          <div className="flex-grow overflow-auto">
            {renderContent()}
          </div>

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
        </div>
      </div>
    </>
  )
}
