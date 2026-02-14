"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Shield, Moon, Sun, Menu, ArrowLeft, AlertTriangle } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { href: "/", label: "BOSH SAHIFA" },
    { href: "/scan", label: "TEKSHIRISH" },
    { href: "/history", label: "TARIX" },
    { href: "/pricing", label: "TARIFLAR" },
    { href: "/about", label: "BIZ HAQIMIZDA" },
  ]

  const isHomePage = pathname === "/"

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-[rgba(0,255,65,0.18)] bg-black/80 shadow-[0_0_20px_rgba(0,255,65,0.05)]"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          {/* Mobile Back Button - faqat bosh sahifadan boshqa sahifalarda */}
          {!isHomePage && (
            <Link
              href="/"
              className="md:hidden flex items-center justify-center h-9 w-9 rounded-lg hover:bg-[rgba(0,255,65,0.12)] hover:text-[#00ff41] transition-colors text-white/80"
              aria-label="Bosh sahifaga qaytish"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
          )}
          <Link href="/" className="flex items-center gap-2 text-white hover:text-[#00ff41] transition-colors">
            <Shield className="h-6 w-6 text-[#00ff41]" />
            <span className="text-xl font-bold">HIMOYACHI AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-3 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-lg px-4 py-2 text-sm font-semibold uppercase tracking-wide backdrop-blur-sm transition-all duration-300 ${
                pathname === link.href
                  ? "bg-[rgba(0,255,65,0.12)] text-[#00ff41] border border-[rgba(0,255,65,0.4)] shadow-[0_0_16px_rgba(0,255,65,0.15)]"
                  : "text-white/80 hover:text-[#00ff41] hover:bg-[rgba(0,255,65,0.08)] hover:border hover:border-[rgba(0,255,65,0.25)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9 text-white/80 hover:text-[#00ff41] hover:bg-[rgba(0,255,65,0.1)]">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu ochish</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] border-[rgba(0,255,65,0.2)] bg-black/95">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 text-[#00ff41]">
                <Shield className="h-6 w-6 text-[#00ff41]" />
                <span className="text-xl font-bold">HIMOYACHI AI</span>
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`relative rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide backdrop-blur-sm transition-all duration-300 ${
                    pathname === link.href
                      ? "bg-[rgba(0,255,65,0.12)] text-[#00ff41] border border-[rgba(0,255,65,0.4)]"
                      : "text-white/80 hover:text-[#00ff41] hover:bg-[rgba(0,255,65,0.08)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9 text-white/80 hover:text-[#00ff41] hover:bg-[rgba(0,255,65,0.1)]"
              aria-label="Tema o'zgartirish"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          )}
          <Button variant="ghost" size="sm" asChild className="text-white/80 hover:text-[#00ff41] hover:bg-[rgba(0,255,65,0.1)]">
            <Link href="/login">Kirish</Link>
          </Button>
          <Button size="sm" asChild className="hidden md:inline-flex border-2 border-[#00ff41] bg-[#00ff41] text-black hover:bg-[#00ff41]/90 hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]">
            <Link href="/scan">Tekshirish</Link>
          </Button>
        </div>
      </div>
      {/* Ogohlantirish xabari - faqat bosh sahifada */}
      {pathname === "/" && (
        <div className="w-full overflow-hidden border-t border-amber-400/60 bg-gradient-to-r from-amber-500/15 via-black/90 to-amber-500/15 shadow-[0_0_20px_rgba(251,191,36,0.08)]">
          <div className="flex items-center gap-3 py-2.5 pl-4">
            <AlertTriangle className="h-4 w-4 shrink-0 text-amber-400" aria-hidden />
            <div className="min-w-0 flex-1 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap text-xs font-semibold text-amber-300">
                Sayt test rejimida ishlamoqda, hali barcha imkoniyatlar va funksiyalar qo'shilmagan "AI"lar, faqat DEMO holatni ko'rishingiz mumkin. Tez orada to'liq holatda ishga tushuriladi...! — Sayt test rejimida ishlamoqda, hali barcha imkoniyatlar va funksiyalar qo'shilmagan "AI"lar, faqat DEMO holatni ko'rishingiz mumkin. Tez orada to'liq holatda ishga tushuriladi...!
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
