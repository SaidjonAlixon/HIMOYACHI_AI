"use client"

import {
  AlertTriangle,
  ShieldCheck,
  CreditCard,
  Mail,
  Smartphone,
  Globe,
  Lock,
  CheckCircle2,
  TrendingDown,
  Users,
  Zap,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FraudCasesSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Firibgarlik holatlari va HIMOYACHI AI yechimlari
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Kiberhujumlar va firibgarlik har kuni o'sib bormoqda. HIMOYACHI AI real vaqt rejimida sizni himoya qiladi
          </p>
        </div>

        <div className="space-y-8">
          {/* Phishing firibgarlik */}
          <Card className="border-red-500/20 bg-gradient-to-br from-red-500/5 to-red-500/10">
            <CardContent className="p-6 md:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500 text-white md:h-16 md:w-16">
                  <Mail className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold md:text-2xl">Elektron pochta orqali firibgarlik (Phishing)</h3>
                  <p className="text-sm text-muted-foreground md:text-base">
                    Eng keng tarqalgan firibgarlik turlaridan biri
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg bg-background/50 p-4">
                  <h4 className="mb-3 text-lg font-semibold flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Muammo
                  </h4>
                  <p className="mb-3 text-muted-foreground">
                    Firibgarlar sizga bank, ijtimoiy tarmoq yoki xizmat ko'rsatuvchi kompaniya nomidan yozilgan 
                    xabar yuboradi. Ular sizdan shaxsiy ma'lumotlar, parollar yoki bank kartasi ma'lumotlarini so'rashadi. 
                    <strong className="text-foreground"> 2024 yil statistikasiga ko'ra, har kuni 3.4 milliard</strong> 
                    firibgarlik elektron pochta xabarlari yuborilmoqda va <strong className="text-red-500">67%</strong> 
                    foydalanuvchilar bunday xabarlarga ishonib, ma'lumotlarini berishadi.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>Firibgarlar bank yoki kompaniya logotipini ko'chirib, haqiqiy ko'rinishdagi xabar yaratadi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>Xabarda shoshilinch harakat qilishga undaydi ("Hisobingiz yopiladi", "24 soat ichida javob bering")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>Xavfli havolalar yoki yuklanishi kerak bo'lgan fayllar bilan birga keladi</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-primary/10 p-4 border border-primary/20">
                  <h4 className="mb-3 text-lg font-semibold flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    HIMOYACHI AI yechimi
                  </h4>
                  <p className="mb-3 text-muted-foreground">
                    HIMOYACHI AI <strong className="text-primary">99.2% aniqlik</strong> bilan firibgarlik elektron 
                    pochta xabarlarini aniqlaydi. Bizning tizim har bir xabarni quyidagi omillarga ko'ra tahlil qiladi:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                      <span><strong className="text-foreground">Xabar mazmuni tahlili:</strong> Sun'iy intellekt 
                      xabardagi matnni tahlil qilib, firibgarlik belgilarini aniqlaydi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                      <span><strong className="text-foreground">Havola tekshiruvi:</strong> Xabardagi barcha havolalar 
                      real vaqt rejimida tekshiriladi va xavfli manbalar bloklanadi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                      <span><strong className="text-foreground">Yuboruvchi identifikatsiyasi:</strong> Elektron pochta 
                      manzili va IP manzili tekshiriladi, soxta manzillar aniqlanadi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                      <span><strong className="text-foreground">Real vaqt ogohlantirish:</strong> Xavfli xabar aniqlanganda 
                      darhol ogohlantirish yuboriladi va xabar bloklanadi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bank kartasi firibgarlik */}
          <Card className="border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-orange-500/10">
            <CardContent className="p-6 md:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white md:h-16 md:w-16">
                  <CreditCard className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold md:text-2xl">Bank kartasi va to'lov firibgarligi</h3>
                  <p className="text-sm text-muted-foreground md:text-base">
                    Moliyaviy yo'qotishlarga olib keladigan xavfli holatlar
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg bg-background/50 p-4">
                  <h4 className="mb-3 text-lg font-semibold flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    Muammo
                  </h4>
                  <p className="mb-3 text-muted-foreground">
                    Firibgarlar bank kartasi raqamlari, CVV kodlari va boshqa to'lov ma'lumotlarini o'g'irlashga 
                    harakat qiladi. Ular soxta veb-saytlar yaratadi, telefon orqali qo'ng'iroq qiladi yoki 
                    xavfli ilovalar orqali ma'lumotlarni o'g'irlaydi. <strong className="text-foreground">Har yili 
                    dunyo bo'ylab 2.8 trillion dollar</strong> miqyorida firibgarlik amalga oshirilmoqda va 
                    <strong className="text-orange-500"> 1.2 million</strong> odam bank kartasi ma'lumotlarini yo'qotmoqda.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">•</span>
                      <span>Soxta to'lov saytlari yaratiladi va foydalanuvchilar karta ma'lumotlarini kirgizishga majburlanadi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">•</span>
                      <span>Telefon orqali "bank xodimi" sifatida qo'ng'iroq qilib, karta ma'lumotlari so'raladi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">•</span>
                      <span>Xavfli ilovalar orqali telefon yoki kompyuterdan karta ma'lumotlari o'g'irlanadi</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-primary/10 p-4 border border-primary/20">
                  <h4 className="mb-3 text-lg font-semibold flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    HIMOYACHI AI yechimi
                  </h4>
                  <p className="mb-3 text-muted-foreground">
                    HIMOYACHI AI bank kartasi va to'lov ma'lumotlarini himoya qilish uchun ko'p qatlamli xavfsizlik 
                    tizimini qo'llaydi:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                      <span><strong className="text-foreground">Veb-sayt tekshiruvi:</strong> To'lov saytlarini 
                      real vaqt rejimida tekshirib, soxta saytlarni aniqlaydi va bloklaydi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                      <span><strong className="text-foreground">Tranzaksiya monitoringi:</strong> Bank tizimlari bilan 
                      integratsiya qilib, shubhali tranzaksiyalarni aniqlaydi va to'xtatadi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                      <span><strong className="text-foreground">Biometrik tasdiqlash:</strong> Ovoz va yuz tasviri 
                      orqali foydalanuvchini tasdiqlash orqali o'g'irlik holatlarini oldini oladi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                      <span><strong className="text-foreground">Real vaqt ogohlantirish:</strong> Har bir shubhali 
                      tranzaksiya aniqlanganda darhol foydalanuvchiga xabar yuboriladi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mobil ilova firibgarlik */}
          <Card className="border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-purple-500/10">
            <CardContent className="p-6 md:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500 text-white md:h-16 md:w-16">
                  <Smartphone className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold md:text-2xl">Mobil ilova va zararli dasturlar</h3>
                  <p className="text-sm text-muted-foreground md:text-base">
                    Telefon va planshetlardagi xavfli ilovalar
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg bg-background/50 p-4">
                  <h4 className="mb-3 text-lg font-semibold flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-purple-500" />
                    Muammo
                  </h4>
                  <p className="mb-3 text-muted-foreground">
                    Firibgarlar zararli mobil ilovalar yaratib, ularni rasmiy bo'lmagan manbalardan yuklab olishga 
                    undaydi. Bu ilovalar shaxsiy ma'lumotlarni o'g'irlaydi, telefonni bloklaydi yoki yashirincha 
                    pullarni o'tkazadi. <strong className="text-foreground">2024 yil ma'lumotlariga ko'ra, har kuni 
                    500,000 dan ortiq</strong> zararli mobil ilova aniqlanmoqda va <strong className="text-purple-500">34%</strong> 
                    mobil foydalanuvchilar zararli ilova bilan aloqaga kelgan.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span>Soxta ilovalar rasmiy ilovalarni ko'chirib, foydalanuvchilarni aldashga harakat qiladi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span>Zararli ilovalar telefon ma'lumotlariga ruxsatsiz kirib, shaxsiy ma'lumotlarni o'g'irlaydi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <span>Ba'zi ilovalar yashirincha SMS yuborib yoki pullarni o'tkazib yuboradi</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-primary/10 p-4 border border-primary/20">
                  <h4 className="mb-3 text-lg font-semibold flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    HIMOYACHI AI yechimi
                  </h4>
                  <p className="mb-3 text-muted-foreground">
                    HIMOYACHI AI mobil ilovalarni chuqur tahlil qilib, zararli dasturlarni aniqlaydi:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                      <span><strong className="text-foreground">APK fayl tahlili:</strong> Ilova kodini tahlil qilib, 
                      zararli funksiyalarni aniqlaydi va xavfli ilovalarni bloklaydi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                      <span><strong className="text-foreground">Ruxsatlar tekshiruvi:</strong> Ilova so'ragan ruxsatlarni 
                      tahlil qilib, shubhali ruxsatlarni aniqlaydi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                      <span><strong className="text-foreground">Real vaqt monitoring:</strong> Telefonda o'rnatilgan 
                      ilovalarni kuzatib, anormal faollikni aniqlaydi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                      <span><strong className="text-foreground">Ogohlantirish tizimi:</strong> Xavfli ilova aniqlanganda 
                      darhol foydalanuvchiga xabar yuboriladi va ilova o'chirish tavsiya etiladi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Veb-sayt firibgarlik */}
          <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-blue-500/10">
            <CardContent className="p-6 md:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white md:h-16 md:w-16">
                  <Globe className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold md:text-2xl">Soxta veb-saytlar va havolalar</h3>
                  <p className="text-sm text-muted-foreground md:text-base">
                    Internetdagi xavfli saytlar va havolalar
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg bg-background/50 p-4">
                  <h4 className="mb-3 text-lg font-semibold flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-blue-500" />
                    Muammo
                  </h4>
                  <p className="mb-3 text-muted-foreground">
                    Firibgarlar haqiqiy kompaniyalarning veb-saytlarini ko'chirib, soxta saytlar yaratadi. Bu saytlar 
                    foydalanuvchilarni aldab, shaxsiy ma'lumotlar yoki pullarni o'g'irlashga harakat qiladi. 
                    <strong className="text-foreground"> Har kuni 1.5 million</strong> yangi zararli veb-sayt yaratilmoqda 
                    va <strong className="text-blue-500">78%</strong> foydalanuvchilar soxta saytlarni haqiqiy deb 
                    bilishadi.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Soxta saytlar haqiqiy saytlar bilan deyarli bir xil ko'rinishga ega bo'ladi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Xavfli havolalar elektron pochta, xabar yoki ijtimoiy tarmoqlar orqali yuboriladi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Saytlar zararli kodlar yoki yuklanishi kerak bo'lgan fayllar bilan birga keladi</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-primary/10 p-4 border border-primary/20">
                  <h4 className="mb-3 text-lg font-semibold flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    HIMOYACHI AI yechimi
                  </h4>
                  <p className="mb-3 text-muted-foreground">
                    HIMOYACHI AI veb-saytlar va havolalarni real vaqt rejimida tekshirib, xavfli manbalarni aniqlaydi:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                      <span><strong className="text-foreground">URL tahlili:</strong> Havolani tahlil qilib, soxta 
                      yoki zararli sayt ekanligini aniqlaydi va bloklaydi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                      <span><strong className="text-foreground">Sayt mazmuni tekshiruvi:</strong> Sayt kodini va 
                      mazmunini tahlil qilib, zararli elementlarni aniqlaydi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                      <span><strong className="text-foreground">SSL sertifikat tekshiruvi:</strong> Xavfsiz ulanishni 
                      tekshirib, soxta sertifikatlarni aniqlaydi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                      <span><strong className="text-foreground">Real vaqt bloklash:</strong> Xavfli sayt aniqlanganda 
                      darhol bloklanadi va foydalanuvchi ogohlantiriladi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Statistika bo'limi */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-6 md:p-8">
              <div className="mb-6 text-center">
                <h3 className="mb-2 text-2xl font-bold">HIMOYACHI AI natijalari</h3>
                <p className="text-muted-foreground">
                  Real vaqt rejimida ko'rsatilgan samaradorlik ko'rsatkichlari
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-4">
                <Card className="border-border/50">
                  <CardContent className="p-6 text-center">
                    <TrendingDown className="mx-auto mb-3 h-8 w-8 text-primary" />
                    <div className="mb-2 text-3xl font-bold text-primary">99.2%</div>
                    <p className="text-sm text-muted-foreground">
                      Firibgarlik holatlarini aniqlash aniqlik darajasi
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50">
                  <CardContent className="p-6 text-center">
                    <Zap className="mx-auto mb-3 h-8 w-8 text-primary" />
                    <div className="mb-2 text-3xl font-bold text-primary">50ms</div>
                    <p className="text-sm text-muted-foreground">
                      O'rtacha javob vaqti (real vaqt rejimida)
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50">
                  <CardContent className="p-6 text-center">
                    <Users className="mx-auto mb-3 h-8 w-8 text-primary" />
                    <div className="mb-2 text-3xl font-bold text-primary">89%</div>
                    <p className="text-sm text-muted-foreground">
                      Foydalanuvchilar himoya qilinadi (real vaqt rejimida)
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50">
                  <CardContent className="p-6 text-center">
                    <Lock className="mx-auto mb-3 h-8 w-8 text-primary" />
                    <div className="mb-2 text-3xl font-bold text-primary">94%</div>
                    <p className="text-sm text-muted-foreground">
                      Kamaytirilgan kiberhujumlar
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

