import {
  Target,
  Users,
  Zap,
  Globe,
  Linkedin,
  Mail,
  ShieldCheck,
  BrainCircuit,
  Network,
  CreditCard,
  ScanFace,
  Mic,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Biz Haqimizda - HIMOYACHI AI",
  description: "HIMOYACHI AI - firibgarlik va phishing xavfini aniqlashda yetakchi AI texnologiyasi",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen page-inner-bg">
      <div className="relative z-10">
        <Header />

        <main>
          <section className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">Raqamli Xavfsizlikda Yangi Davr</h1>
              <p className="text-xl text-white/80">
                HIMOYACHI AI - bu sun'iy intellekt asosidagi platforma bo'lib, real vaqt rejimida firibgarlik, phishing va
                boshqa kiberhujumlarni aniqlaydi va oldini oladi.
              </p>
            </div>
          </section>

          <section className="border-y border-[rgba(0,255,65,0.2)] py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-5xl space-y-10">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-[#00ff41]">
                    Nega aynan HIMOYACHI AI jamoasi bu muammoni hal qila oladi?
                  </h2>
                  <p className="text-lg text-white/80 max-w-3xl mx-auto">
                    Bizning missiyamiz — har bir foydalanuvchini kiberxavflardan himoya qiladigan, firibgarlik
                    stsenariylarini chuqur tahlil qiluvchi va eng so&apos;nggi AI texnologiyalariga tayangan, shu bilan birga
                    oddiy va qulay ishlatiladigan xavfsizlik ekotizimini yaratishdir.
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  <Card className="border-2 border-[rgba(0,255,65,0.3)] bg-black/40 h-full">
                    <CardContent className="pt-6 space-y-3">
                      <Target className="h-10 w-10 text-[#00ff41]" />
                      <h3 className="text-xl font-semibold text-white">Himoya va ishonch</h3>
                      <p className="text-white/80">
                      Har bir internet foydalanuvchisini phishing, firibgarlik va boshqa kiberhujumlardan
                      real vaqt rejimida himoya qilish — loyihaning asosiy maqsadi.
                    </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-[rgba(0,255,65,0.3)] bg-black/40 h-full">
                    <CardContent className="pt-6 space-y-3">
                      <Zap className="h-10 w-10 text-[#00ff41]" />
                      <h3 className="text-xl font-semibold text-white">Innovatsion AI yondashuvi</h3>
                      <p className="text-white/80">
                      Eng so&apos;nggi AI va mashinali o&apos;qitish texnologiyalaridan foydalanib, yangi tahdidlarni
                      tezda aniqlay oladigan moslashuvchan model va algoritmlar yaratamiz.
                    </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-[rgba(0,255,65,0.3)] bg-black/40 h-full">
                    <CardContent className="pt-6 space-y-3">
                      <Globe className="h-10 w-10 text-[#00ff41]" />
                      <h3 className="text-xl font-semibold text-white">Qulay va tushunarli xizmat</h3>
                      <p className="text-white/80">
                      Murakkab xavfsizlik infratuzilmasini foydalanuvchi uchun bir nechta bosqichda ishlatiladigan,
                      sodda va intuitiv interfeys orqali taqdim etamiz.
                    </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  <Card className="border-2 border-[rgba(0,255,65,0.3)] bg-black/40 h-full">
                    <CardContent className="pt-6 space-y-3">
                      <ShieldCheck className="h-10 w-10 text-[#00ff41]" />
                      <h3 className="text-xl font-semibold text-white">Amaliy tajriba</h3>
                      <p className="text-white/80">
                      Jamoamiz a&apos;zolari AI, backend, frontend va UI/UX yo&apos;nalishlarida yirik platformalar
                      uchun ishlagan, real kiberhujum holatlarini ko&apos;rgan va ularni bartaraf etish bo&apos;yicha
                      yechimlar ishlab chiqqan.
                    </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-[rgba(0,255,65,0.3)] bg-black/40 h-full">
                    <CardContent className="pt-6 space-y-3">
                      <BrainCircuit className="h-10 w-10 text-[#00ff41]" />
                      <h3 className="text-xl font-semibold text-white">Ma&apos;lumotga asoslangan tahlil</h3>
                      <p className="text-white/80">
                      Phishing va firibgarlik sxemalarini minglab namunalar asosida tahlil qilib, yolg&apos;on
                      pozitiv va negativ holatlarni keskin kamaytiradigan aniqlik darajasiga erishamiz.
                    </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-[rgba(0,255,65,0.3)] bg-black/40 h-full">
                    <CardContent className="pt-6 space-y-3">
                      <Network className="h-10 w-10 text-[#00ff41]" />
                      <h3 className="text-xl font-semibold text-white">To&apos;liq ekotizim va rivojlanish</h3>
                      <p className="text-white/80">
                      Foydalanuvchi interfeysi, API, monitoring va xavfsizlik siyosatlari yagona ekotizimda
                      ishlaydi va yangi tahdidlarga mos ravishda doimiy ravishda yangilanib boriladi.
                    </p>
                  </CardContent>
                </Card>
              </div>
                </div>
              </div>
            </section>

          <section className="border-t border-[rgba(0,255,65,0.2)] py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-5xl">
                <div className="mb-12 text-center">
                  <Users className="mx-auto mb-6 h-16 w-16 text-[#00ff41]" />
                  <h2 className="mb-4 text-3xl font-bold text-white">Bizning Jamoamiz</h2>
                  <p className="text-lg text-white/80">
                  HIMOYACHI AI jamoasi kiberxavfsizlik mutaxassislari, AI muhandislari va dastur ishlab chiquvchilardan
                  iborat.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="mb-8 text-center text-2xl font-semibold text-[#00ff41]">Asoschilar</h3>
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-2 border-[rgba(0,255,65,0.3)] bg-black/40 transition-all hover:shadow-[0_0_20px_rgba(0,255,65,0.15)]">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-start gap-4">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(0,255,65,0.15)]">
                          <img
                            src="/team/Ataullayev.jpg"
                            alt="Ataullayev Saidmuhammadalixon"
                            className="h-full w-full rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white">Ataullayev Saidmuhammadalixon</h4>
                          <p className="text-sm text-[#00ff41]">Asoschi & CEO</p>
                          <p className="mt-2 text-sm text-white/80">
                            2+ yillik tajriba, Sun&apos;iy intellekt, avtomatlashtirish va xavfsizlik yechimlari bo&apos;yicha yosh mutaxassis, Fullstack dasturchi.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 border-t border-[rgba(0,255,65,0.2)] pt-4">
                        <Button size="sm" variant="outline" asChild className="border-[#00ff41] text-[#00ff41] hover:bg-[rgba(0,255,65,0.1)]">
                          <a href="mailto:saidmuhammadalixon@himoyachi.ai">
                            <Mail className="mr-2 h-4 w-4" />
                            Email
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild className="border-[#00ff41] text-[#00ff41] hover:bg-[rgba(0,255,65,0.1)]">
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-4 w-4" />
                            LinkedIn
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-[rgba(0,255,65,0.3)] bg-black/40 transition-all hover:shadow-[0_0_20px_rgba(0,255,65,0.15)]">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-start gap-4">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(0,255,65,0.15)]">
                          <img
                            src="/team/Azimov.png?v=2"
                            alt="Azimov Sherxon"
                            className="h-full w-full rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white">Azimov Sherxon</h4>
                          <p className="text-sm text-[#00ff41]">Hammuassis & CTO</p>
                          <p className="mt-2 text-sm text-white/80">
                            5+ yillik tajriba, AI va mashinali o&apos;qitish yo&apos;nalishlarida chuqur bilimga ega texnik mutaxassis.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 border-t border-[rgba(0,255,65,0.2)] pt-4">
                        <Button size="sm" variant="outline" asChild className="border-[#00ff41] text-[#00ff41] hover:bg-[rgba(0,255,65,0.1)]">
                          <a href="mailto:sherxon@himoyachi.ai">
                            <Mail className="mr-2 h-4 w-4" />
                            Email
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild className="border-[#00ff41] text-[#00ff41] hover:bg-[rgba(0,255,65,0.1)]">
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-4 w-4" />
                            LinkedIn
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button asChild size="lg" className="bg-[#00ff41] text-black hover:bg-[#00ff41]/90">
                  <Link href="/careers">Jamoaga Qo&apos;shiling</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
        <Footer />
      </div>
    </div>
  )
}
