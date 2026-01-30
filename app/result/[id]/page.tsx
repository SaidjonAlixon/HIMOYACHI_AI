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

// Mock data generator
function generateMockResult(id: string) {
  const score = Math.floor(Math.random() * 100)
  const types = ["url", "text", "image", "audio", "apk"]
  const type = types[Math.floor(Math.random() * types.length)]

  let label: "benign" | "suspicious" | "malicious"
  if (score < 30) label = "benign"
  else if (score < 70) label = "suspicious"
  else label = "malicious"

  return {
    jobId: id,
    type,
    score,
    label,
    submittedAt: new Date().toISOString(),
    completedAt: new Date(Date.now() + 2000).toISOString(),
    explanation: [
      { feature: "Domen yoshi", importance: 0.85, detail: "Sayt yangi ro'yxatdan o'tgan (3 kunlik)" },
      { feature: "SSL sertifikat", importance: 0.72, detail: "Sertifikat noma'lum manba tomonidan berilgan" },
      { feature: "Matndagi kalit so'zlar", importance: 0.68, detail: "Phishing uchun mos kalit so'zlar topildi" },
      { feature: "URL tuzilishi", importance: 0.55, detail: "Mashhur brendni taqlid qilishga o'xshaydi" },
      { feature: "JavaScript kodi", importance: 0.45, detail: "Shubhali keylogger funksiyalari aniqlandi" },
    ],
    recommendations: [
      "Ushbu saytga shaxsiy ma'lumotlaringizni kiritmang",
      "Saytdan tezda chiqing va brauzer tarixini tozalang",
      "Agar ma'lumot kiritgan bo'lsangiz, parollaringizni zudlik bilan o'zgartiring",
      "Ushbu saytni spam yoki phishing deb xabar bering",
    ],
    artifacts: {
      url: "https://example-phishing-site.com",
      domains: ["example-phishing-site.com", "cdn.suspicious-server.ru"],
      ipAddress: "192.168.1.100",
      screenshot: "/placeholder.svg?height=400&width=600",
    },
  }
}

export default function ResultPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setResult(generateMockResult(resolvedParams.id))
      setLoading(false)
    }, 1500)
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
              <CardTitle className="text-destructive">Xatolik</CardTitle>
              <CardDescription>Natija topilmadi</CardDescription>
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
