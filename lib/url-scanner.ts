/**
 * Havolani real tahlil qilish: evristika + ixtiyoriy Google Safe Browsing API.
 * Heuristic tekshiruvlar API kalitsiz ishlaydi; GOOGLE_SAFE_BROWSING_API_KEY berilsa
 * qo'shimcha real xavf ro'yxati tekshiruvi qo'shiladi.
 */

export interface ScanExplanation {
  feature: string
  importance: number
  detail: string
}

export interface UrlScanResult {
  riskScore: number
  label: "benign" | "suspicious" | "malicious"
  explanation: ScanExplanation[]
  recommendations: string[]
  details: {
    domain: string
    protocol: string
    hasSsl: boolean
    reputation: string
    threats: Array<{ type: string; severity: string; description: string }>
  }
}

// Phishing va firibgarlikda tez-tez ishlatiladigan kalit so'zlar (URL va domen)
const SUSPICIOUS_KEYWORDS = [
  "login", "signin", "sign-in", "account", "bank", "password", "secure", "verify",
  "update", "confirm", "paypal", "amazon", "apple", "microsoft", "support", "help",
  "urgent", "warning", "suspend", "limited", "click", "win", "prize", "free",
  "gift", "reward", "credential", "wallet", "crypto", "bitcoin", "admin", "root",
]

// Shubhali TLD lar (bezak domenlar)
const SUSPICIOUS_TLDS = [".tk", ".ml", ".ga", ".cf", ".gq", ".xyz", ".top", ".work", ".click", ".link", ".pw"]

// Ishontirli brend nomlari – boshqa domen ichida ishlatilsa shubha
const BRAND_NAMES = ["paypal", "amazon", "apple", "google", "microsoft", "facebook", "instagram", "whatsapp", "telegram", "youtube", "netflix", "ebay", "aliexpress"]

function parseUrl(input: string): URL | null {
  try {
    const trimmed = input.trim()
    const withProtocol = trimmed.startsWith("http") ? trimmed : `https://${trimmed}`
    return new URL(withProtocol)
  } catch {
    return null
  }
}

