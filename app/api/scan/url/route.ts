import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: "URL talab qilinadi" }, { status: 400 })
    }

    // Simulate AI analysis with mock data
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const riskScore = Math.floor(Math.random() * 100)
    const threats = []

    if (riskScore > 70) {
      threats.push(
        { type: "Phishing", severity: "high", description: "Phishing belgilari aniqlandi" },
        { type: "Suspicious Domain", severity: "medium", description: "Shubhali domen nomi" },
      )
    } else if (riskScore > 40) {
      threats.push({ type: "Unknown Source", severity: "low", description: "Noma'lum manba" })
    }

    return NextResponse.json({
      id: Math.random().toString(36).substring(7),
      type: "url",
      content: url,
      riskScore,
      status: riskScore > 70 ? "xavfli" : riskScore > 40 ? "shubhali" : "xavfsiz",
      threats,
      recommendations:
        riskScore > 40
          ? [
              "Ushbu havolaga kirish tavsiya etilmaydi",
              "Shaxsiy ma'lumotlaringizni kiritmang",
              "IT xavfsizlik bo'limiga xabar bering",
            ]
          : ["Havola xavfsiz ko'rinadi", "Lekin ehtiyot bo'lishni davom etting"],
      scanDate: new Date().toISOString(),
      details: {
        domain: new URL(url).hostname,
        protocol: new URL(url).protocol,
        hasSsl: url.startsWith("https"),
        reputation: riskScore < 40 ? "yaxshi" : riskScore < 70 ? "o'rtacha" : "yomon",
      },
    })
  } catch (error) {
    console.error("[v0] URL scan error:", error)
    return NextResponse.json({ error: "Tahlil jarayonida xatolik yuz berdi" }, { status: 500 })
  }
}
