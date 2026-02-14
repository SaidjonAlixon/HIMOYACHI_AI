import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "Fayl talab qilinadi" }, { status: 400 })
    }

    // Simulate AI image analysis
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const riskScore = Math.floor(Math.random() * 100)
    const threats = []

    if (riskScore > 70) {
      threats.push(
        { type: "QR Code Phishing", severity: "high", description: "Shubhali QR kod aniqlandi" },
        { type: "Fake Interface", severity: "medium", description: "Soxta interfeys elementi" },
      )
    } else if (riskScore > 40) {
      threats.push({ type: "Suspicious Content", severity: "low", description: "Shubhali kontent" })
    }

    return NextResponse.json({
      id: Math.random().toString(36).substring(7),
      type: "image",
      content: file.name,
      riskScore,
      status: riskScore > 70 ? "xavfli" : riskScore > 40 ? "shubhali" : "xavfsiz",
      threats,
      recommendations:
        riskScore > 40
          ? ["QR kodlarga skanlamang", "Rasmdagi havolalarga o'tmang", "Ishonchsiz manba"]
          : ["Rasm xavfsiz ko'rinadi"],
      scanDate: new Date().toISOString(),
      details: {
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        hasQrCode: Math.random() > 0.7,
        hasText: Math.random() > 0.5,
      },
    })
  } catch (error) {
    console.error("[v0] Image scan error:", error)
    return NextResponse.json({ error: "Tahlil jarayonida xatolik yuz berdi" }, { status: 500 })
  }
}
