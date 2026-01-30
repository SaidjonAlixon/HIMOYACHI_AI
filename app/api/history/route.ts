import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // Mock history data - in production this would come from a database
    const mockHistory = Array.from({ length: 15 }, (_, i) => ({
      id: Math.random().toString(36).substring(7),
      type: ["url", "text", "image", "audio", "apk"][Math.floor(Math.random() * 5)],
      content: `Test content ${i + 1}`,
      riskScore: Math.floor(Math.random() * 100),
      status: Math.random() > 0.7 ? "xavfli" : Math.random() > 0.4 ? "shubhali" : "xavfsiz",
      scanDate: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
    }))

    return NextResponse.json({ history: mockHistory })
  } catch (error) {
    console.error("[v0] History fetch error:", error)
    return NextResponse.json({ error: "Tarix yuklanmadi" }, { status: 500 })
  }
}
