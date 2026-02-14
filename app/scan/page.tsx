"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScanInterface } from "@/components/scan-interface"

export default function ScanPage() {
  return (
    <div className="min-h-screen page-inner-bg">
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">Xavfli kontentni tekshiring</h1>
              <p className="text-lg text-white/80">
                URL, matn, rasm, audio yoki APK faylni yuklang va sun'iy intellekt real vaqtda tahlil qiladi
              </p>
            </div>

            <ScanInterface />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
