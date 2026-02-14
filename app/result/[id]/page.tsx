"use client"

import { useEffect, useState, use } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RiskGauge } from "@/components/result/risk-gauge"
import { ThreatDetails } from "@/components/result/threat-details"
import { Recommendations } from "@/components/result/recommendations"
import { RawData } from "@/components/result/raw-data"
import { ActionButtons } from "@/components/result/action-buttons"
import { Loader2 } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResultPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const [result, setResult] = useState<{
    jobId: string
    type: string
    score: number
    label: "benign" | "suspicious" | "malicious"
    explanation: Array<{ feature: string; importance: number; detail: string }>
    recommendations: string[]
    artifacts: Record<string, unknown>
    submittedAt: string
    completedAt: string
  } | null>(null)
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState(false)

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const res = await fetch(`/api/result/${resolvedParams.id}`)
        if (cancelled) return
        if (res.ok) {
          const data = await res.json()
          setResult(data)
        } else {
          setFetchError(true)
        }
      } catch {
        if (!cancelled) setFetchError(true)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [resolvedParams.id])

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto flex min-h-[60vh] items-center justify-center px-4 py-12">
          <div className="text-center">
            <Loader2 className="mx-auto mb-4 h-12 w-12 animate-spin text-primary" />
            <h2 className="text-2xl font-semibold">Tahlil qilinmoqda...</h2>
            <p className="mt-2 text-muted-foreground">Iltimos kuting, bu bir necha soniya vaqt olishi mumkin</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!result) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <Card className="border-destructive">
            <CardHeader>
              <CardTitle className="text-destructive">Natija topilmadi</CardTitle>
              <CardDescription>
                {fetchError
                  ? "Bu tekshiruv natijasi mavjud emas yoki muddati o'tgan. Havolani qayta tekshiring."
                  : "Tahlil natijasi yuklanmadi."}
              </CardDescription>
            </CardHeader>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-6">
          {/* Header Section */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Tahlil natijalari</h1>
            <p className="mt-2 text-muted-foreground">
              Job ID: {result.jobId} • {new Date(result.completedAt).toLocaleString("uz-UZ")}
            </p>
          </div>

          {/* Risk Score Card */}
          <RiskGauge score={result.score} label={result.label} />

          {/* Threat Details */}
          <ThreatDetails explanation={result.explanation} />

          {/* Recommendations */}
          <Recommendations recommendations={result.recommendations} label={result.label} />

          {/* Raw Data */}
          <RawData artifacts={result.artifacts} type={result.type} />

          {/* Action Buttons */}
          <ActionButtons jobId={result.jobId} label={result.label} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
