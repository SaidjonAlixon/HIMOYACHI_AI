import { AlertTriangle, ShieldCheck, Smartphone, Phone, HelpCircle, CheckCircle2, Clock, Lock, Zap, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Muammo va Yechim - HIMOYACHI AI",
  description: "HIMOYACHI AI - kiberxavfsizlik muammolariga zamonaviy va samarali yechim",
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <AlertTriangle className="mx-auto mb-6 h-16 w-16 text-primary" />
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Muammo va Yechim</h1>
            <p className="text-xl text-muted-foreground">
              HIMOYACHI AI - kiberxavfsizlik muammolariga zamonaviy va samarali yechim
            </p>
          </div>
        </section>

        {/* Muammo va Yechim bo'limi */}
        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-5xl">
            {/* Nima uchun tuzilgan */}
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold flex items-center gap-3">
                  <ShieldCheck className="h-7 w-7 text-primary" />
                  HIMOYACHI AI nima uchun tuzilgan?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Har kuni millionlab odamlar internet orqali firibgarlik, phishing va boshqa kiberhujumlarga duch kelmoqda. 
                    <strong className="text-foreground"> Statistikaga ko'ra, 2024 yilda dunyo bo'ylab kiberhujumlar 67% ga oshgan</strong> va 
                    har yili yuz millionlab foydalanuvchilar shaxsiy ma'lumotlarini yo'qotmoqda.
                  </p>
                  <p className="text-lg leading-relaxed">
                    HIMOYACHI AI shu muammolarni hal qilish uchun yaratilgan. Bizning platforma sun'iy intellekt va 
                    machine learning texnologiyalaridan foydalanib, real vaqt rejimida xavfli kontentni aniqlaydi va 
                    foydalanuvchilarni himoya qiladi.
                  </p>
                </div>
              </div>

              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">Asosiy maqsadlarimiz:</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Har bir foydalanuvchini kiberhujumlardan himoya qilish</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Real vaqt rejimida xavfli kontentni aniqlash va oldini olish</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Oddiy va qulay interfeys orqali murakkab xavfsizlik vositalarini taqdim etish</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>AI texnologiyalaridan foydalanib xavfsizlikni oshirish</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Odamlarga qanday yordam beradi */}
            <div className="mb-16">
              <h2 className="mb-6 text-2xl font-bold flex items-center gap-3">
                <Zap className="h-7 w-7 text-primary" />
                Odamlarga qanday yordam beradi?
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-border/50">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Xavfli havolalarni aniqlash</h3>
                    <p className="text-muted-foreground">
                      URL, SMS yoki email orqali kelgan shubhali havolalarni bir necha soniyada tahlil qilib, 
                      foydalanuvchini xavfdan ogohlantiradi.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Shaxsiy ma'lumotlarni himoya qilish</h3>
                    <p className="text-muted-foreground">
                      Phishing va scam xabarlarni aniqlab, foydalanuvchilarning shaxsiy ma'lumotlarini 
                      (parol, bank kartasi va boshqalar) o'g'rilikdan himoya qiladi.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Real vaqt rejimida himoya</h3>
                    <p className="text-muted-foreground">
                      Kontentni yuklashdan oldin tahlil qilib, foydalanuvchini xavfli saytlarga kirishdan 
                      oldin ogohlantiradi.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Qulay va tezkor</h3>
                    <p className="text-muted-foreground">
                      Murakkab sozlamalarsiz, bir necha bosish bilan har qanday kontentni tekshirish 
                      imkoniyati. 3 soniyadan kam vaqtda natija.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Mobil versiya va kelajak */}
            <div className="mb-16">
              <h2 className="mb-6 text-2xl font-bold flex items-center gap-3">
                <Smartphone className="h-7 w-7 text-primary" />
                Mobil versiya va kelajakdagi imkoniyatlar
              </h2>
              <div className="space-y-6">
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Smartphone className="h-8 w-8 text-primary shrink-0" />
                      <div className="flex-1">
                        <h3 className="mb-3 text-xl font-semibold">Mobil ilova ishlab chiqilmoqda</h3>
                        <p className="mb-4 text-muted-foreground leading-relaxed">
                          Yaqin kelajakda HIMOYACHI AI mobil ilovasi chiqariladi. Bu ilova Android va iOS 
                          platformalarida ishlaydi va quyidagi imkoniyatlarni taqdim etadi:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span><strong className="text-foreground">O'rnatilgan dasturlarni tahlil qilish:</strong> Telefoningizda o'rnatilgan barcha ilovalarni skanerlab, xavfli yoki shubhali dasturlarni aniqlaydi va ogohlantiradi.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span><strong className="text-foreground">Telefon qo'ng'iroqlarini nazorat qilish:</strong> Kelgan qo'ng'iroqlarni real vaqt rejimida tahlil qilib, spam, firibgarlik yoki shubhali raqamlarni aniqlaydi va bloklaydi.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span><strong className="text-foreground">SMS va xabarlarni himoya qilish:</strong> Kelgan SMS va xabarlardagi havolalarni avtomatik tekshirib, xavfli kontentni aniqlaydi.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span><strong className="text-foreground">24/7 avtomatik himoya:</strong> Telefoningiz doimiy nazorat ostida bo'ladi va xavf paydo bo'lganda darhol ogohlantiradi.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-border/50">
                    <CardContent className="pt-6">
                      <Phone className="mb-4 h-12 w-12 text-primary" />
                      <h3 className="mb-2 text-xl font-semibold">Qo'ng'iroqlarni himoya qilish</h3>
                      <p className="text-muted-foreground">
                        Mobil ilova spam qo'ng'iroqlarni, firibgarlik raqamlarini va shubhali qo'ng'iroqlarni 
                        aniqlab, avtomatik bloklaydi. Bu sizning shaxsiy ma'lumotlaringizni va pulingizni 
                        himoya qiladi.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardContent className="pt-6">
                      <ShieldCheck className="mb-4 h-12 w-12 text-primary" />
                      <h3 className="mb-2 text-xl font-semibold">Dasturlarni tahlil qilish</h3>
                      <p className="text-muted-foreground">
                        Telefoningizdagi barcha ilovalarni tahlil qilib, zararli dasturlarni, 
                        viruslarni va shubhali ilovalarni aniqlaydi. Bu sizning ma'lumotlaringizni 
                        va qurilmangizni xavfsiz saqlaydi.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* FAQ bo'limi */}
            <div>
              <h2 className="mb-6 text-2xl font-bold flex items-center gap-3">
                <HelpCircle className="h-7 w-7 text-primary" />
                Tez-tez beriladigan savollar
              </h2>
              <div className="space-y-4">
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-lg font-semibold">HIMOYACHI AI qanday ishlaydi?</h3>
                    <p className="text-muted-foreground">
                      Bizning platforma sun'iy intellekt va machine learning algoritmlaridan foydalanadi. 
                      Har bir kontent (URL, matn, rasm, audio, APK) millionlab ma'lumotlar bazasi bilan 
                      solishtiriladi va real vaqt rejimida tahlil qilinadi. AI modelimiz 99.8% aniqlik bilan 
                      xavfli kontentni aniqlaydi.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-lg font-semibold">Mobil ilova qachon chiqadi?</h3>
                    <p className="text-muted-foreground">
                      Mobil ilova 2026 yilning 4-choragida chiqarilishi rejalashtirilgan. Android va iOS 
                      uchun bir vaqtning o'zida chiqariladi. Ilova beta-testdan o'tmoqda va yaqin orada 
                      foydalanuvchilar uchun mavjud bo'ladi.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-lg font-semibold">Mobil ilova qanday xavfsizlikni ta'minlaydi?</h3>
                    <p className="text-muted-foreground">
                      Mobil ilova o'rnatilgan dasturlarni, qo'ng'iroqlarni, SMS va xabarlarni real vaqt 
                      rejimida tahlil qiladi. Xavfli kontent aniqlanganda, foydalanuvchi darhol ogohlantiriladi. 
                      Barcha ma'lumotlar shifrlangan holda saqlanadi va foydalanuvchining maxfiyligi kafolatlanadi.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-lg font-semibold">HIMOYACHI AI bepulmi?</h3>
                    <p className="text-muted-foreground">
                      Ha, bizning platformada bepul reja mavjud. Bepul rejada kuniga 10 ta tekshirish imkoniyati 
                      beriladi. Professional va Enterprise rejalarida ko'proq imkoniyatlar mavjud. 
                      <Link href="/pricing" className="text-primary hover:underline ml-1">Narxlar bo'limini ko'ring</Link>.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-lg font-semibold">Ma'lumotlarim xavfsizmi?</h3>
                    <p className="text-muted-foreground">
                      Albatta. Bizning platforma end-to-end shifrlashdan foydalanadi. Sizning shaxsiy 
                      ma'lumotlaringiz hech qachon uchinchi shaxslarga o'tkazilmaydi. Barcha ma'lumotlar 
                      xavfsiz serverlarda saqlanadi va GDPR standartlariga mos keladi.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-lg font-semibold">Qanday kontentlarni tekshirish mumkin?</h3>
                    <p className="text-muted-foreground">
                      HIMOYACHI AI quyidagi kontentlarni tahlil qila oladi: URL havolalar, matn xabarlar, 
                      rasmlar (screenshot, QR kod va boshqalar), audio fayllar va Android APK fayllar. 
                      Har bir tur uchun maxsus AI modeli ishlatiladi.
                    </p>
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

