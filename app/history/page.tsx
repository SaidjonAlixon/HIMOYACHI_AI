"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HistoryTable } from "@/components/history/history-table"
import { HistoryFilters } from "@/components/history/history-filters"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

// Mock history data
function generateMockHistory() {
  const types = ["url", "text", "image", "audio", "apk"]
  const labels = ["benign", "suspicious", "malicious"]

  return Array.from({ length: 15 }, (_, i) => ({
    id: Math.random().toString(36).substring(7),
    type: types[Math.floor(Math.random() * types.length)],
    score: Math.floor(Math.random() * 100),
    label: labels[Math.floor(Math.random() * labels.length)] as "benign" | "suspicious" | "malicious",
    date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
    snippet: "https://example.com/sample-link-" + i,
  }))
}

export default function HistoryPage() {
  const [history] = useState(generateMockHistory())
  const [filteredHistory, setFilteredHistory] = useState(history)

  const handleExport = () => {
    alert("Tarix CSV formatda yuklab olinmoqda...")
  }

  return (
    <div className="min-h-screen page-inner-bg">
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Header */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-[#00ff41]">Tekshiruvlar tarixi</h1>
                <p className="mt-2 text-white/80">O'tgan tekshiruvlaringizni ko'ring va boshqaring</p>
              </div>
              <Button onClick={handleExport} variant="outline" className="border-[#00ff41] text-[#00ff41] hover:bg-[rgba(0,255,65,0.1)]">
                <Download className="mr-2 h-4 w-4" />
                Eksport qilish
              </Button>
            </div>

          {/* Filters */}
          <HistoryFilters history={history} onFilterChange={setFilteredHistory} />

          {/* Table */}
          <HistoryTable history={filteredHistory} />
        </div>
      </main>
        <Footer />
      </div>
    </div>
  )
}
