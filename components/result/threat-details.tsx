import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Explanation {
  feature: string
  importance: number
  detail: string
}

interface ThreatDetailsProps {
  explanation: Explanation[]
}

export function ThreatDetails({ explanation }: ThreatDetailsProps) {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-card-foreground">Tahlil tafsilotlari</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {explanation.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-card-foreground">{item.feature}</h4>
                <span className="text-sm text-muted-foreground">{Math.round(item.importance * 100)}%</span>
              </div>
              <Progress value={item.importance * 100} className="h-2" />
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
