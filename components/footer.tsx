import Link from "next/link"
import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-[rgba(0,255,65,0.2)] bg-black/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2 text-white hover:text-[#00ff41] transition-colors">
              <Shield className="h-6 w-6 text-[#00ff41]" />
              <span className="text-lg font-bold">HIMOYACHI AI</span>
            </Link>
            <p className="text-sm text-white/80">
              Real vaqt rejimida firibgarlik va phishing xavfini aniqlash platformasi
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-[#00ff41]">Mahsulot</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/scan" className="hover:text-[#00ff41] transition-colors">
                  Tekshirish
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#00ff41] transition-colors">
                  Tariflar
                </Link>
              </li>
              <li>
                <Link href="/api-docs" className="hover:text-[#00ff41] transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-[#00ff41]">Kompaniya</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/about" className="hover:text-[#00ff41] transition-colors">
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00ff41] transition-colors">
                  Aloqa
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#00ff41] transition-colors">
                  Karyera
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-[#00ff41]">Huquqiy</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/privacy" className="hover:text-[#00ff41] transition-colors">
                  Maxfiylik siyosati
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#00ff41] transition-colors">
                  Foydalanish shartlari
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-[rgba(0,255,65,0.15)] pt-8 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} HIMOYACHI AI. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}
