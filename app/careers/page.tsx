import { Shield, Briefcase, Heart, TrendingUp, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const metadata = {
  title: "Karyera - HIMOYACHI AI",
  description: "HIMOYACHI AI jamoasiga qo'shiling va internetni xavfsizroq joyga aylantiring",
}

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior AI Muhandis",
      department: "Texnologiya",
      location: "Toshkent / Masofaviy",
      type: "To'liq ish kuni",
      description: "Firibgarlikni aniqlash uchun ilg'or AI modellarini ishlab chiqish",
    },
    {
      title: "Frontend Dasturchi",
      department: "Dasturlash",
      location: "Toshkent",
      type: "To'liq ish kuni",
      description: "React va Next.js orqali chiroyli va tez interfeys yaratish",
    },
    {
      title: "Kiberxavfsizlik Tahlilchi",
      department: "Xavfsizlik",
      location: "Toshkent / Masofaviy",
      type: "To'liq ish kuni",
      description: "Yangi xavflarni aniqlash va tahlil qilish",
    },
    {
      title: "Product Manager",
      department: "Mahsulot",
      location: "Toshkent",
      type: "To'liq ish kuni",
      description: "Mahsulot strategiyasini boshqarish va rivojlantirish",
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Sog'liqni Saqlash",
      description: "To'liq tibbiy sug'urta siz va oilangiz uchun",
    },
    {
      icon: TrendingUp,
      title: "Rivojlanish",
      description: "O'quv kurslari va konferentsiyalar uchun to'liq moliyalashtirish",
    },
    {
      icon: Users,
      title: "Jamoa Ruhi",
      description: "Do'stona jamoa va jamoaviy tadbirlar",
    },
    {
      icon: Zap,
      title: "Moslashuvchanlik",
      description: "Gibrid ish rejimi va moslashuvchan soatlar",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 py-6">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">HIMOYACHI AI</span>
          </Link>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Bizning Jamoamizga Qo'shiling</h1>
            <p className="text-xl text-muted-foreground">
              HIMOYACHI AI da biz internetni xavfsizroq joyga aylantiramiz. Siz ham bu muhim missiyaning bir qismi
              bo'lishingiz mumkin.
            </p>
          </div>
        </section>

        <section className="border-y border-border/40 bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-12 text-center text-3xl font-bold">Nima Uchun HIMOYACHI AI?</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="pt-6">
                      <benefit.icon className="mb-4 h-10 w-10 text-primary" />
                      <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Ochiq Vakansiyalar</h2>
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <Card key={index} className="transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <CardTitle className="mb-2">{job.title}</CardTitle>
                        <CardDescription className="flex flex-wrap gap-2">
                          <Badge variant="secondary">{job.department}</Badge>
                          <Badge variant="outline">{job.location}</Badge>
                          <Badge variant="outline">{job.type}</Badge>
                        </CardDescription>
                      </div>
                      <Button asChild>
                        <Link href="/contact">Ariza Berish</Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border/40 bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Briefcase className="mx-auto mb-6 h-16 w-16 text-primary" />
              <h2 className="mb-4 text-3xl font-bold">Mos Vakansiya Topa Olmadingizmi?</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Har doim iqtidorli odamlarni qidiramiz. Agar siz HIMOYACHI AI da ishlashni istasangiz, biz bilan
                bog'laning va rezyumeingizni yuboring.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Biz Bilan Bog'laning</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