/** URL ni evristika asosida tahlil qiladi (0–100 xavf, sabablar) */
function heuristicAnalysis(url: URL): { score: number; explanation: ScanExplanation[] } {
  const explanation: ScanExplanation[] = []
  let score = 0
  const hostname = url.hostname.toLowerCase()
  const pathname = url.pathname.toLowerCase()
  const fullUrl = url.href.toLowerCase()

  // 1. HTTPS bormi
  const hasSsl = url.protocol === "https:"
  if (!hasSsl) {
    score += 15
    explanation.push({
      feature: "SSL / HTTPS",
      importance: 0.85,
      detail: "Havola HTTPS ishlatmayapti – shaxsiy ma'lumotlar shifrlangan holda uzatilmasligi mumkin.",
    })
  } else {
    explanation.push({
      feature: "SSL / HTTPS",
      importance: 0.3,
      detail: "Havola HTTPS ishlatadi – bu yaxshi belgi.",
    })
  }

  // 2. Domen IP manzilmi
  const isIp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(hostname) || hostname.startsWith("[")
  if (isIp) {
    score += 25
    explanation.push({
      feature: "Domen nomi",
      importance: 0.9,
      detail: "Manzil IP orqali berilgan – ko'pincha rasmiy saytlar domen nomi ishlatadi.",
    })
  }

  // 3. Subdomenlar soni (ortiqcha subdomen – shubha)
  const parts = hostname.split(".")
  const subdomainCount = parts.length > 2 ? parts.length - 2 : 0
  if (subdomainCount >= 2) {
    score += 12
    explanation.push({
      feature: "URL tuzilishi",
      importance: 0.65,
      detail: `Juda ko'p subdomen (${parts.length} qism) – firibgarlar tez-tez bunday tuzilishdan foydalanadi.`,
    })
  }

  // 4. Shubhali TLD
  const suspiciousTld = SUSPICIOUS_TLDS.some((tld) => hostname.endsWith(tld))
  if (suspiciousTld) {
    score += 18
    explanation.push({
      feature: "Domen turi (TLD)",
      importance: 0.7,
      detail: "Domen bepul yoki shubhali TLD da ro'yxatdan o'tgan – ehtiyot bo'lish kerak.",
    })
  }

  // 5. URL da shubhali kalit so'zlar
  const lowerFull = fullUrl
  const foundKeywords = SUSPICIOUS_KEYWORDS.filter((kw) => lowerFull.includes(kw))
  if (foundKeywords.length >= 2) {
    score += Math.min(20, foundKeywords.length * 6)
    explanation.push({
      feature: "URL dagi kalit so'zlar",
      importance: 0.72,
      detail: `URL da xavfli tez-tez ishlatiladigan so'zlar aniqlandi: ${foundKeywords.slice(0, 5).join(", ")}.`,
    })
  } else if (foundKeywords.length === 1) {
    score += 5
    explanation.push({
      feature: "URL dagi kalit so'zlar",
      importance: 0.4,
      detail: `URL da "login", "account" kabi so'z bor – ehtiyot bo'ling.`,
    })
  }

  // 6. Boshqa brend nomi domen ichida (masalan: paypal-login.evil.com)
  const domainWithoutTld = parts.slice(0, -2).join(".") || hostname
  const hasBrandInDomain = BRAND_NAMES.some(
    (brand) => domainWithoutTld.includes(brand) && !hostname.endsWith(`.${brand}.com`) && !hostname.endsWith(`.${brand}.org`)
  )
  if (hasBrandInDomain) {
    score += 35
    explanation.push({
      feature: "Brend taqlidi",
      importance: 0.95,
      detail: "URL taniqli brend nomini o'z ichiga oladi, lekin domen rasmiy emas – phishing ehtimoli yuqori.",
    })
  }

  // 7. URL uzunligi (juda uzun – yashirin redirect yoki firibgarlik)
  if (fullUrl.length > 150) {
    score += 10
    explanation.push({
      feature: "URL uzunligi",
      importance: 0.5,
      detail: "Juda uzun havola – yashirin yo'nalishlar yoki firibgarlik uchun ishlatilishi mumkin.",
    })
  }

  // 8. Punycode / homograph (Cyrillic o' va lotin o kabi)
  if (url.hostname.includes("xn--")) {
    score += 22
    explanation.push({
      feature: "Domen yozuvi",
      importance: 0.88,
      detail: "Domen nomida maxsus belgilar (Punycode) ishlatilgan – taniqli saytni taqlid qilish uchun ishlatilishi mumkin.",
    })
  }

  // 9. Port (80/443 dan boshqasi – kam uchraydi)
  if (url.port && !["80", "443", ""].includes(url.port)) {
    score += 5
    explanation.push({
      feature: "Port",
      importance: 0.35,
      detail: "Standart bo'lmagan port ishlatilmoqda.",
    })
  }

  const riskScore = Math.min(100, Math.round(score))
  return { score: riskScore, explanation }
}

/** Label va tavsiyalarni xavf skoriga qarab qaytaradi */
function getLabelAndRecommendations(
  riskScore: number,
  details: UrlScanResult["details"]
): { label: "benign" | "suspicious" | "malicious"; recommendations: string[] } {
  if (riskScore < 30) {
    return {
      label: "benign",
      recommendations: [
        "Havola hozircha xavfsiz ko'rinadi.",
        "Shaxsiy ma'lumotlarni faqat ishonchli saytlarda kiriting.",
        "Brauzeringizni va tizimni yangilab turing.",
      ],
    }
  }
  if (riskScore < 70) {
    return {
      label: "suspicious",
      recommendations: [
        "Ushbu havolaga ehtiyotkorlik bilan kiring.",
        "Shaxsiy ma'lumotlaringizni (parol, karta) kiritmang.",
        "Agar shubhangiz kuchaysa, saytni yopib IT xavfsizlik bo'limiga xabar bering.",
      ],
    }
  }
  return {
    label: "malicious",
    recommendations: [
      "Ushbu havolaga kirmang – xavfli yoki firibgarlik sayti bo'lishi mumkin.",
      "Hech qanday shaxsiy ma'lumot yoki parol kiritmang.",
      "Agar allaqachon ma'lumot kiritgan bo'lsangiz, parollaringizni darhol o'zgartiring va bank/xizmatga xabar bering.",
      "Havolani HIMOYACHI orqali yoki xavfsizlik xizmatiga xabar qiling.",
    ],
  }
}

