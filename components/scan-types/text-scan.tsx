"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Search } from "lucide-react"
import { useRouter } from "next/navigation"

export function TextScan() {
  const [text, setText] = useState("")
  const [isScanning, setIsScanning] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleScan = async () => {
    if (!text.trim()) {
      setError("Matn kiriting")
      return
    }

    setError("")
    setIsScanning(true)

    // Simulate API call
    setTimeout(() => {
      const jobId = Math.random().toString(36).substring(7)
      router.push(`/result/${jobId}`)
    }, 2000)
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="text">Matn</Label>
        <Textarea
          id="text"
          placeholder="Tekshirmoqchi bo'lgan xabar yoki matnni kiriting..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={isScanning}
          className="min-h-[200px] bg-background"
        />
        <p className="text-sm text-muted-foreground">
          Telegram, WhatsApp yoki boshqa joydan kelgan shubhali xabarlarni tekshiring
        </p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Button onClick={handleScan} disabled={isScanning || !text.trim()} className="w-full" size="lg">
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
