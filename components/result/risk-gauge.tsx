"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react"

interface RiskGaugeProps {
  score: number
  label: "benign" | "suspicious" | "malicious"
}

export function RiskGauge({ score, label }: RiskGaugeProps) {
  const getColor = () => {
    if (label === "benign") return "text-green-500"
    if (label === "suspicious") return "text-yellow-500"
    return "text-red-500"
  }

  const getBgColor = () => {
    if (label === "benign") return "bg-green-500/10"
    if (label === "suspicious") return "bg-yellow-500/10"
    return "bg-red-500/10"
  }

  const getIcon = () => {
    if (label === "benign") return CheckCircle
    if (label === "suspicious") return AlertTriangle
    return XCircle
  }

  const getLabel = () => {
    if (label === "benign") return "Xavfsiz"
    if (label === "suspicious") return "Shubhali"
    return "Xavfli"
  }

  const Icon = getIcon()

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-card-foreground">Xavf darajasi</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center space-y-6 py-8 md:flex-row md:space-x-12 md:space-y-0">
          {/* Score Circle */}
          <div className="relative">
            <svg className="h-48 w-48 -rotate-90 transform">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                className="text-muted"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${(score / 100) * 552.92} 552.92`}
                className={`${getColor()} transition-all duration-1000`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-5xl font-bold ${getColor()}`}>{score}</span>
              <span className="text-sm text-muted-foreground">/ 100</span>
            </div>
          </div>

          {/* Status Badge */}
          <div className="text-center md:text-left">
            <div className={`inline-flex items-center gap-2 rounded-full ${getBgColor()} px-6 py-3`}>
              <Icon className={`h-6 w-6 ${getColor()}`} />
              <span className={`text-xl font-semibold ${getColor()}`}>{getLabel()}</span>
            </div>
            <p className="mt-4 max-w-md text-muted-foreground">
              {label === "benign" && "Ushbu kontent xavfsiz ko'rinadi. Hech qanday xavfli belgi topilmadi."}
              {label === "suspicious" && "Ushbu kontentda shubhali elementlar aniqlandi. Ehtiyot bo'ling."}
              {label === "malicious" && "Bu kontent xavfli! Shaxsiy ma'lumotlaringizni kirmang va darhol tark eting."}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
