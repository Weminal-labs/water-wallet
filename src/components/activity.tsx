import React from 'react'

import { Card, CardContent } from "@/components/ui/card"

export const Activity = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Activity</h2>
      <Card>
        <CardContent className="p-4">
          <p>Your recent activity will be shown here</p>
        </CardContent>
      </Card>
    </div>
  )
}
