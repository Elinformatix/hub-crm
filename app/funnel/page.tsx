"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Funnel, FunnelChart, ResponsiveContainer, Tooltip } from 'recharts'

const initialData = [
  { name: 'Leads', value: 5000, fill: '#8884d8' },
  { name: 'Qualified', value: 3000, fill: '#83a6ed' },
  { name: 'Proposals', value: 2000, fill: '#8dd1e1' },
  { name: 'Negotiations', value: 1000, fill: '#82ca9d' },
  { name: 'Closed Deals', value: 500, fill: '#a4de6c' },
]

export default function FunnelPage() {
  const [data, setData] = useState(initialData)

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Sales Funnel</h1>
      <Card>
        <CardHeader>
          <CardTitle>Funnel Canvas</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <FunnelChart>
              <Tooltip />
              <Funnel
                dataKey="value"
                data={data}
                isAnimationActive
              >
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((stage, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{stage.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stage.value}</p>
              <p className="text-sm text-muted-foreground">
                {index > 0 ? `${((stage.value / data[index - 1].value) * 100).toFixed(2)}% conversion` : 'Top of funnel'}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}