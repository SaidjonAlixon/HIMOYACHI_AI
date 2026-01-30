import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "Fayl talab qilinadi" }, { status: 400 })
    }

    // Simulate AI audio analysis
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const riskScore = Math.floor(Math.random() * 100)
    const threats = []

    if (riskScore > 70) {
      threats.push(
        { type: "Voice Phishing", severity: "high", description: "Vishing (ovozli phishing) aniqlandi" },
        { type: "Deepfake Audio", severity: "high", description: "Deepfake ovoz aniqlandi" },
      )
    } else if (riskScore > 40) {
      threats.push({ type: "Suspicious Script", severity: "medium", description: "Shubhali skript mazmuni" })
    }

    return NextResponse.json({
      id: Math.random().toString(36).substring(7),
      type: "audio",
      content: file.name,
      riskScore,
      status: riskScore > 70 ? "xavfli" : riskScore > 40 ? "shubhali" : "xavfsiz",
      threats,
      recommendations:
        riskScore > 40
          ? ["Bu ovozga ishonmang", "Shaxsiy ma'lumot bermang", "Telefon qo'ng'irog'ini tugatish tavsiya etiladi"]
          : ["Audio xavfsiz ko'rinadi"],
      scanDate: new Date().toISOString(),
      details: {
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        duration: Math.floor(Math.random() * 120),
        deepfakeProbability: riskScore > 70 ? "yuqori" : riskScore > 40 ? "o'rtacha" : "past",
      },
    })
  } catch (error) {
    console.error("[v0] Audio scan error:", error)
    return NextResponse.json({ error: "Tahlil jarayonida xatolik yuz berdi" }, { status: 500 })
  }
}
