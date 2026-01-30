"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Cookie Banner */}
      <div className="relative w-full max-w-2xl rounded-2xl border border-primary/20 bg-background/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
        <button
          onClick={declineCookies}
          className="absolute right-4 top-4 rounded-lg p-2 hover:bg-muted/50 transition-colors"
          aria-label="Yopish"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-primary/10 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2">Cookie-fayllardan foydalanish</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Biz sizga eng yaxshi tajriba taqdim etish, sayt funksiyalarini ta'minlash va xizmatlarimizni yaxshilash
                uchun cookie-fayllardan foydalanamiz. Cookie-fayllar sizning brauzeringizda saqlanadigan kichik matn
                fayllaridir va saytimizdan foydalanish tajribangizni yaxshilashga yordam beradi.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button variant="outline" onClick={declineCookies} className="w-full sm:w-auto bg-transparent">
              Rad etish
            </Button>
            <Button onClick={acceptCookies} className="w-full sm:w-auto bg-primary hover:bg-primary/90">
              Qabul qilish
            </Button>
          </div>

          <div className="border-t border-border pt-3">
            <p className="text-xs text-muted-foreground">
              Davom etish orqali siz bizning{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Maxfiylik Siyosati
              </a>{" "}
              va{" "}
              <a href="/terms" className="text-primary hover:underline">
                Foydalanish Shartlari
              </a>
              miz bilan tanishdingiz va ularni qabul qilasiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
