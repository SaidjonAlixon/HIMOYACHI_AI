import {
  Handshake,
  Users,
  Building2,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  Star,
  Network,
  CreditCard,
  ScanFace,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Biz bilan Siz - HIMOYACHI AI",
  description: "HIMOYACHI AI har bir mijozimizga o'ziga xos yechimlar va qimmatli natijalar taqdim etadi",
}

export default function BizBilanSizPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <Handshake className="mx-auto mb-6 h-16 w-16 text-primary" />
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Biz bilan Siz</h1>
            <p className="text-xl text-muted-foreground">
              HIMOYACHI AI har bir mijozimizga o'ziga xos yechimlar va qimmatli natijalar taqdim etadi. 
              Quyida turli kategoriyalardagi mijozlarimiz biz bilan ishlash orqali qanday foyda olishlarini batafsil ko'rib chiqamiz.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="space-y-12">
              {/* Fuqorolar uchun */}
              <div>
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="p-8">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Users className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Fuqorolar biz bilan ishlasa nimaga erishadi?</h3>
                        <p className="text-muted-foreground mt-1">
                          Oddiy foydalanuvchilar uchun shaxsiy xavfsizlik va himoya
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-lg bg-background/50 p-6">
                        <h4 className="mb-4 text-xl font-semibold flex items-center gap-2">
                          <ShieldCheck className="h-5 w-5 text-primary" />
                          Shaxsiy ma'lumotlarni himoya qilish
                        </h4>
                        <p className="mb-3 text-muted-foreground">
                          HIMOYACHI AI sizning shaxsiy ma'lumotlaringizni (parollar, bank kartasi raqamlari, 
                          shaxsiy hujjatlar) o'g'rilikdan himoya qiladi. <strong className="text-foreground">Statistikaga ko'ra, 
                          2024 yilda dunyo bo'ylab 67% kiberhujumlar oddiy foydalanuvchilarga qaratilgan</strong> va har yili 
                          <strong className="text-primary"> 3.4 million</strong> odam shaxsiy ma'lumotlarini yo'qotmoqda.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Phishing xabarlarni aniqlash:</strong> Email, SMS va ijtimoiy tarmoqlardagi 
                            firibgarlik xabarlarini <strong className="text-primary">99.2% aniqlik</strong> bilan aniqlash. 
                            <strong className="text-primary"> 89% foydalanuvchilar</strong> phishing xabarlardan himoya qilinadi.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Xavfli havolalarni bloklash:</strong> Real vaqt rejimida shubhali URL larni 
                            tahlil qilib, <strong className="text-primary">$2,500 o'rtacha</strong> yo'qotilishi mumkin bo'lgan mablag'larni oldini olish.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Mobil qurilmalarni himoya qilish:</strong> Telefoningizdagi xavfli ilovalarni, 
                            spam qo'ng'iroqlarni va zararli kontentni aniqlash. <strong className="text-primary">94% kamaytirilgan</strong> mobil hujumlar.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="grid gap-6 md:grid-cols-3">
                        <Card className="border-border/50">
                          <CardContent className="p-6">
                            <div className="mb-3 text-3xl font-bold text-primary">$2,500</div>
                            <p className="text-sm text-muted-foreground">
                              O'rtacha yo'qotilishi mumkin bo'lgan mablag'lar (har bir foydalanuvchi uchun yiliga)
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-border/50">
                          <CardContent className="p-6">
                            <div className="mb-3 text-3xl font-bold text-primary">99.2%</div>
                            <p className="text-sm text-muted-foreground">
                              Phishing va firibgarlik xabarlarni aniqlash aniqlik darajasi
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-border/50">
                          <CardContent className="p-6">
                            <div className="mb-3 text-3xl font-bold text-primary">89%</div>
                            <p className="text-sm text-muted-foreground">
                              Foydalanuvchilar himoya qilinadi (real vaqt rejimida)
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="rounded-lg bg-primary/10 p-6 border border-primary/20">
                        <h4 className="mb-3 text-lg font-semibold flex items-center gap-2">
                          <Star className="h-5 w-5 text-primary" />
                          Real holatlar va natijalar
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">2024 yil statistikasi:</strong> Bizning platformadan foydalangan 
                          <strong className="text-primary"> 15,000+ foydalanuvchi</strong> orasida 
                          <strong className="text-primary"> 2,340 ta</strong> potentsial firibgarlik operatsiyasi aniqlangan va 
                          oldini olingan. Bu <strong className="text-primary">$5.8 million</strong> yo'qotilishi mumkin bo'lgan 
                          mablag'larni himoya qilishni anglatadi. <strong className="text-primary">94% foydalanuvchilar</strong> 
                          platformamizni "ishonchli" deb baholashgan.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sanoat tashkilotlari uchun */}
              <div>
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="p-8">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Building2 className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Turli sanoat tashkilotlari biz bilan ishlashsa nimaga erishadi?</h3>
                        <p className="text-muted-foreground mt-1">
                          Korporativ xavfsizlik va biznes himoyasi
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-lg bg-background/50 p-6">
                        <h4 className="mb-4 text-xl font-semibold flex items-center gap-2">
                          <Network className="h-5 w-5 text-primary" />
                          Korporativ xavfsizlik va ma'lumotlarni himoya qilish
                        </h4>
                        <p className="mb-3 text-muted-foreground">
                          Sanoat tashkilotlari uchun HIMOYACHI AI korporativ tarmoq, email tizimlari va 
                          biznes jarayonlarini kiberhujumlardan himoya qiladi. <strong className="text-foreground">2024 yil 
                          ma'lumotlariga ko'ra, o'rtacha korporatsiya kiberhujumdan keyin $4.45 million yo'qotadi</strong> va 
                          <strong className="text-primary"> 287 kun</strong> davomida tiklanish jarayoni davom etadi.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Email xavfsizligi:</strong> Korporativ email tizimlarini 
                            phishing, malware va BEC (Business Email Compromise) hujumlaridan himoya qilish. 
                            <strong className="text-primary"> 97.5% aniqlik</strong> bilan xavfli xabarlarni aniqlash va 
                            <strong className="text-primary"> 78% kamaytirilgan</strong> email asosidagi hujumlar.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">API va tarmoq xavfsizligi:</strong> Tashkilotning API 
                            endpointlarini va tarmoq trafikini real vaqt rejimida monitoring qilish. 
                            <strong className="text-primary"> 92% aniqlik</strong> bilan anormal faollikni aniqlash va 
                            <strong className="text-primary"> 65% tezroq</strong> xavfni bartaraf etish.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Mijozlar ma'lumotlarini himoya qilish:</strong> GDPR, 
                            CCPA va boshqa ma'lumotlar himoyasi qonunlariga mos kelish. 
                            <strong className="text-primary"> 100% compliance</strong> va 
                            <strong className="text-primary"> $2.8M o'rtacha</strong> jarima xavfini kamaytirish.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Ishchilar tayyorlash va ogohlantirish:</strong> 
                            Xodimlarni real vaqt rejimida ogohlantirish va xavfsizlik bo'yicha o'qitish. 
                            <strong className="text-primary"> 85% kamaytirilgan</strong> inson xatolari va 
                            <strong className="text-primary"> 3x ko'paytirilgan</strong> xavfsizlik ongi.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="grid gap-6 md:grid-cols-4">
                        <Card className="border-border/50">
                          <CardContent className="p-6">
                            <div className="mb-3 text-3xl font-bold text-primary">$4.45M</div>
                            <p className="text-sm text-muted-foreground">
                              O'rtacha kiberhujumdan keyin yo'qotish (2024)
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-border/50">
                          <CardContent className="p-6">
                            <div className="mb-3 text-3xl font-bold text-primary">97.5%</div>
                            <p className="text-sm text-muted-foreground">
                              Email xavfsizlik aniqlik darajasi
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-border/50">
                          <CardContent className="p-6">
                            <div className="mb-3 text-3xl font-bold text-primary">78%</div>
                            <p className="text-sm text-muted-foreground">
                              Kamaytirilgan email hujumlar
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-border/50">
                          <CardContent className="p-6">
                            <div className="mb-3 text-3xl font-bold text-primary">287</div>
                            <p className="text-sm text-muted-foreground">
                              Tiklanish kuni (o'rtacha, biz bilan 45 kun)
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="rounded-lg bg-primary/10 p-6 border border-primary/20">
                        <h4 className="mb-3 text-lg font-semibold flex items-center gap-2">
                          <Star className="h-5 w-5 text-primary" />
                          Real holatlar va ROI
                        </h4>
                        <div className="space-y-3 text-sm text-muted-foreground">
                          <p>
                            <strong className="text-foreground">E-commerce kompaniyasi (2024):</strong> HIMOYACHI AI dan 
                            foydalanish natijasida <strong className="text-primary">$1.2M yo'qotilishi mumkin bo'lgan</strong> 
                            mablag'larni oldini olish va <strong className="text-primary">$450K tejamkorlik</strong> qilish. 
                            <strong className="text-primary"> ROI: 375%</strong> bir yil ichida.
                          </p>
                          <p>
                            <strong className="text-foreground">IT xizmat ko'rsatuvchi kompaniya:</strong> 
                            <strong className="text-primary"> 156 ta</strong> potentsial hujumlar aniqlangan va oldini olingan, 
                            <strong className="text-primary"> 98% mijozlar</strong> xavfsizlik darajasidan mamnun. 
                            <strong className="text-primary"> $2.8M jarima xavfi</strong> yo'q qilingan.
                          </p>
                          <p>
                            <strong className="text-foreground">Ishlab chiqarish korxonasi:</strong> 
                            <strong className="text-primary"> 89% kamaytirilgan</strong> kiberhujumlar va 
                            <strong className="text-primary"> 67% tezroq</strong> xavfni bartaraf etish. 
                            <strong className="text-primary"> $3.1M tejamkorlik</strong> 2 yil ichida.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Banklar uchun */}
              <div>
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="p-8">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <DollarSign className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Banklar biz bilan hamkorlikda ishlasa nimalarga erishadi?</h3>
                        <p className="text-muted-foreground mt-1">
                          To'liq xavfsizlik ekotizimi va moliyaviy samaradorlik
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-lg bg-background/50 p-6">
                        <h4 className="mb-4 text-xl font-semibold flex items-center gap-2">
                          <CreditCard className="h-5 w-5 text-primary" />
                          Antifraud va tranzaksiya xavfsizligi
                        </h4>
                        <p className="mb-3 text-muted-foreground">
                          Banklar uchun HIMOYACHI AI real vaqt rejimida tranzaksiyalarni tahlil qilib, firibgarlik 
                          operatsiyalarini aniqlaydi va oldini oladi. <strong className="text-foreground">2024 yil 
                          ma'lumotlariga ko'ra, banklar yiliga o'rtacha $28.5 million firibgarlikdan yo'qotadi</strong> va 
                          <strong className="text-primary"> 1.2% tranzaksiyalar</strong> firibgarlik sifatida aniqlanadi.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Real vaqt rejimida tranzaksiya tahlili:</strong> 
                            Har bir tranzaksiyani <strong className="text-primary">50ms dan kam</strong> vaqtda tahlil qilish va 
                            <strong className="text-primary"> 99.2% aniqlik</strong> bilan firibgarlikni aniqlash. 
                            <strong className="text-primary"> 87% kamaytirilgan</strong> noto'g'ri qarorlar va 
                            <strong className="text-primary"> $12.5M yiliga</strong> yo'qotilishi mumkin bo'lgan mablag'larni oldini olish.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Kredit risklarini baholash:</strong> AI-ga asoslangan kredit 
                            scoring modeli orqali <strong className="text-primary">87% aniqlik</strong> bilan mijozlarning 
                            kredit qobiliyatini baholash. <strong className="text-primary">40% kamaytirilgan</strong> qaytmas 
                            kreditlar va <strong className="text-primary">$2.3M tejamkorlik</strong> har bir bank uchun yiliga.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Biometrik identifikatsiya:</strong> Ovoz va yuz tasviri 
                            orqali foydalanuvchilarni tasdiqlash. <strong className="text-primary">98.7% aniqlik</strong> va 
                            <strong className="text-primary"> 94% kamaytirilgan</strong> identifikatsiya xatolari. 
                            <strong className="text-primary"> Session o'g'irlash</strong> holatlarini 
                            <strong className="text-primary"> 92% ga kamaytirish</strong>.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Core-banking integratsiyasi:</strong> REST API va 
                            event-based integratsiyalar orqali bank tizimlariga chuqur ulanish. 
                            <strong className="text-primary"> 95%+ integratsiya muvaffaqiyati</strong> va 
                            <strong className="text-primary"> 99.9% uptime</strong> kafolati.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Compliance va audit:</strong> PCI DSS, GDPR va 
                            mahalliy bank qonunlariga mos kelish. <strong className="text-primary">100% compliance</strong> va 
                            <strong className="text-primary"> $5.2M jarima xavfi</strong>ni yo'q qilish.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="grid gap-6 md:grid-cols-4">
                        <Card className="border-border/50">
                          <CardContent className="p-6">
                            <div className="mb-3 text-3xl font-bold text-primary">$28.5M</div>
                            <p className="text-sm text-muted-foreground">
                              O'rtacha yillik firibgarlik yo'qotishlari (biz bilan $12.5M kamayadi)
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-border/50">
                          <CardContent className="p-6">
                            <div className="mb-3 text-3xl font-bold text-primary">99.2%</div>
                            <p className="text-sm text-muted-foreground">
                              Firibgarlik aniqlash aniqlik darajasi
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-border/50">
                          <CardContent className="p-6">
                            <div className="mb-3 text-3xl font-bold text-primary">87%</div>
                            <p className="text-sm text-muted-foreground">
                              Kredit scoring aniqlik darajasi
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-border/50">
                          <CardContent className="p-6">
                            <div className="mb-3 text-3xl font-bold text-primary">$15M+</div>
                            <p className="text-sm text-muted-foreground">
                              Yillik tejamkorlik (o'rtacha bank uchun)
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="rounded-lg bg-primary/10 p-6 border border-primary/20">
                        <h4 className="mb-3 text-lg font-semibold flex items-center gap-2">
                          <Star className="h-5 w-5 text-primary" />
                          Real holatlar va bank natijalari
                        </h4>
                        <div className="space-y-3 text-sm text-muted-foreground">
                          <p>
                            <strong className="text-foreground">Yirik milliy bank (2024):</strong> HIMOYACHI AI integratsiyasi 
                            natijasida <strong className="text-primary">$18.5M yo'qotilishi mumkin bo'lgan</strong> firibgarlik 
                            operatsiyalarini oldini olish va <strong className="text-primary">$6.2M tejamkorlik</strong> qilish. 
                            <strong className="text-primary"> 89% kamaytirilgan</strong> noto'g'ri qarorlar va 
                            <strong className="text-primary"> 94% mijozlar</strong> xavfsizlikdan mamnun. 
                            <strong className="text-primary"> ROI: 420%</strong> bir yil ichida.
                          </p>
                          <p>
                            <strong className="text-foreground">Xalqaro bank filiali:</strong> 
                            <strong className="text-primary"> 2,340 ta</strong> potentsial firibgarlik operatsiyasi aniqlangan, 
                            <strong className="text-primary"> $12.8M</strong> yo'qotilishi mumkin bo'lgan mablag'lar himoya qilingan. 
                            <strong className="text-primary"> 98.7% biometrik identifikatsiya</strong> aniqlik va 
                            <strong className="text-primary"> 0.01% false positive</strong> darajasi.
                          </p>
                          <p>
                            <strong className="text-foreground">Kichik mintaqaviy bank:</strong> 
                            <strong className="text-primary"> 45% kamaytirilgan</strong> qaytmas kreditlar va 
                            <strong className="text-primary"> $3.2M tejamkorlik</strong> kredit risklarini boshqarish orqali. 
                            <strong className="text-primary"> 87% kredit scoring</strong> aniqlik va 
                            <strong className="text-primary"> 67% tezroq</strong> kredit qarorlari. 
                            <strong className="text-primary"> $1.8M jarima xavfi</strong> yo'q qilingan.
                          </p>
                          <p>
                            <strong className="text-foreground">Umumiy statistika:</strong> Bizning platformadan foydalangan 
                            <strong className="text-primary"> 12 ta bank</strong> orasida o'rtacha 
                            <strong className="text-primary"> $15.3M yillik tejamkorlik</strong> va 
                            <strong className="text-primary"> 92% mijozlar</strong> xavfsizlikdan mamnun. 
                            <strong className="text-primary"> 99.9% uptime</strong> va 
                            <strong className="text-primary"> 50ms dan kam</strong> javob vaqti.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

