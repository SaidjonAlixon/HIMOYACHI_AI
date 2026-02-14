"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Upload, Search, CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    icon: Upload,
    title: "Yuklash",
    description: "URL, matn, rasm, audio yoki APK yuklang",
  },
  {
    icon: Search,
    title: "Tahlil",
    description: "AI model real vaqtda xavfni baholaydi",
  },
  {
    icon: CheckCircle,
    title: "Natija",
    description: "Xavf skori, sabablari va tavsiyalar oling",
  },
]

export function HowItWorks() {
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
    <section className="border-y border-[rgba(0,255,65,0.12)] py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl text-[#00ff41] animate-fade-in-up drop-shadow-[0_0_12px_rgba(0,255,65,0.4)]">Qanday ishlaydi?</h2>
          <p className="text-lg text-white/80 text-balance animate-fade-in-up" style={{ animationDelay: "0.1s" }}>Oddiy uch qadamda xavfsizlikni ta'minlang</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`relative transition-all duration-500 ${
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0 animate-fade-in-up"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms`, animationDelay: `${index * 0.1}s` }}
            >
              <Card className="card-glow border-2 border-[#00ff41] bg-black/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_32px_rgba(0,255,65,0.25)]">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(0,255,65,0.2)] text-[#00ff41] text-2xl font-bold mx-auto">
                    {index + 1}
                  </div>
                  <step.icon className="mb-4 h-8 w-8 text-[#00ff41] mx-auto" />
                  <h3 className="mb-2 text-xl font-semibold text-[#00ff41] text-center">{step.title}</h3>
                  <p className="text-white/80 text-center">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
