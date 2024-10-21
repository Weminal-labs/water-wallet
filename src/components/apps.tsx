import React from 'react'

import { useState } from 'react'
import { Settings, Database, Sparkles, Grid, Activity } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const apps = [
  {
    name: 'Scallop',
    description: 'Next generation Money Market',
    logo: '/placeholder.svg?height=60&width=60',
    categories: ['DEFI']
  },
  {
    name: 'Cetus Protocol',
    description: 'The pioneer concentrated liquidity DEX on Sui.',
    logo: '/placeholder.svg?height=60&width=60',
    categories: ['DEX', 'DEFI']
  },
  {
    name: 'Hop Aggregator',
    description: 'Get the best rates and fastest swaps, with no added fees.',
    logo: '/placeholder.svg?height=60&width=60',
    categories: ['DEFI']
  },
]

export const Apps = () => {
  const [activeAppFilter, setActiveAppFilter] = useState('All')

  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0 space-y-6 pb-4">
        <h2 className="text-2xl font-bold">Sui Apps</h2>
        <Card className="bg-gray-100">
          <CardContent className="p-4">
            <p className="text-gray-600">
              Apps below are actively curated but do not indicate any endorsement or relationship with Sui Wallet. Please DYOR.
            </p>
          </CardContent>
        </Card>
        <div className="sticky top-0 bg-white z-10">
          <div className="flex space-x-2 pb-2">
            {['Connections', 'All', 'DeFi', 'DEX', 'Game'].map((filter) => (
              <Button
                key={filter}
                variant={activeAppFilter === filter ? "default" : "outline"}
                className="flex-shrink-0"
                onClick={() => setActiveAppFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <ScrollArea className="flex-grow">
        <div className="space-y-4 pr-4">
          {apps.map((app, index) => (
            <Card key={index}>
              <CardContent className="p-4 flex items-center space-x-4">
                <img src={app.logo} alt={`${app.name} logo`} className="w-12 h-12 rounded-full" />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-blue-600">{app.name}</h3>
                  <p className="text-sm text-gray-600">{app.description}</p>
                  <div className="flex space-x-2 mt-2">
                    {app.categories.map((category, catIndex) => (
                      <span key={catIndex} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
