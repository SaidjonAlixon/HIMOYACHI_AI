"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-b border-border/40">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <div className={`mx-auto max-w-4xl text-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className={`mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}>
            <Shield className="h-4 w-4 text-primary transition-transform duration-500 hover:rotate-12" />
            <span className="text-card-foreground">Real vaqt rejimida xavfsizlik tahlili</span>
          </div>

          <h1 className={`mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            Firibgarlik va phishing xavfidan <span className="text-primary transition-all duration-500 hover:scale-110 inline-block">himoyalaning</span>
          </h1>

          <p className={`mb-8 text-lg text-muted-foreground text-balance md:text-xl transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            Sun'iy intellekt yordamida URL, matn, rasm, audio va APK fayllarni tahlil qilib, xavfli kontentni bir necha
            soniyada aniqlang
          </p>

          <div className={`flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <Button size="lg" asChild className="group transition-all duration-300 hover:scale-105">
              <Link href="/scan">
                Tekshirish
                <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="transition-all duration-300 hover:scale-105">
              <Link href="#features">Ko'proq bilib oling</Link>
            </Button>
          </div>

          <div className={`mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            {[
              { value: "1K+", label: "Faol Foydalanuvchilar" },
              { value: "1M+", label: "Tekshirilgan Havolalar" },
              { value: "99.5%", label: "Aniqlik Darajasi" },
              { value: "24/7", label: "Qo'llab-quvvatlash" },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className={`rounded-lg border border-border bg-card p-4 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 delay-${index * 100}`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-2xl font-bold text-primary transition-transform duration-300 hover:scale-110">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
