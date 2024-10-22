import React from 'react'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const apps = [
  {
    name: 'Tinyman',
    description: 'DeFi protocol for swapping, exchanging and providing liquidity',
    logo: 'img/Tinyman.png',
    categories: ['DEX', 'DeFi'],
    url: "https://tinyman.org/"
  },
  {
    name: 'AlgoDex',
    description: 'Decentralized orderbook exchange',
    logo: 'img/AlgoDex.png',
    categories: ['Game'],
    url: "https://app.algodex.com/en/about"
  },
  {
    name: 'Aegir Tactics',
    description: 'Digital assets for Project Aegir, a next-generation digital card game',
    logo: 'img/aegir-tactics.png',
    categories: ['Game'],
    url: "https://www.aegirtactics.com/"
  },
]

export const Apps = () => {
  const [activeAppFilter, setActiveAppFilter] = useState('All')

  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0 space-y-6 p-3">
        <h2 className="text-2xl font-bold">Algorand Apps</h2>
        <Card className="bg-gray-100">
          <CardContent className="p-4">
            <p className="text-gray-600">
              Apps below are actively curated but do not indicate any endorsement or relationship with Algorand Wallet. Please DYOR.
            </p>
          </CardContent>
        </Card>
        <div className="sticky top-0 bg-white z-10">
          <div className="flex flex-nowrap gap-1 pb-2 overflow-x-auto justify-center">
            {['Connections', 'All', 'DeFi', 'DEX', 'Game'].map((filter) => (
              <Button
                key={filter}
                variant={activeAppFilter === filter ? "default" : "outline"}
                className="text-xs px-2 py-1 whitespace-nowrap"
                onClick={() => setActiveAppFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <ScrollArea className="flex-grow px-6 pb-6">
        <div className="space-y-4">
          {apps.map((app, index) => (
            <Card key={index} onClick={() => window.open(app.url, '_blank')}>
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
