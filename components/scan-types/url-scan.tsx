"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Search } from "lucide-react"
import { useRouter } from "next/navigation"

export function UrlScan() {
  const [url, setUrl] = useState("")
  const [isScanning, setIsScanning] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleScan = async () => {
    if (!url.trim()) {
      setError("URL kiriting")
      return
    }

    let urlToCheck = url.trim()
    if (!urlToCheck.startsWith("http://") && !urlToCheck.startsWith("https://")) {
      urlToCheck = `https://${urlToCheck}`
    }

    setError("")
    setIsScanning(true)

    try {
      const res = await fetch("/api/scan/url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: urlToCheck }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Tekshirishda xatolik")
        setIsScanning(false)
        return
      }

      if (data.id) {
        router.push(`/result/${data.id}`)
      } else {
        setError("Natija olinmadi")
        setIsScanning(false)
      }
    } catch {
      setError("Serverga ulanishda xatolik. Qaytadan urinib ko'ring.")
      setIsScanning(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="url" className="text-white">URL manzili</Label>
        <Input
          id="url"
          type="url"
          placeholder="https://example.com yoki example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={isScanning}
          className="bg-black/40 border-[rgba(0,255,65,0.35)] text-white placeholder:text-white/50 focus-visible:ring-[#00ff41] focus-visible:border-[#00ff41]"
        />
        <p className="text-sm text-white/70">Tekshirmoqchi bo'lgan sayt yoki havola manzilini kiriting. Havola real vaqtda tahlil qilinadi.</p>
      </div>

      {error && (
        <Alert variant="destructive" className="border-red-500/50 bg-red-500/10">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Button
        onClick={handleScan}
        disabled={isScanning}
        className="w-full bg-[#00ff41] text-black hover:bg-[#00ff41]/90 hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] border-0"
        size="lg"
      >
        {isScanning ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Tekshirilmoqda...
          </>
        ) : (
          <>
            <Search className="mr-2 h-4 w-4" />
            Tekshirish
          </>
        )}
      </Button>
    </div>
  )
}
