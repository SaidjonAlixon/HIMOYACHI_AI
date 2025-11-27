import { Target, Users, Zap, Globe, Linkedin, Mail } from "lucide-react"
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
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Raqamli Xavfsizlikda Yangi Davr</h1>
            <p className="text-xl text-muted-foreground">
              HIMOYACHI AI - bu sun'iy intellekt asosidagi platforma bo'lib, real vaqt rejimida firibgarlik, phishing va
              boshqa kiberhujumlarni aniqlaydi va oldini oladi.
            </p>
          </div>
        </section>

        <section className="border-y border-border/40 bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold">Bizning Missiyamiz</h2>
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="border-border/50">
                  <CardContent className="pt-6">
                    <Target className="mb-4 h-12 w-12 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold">Himoya</h3>
                    <p className="text-muted-foreground">
                      Har bir internetdan foydalanuvchini kiberhujumlardan himoya qilish
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="pt-6">
                    <Zap className="mb-4 h-12 w-12 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold">Innovatsiya</h3>
                    <p className="text-muted-foreground">
                      Eng so'nggi AI texnologiyalaridan foydalanib xavfsizlikni oshirish
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="pt-6">
                    <Globe className="mb-4 h-12 w-12 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold">Qulaylik</h3>
                    <p className="text-muted-foreground">
                      Murakkab xavfsizlik vositalarini oddiy va foydalanish uchun qulay qilish
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Bizning Yutuqlarimiz</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">1K+</div>
                <p className="text-muted-foreground">Faol Foydalanuvchilar</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">1M+</div>
                <p className="text-muted-foreground">Tekshirilgan Havolalar</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">99.5%</div>
                <p className="text-muted-foreground">Aniqlik Darajasi</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">24/7</div>
                <p className="text-muted-foreground">Qo'llab-quvvatlash</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border/40 bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <Users className="mx-auto mb-6 h-16 w-16 text-primary" />
                <h2 className="mb-4 text-3xl font-bold">Bizning Jamoamiz</h2>
                <p className="text-lg text-muted-foreground">
                  HIMOYACHI AI jamoasi kiberxavfsizlik mutaxassislari, AI muhandislari va dastur ishlab chiquvchilardan
                  iborat.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="mb-8 text-center text-2xl font-semibold">Asoschilar</h3>
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-border/50 transition-all hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-start gap-4">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                          <img
                            src="/team/Ataullayev.jpg"
                            alt="Ataullayev Saidmuhammadalixon"
                            className="h-full w-full rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold">Ataullayev Saidmuhammadalixon</h4>
                          <p className="text-sm text-primary">Asoschi & CEO</p>
                          <p className="mt-2 text-sm text-muted-foreground">
                            2+ yillik tajriba, Sun'iy intellekt, avtomatlashtirish va xavfsizlik yechimlari bo‘yicha yosh mutaxassis.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 border-t border-border/40 pt-4">
                        <Button size="sm" variant="outline" asChild>
                          <a href="mailto:saidmuhammadalixon@himoyachi.ai">
                            <Mail className="mr-2 h-4 w-4" />
                            Email
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-4 w-4" />
                            LinkedIn
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 transition-all hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-start gap-4">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                          <img
                            src="/team/Azimov.jpg"
                            alt="Azimov Sherxon"
                            className="h-full w-full rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold">Azimov Sherxon</h4>
                          <p className="text-sm text-primary">Hammuassis & CTO</p>
                          <p className="mt-2 text-sm text-muted-foreground">
                          5+ yillik tajriba, AI va mashinali o'qitish yo'nalishlarida chuqur bilimga ega texnik mutaxassis.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 border-t border-border/40 pt-4">
                        <Button size="sm" variant="outline" asChild>
                          <a href="mailto:sherxon@himoyachi.ai">
                            <Mail className="mr-2 h-4 w-4" />
                            Email
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
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

              <div>
                <h3 className="mb-8 text-center text-2xl font-semibold">Yordamchi Mutaxassislar</h3>
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-border/50 transition-all hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-start gap-4">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                          <img
                            src="/professional-male-developer.jpg"
                            alt="Sardor Rashidov"
                            className="h-full w-full rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold">Sardor Rashidov</h4>
                          <p className="text-sm text-muted-foreground">Backend Muhandis</p>
                          <p className="mt-2 text-sm text-muted-foreground">
                            Tizim arxitekturasi va API ishlab chiqish bo'yicha 5 yillik tajriba.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 border-t border-border/40 pt-4">
                        <Button size="sm" variant="outline" asChild>
                          <a href="mailto:sardor@himoyachi.ai">
                            <Mail className="mr-2 h-4 w-4" />
                            Email
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-4 w-4" />
                            LinkedIn
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 transition-all hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-start gap-4">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                          <img
                            src="/professional-female-designer.png"
                            alt="Madina Alimova"
                            className="h-full w-full rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold">Madina Alimova</h4>
                          <p className="text-sm text-muted-foreground">UX/UI Dizayner</p>
                          <p className="mt-2 text-sm text-muted-foreground">
                            Foydalanuvchi tajribasi va vizual dizayn mutaxassisi. Zamonaviy interfeys yaratuvchi.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 border-t border-border/40 pt-4">
                        <Button size="sm" variant="outline" asChild>
                          <a href="mailto:madina@himoyachi.ai">
                            <Mail className="mr-2 h-4 w-4" />
                            Email
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
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
                <Button asChild size="lg">
                  <Link href="/careers">Jamoaga Qo'shiling</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
