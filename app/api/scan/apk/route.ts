import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "Fayl talab qilinadi" }, { status: 400 })
    }

    if (!file.name.endsWith(".apk")) {
      return NextResponse.json({ error: "Faqat APK fayllari qabul qilinadi" }, { status: 400 })
    }

    // Simulate AI APK analysis
    await new Promise((resolve) => setTimeout(resolve, 4000))

    const riskScore = Math.floor(Math.random() * 100)
    const threats = []

    if (riskScore > 70) {
      threats.push(
        { type: "Malware", severity: "high", description: "Zararli dastur aniqlandi" },
        { type: "Suspicious Permissions", severity: "high", description: "Shubhali ruxsatlar so'ralmoqda" },
        { type: "Data Theft", severity: "medium", description: "Ma'lumot o'g'irlash xavfi" },
      )
    } else if (riskScore > 40) {
      threats.push(
        { type: "Unverified Source", severity: "medium", description: "Tasdiqlanmagan manba" },
        { type: "Privacy Risk", severity: "low", description: "Maxfiylik xavfi" },
      )
    }

    return NextResponse.json({
      id: Math.random().toString(36).substring(7),
      type: "apk",
      content: file.name,
      riskScore,
      status: riskScore > 70 ? "xavfli" : riskScore > 40 ? "shubhali" : "xavfsiz",
      threats,
      recommendations:
        riskScore > 40
          ? ["Bu dasturni o'rnatmang", "Faqat Google Play Store'dan yuklab oling", "Qurilmangizni tekshiring"]
          : ["APK xavfsiz ko'rinadi", "Lekin faqat ishonchli manbadan o'rnating"],
      scanDate: new Date().toISOString(),
      details: {
        fileName: file.name,
        fileSize: file.size,
        packageName: `com.example.${Math.random().toString(36).substring(7)}`,
        permissions: ["INTERNET", "CAMERA", "READ_CONTACTS", "ACCESS_LOCATION"],
        hasObfuscation: riskScore > 50,
        signatureValid: riskScore < 60,
      },
    })
  } catch (error) {
    console.error("[v0] APK scan error:", error)
    return NextResponse.json({ error: "Tahlil jarayonida xatolik yuz berdi" }, { status: 500 })
  }
}
