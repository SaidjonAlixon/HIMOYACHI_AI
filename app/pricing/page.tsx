import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles, Zap, Shield, Clock, FileText, Users, Network, CreditCard } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Bepul",
    price: "0",
    period: "/oy",
    description: "Shaxsiy foydalanish uchun",
    icon: Shield,
    features: [
      "1 ta tekshirish/kun",
      "Asosiy tahlil",
      "URL va matn tekshirish",
      "Elektron pochta qo'llab-quvvatlash",
      "Veb interfeys",
    ],
    cta: "Boshlash",
    highlight: false,
  },
  {
    name: "Pro",
    price: "5",
    period: "/oy",
    description: "Kasbiy foydalanuvchilar uchun",
    icon: Zap,
    features: [
      "100 ta tekshirish/kun",
      "Keng qamrovli tahlil",
      "Barcha turlar (URL, rasm, audio, APK)",
      "API kirish (REST)",
      "24/7 qo'llab-quvvatlash",
      "PDF hisobotlar",
      "30 kun tarix saqlash",
      "Birinchi darajali qo'llab-quvvatlash",
    ],
    cta: "Hozir boshlang",
    highlight: true,
  },
  {
    name: "Pro Plus",
    price: "25",
    period: "/oy",
    description: "Turli sanoat tashkilotlari uchun",
    icon: Network,
    features: [
      "500 ta tekshirish/kun",
      "Korporativ email xavfsizligi (97.5% aniqlik)",
      "API va tarmoq monitoring (92% aniqlik)",
      "GDPR, CCPA qonuniy talablarga moslik (100%)",
      "Ishchilar tayyorlash va ogohlantirish",
      "85% kamaytirilgan inson xatolari",
      "3x ko'paytirilgan xavfsizlik ongi",
      "Real vaqt rejimida dashboard",
      "Korporativ tarmoq integratsiyasi",
      "BEC (Biznes email firibgarligi) himoyasi",
      "78% kamaytirilgan email hujumlar",
      "65% tezroq xavfni bartaraf etish",
      "287 kundan 45 kunga tiklanish",
      "Maxsus hisob menejeri",
      "Birinchi darajali qo'llab-quvvatlash",
      "Maxsus brending va o'z brendingi",
      "90 kun tarix saqlash",
      "Kengaytirilgan tahlil va hisobotlar",
      "Jamoa hamkorligi vositalari",
      "Ko'p foydalanuvchi kirishi va rollar",
    ],
    cta: "Hozir boshlang",
    highlight: false,
  },
  {
    name: "Pro Max",
    price: "50",
    period: "/oy",
    description: "Banklar uchun",
    icon: CreditCard,
    features: [
      "2000 ta tekshirish/kun",
      "Real vaqt rejimida tranzaksiya tahlili (99.2% aniqlik)",
      "AI-ga asoslangan kredit scoring (87% aniqlik)",
      "Biometrik identifikatsiya (98.7% aniqlik)",
      "Core-banking integratsiyasi (95%+ muvaffaqiyat)",
      "99.9% xizmat ko'rsatish kafolati",
      "50ms dan kam javob vaqti",
      "87% kamaytirilgan noto'g'ri qarorlar",
      "40% kamaytirilgan qaytmas kreditlar",
      "94% kamaytirilgan identifikatsiya xatolari",
      "92% ga kamaytirilgan session o'g'irlash",
      "PCI DSS, GDPR qonuniy talablarga moslik (100%)",
      "Voqeaga asoslangan va REST API integratsiyalari",
      "Real vaqt rejimida monitoring va ogohlantirishlar",
      "Kengaytirilgan firibgarlik aniqlash",
      "Kredit risklarini boshqarish",
      "Biometrik autentifikatsiya (ovoz + yuz)",
      "Session o'g'irlashdan himoya",
      "Maxsus xavfsizlik jamoasi",
      "24/7 birinchi darajali qo'llab-quvvatlash",
      "Maxsus AI model o'qitish",
      "On-premise o'rnatish imkoniyati",
      "SSO / SAML integratsiyasi",
      "180 kun tarix saqlash",
      "To'liq audit jurnallari",
      "Qonuniy talablarga moslik hisobotlari",
      "Bank darajasidagi shifrlash",
      "Falokatdan tiklash va zaxiralash",
    ],
    cta: "Bog'lanish",
    highlight: false,
  },
]

