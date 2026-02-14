import { type NextRequest, NextResponse } from "next/server"
import { scanUrl } from "@/lib/url-scanner"
import { saveScanResult } from "@/lib/scan-store"

function randomId(): string {
  return Math.random().toString(36).substring(2, 10)
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL talab qilinadi" }, { status: 400 })
    }

    const trimmed = url.trim()
    if (!trimmed) {
      return NextResponse.json({ error: "URL bo'sh bo'lmasligi kerak" }, { status: 400 })
    }

    if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) {
      return NextResponse.json(
        { error: "URL http:// yoki https:// bilan boshlanishi kerak" },
        { status: 400 }
      )
    }

    const scanResult = await scanUrl(trimmed)
    const id = randomId()
    const now = new Date().toISOString()

    let domain = ""
    try {
      domain = new URL(trimmed).hostname
    } catch {
      domain = trimmed
    }

    const stored = {
      id,
      type: "url" as const,
      content: trimmed,
      riskScore: scanResult.riskScore,
      label: scanResult.label,
      explanation: scanResult.explanation,
      recommendations: scanResult.recommendations,
      details: scanResult.details as Record<string, unknown>,
      scanDate: now,
      resultPage: {
        jobId: id,
        type: "url",
        score: scanResult.riskScore,
        label: scanResult.label,
        explanation: scanResult.explanation,
        recommendations: scanResult.recommendations,
        artifacts: {
          url: trimmed,
          domains: [domain],
          protocol: scanResult.details.protocol,
          hasSsl: scanResult.details.hasSsl,
          reputation: scanResult.details.reputation,
          threats: scanResult.details.threats,
        },
        submittedAt: now,
        completedAt: now,
      },
    }

    saveScanResult(stored)

    return NextResponse.json({
      id,
      type: "url",
      content: trimmed,
      riskScore: scanResult.riskScore,
      status:
        scanResult.label === "malicious"
          ? "xavfli"
          : scanResult.label === "suspicious"
            ? "shubhali"
            : "xavfsiz",
      threats: scanResult.details.threats,
      recommendations: scanResult.recommendations,
      scanDate: now,
      details: scanResult.details,
    })
  } catch (error) {
    console.error("[HIMOYACHI] URL scan error:", error)
    return NextResponse.json(
      { error: "Tahlil jarayonida xatolik yuz berdi" },
      { status: 500 }
    )
  }
}
