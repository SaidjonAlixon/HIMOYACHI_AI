"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const brands = [
  { id: 1, name: "Bank Tizimlari", logo: "BT", category: "Bank", image: "/brands/bank-tizimlari.svg" },
  { id: 2, name: "E-Commerce Pro", logo: "EC", category: "E-commerce", image: "/brands/ecommerce-pro.svg" },
  { id: 3, name: "IT Services", logo: "IT", category: "IT", image: "/brands/it-services.svg" },
  { id: 4, name: "FinTech Solutions", logo: "FS", category: "FinTech", image: "/brands/fintech-solutions.svg" },
  { id: 5, name: "Retail Chain", logo: "RC", category: "Retail", image: "/brands/retail-chain.svg" },
  { id: 6, name: "Healthcare Plus", logo: "HP", category: "Healthcare", image: "/brands/healthcare-plus.svg" },
]

export function BrandsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
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

  useEffect(() => {
    // Har 6 sekundda o'zgarish (sekinroq)
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length)
        setIsAnimating(false)
      }, 800)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  // Har safar 3 ta brendni ko'rsatish
  const getVisibleBrands = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % brands.length
      result.push(brands[index])
    }
    return result
  }

  const visibleBrands = getVisibleBrands()

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className={`mb-4 text-3xl font-bold tracking-tight md:text-4xl text-[#00ff41] transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0 animate-fade-in-up" : "opacity-0 translate-y-4"}`}>
            Bizning xizmatlarimizdan foydalanayotgan brendlar
          </h2>
          <p className={`mx-auto max-w-2xl text-lg text-white/80 transition-all duration-1000 ${isVisible ? "opacity-100 animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            Turli sohalardagi yetakchi kompaniyalar bizning platformamizdan foydalanmoqda
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          {visibleBrands.map((brand, idx) => (
            <div
              key={`${brand.id}-${currentIndex}`}
              className={`group relative w-full aspect-[5/2] rounded-xl border-2 border-[#00ff41] bg-black/40 backdrop-blur-sm overflow-hidden transition-all duration-1000 ease-in-out ${
                isAnimating
                  ? "opacity-0 scale-95 translate-y-4 blur-md"
                  : "opacity-100 scale-100 translate-y-0 blur-0"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02]`}
              style={{
                transitionDelay: `${idx * 200}ms`,
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-700 z-10" />
              
              {/* Blur overlay on hover */}
              <div className="absolute inset-0 backdrop-blur-0 group-hover:backdrop-blur-[2px] transition-all duration-700 z-20" />

              {brand.image ? (
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className={`object-cover transition-all duration-1000 group-hover:scale-110 ${
                    isAnimating ? "blur-md" : "blur-0"
                  }`}
                  sizes="(max-width: 768px) 100vw, 200px"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-xl font-bold text-primary transition-all duration-700 group-hover:scale-110 group-hover:bg-primary/30">
                    {brand.logo}
                  </div>
                </div>
              )}

              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent z-30" />
            </div>
          ))}
        </div>

        {/* Auto-scroll indicator */}
        <div className="mt-8 flex justify-center">
          <div className="flex gap-2">
            {brands.map((_, index) => {
              const isActive = index >= currentIndex && index < currentIndex + 3
              return (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true)
                    setTimeout(() => {
                      setCurrentIndex(index)
                      setIsAnimating(false)
                    }, 800)
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-in-out ${
                    isActive
                      ? "w-8 bg-primary shadow-lg shadow-primary/50 scale-110"
                      : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110"
                  }`}
                  aria-label={`Go to brand ${index + 1}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

