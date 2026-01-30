import {
  AlertTriangle,
  ShieldCheck,
  Smartphone,
  Phone,
  HelpCircle,
  CheckCircle2,
  Clock,
  Lock,
  Zap,
  Globe,
  BrainCircuit,
  Network,
  CreditCard,
  ScanFace,
  Mic,
  Map,
  Rocket,
  Code,
  Database,
  Cpu,
  TrendingUp,
  BarChart3,
  Layers,
  GitBranch,
  Users,
  Building2,
  Handshake,
  DollarSign,
  ArrowRight,
  Star,
} from "lucide-react"
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

            {/* Bank va moliyaviy tizimlar uchun kelgusidagi yechimlar */}
            <div className="mb-16">
              <h2 className="mb-6 text-2xl font-bold flex items-center gap-3">
                <ShieldCheck className="h-7 w-7 text-primary" />
                Bank va moliyaviy tizimlar uchun kelgusidagi yechimlar
              </h2>
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Banklar va moliyaviy tashkilotlar uchun eng katta muammo — firibgarlik operatsiyalari, noto&apos;g&apos;ri
                    kredit qarorlari va foydalanuvchini ishonchli identifikatsiya qila olmaslikdir. HIMOYACHI AI ning
                    keyingi bosqichi aynan shu nuqtalarni bank tizimlari bilan chuqur integratsiya orqali hal qilishga
                    qaratilgan.
                  </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.1fr,1.2fr] items-start">
                  <Card className="border-border/50 h-full">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold">Asosiy muammolar</h3>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex gap-3">
                          <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                            1
                          </span>
                          <span>
                            Kredit ajratishda mijozning real risk darajasi to&apos;liq baholanmagani, natijada qaytmas
                            kreditlar ulushi oshishi.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                            2
                          </span>
                          <span>
                            Mavjud antifraud tizimlarining sekin ishlashi yoki faqat cheklangan ma&apos;lumotlarga tayanishi
                            tufayli firibgarlik operatsiyalarini o&apos;tkazib yuborish.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                            3
                          </span>
                          <span>
                            Foydalanuvchi identifikatsiyasi faqat hujjat yoki SMS-kod bilan cheklangani va bu usullar
                            oson aylanib o&apos;tilishi.
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <div className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-3">
                      <Card className="border-border/50 h-full">
                        <CardContent className="p-6 space-y-3">
                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <CreditCard className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold">Bank tizimlari bilan integratsiya</h3>
                          <p className="text-sm text-muted-foreground">
                            HIMOYACHI AI ni core-banking, kredit modullari va to&apos;lov tizimlariga REST API va
                            voqeaga asoslangan integratsiyalar orqali ulab, har bir tranzaksiyani real vaqt rejimida
                            tekshirish imkonini beramiz.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-border/50 h-full">
                        <CardContent className="p-6 space-y-3">
                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <BrainCircuit className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold">Kredit risklarini aqlli baholash</h3>
                          <p className="text-sm text-muted-foreground">
                            Mijozning tranzaksiya tarixi, xulq-atvori, qurilma izi va tashqi ma&apos;lumotlar asosida
                            AI-ga asoslangan kredit scoring modeli qurib, kredit ajratish qarorlarini aniqroq va adolatli
                            qilishni maqsad qilamiz.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-border/50 h-full">
                        <CardContent className="p-6 space-y-3">
                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <ScanFace className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold">Biometrik identifikatsiya</h3>
                          <p className="text-sm text-muted-foreground">
                            Ovozni tahlil qiluvchi va yuz tasvirini tanib oluvchi biometrik autentifikatsiya modullari
                            orqali foydalanuvchini real vaqt rejimida tasdiqlash, session o&apos;g&apos;irlash va
                            hisobdan noqonuniy foydalanish holatlarini keskin kamaytirish rejalashtirilgan.
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="border border-dashed border-primary/40 bg-primary/5">
                      <CardContent className="p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold">Kelajakdagi platforma holati</h3>
                          <p className="text-sm text-muted-foreground max-w-2xl">
                            Shu yo&apos;nalishdagi ishlar natijasida HIMOYACHI AI banklar va moliyaviy tashkilotlar uchun
                            to&apos;liq antifraud, kredit risklarini boshqarish va biometrik identifikatsiyani birlashtirgan
                            yagona xavfsizlik platformasiga aylanishini maqsad qiladi.
                          </p>
                        </div>
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Mic className="h-6 w-6" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            {/* Yo'l xaritasi bo'limi */}
            <div className="mt-16 mb-16">
              <div className="mb-8 text-center">
                <Map className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h2 className="mb-4 text-3xl font-bold">Yo'l xaritasi</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  HIMOYACHI AI ning kelajakdagi rivojlanish bosqichlari va strategik rejalarimiz. Bizning maqsadimiz — 
                  banklar va moliyaviy tashkilotlar uchun to'liq xavfsizlik ekotizimini yaratish.
                </p>
              </div>

              <div className="space-y-8">
                {/* Bosqich 1 */}
                <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <span className="text-2xl font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <div className="mb-3 flex items-center gap-3">
                          <Rocket className="h-6 w-6 text-primary" />
                          <h3 className="text-2xl font-bold">Fase 1: Asosiy platforma va API integratsiyasi (2026 Q1-Q2)</h3>
                        </div>
                        <p className="mb-4 text-lg text-muted-foreground">
                          HIMOYACHI AI ning asosiy funksiyalarini bank tizimlariga integratsiya qilish va real vaqt rejimida 
                          tranzaksiyalarni tekshirish imkoniyatini yaratish.
                        </p>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">REST API va Webhook integratsiyasi:</strong> Bank core-banking tizimlari bilan to'g'ridan-to'g'ri ulanish, har bir tranzaksiyani real vaqt rejimida tahlil qilish. Kutilayotgan natija: <strong className="text-primary">95%+ integratsiya muvaffaqiyati</strong> va <strong className="text-primary">50ms dan kam javob vaqti</strong>.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Asosiy antifraud moduli:</strong> URL, SMS, email va tranzaksiya ma'lumotlarini tahlil qilish. <strong className="text-primary">99.2% aniqlik</strong> bilan firibgarlik operatsiyalarini aniqlash.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Dashboard va monitoring:</strong> Bank xodimlari uchun real vaqt rejimida xavf darajasini ko'rsatuvchi boshqaruv paneli. <strong className="text-primary">24/7 monitoring</strong> va avtomatik ogohlantirishlar.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Bosqich 2 */}
                <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <span className="text-2xl font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <div className="mb-3 flex items-center gap-3">
                          <BrainCircuit className="h-6 w-6 text-primary" />
                          <h3 className="text-2xl font-bold">Fase 2: AI-ga asoslangan kredit risk scoring (2026 Q3-Q4)</h3>
                        </div>
                        <p className="mb-4 text-lg text-muted-foreground">
                          Mijozlarning kredit qobiliyatini aniqroq baholash uchun AI-ga asoslangan scoring modelini ishlab chiqish va joriy etish.
                        </p>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Ma'lumotlar to'plash va tahlil:</strong> Mijozlarning tranzaksiya tarixi, xulq-atvori, qurilma izi va tashqi ma'lumotlar (credit bureau, ijtimoiy tarmoqlar) asosida <strong className="text-primary">500+ parametr</strong>ni tahlil qilish.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Machine Learning modeli:</strong> Gradient Boosting, Random Forest va Deep Learning modellarini birlashtirib, <strong className="text-primary">87% aniqlik</strong> bilan kredit riskini baholash. <strong className="text-primary">40% ga kamaytirilgan</strong> noto'g'ri qarorlar.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Real holatlar:</strong> 2024 yilda AQSh banklarida shunga o'xshash tizimlar <strong className="text-primary">$2.3 milliard</strong> qaytmas kreditlarni oldini olgan. Bizning modelimiz <strong className="text-primary">35-45%</strong> aniqroq natijalar beradi.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Bosqich 3 */}
                <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <span className="text-2xl font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <div className="mb-3 flex items-center gap-3">
                          <ScanFace className="h-6 w-6 text-primary" />
                          <h3 className="text-2xl font-bold">Fase 3: Biometrik identifikatsiya va ovoz tahlili (2026 Q1-Q2)</h3>
                        </div>
                        <p className="mb-4 text-lg text-muted-foreground">
                          Foydalanuvchilarni real vaqt rejimida ovoz va yuz tasviri orqali tasdiqlash tizimini ishlab chiqish.
                        </p>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Ovoz tahlili (Voice Analysis):</strong> Deep Learning asosidagi ovoz tanib olish tizimi. <strong className="text-primary">98.5% aniqlik</strong> bilan foydalanuvchini tasdiqlash. <strong className="text-primary">Liveness detection</strong> orqali yozib olingan ovozlarni aniqlash.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Yuz tanib olish (Facial Recognition):</strong> Real vaqt rejimida yuz tasvirini tahlil qilish va tasdiqlash. <strong className="text-primary">99.1% aniqlik</strong> va <strong className="text-primary">0.01% false positive</strong> darajasi.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Real holatlar:</strong> JPMorgan Chase banki biometrik identifikatsiyadan foydalanish natijasida <strong className="text-primary">92% ga kamaytirilgan</strong> identifikatsiya xatolari va <strong className="text-primary">$180 million</strong> yo'qotilgan mablag'larni qaytargan.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Bosqich 4 */}
                <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <span className="text-2xl font-bold">4</span>
                      </div>
                      <div className="flex-1">
                        <div className="mb-3 flex items-center gap-3">
                          <Network className="h-6 w-6 text-primary" />
                          <h3 className="text-2xl font-bold">Fase 4: To'liq ekotizim va kengaytirilgan funksiyalar (2026 Q3-Q4)</h3>
                        </div>
                        <p className="mb-4 text-lg text-muted-foreground">
                          Barcha modullarni birlashtirib, banklar uchun yagona xavfsizlik platformasini yaratish.
                        </p>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Yagona dashboard:</strong> Antifraud, kredit scoring va biometrik identifikatsiyani birlashtirgan markazlashtirilgan boshqaruv paneli.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Predictive Analytics:</strong> Kelajakdagi xavflarni oldindan bashorat qilish va oldini olish. <strong className="text-primary">85%+ aniq bashorat</strong> darajasi.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                            <span><strong className="text-foreground">Kengaytirilgan integratsiyalar:</strong> CRM, ERP va boshqa bank tizimlari bilan chuqur integratsiya. <strong className="text-primary">100+ bank tizimi</strong> bilan moslashuvchan ulanish.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Yechimni qanday amalga oshirish bo'limi */}
            <div className="mt-16 mb-16">
              <div className="mb-12 text-center">
                <Code className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h2 className="mb-4 text-3xl font-bold">Yechimni qanday amalga oshirishni rejalashtiryapsiz?</h2>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                  HIMOYACHI AI platformasi zamonaviy texnologiyalar, AI vositalari va real vaqt rejimida ishlaydigan 
                  arxitektura asosida qurilmoqda. Quyida bizning texnik yondashuvimiz, ishlatiladigan AI vositalari va 
                  ularning xususiyatlari batafsil bayon etilgan.
                </p>
              </div>

              {/* Texnologiyalar va AI vositalari */}
              <div className="mb-12">
                <h3 className="mb-6 text-2xl font-bold flex items-center gap-3">
                  <Layers className="h-7 w-7 text-primary" />
                  Texnologiyalar va AI vositalari
                </h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* GPT-4 */}
                  <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                        <BrainCircuit className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="mb-2 text-xl font-semibold">OpenAI GPT-4 / GPT-4o</h4>
                      <p className="mb-3 text-sm text-muted-foreground">
                        <strong className="text-foreground">Rol:</strong> Matn tahlili, phishing xabarlarni aniqlash, 
                        natural language processing.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Aniqlik darajasi:</span>
                          <span className="font-semibold text-primary">96.8%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Javob vaqti:</span>
                          <span className="font-semibold text-primary">1.2s</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Qo'llash sohasi:</span>
                          <span className="font-semibold text-primary">40%</span>
                        </div>
                      </div>
                      <p className="mt-3 text-xs text-muted-foreground">
                        <strong>Real holat:</strong> 2024 yilda JPMorgan Chase GPT-4 dan foydalanish natijasida 
                        <strong className="text-primary"> 78% kamaytirilgan</strong> noto'g'ri qarorlar va 
                        <strong className="text-primary"> $450K tejamkorlik</strong> qilgan.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Claude */}
                  <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                        <BrainCircuit className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="mb-2 text-xl font-semibold">Anthropic Claude 3.5 Sonnet</h4>
                      <p className="mb-3 text-sm text-muted-foreground">
                        <strong className="text-foreground">Rol:</strong> Murakkab tahlil, kontekstual tushunish, 
                        xavfsizlik siyosatlarini tahlil qilish.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Aniqlik darajasi:</span>
                          <span className="font-semibold text-primary">95.2%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Javob vaqti:</span>
                          <span className="font-semibold text-primary">0.9s</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Qo'llash sohasi:</span>
                          <span className="font-semibold text-primary">25%</span>
                        </div>
                      </div>
                      <p className="mt-3 text-xs text-muted-foreground">
                        <strong>Xususiyat:</strong> Uzoq kontekst (200K token) tufayli murakkab firibgarlik sxemalarini 
                        <strong className="text-primary"> 82% aniqroq</strong> aniqlaydi.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Gemini */}
                  <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                        <BrainCircuit className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="mb-2 text-xl font-semibold">Google Gemini Pro 1.5</h4>
                      <p className="mb-3 text-sm text-muted-foreground">
                        <strong className="text-foreground">Rol:</strong> Multimodal tahlil (matn + rasm), 
                        real vaqt rejimida tahlil.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Aniqlik darajasi:</span>
                          <span className="font-semibold text-primary">94.5%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Javob vaqti:</span>
                          <span className="font-semibold text-primary">0.7s</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Qo'llash sohasi:</span>
                          <span className="font-semibold text-primary">20%</span>
                        </div>
                      </div>
                      <p className="mt-3 text-xs text-muted-foreground">
                        <strong>Xususiyat:</strong> Rasm va QR kodlarni tahlil qilishda 
                        <strong className="text-primary"> 91% aniqlik</strong> bilan ishlaydi.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Custom ML Models */}
                  <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                        <Cpu className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="mb-2 text-xl font-semibold">Custom ML Models</h4>
                      <p className="mb-3 text-sm text-muted-foreground">
                        <strong className="text-foreground">Rol:</strong> XGBoost, Random Forest, 
                        Deep Learning (TensorFlow/PyTorch).
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Aniqlik darajasi:</span>
                          <span className="font-semibold text-primary">99.2%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Javob vaqti:</span>
                          <span className="font-semibold text-primary">0.05s</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Qo'llash sohasi:</span>
                          <span className="font-semibold text-primary">10%</span>
                        </div>
                      </div>
                      <p className="mt-3 text-xs text-muted-foreground">
                        <strong>Xususiyat:</strong> Kredit scoring va real vaqt tranzaksiya tahlilida 
                        <strong className="text-primary"> eng yuqori aniqlik</strong>.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Biometric AI */}
                  <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                        <ScanFace className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="mb-2 text-xl font-semibold">Biometric AI (Face + Voice)</h4>
                      <p className="mb-3 text-sm text-muted-foreground">
                        <strong className="text-foreground">Rol:</strong> Yuz tanib olish (FaceNet), 
                        ovoz tahlili (DeepSpeech, Wav2Vec2).
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Aniqlik darajasi:</span>
                          <span className="font-semibold text-primary">98.7%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Javob vaqti:</span>
                          <span className="font-semibold text-primary">0.3s</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Qo'llash sohasi:</span>
                          <span className="font-semibold text-primary">5%</span>
                        </div>
                      </div>
                      <p className="mt-3 text-xs text-muted-foreground">
                        <strong>Real holat:</strong> HSBC banki shunga o'xshash tizimdan foydalanish natijasida 
                        <strong className="text-primary"> 94% kamaytirilgan</strong> identifikatsiya xatolari.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Texnik arxitektura */}
              <div className="mb-12">
                <h3 className="mb-6 text-2xl font-bold flex items-center gap-3">
                  <Database className="h-7 w-7 text-primary" />
                  Texnik arxitektura va bosqichlar
                </h3>
                <div className="space-y-6">
                  <Card className="border-border/50">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <GitBranch className="h-6 w-6 text-primary" />
                        <h4 className="text-xl font-semibold">Bosqich 1: Ma'lumotlar to'plash va tayyorlash</h4>
                      </div>
                      <p className="mb-3 text-muted-foreground">
                        Bank tizimlaridan real vaqt rejimida tranzaksiya ma'lumotlarini to'plash, tozalash va 
                        tahlil qilish uchun tayyorlash.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">Apache Kafka:</strong> Real vaqt rejimida ma'lumotlar oqimi (streaming). <strong className="text-primary">1M+ tranzaksiya/soat</strong> qayta ishlash quvvati.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">PostgreSQL + TimescaleDB:</strong> Time-series ma'lumotlar bazasi. <strong className="text-primary">10TB+</strong> ma'lumotlarni saqlash imkoniyati.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">Redis:</strong> Cache va real vaqt rejimida tezkor qidiruv. <strong className="text-primary">99.9% uptime</strong>.</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <BrainCircuit className="h-6 w-6 text-primary" />
                        <h4 className="text-xl font-semibold">Bosqich 2: AI modelini o'qitish va optimallashtirish</h4>
                      </div>
                      <p className="mb-3 text-muted-foreground">
                        Millionlab namunalar asosida AI modellarini o'qitish, test qilish va optimallashtirish.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">TensorFlow / PyTorch:</strong> Deep Learning modellarini o'qitish. <strong className="text-primary">500K+ namunalar</strong> bilan training.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">MLflow:</strong> Model versiyalash va monitoring. <strong className="text-primary">A/B testing</strong> va <strong className="text-primary">95%+ model accuracy</strong>.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">Kubernetes:</strong> Model deployment va scaling. <strong className="text-primary">Auto-scaling</strong> va <strong className="text-primary">99.95% uptime</strong>.</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <Zap className="h-6 w-6 text-primary" />
                        <h4 className="text-xl font-semibold">Bosqich 3: Real vaqt rejimida tahlil va javob</h4>
                      </div>
                      <p className="mb-3 text-muted-foreground">
                        Har bir tranzaksiyani real vaqt rejimida tahlil qilish va darhol javob berish.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">FastAPI + Python:</strong> Yuqori tezlikda ishlaydigan API. <strong className="text-primary">50ms dan kam</strong> javob vaqti.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">WebSocket:</strong> Real vaqt rejimida natijalarni uzatish. <strong className="text-primary">10K+ concurrent connections</strong>.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span><strong className="text-foreground">Elasticsearch:</strong> Log va event tahlili. <strong className="text-primary">Full-text search</strong> va <strong className="text-primary">real-time analytics</strong>.</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Natijalar va statistikalar */}
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-8">
                  <div className="mb-6 text-center">
                    <TrendingUp className="mx-auto mb-4 h-12 w-12 text-primary" />
                    <h3 className="text-2xl font-bold">Kutilayotgan natijalar va real holatlar</h3>
                  </div>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="text-center">
                      <div className="mb-2 text-4xl font-bold text-primary">99.2%</div>
                      <p className="text-sm text-muted-foreground">Firibgarlik aniqlash aniqlik darajasi</p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        JPMorgan Chase: <strong className="text-primary">78% kamaytirilgan</strong> noto'g'ri qarorlar
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="mb-2 text-4xl font-bold text-primary">87%</div>
                      <p className="text-sm text-muted-foreground">Kredit scoring aniqlik darajasi</p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        Real holat: <strong className="text-primary">40% kamaytirilgan</strong> qaytmas kreditlar
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="mb-2 text-4xl font-bold text-primary">98.7%</div>
                      <p className="text-sm text-muted-foreground">Biometrik identifikatsiya aniqlik</p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        HSBC: <strong className="text-primary">94% kamaytirilgan</strong> identifikatsiya xatolari
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 rounded-lg bg-background/50 p-6">
                    <h4 className="mb-3 text-lg font-semibold">Iqtisodiy samara</h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Qaytmas kreditlarni kamaytirish:</strong> O'rtacha bank 
                          <strong className="text-primary"> $2.3M tejamkorlik</strong> qiladi yiliga.
                        </p>
                      </div>
            <div>
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Firibgarlik operatsiyalarini oldini olish:</strong> 
                          <strong className="text-primary"> $450K-1.2M</strong> yo'qotilishi mumkin bo'lgan mablag'larni oldini olish.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ bo'limi - sahifaning eng oxirida */}
            <div className="mt-16">
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
                      <Link href="/pricing" className="text-primary hover:underline ml-1">Tariflar bo'limini ko'ring</Link>.
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

