import React from 'react'

import { Card, CardContent } from "@/components/ui/card"

export const Activity = () => {
  return (
    <div className="p-6 space-y-6 flex flex-col h-full">
      <h2 className="text-2xl font-bold">Activity</h2>
      <Card className="flex-grow">
        <CardContent className="p-4 h-full flex items-center justify-center">
          <p>Your recent activity will be shown here</p>
        </CardContent>
      </Card>
    </div>
  )
}
