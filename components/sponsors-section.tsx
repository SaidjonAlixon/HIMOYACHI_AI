"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const sponsors = [
  { id: 1, name: "TechCorp", logo: "TC", image: "/sponsors/techcorp.svg" },
  { id: 2, name: "SecureBank", logo: "SB", image: "/sponsors/securebank.svg" },
]

export function SponsorsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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
    <section ref={sectionRef} className="container mx-auto px-4 py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2
            className={`mb-4 text-3xl font-bold tracking-tight md:text-4xl text-[#00ff41] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0 animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            Bosh homiylar
          </h2>
          <p
            className={`mx-auto max-w-2xl text-lg text-white/80 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0 animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            Bizning loyihamizni qo'llab-quvvatlayotgan asosiy hamkorlarimiz
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-2 max-w-2xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.id}
              className={`group relative w-full aspect-[8/3] rounded-xl border border-border/30 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              } hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02]`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-500 z-10" />
              
              {/* Blur overlay on hover */}
              <div className="absolute inset-0 backdrop-blur-0 group-hover:backdrop-blur-[2px] transition-all duration-500 z-20" />

              {sponsor.image ? (
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[1px]"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                    {sponsor.logo}
                  </div>
                </div>
              )}

              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent z-30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

