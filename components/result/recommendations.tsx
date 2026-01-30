import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react"

interface RecommendationsProps {
  recommendations: string[]
  label: "benign" | "suspicious" | "malicious"
}

export function Recommendations({ recommendations, label }: RecommendationsProps) {
  const getIcon = () => {
    if (label === "benign") return CheckCircle
    if (label === "suspicious") return AlertTriangle
    return XCircle
  }

  const getVariant = () => {
    if (label === "benign") return "default"
    if (label === "suspicious") return "default"
    return "destructive"
  }

  const Icon = getIcon()

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-card-foreground">Tavsiyalar</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recommendations.map((rec, index) => (
            <Alert key={index} variant={getVariant() as any}>
              <Icon className="h-4 w-4" />
              <AlertDescription>{rec}</AlertDescription>
            </Alert>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
