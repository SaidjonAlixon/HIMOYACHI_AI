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

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      setError("URL http:// yoki https:// bilan boshlanishi kerak")
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
        <Label htmlFor="url">URL manzili</Label>
        <Input
          id="url"
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={isScanning}
          className="bg-background"
        />
        <p className="text-sm text-muted-foreground">Tekshirmoqchi bo'lgan sayt yoki havola manzilini kiriting</p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Button onClick={handleScan} disabled={isScanning} className="w-full" size="lg">
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