/** Google Safe Browsing API orqali tekshirish (ixtiyoriy) */
async function checkGoogleSafeBrowsing(url: string): Promise<{ isThreat: boolean; threatTypes: string[] }> {
  const apiKey = process.env.GOOGLE_SAFE_BROWSING_API_KEY
  if (!apiKey?.trim()) return { isThreat: false, threatTypes: [] }

  try {
    const res = await fetch(
      `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${encodeURIComponent(apiKey)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client: { clientId: "himoyachi-ai", clientVersion: "1.0" },
          threatInfo: {
            threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE", "POTENTIALLY_HARMFUL_APPLICATION"],
            platformTypes: ["ANY_PLATFORM"],
            threatEntryTypes: ["URL"],
            threatEntries: [{ url }],
          },
        }),
      }
    )
    if (!res.ok) return { isThreat: false, threatTypes: [] }
    const data = (await res.json()) as { matches?: Array<{ threatType?: string }> }
    const matches = data.matches || []
    return {
      isThreat: matches.length > 0,
      threatTypes: matches.map((m) => m.threatType || "UNKNOWN"),
    }
  } catch {
    return { isThreat: false, threatTypes: [] }
  }
}

/**
 * Bitta URL ni to'liq tahlil qiladi: evristika + (ixtiyoriy) Google Safe Browsing.
 */
export async function scanUrl(inputUrl: string): Promise<UrlScanResult> {
  const url = parseUrl(inputUrl)
  if (!url) {
    return {
      riskScore: 100,
      label: "malicious",
      explanation: [{ feature: "URL formati", importance: 1, detail: "Noto'g'ri yoki ishlamaydigan URL kiritildi." }],
      recommendations: ["To'g'ri va to'liq havola kiriting (masalan: https://example.com)."],
      details: {
        domain: "",
        protocol: "unknown",
        hasSsl: false,
        reputation: "noma'lum",
        threats: [{ type: "Invalid URL", severity: "high", description: "Noto'g'ri URL" }],
      },
    }
  }

  const { score: heuristicScore, explanation } = heuristicAnalysis(url)
  const safeBrowsing = await checkGoogleSafeBrowsing(url.href)

  let riskScore = heuristicScore
  const threats: Array<{ type: string; severity: string; description: string }> = []

  if (safeBrowsing.isThreat) {
    riskScore = Math.max(riskScore, 90)
    safeBrowsing.threatTypes.forEach((t) => {
      threats.push({
        type: t,
        severity: "high",
        description: "Google Safe Browsing ro'yxatida xavfli sayt sifatida qayd etilgan.",
      })
    })
    explanation.unshift({
      feature: "Google Safe Browsing",
      importance: 0.98,
      detail: "Ushbu havola Google xavf ro'yxatida – malware yoki phishing sifatida aniqlangan.",
    })
  } else if (process.env.GOOGLE_SAFE_BROWSING_API_KEY) {
    explanation.push({
      feature: "Google Safe Browsing",
      importance: 0.5,
      detail: "Havola Google xavf ro'yxatida yo'q – qo'shimcha yaxshi belgi.",
    })
  }

  const details: UrlScanResult["details"] = {
    domain: url.hostname,
    protocol: url.protocol.replace(":", ""),
    hasSsl: url.protocol === "https:",
    reputation: riskScore < 30 ? "yaxshi" : riskScore < 70 ? "o'rtacha" : "yomon",
    threats: threats.length
      ? threats
      : heuristicScore > 50
        ? [{ type: "Heuristic", severity: "medium", description: "Evristik tahlilda shubhali belgilar aniqlandi." }]
        : [],
  }

  const { label, recommendations } = getLabelAndRecommendations(riskScore, details)

  return {
    riskScore,
    label,
    explanation,
    recommendations,
    details,
  }
}
