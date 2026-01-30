"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

interface RawDataProps {
  artifacts: Record<string, any>
  type: string
}

export function RawData({ artifacts, type }: RawDataProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-card-foreground">Xom ma'lumotlar</CardTitle>
          <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? (
              <>
                Yashirish <ChevronUp className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Ko'rsatish <ChevronDown className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-semibold text-foreground">Aniqlangan ma'lumotlar:</h4>
              <pre className="overflow-x-auto text-sm text-muted-foreground">{JSON.stringify(artifacts, null, 2)}</pre>
            </div>
            {artifacts.screenshot && (
              <div>
                <h4 className="mb-2 font-semibold text-foreground">Screenshot:</h4>
                <img
                  src={artifacts.screenshot || "/placeholder.svg"}
                  alt="Screenshot"
                  className="rounded-lg border border-border"
                />
              </div>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  )
}