const features = [
  {
    icon: Clock,
    title: "Real vaqt tahlili",
    description: "Bir necha soniyada xavfni aniqlang",
  },
  {
    icon: Shield,
    title: "Yuqori aniqlik",
    description: "AI asosidagi kuchli himoya",
  },
  {
    icon: FileText,
    title: "Batafsil hisobotlar",
    description: "To'liq tahlil va tavsiyalar",
  },
  {
    icon: Users,
    title: "Jamoa uchun",
    description: "Ko'p foydalanuvchilar boshqaruvi",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen page-inner-bg">
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="border-b border-[rgba(0,255,65,0.2)] py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00ff41] bg-[rgba(0,255,65,0.08)] px-4 py-2 text-sm font-medium text-[#00ff41]">
                <Sparkles className="h-4 w-4" />
                Tariflar va Rejalar
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance text-white md:text-5xl lg:text-6xl">
                O'zingizga mos rejani tanlang
              </h1>
              <p className="mb-8 text-lg text-white/80 text-balance md:text-xl">
                Har qanday hajmdagi biznes va shaxsiy foydalanish uchun moslashtirilgan. Barcha rejalarda AI-powered
                xavfsizlik tahlili mavjud.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {plans.map((plan) => {
                const Icon = plan.icon
                return (
                  <Card
                    key={plan.name}
                    className={`relative flex flex-col border-2 transition-all hover:shadow-[0_0_24px_rgba(0,255,65,0.2)] ${
                      plan.highlight
                        ? "border-[#00ff41] bg-black/50 shadow-[0_0_32px_rgba(0,255,65,0.15)] scale-105"
                        : "border-[rgba(0,255,65,0.3)] bg-black/40 hover:border-[#00ff41]/60"
                    }`}
                  >
                    {plan.highlight && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                        <div className="flex items-center gap-2 rounded-full bg-[#00ff41] px-4 py-2 text-sm font-bold text-black shadow-lg">
                          <Sparkles className="h-4 w-4" />
                          Eng mashhur
                        </div>
                      </div>
                    )}

                  <CardHeader className="pb-8 pt-8">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(0,255,65,0.15)]">
                      <Icon className="h-6 w-6 text-[#00ff41]" />
                    </div>
                    <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                    <CardDescription className="text-base text-white/80">{plan.description}</CardDescription>
                    <div className="mt-6 flex items-baseline gap-1">
                      {plan.price === "Maxsus" ? (
                        <span className="text-4xl font-bold text-white blur-sm opacity-30 select-none">{plan.price}</span>
                      ) : (
                        <>
                          <span className="text-5xl font-bold text-[#00ff41]">${plan.price}</span>
                          <span className="text-lg text-white/70">{plan.period}</span>
                        </>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="mt-0.5 rounded-full bg-[rgba(0,255,65,0.2)] p-1">
                            <Check className="h-4 w-4 text-[#00ff41]" />
                          </div>
                          <span className="text-sm leading-relaxed text-white/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-8">
                    <Button className="w-full" size="lg" variant={plan.highlight ? "default" : "outline"} asChild className={plan.highlight ? "bg-[#00ff41] text-black hover:bg-[#00ff41]/90" : "border-[#00ff41] text-[#00ff41] hover:bg-[rgba(0,255,65,0.1)]"}>
                      <Link href={plan.price === "Maxsus" ? "/contact" : "/scan"}>{plan.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
        <section className="border-t border-[rgba(0,255,65,0.15)] py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance text-[#00ff41] md:text-4xl">Barcha rejalarda mavjud</h2>
              <p className="text-lg text-white/80 text-balance">
                Siz qaysi rejani tanlasangiz ham, yuqori sifatli xavfsizlik tahlilini olasiz
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.title}
                    className="flex flex-col items-center gap-4 rounded-xl border border-[rgba(0,255,65,0.3)] bg-black/40 p-6 text-center transition-all hover:border-[#00ff41] hover:shadow-[0_0_20px_rgba(0,255,65,0.15)]"
                  >
                    <div className="rounded-xl bg-[rgba(0,255,65,0.15)] p-3">
                      <Icon className="h-6 w-6 text-[#00ff41]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-white/80">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-balance text-white md:text-4xl">
                Ko'p beriladigan savollar
              </h2>

              <div className="space-y-6">
                <Card className="border-[rgba(0,255,65,0.3)] bg-black/40">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Bepul rejada nima kiradi?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">
                    Bepul reja kuniga 1 ta tekshirish, asosiy tahlil va URL va matn tekshirishni o'z ichiga oladi. Bu
                    shaxsiy foydalanish uchun juda yaxshi.
                  </p>
                  </CardContent>
                </Card>

                <Card className="border-[rgba(0,255,65,0.3)] bg-black/40">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Rejani o'zgartirish mumkinmi?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">
                      Ha, istalgan vaqt rejangizni yangilashingiz yoki pasaytirishingiz mumkin. O'zgarishlar darhol kuchga
                      kiradi.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[rgba(0,255,65,0.3)] bg-black/40">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">API qanday ishlaydi?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">
                      Pro va Enterprise rejalarda REST API orqali bizning xavfsizlik tahlilimizni o'z ilovangizga
                      integratsiya qilishingiz mumkin. To'liq hujjatlar va misollar beriladi.
                    </p>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-[rgba(0,255,65,0.15)] py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance text-[#00ff41] md:text-4xl">Bugun himoyani boshlang</h2>
              <p className="mb-8 text-lg text-white/80 text-balance">
                Bizning AI-powered xavfsizlik platformamiz bilan o'zingizni va biznesingizni himoya qiling
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild className="bg-[#00ff41] text-black hover:bg-[#00ff41]/90">
                  <Link href="/scan">Bepul boshlash</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-[#00ff41] text-[#00ff41] hover:bg-[rgba(0,255,65,0.1)]">
                  <Link href="/contact">Savol berish</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
