'use client'

import React from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Database, Sparkles, Grid, Activity } from 'lucide-react'
import { Button } from "@/components/ui/button"

const tabs = [
  { id: 'home', icon: Database, label: 'Home', path: '/' },
  { id: 'assets', icon: Sparkles, label: 'Assets', path: '/assets' },
  { id: 'apps', icon: Grid, label: 'Apps', path: '/apps' },
  { id: 'activity', icon: Activity, label: 'Activity', path: '/activity' },
]

export function WalletInterface() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      <div className="flex justify-center items-center bg-gray-100 h-[520px]">
        <div className="h-full w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col">
          <div className="flex-grow overflow-auto">
            <Outlet />
          </div>

          <div className="flex justify-around items-center border-t border-gray-200 py-4">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant="ghost"
                className={`flex flex-col items-center w-full h-full ${
                  location.pathname === tab.path ? 'text-blue-600' : 'text-gray-400'
                } hover:bg-gray-100 transition-colors duration-200`}
                onClick={() => navigate(tab.path)}
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
