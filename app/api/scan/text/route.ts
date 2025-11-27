import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json()

    if (!text) {
      return NextResponse.json({ error: "Matn talab qilinadi" }, { status: 400 })
    }

    // Simulate AI analysis
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const suspiciousKeywords = ["password", "urgent", "click here", "verify account", "prize", "winner"]
    const foundKeywords = suspiciousKeywords.filter((keyword) => text.toLowerCase().includes(keyword))

    const riskScore = Math.min(foundKeywords.length * 20 + Math.floor(Math.random() * 30), 100)
    const threats = []

    if (foundKeywords.length > 2) {
      threats.push(
        { type: "Phishing Attempt", severity: "high", description: "Phishing uchun xos kalit so'zlar topildi" },
        { type: "Social Engineering", severity: "high", description: "Ijtimoiy muhandislik usullari" },
      )
    } else if (foundKeywords.length > 0) {
      threats.push({ type: "Suspicious Content", severity: "medium", description: "Shubhali kontent aniqlandi" })
    }

    return NextResponse.json({
      id: Math.random().toString(36).substring(7),
      type: "text",
      content: text.substring(0, 100) + (text.length > 100 ? "..." : ""),
      riskScore,
      status: riskScore > 70 ? "xavfli" : riskScore > 40 ? "shubhali" : "xavfsiz",
      threats,
      recommendations:
        riskScore > 40
          ? ["Ushbu xabarga javob bermang", "Havolalarga bosmang", "Shaxsiy ma'lumot bermang"]
          : ["Matn xavfsiz ko'rinadi"],
      scanDate: new Date().toISOString(),
      details: {
        length: text.length,
        suspiciousKeywords: foundKeywords,
        language: "mixed",
      },
    })
  } catch (error) {
    console.error("[v0] Text scan error:", error)
    return NextResponse.json({ error: "Tahlil jarayonida xatolik yuz berdi" }, { status: 500 })
  }
}
