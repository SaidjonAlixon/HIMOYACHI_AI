"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link2, FileText, ImageIcon, Mic, Smartphone, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Link2,
    title: "URL Tekshirish",
    description: "Shubhali linklar va phishing saytlarni darhol aniqlang",
  },
  {
    icon: FileText,
    title: "Matn Tahlili",
    description: "Xabar va matndagi firibgarlik patternlarini topamiz",
  },
  {
    icon: ImageIcon,
    title: "Rasm Skanerlash",
    description: "OCR yordamida screenshot va rasmlardagi xavfli kontentni aniqlang",
  },
  {
    icon: Mic,
    title: "Audio Tahlil",
    description: "Ovoz xabarlarida spoof va scam izlarini topamiz",
  },
  {
    icon: Smartphone,
    title: "APK Tekshirish",
    description: "Android ilovalarni statik tahlil qilib, xavfli ruxsatlarni ko'rsatamiz",
  },
  {
    icon: Zap,
    title: "Tez Natija",
    description: "Bir necha soniyada batafsil risk skori va tavsiyalar oling",
  },
]

export function FeaturesSection() {
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
    <section id="features" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl text-[#00ff41] animate-fade-in-up drop-shadow-[0_0_12px_rgba(0,255,65,0.4)]">
            Kuchli xavfsizlik vositalari
          </h2>
          <p className="text-lg text-white/80 text-balance animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Turli xil kontentni tahlil qilish uchun sun'iy intellektga asoslangan keng qamrovli yechimlar
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`card-glow border-2 border-[#00ff41] bg-black/40 backdrop-blur-md transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_32px_rgba(0,255,65,0.25)] ${
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0 animate-fade-in-up"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms`, animationDelay: `${index * 0.08}s` }}
            >
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(0,255,65,0.2)] text-[#00ff41]">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-[#00ff41]">{feature.title}</CardTitle>
                <CardDescription className="text-white/80">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
