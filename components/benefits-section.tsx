"use client"

import {
  Users,
  Building2,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  Network,
  CreditCard,
  ScanFace,
  TrendingUp,
  Lock,
  AlertTriangle,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function BenefitsSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-[#00ff41] animate-fade-in-up drop-shadow-[0_0_12px_rgba(0,255,65,0.4)]">
            Qanday yordam beramiz?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            HIMOYACHI AI har bir kategoriyadagi mijozlarimizga o'ziga xos yechimlar va qimmatli natijalar taqdim etadi
          </p>
        </div>

        <div className="space-y-12">
          {/* Fuqorolar uchun */}
          <Card className="border-2 border-[#00ff41] bg-black/40 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_28px_rgba(0,255,65,0.2)] animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6 md:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00ff41] text-black md:h-16 md:w-16">
                  <Users className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold md:text-2xl text-[#00ff41]">Fuqorolar uchun</h3>
                  <p className="text-sm text-white/80 md:text-base">
                    Shaxsiy xavfsizlik va himoya
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-start gap-3 rounded-lg bg-white/5 border border-[rgba(0,255,65,0.2)] p-4">
                    <ShieldCheck className="h-5 w-5 shrink-0 mt-0.5 text-[#00ff41]" />
                    <div>
                      <h4 className="mb-1 font-semibold text-[#00ff41]">Firibgarlik xabarlarni aniqlash</h4>
                      <p className="text-sm text-white/80">
                        Elektron pochta, xabar va ijtimoiy tarmoqlardagi firibgarlik xabarlarini{" "}
                        <strong className="text-[#00ff41]">99.2% aniqlik</strong> bilan aniqlash
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg bg-white/5 border border-[rgba(0,255,65,0.2)] p-4">
                    <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5 text-[#00ff41]" />
                    <div>
                      <h4 className="mb-1 font-semibold text-[#00ff41]">Xavfli havolalarni bloklash</h4>
                      <p className="text-sm text-white/80">
                        Real vaqt rejimida shubhali havolalarni tahlil qilib, yo'qotilishi mumkin bo'lgan mablag'larni oldini olish
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg bg-white/5 border border-[rgba(0,255,65,0.2)] p-4">
                    <Lock className="h-5 w-5 shrink-0 mt-0.5 text-[#00ff41]" />
                    <div>
                      <h4 className="mb-1 font-semibold text-[#00ff41]">Mobil qurilmalarni himoya</h4>
                      <p className="text-sm text-white/80">
                        Telefoningizdagi xavfli ilovalarni aniqlash.{" "}
                        <strong className="text-[#00ff41]">94% kamaytirilgan</strong> mobil hujumlar
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="border-2 border-[#00ff41] bg-black/40">
                    <CardContent className="p-4">
                      <div className="mb-2 text-2xl font-bold text-[#00ff41] md:text-3xl">99.2%</div>
                      <p className="text-xs text-white/80 md:text-sm">
                        Firibgarlik xabarlarni aniqlash aniqlik darajasi
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-[#00ff41] bg-black/40">
                    <CardContent className="p-4">
                      <div className="mb-2 text-2xl font-bold text-[#00ff41] md:text-3xl">89%</div>
                      <p className="text-xs text-white/80 md:text-sm">
                        Foydalanuvchilar himoya qilinadi (real vaqt rejimida)
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sanoat tashkilotlari uchun */}
          <Card className="border-2 border-[#00ff41] bg-black/40 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_28px_rgba(0,255,65,0.2)] animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-6 md:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00ff41] text-black md:h-16 md:w-16">
                  <Building2 className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold md:text-2xl text-[#00ff41]">Turli sanoat tashkilotlari uchun</h3>
                  <p className="text-sm text-white/80 md:text-base">
                    Korporativ xavfsizlik va biznes himoyasi
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-lg bg-white/5 border border-[rgba(0,255,65,0.2)] p-4">
                    <Network className="h-5 w-5 shrink-0 mt-0.5 text-[#00ff41]" />
                    <div>
                      <h4 className="mb-1 font-semibold text-[#00ff41]">Elektron pochta xavfsizligi</h4>
                      <p className="text-sm text-white/80">
                        Korporativ elektron pochta tizimlarini firibgarlik, zararli dasturlar va biznes elektron pochta kompromissi hujumlaridan himoya qilish.{" "}
                        <strong className="text-[#00ff41]">97.5% aniqlik</strong> va{" "}
                        <strong className="text-[#00ff41]">78% kamaytirilgan</strong> elektron pochta hujumlar
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg bg-white/5 border border-[rgba(0,255,65,0.2)] p-4">
                    <ShieldCheck className="h-5 w-5 shrink-0 mt-0.5 text-[#00ff41]" />
                    <div>
                      <h4 className="mb-1 font-semibold text-[#00ff41]">Dasturiy interfeys va tarmoq xavfsizligi</h4>
                      <p className="text-sm text-white/80">
                        Real vaqt rejimida kuzatish qilish.{" "}
                        <strong className="text-[#00ff41]">92% aniqlik</strong> bilan anormal faollikni aniqlash
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg bg-white/5 border border-[rgba(0,255,65,0.2)] p-4">
                    <Lock className="h-5 w-5 shrink-0 mt-0.5 text-[#00ff41]" />
                    <div>
                      <h4 className="mb-1 font-semibold text-[#00ff41]">Mijozlar ma'lumotlarini himoya</h4>
                      <p className="text-sm text-white/80">
                        Yevropa ma'lumotlar himoyasi qoidalari, Kaliforniya iste'molchilar ma'lumotlarini himoya qilish qonuni va boshqa qonunlarga to'liq mos kelish va jarima xavfini kamaytirish
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg bg-white/5 border border-[rgba(0,255,65,0.2)] p-4">
                    <Users className="h-5 w-5 shrink-0 mt-0.5 text-[#00ff41]" />
                    <div>
                      <h4 className="mb-1 font-semibold text-[#00ff41]">Ishchilar tayyorlash</h4>
                      <p className="text-sm text-white/80">
                        Xodimlarni real vaqt rejimida ogohlantirish.{" "}
                        <strong className="text-[#00ff41]">85% kamaytirilgan</strong> inson xatolari
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <Card className="border-2 border-[#00ff41] bg-black/40">
                    <CardContent className="p-4">
                      <div className="mb-2 text-xl font-bold text-[#00ff41] md:text-2xl">97.5%</div>
                      <p className="text-xs text-white/80 md:text-sm">
                        Elektron pochta xavfsizlik aniqlik darajasi
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-[#00ff41] bg-black/40">
                    <CardContent className="p-4">
                      <div className="mb-2 text-xl font-bold text-[#00ff41] md:text-2xl">78%</div>
                      <p className="text-xs text-white/80 md:text-sm">
                        Kamaytirilgan elektron pochta hujumlar
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-[#00ff41] bg-black/40">
                    <CardContent className="p-4">
                      <div className="mb-2 text-xl font-bold text-[#00ff41] md:text-2xl">85%</div>
                      <p className="text-xs text-white/80 md:text-sm">
                        Kamaytirilgan inson xatolari
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Banklar uchun */}
          <Card className="border-2 border-[#00ff41] bg-black/40 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_28px_rgba(0,255,65,0.2)] animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-6 md:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00ff41] text-black md:h-16 md:w-16">
                  <DollarSign className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold md:text-2xl text-[#00ff41]">Banklar uchun</h3>
                  <p className="text-sm text-white/80 md:text-base">
                    To'liq xavfsizlik ekotizimi va moliyaviy samaradorlik
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-lg bg-white/5 border border-[rgba(0,255,65,0.2)] p-4">
                    <CreditCard className="h-5 w-5 shrink-0 mt-0.5 text-[#00ff41]" />
                    <div>
                      <h4 className="mb-1 font-semibold text-[#00ff41]">Real vaqt rejimida tranzaksiya tahlili</h4>
                      <p className="text-sm text-white/80">
                        Har bir tranzaksiyani <strong className="text-[#00ff41]">50ms dan kam</strong> vaqtda tahlil qilish.{" "}
                        <strong className="text-[#00ff41]">99.2% aniqlik</strong> bilan firibgarlikni aniqlash
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg bg-white/5 border border-[rgba(0,255,65,0.2)] p-4">
                    <TrendingUp className="h-5 w-5 shrink-0 mt-0.5 text-[#00ff41]" />
                    <div>
                      <h4 className="mb-1 font-semibold text-[#00ff41]">Kredit risklarini baholash</h4>
                      <p className="text-sm text-white/80">
                        Sun'iy intellektga asoslangan kredit baholash.{" "}
                        <strong className="text-[#00ff41]">87% aniqlik</strong> va{" "}
                        <strong className="text-[#00ff41]">40% kamaytirilgan</strong> qaytmas kreditlar
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg bg-white/5 border border-[rgba(0,255,65,0.2)] p-4">
                    <ScanFace className="h-5 w-5 shrink-0 mt-0.5 text-[#00ff41]" />
                    <div>
                      <h4 className="mb-1 font-semibold text-[#00ff41]">Biometrik identifikatsiya</h4>
                      <p className="text-sm text-white/80">
                        Ovoz va yuz tasviri orqali tasdiqlash.{" "}
                        <strong className="text-[#00ff41]">98.7% aniqlik</strong> va{" "}
                        <strong className="text-[#00ff41]">92% kamaytirilgan</strong> seans o'g'irlash
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg bg-white/5 border border-[rgba(0,255,65,0.2)] p-4">
                    <Network className="h-5 w-5 shrink-0 mt-0.5 text-[#00ff41]" />
                    <div>
                      <h4 className="mb-1 font-semibold text-[#00ff41]">Asosiy bank tizimi integratsiyasi</h4>
                      <p className="text-sm text-white/80">
                        REST dasturiy interfeysi va voqea asosidagi integratsiyalar.{" "}
                        <strong className="text-[#00ff41]">95%+ integratsiya muvaffaqiyati</strong> va{" "}
                        <strong className="text-[#00ff41]">99.9% ishlash darajasi</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <Card className="border-2 border-[#00ff41] bg-black/40">
                    <CardContent className="p-4">
                      <div className="mb-2 text-xl font-bold text-[#00ff41] md:text-2xl">99.2%</div>
                      <p className="text-xs text-white/80 md:text-sm">
                        Firibgarlik aniqlash aniqlik darajasi
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-[#00ff41] bg-black/40">
                    <CardContent className="p-4">
                      <div className="mb-2 text-xl font-bold text-[#00ff41] md:text-2xl">87%</div>
                      <p className="text-xs text-white/80 md:text-sm">
                        Kredit baholash aniqlik darajasi
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-[#00ff41] bg-black/40">
                    <CardContent className="p-4">
                      <div className="mb-2 text-xl font-bold text-[#00ff41] md:text-2xl">98.7%</div>
                      <p className="text-xs text-white/80 md:text-sm">
                        Biometrik identifikatsiya aniqlik darajasi
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

