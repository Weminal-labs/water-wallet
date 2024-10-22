import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


const assets = [
  { username: '@walcast', expirationDate: 'Sep 16, 2025' },
  { username: '@lekhacthanhtung', expirationDate: 'May 03, 2025' },
  { username: '@orai3d', expirationDate: 'Sep 15, 2025' },
]

export const Assets = () => {
  return (
    <div className="p-6 space-y-6 flex flex-col h-full">
      <h2 className="text-2xl font-bold">Assets</h2>
      <div className="grid grid-cols-2 gap-4 flex-grow overflow-auto">
        {assets.map((asset, index) => (
          <Card key={index} className="bg-purple-900 text-white overflow-hidden">
            <CardContent className="p-4 flex flex-col justify-between h-full">
              <div className="text-green-400 font-semibold mb-4">{asset.username}</div>
              <div className="flex justify-between items-end">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-purple-300 opacity-50" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <div className="text-xs text-purple-300">{asset.expirationDate}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex space-x-4 mt-auto pt-4">
        <Button variant="default" className="flex-1">Visual Assets</Button>
        <Button variant="outline" className="flex-1 text-gray-500">Everything Else</Button>
      </div>
    </div>
  )
}
