"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Shield, Moon, Sun, Menu, ArrowLeft } from "lucide-react"
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
    { href: "/pricing", label: "NARXLAR" },
    { href: "/about", label: "BIZ HAQIMIZDA" },
    { href: "/solutions", label: "MUAMMO VA YECHIM" },
    { href: "/biz-bilan-siz", label: "BIZ BILAN SIZ" },
  ]

  const isHomePage = pathname === "/"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          {/* Mobile Back Button - faqat bosh sahifadan boshqa sahifalarda */}
          {!isHomePage && (
            <Link
              href="/"
              className="md:hidden flex items-center justify-center h-9 w-9 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Bosh sahifaga qaytish"
            >
              <ArrowLeft className="h-5 w-5 text-foreground" />
            </Link>
          )}
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">HIMOYACHI AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-3 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-lg px-4 py-2 text-sm font-semibold uppercase tracking-wide backdrop-blur-sm transition-all duration-300 hover:bg-primary/10 hover:shadow-md hover:shadow-primary/20 ${
                pathname === link.href
                  ? "bg-primary/15 text-primary shadow-md shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu ochish</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">HIMOYACHI AI</span>
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`relative rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide backdrop-blur-sm transition-all duration-300 hover:bg-primary/10 hover:shadow-md hover:shadow-primary/20 ${
                    pathname === link.href
                      ? "bg-primary/15 text-primary shadow-md shadow-primary/20"
                      : "text-muted-foreground hover:text-foreground"
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
              className="h-9 w-9"
              aria-label="Tema o'zgartirish"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          )}
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Kirish</Link>
          </Button>
          <Button size="sm" asChild className="hidden md:inline-flex">
            <Link href="/scan">Tekshirish</Link>
          </Button>
        </div>
      </div>
      {/* Ogohlantirish xabari - faqat bosh sahifada */}
      {pathname === "/" && (
        <div className="w-full overflow-hidden bg-destructive/10 border-t border-destructive/20">
          <div className="animate-marquee whitespace-nowrap text-xs font-semibold text-destructive py-2">
            ⚠️ Sayt test rejimida ishlamoqda, hali barcha imkoniyatlar qo'shilmagan, faqat holatni ko'rishingiz mumkin. Tez orada to'liq holatda ishga tushuriladi! ⚠️ Sayt test rejimida ishlamoqda, hali barcha imkoniyatlar qo'shilmagan, faqat holatni ko'rishingiz mumkin. Tez orada to'liq holatda ishga tushuriladi!
          </div>
        </div>
      )}
    </header>
  )
}
