"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Boshlang'ich holatni bir frame ko'rsatish, keyin kirish animatsiyasini ishga tushirish
    const t = setTimeout(() => setIsVisible(true), 120)

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
      clearTimeout(t)
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-b border-[rgba(0,255,65,0.15)]">
      {/* Dinamik: pastga siljiydigan yengil scan chizig‘i */}
      <div className="absolute left-1/2 top-0 h-32 w-px bg-gradient-to-b from-transparent via-[rgba(0,255,65,0.5)] to-transparent opacity-70 animate-scan-line" aria-hidden />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

      <div className="container relative z-10 mx-auto px-4 py-28 md:py-36">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge – staggerli kirish */}
          <div
            className={`mb-8 inline-flex items-center gap-2 rounded-full border-2 border-[#00ff41] bg-[rgba(0,255,65,0.08)] px-5 py-2.5 text-sm backdrop-blur-md shadow-[0_0_24px_rgba(0,255,65,0.2)] will-change-[opacity,transform] transition-[opacity,transform] duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "80ms" : "0ms" }}
          >
            <Shield className="h-4 w-4 text-[#00ff41] animate-pulse" style={{ animationDuration: "2s" }} />
            <span className="font-medium text-[#00ff41]">Real vaqt rejimida xavfsizlik tahlili</span>
          </div>

          <h1
            className={`mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl will-change-[opacity,transform] transition-[opacity,transform] duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "180ms" : "0ms" }}
          >
            <span className="text-white">Firibgarlik va phishing xavfidan </span>
            <span className="inline-block text-[#00ff41] drop-shadow-[0_0_12px_rgba(0,255,65,0.5)]">
              himoyalaning
            </span>
          </h1>

          <p
            className={`mb-10 max-w-2xl mx-auto text-lg text-white/90 text-balance md:text-xl will-change-[opacity,transform] transition-[opacity,transform] duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "280ms" : "0ms" }}
          >
            Sun'iy intellekt yordamida URL, matn, rasm, audio va APK fayllarni tahlil qilib, xavfli kontentni bir necha
            soniyada aniqlang
          </p>

          <div
            className={`flex flex-col items-center justify-center gap-4 sm:flex-row will-change-[opacity,transform] transition-[opacity,transform] duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "380ms" : "0ms" }}
          >
            <Button
              size="lg"
              asChild
              className="group rounded-xl px-8 border-2 border-[#00ff41] bg-[#00ff41] text-black font-semibold shadow-[0_0_30px_rgba(0,255,65,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,65,0.6)] animate-glow-soft"
            >
              <Link href="/scan">
                Tekshirish
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-xl border-2 border-[#00ff41] bg-transparent text-[#00ff41] hover:bg-[rgba(0,255,65,0.15)] transition-all duration-300 hover:scale-105"
            >
              <Link href="#features">Ko'proq bilib oling</Link>
            </Button>
          </div>

          {/* Stat kartalar – staggerli scale-in */}
          <div
            className={`mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 will-change-[opacity,transform] transition-[opacity,transform] duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "480ms" : "0ms" }}
          >
            {[
              { value: "1K+", label: "Faol Foydalanuvchilar" },
              { value: "1M+", label: "Tekshirilgan Havolalar" },
              { value: "99.5%", label: "Aniqlik Darajasi" },
              { value: "24/7", label: "Qo'llab-quvvatlash" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`card-glow rounded-xl border-2 border-[#00ff41] bg-black/50 p-5 backdrop-blur-md will-change-[opacity,transform] transition-[opacity,transform] duration-500 ease-out hover:scale-[1.05] hover:border-[#00ff41] hover:shadow-[0_0_28px_rgba(0,255,65,0.3)] ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: isVisible ? `${560 + index * 80}ms` : "0ms" }}
              >
                <div className="text-2xl font-bold text-[#00ff41] md:text-3xl drop-shadow-[0_0_8px_rgba(0,255,65,0.5)]">{stat.value}</div>
                <div className="mt-1 text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
