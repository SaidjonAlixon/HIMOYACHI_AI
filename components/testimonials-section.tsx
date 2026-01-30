"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Aziz Karimov",
    role: "Kichik biznes egasi",
    content: "HIMOYACHI AI sayesida bizning kompaniyamiz bir necha marta firibgarlikdan himoya qilindi. Real vaqt rejimida ogohlantirishlar juda foydali bo'ldi. Tizim ishonchli va samarali ishlayapti.",
    rating: 5,
  },
  {
    id: 2,
    name: "Madina Toshmatova",
    role: "Shaxsiy foydalanuvchi",
    content: "Men ko'p marta phishing xabarlar bilan uchrashganman. HIMOYACHI AI har safar meni ogohlantirib, xavfli xabarlarni bloklab qo'ydi. Endi men o'z ma'lumotlarim xavfsiz ekanligiga ishonaman.",
    rating: 5,
  },
  {
    id: 3,
    name: "Javohir Rahimov",
    role: "IT menejeri",
    content: "Korporativ xavfsizlik uchun HIMOYACHI AI dan foydalanamiz. Email xavfsizligi va API monitoring juda yaxshi ishlayapti. Xodimlarimiz ham tizimdan mamnun. 97.5% aniqlik darajasi haqiqatan ham yuqori.",
    rating: 5,
  },
  {
    id: 4,
    name: "Dilshoda Yusupova",
    role: "Bank xodimi",
    content: "Bankimizda HIMOYACHI AI integratsiyasi natijasida firibgarlik holatlari sezilarli darajada kamaydi. Real vaqt rejimida tranzaksiya tahlili va biometrik identifikatsiya ajoyib ishlayapti. Mijozlarimiz ham xavfsizlikdan mamnun.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sardor Ismoilov",
    role: "Startup asoschisi",
    content: "Bizning startup kompaniyamiz uchun HIMOYACHI AI juda muhim bo'ldi. Chegirmali narxlar va keng imkoniyatlar bizga mos keldi. API integratsiyasi ham oson bo'ldi. Tizimni tavsiya qilaman.",
    rating: 5,
  },
  {
    id: 6,
    name: "Gulnora Alimova",
    role: "E-commerce menejeri",
    content: "Onlayn do'konimizda HIMOYACHI AI sayesida soxta to'lovlar va firibgarlik holatlari kamaydi. Veb-sayt tekshiruvi va real vaqt monitoring juda foydali. Mijozlarimizning ishonchi oshdi.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Har 7 sekundda o'zgarish
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        setIsAnimating(false)
      }, 600)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  // Har safar 3 ta sharhni ko'rsatish (joriy indeksdan boshlab)
  const getVisibleTestimonials = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      result.push(testimonials[index])
    }
    return result
  }

  const visibleTestimonials = getVisibleTestimonials()

  const handleDotClick = (index: number) => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsAnimating(false)
    }, 600)
  }

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Foydalanuvchilarimizning sharhlari
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            HIMOYACHI AI mijozlarimizning xavfsizligini himoya qilishda qanday yordam berayotganini bilib oling
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {visibleTestimonials.map((testimonial, idx) => (
            <Card
              key={`${testimonial.id}-${currentIndex}`}
              className={`border-border/50 bg-card hover:shadow-xl hover:shadow-primary/10 transform transition-all duration-1000 ease-in-out ${
                isAnimating
                  ? "opacity-0 scale-95 translate-y-4 blur-sm"
                  : "opacity-100 scale-100 translate-y-0 blur-0"
              }`}
              style={{
                transitionDelay: `${idx * 200}ms`,
              }}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 fill-yellow-400 text-yellow-400 transition-all duration-700 ${
                        isAnimating ? "scale-0 opacity-0" : "scale-100 opacity-100"
                      }`}
                      style={{
                        transitionDelay: `${(idx * 200) + (i * 80)}ms`,
                      }}
                    />
                  ))}
                </div>
                <Quote
                  className={`mb-3 h-6 w-6 text-primary opacity-50 transition-all duration-700 ${
                    isAnimating ? "scale-0 rotate-180 opacity-0" : "scale-100 rotate-0 opacity-50"
                  }`}
                  style={{
                    transitionDelay: `${idx * 200 + 300}ms`,
                  }}
                />
                <p
                  className={`mb-4 text-sm text-muted-foreground leading-relaxed transition-all duration-700 ${
                    isAnimating ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
                  }`}
                  style={{
                    transitionDelay: `${idx * 200 + 400}ms`,
                  }}
                >
                  {testimonial.content}
                </p>
                <div className="border-t border-border/50 pt-4">
                  <p
                    className={`font-semibold text-foreground transition-all duration-700 ${
                      isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                    }`}
                    style={{
                      transitionDelay: `${idx * 200 + 500}ms`,
                    }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className={`text-xs text-muted-foreground transition-all duration-700 ${
                      isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                    }`}
                    style={{
                      transitionDelay: `${idx * 200 + 600}ms`,
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => {
            const isActive = index === currentIndex
            return (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-500 ease-in-out ${
                  isActive
                    ? "w-8 bg-primary shadow-lg shadow-primary/50 scale-110"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

