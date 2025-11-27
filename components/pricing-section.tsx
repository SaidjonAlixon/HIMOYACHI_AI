"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const plans = [
  {
    name: "Bepul",
    price: "0",
    description: "Shaxsiy foydalanish uchun",
    features: ["1 ta tekshirish/kun", "Asosiy tahlil", "URL va matn tekshirish", "Email qo'llab-quvvatlash"],
  },
  {
    name: "Pro",
    price: "5",
    description: "Professional foydalanuvchilar uchun",
    features: [
      "100 ta tekshirish/kun",
      "Keng tahlil",
      "Barcha turlar (URL, rasm, audio, APK)",
      "API kirish",
      "24/7 qo'llab-quvvatlash",
      "PDF hisobotlar",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Maxsus",
    description: "Katta tashkilotlar uchun",
    features: [
      "Cheksiz tekshirish",
      "Maxsus model",
      "Dedicated support",
      "SLA kafolati",
      "On-premise deploy",
      "Team management",
    ],
  },
]

export function PricingSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]))
          }
        },
        { threshold: 0.2 }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl transition-all duration-700 hover:scale-105">
            O'zingizga mos rejani tanlang
          </h2>
          <p className="text-lg text-muted-foreground text-balance transition-all duration-500">
            Har qanday hajmdagi biznes va shaxsiy foydalanish uchun moslashtirilgan
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`relative border-border bg-card transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                plan.popular ? "border-primary shadow-lg shadow-primary/20 hover:border-primary/80" : "hover:border-primary/50"
              } ${
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                    Mashhur
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-card-foreground transition-colors duration-300">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                <div className="mt-4 flex items-baseline gap-1">
                  {plan.price === "Maxsus" ? (
                    <span className="text-3xl font-bold text-card-foreground transition-transform duration-300 hover:scale-110">{plan.price}</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-card-foreground transition-transform duration-300 hover:scale-110">${plan.price}</span>
                      <span className="text-muted-foreground">/oy</span>
                    </>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 transition-all duration-300 hover:translate-x-1">
                      <Check className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 hover:scale-125" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full transition-all duration-300 hover:scale-105" variant={plan.popular ? "default" : "outline"} asChild>
                  <Link href={plan.price === "Maxsus" ? "/contact" : "/scan"}>
                    {plan.price === "Maxsus" ? "Bog'lanish" : "Boshlash"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
