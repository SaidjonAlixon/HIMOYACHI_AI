"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Upload, X, Music } from "lucide-react"
import { useRouter } from "next/navigation"

export function AudioScan() {
  const [file, setFile] = useState<File | null>(null)
  const [isScanning, setIsScanning] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (!selectedFile.type.startsWith("audio/")) {
        setError("Faqat audio fayllarini yuklash mumkin")
        return
      }
      if (selectedFile.size > 25 * 1024 * 1024) {
        setError("Fayl hajmi 25MB dan oshmasligi kerak")
        return
      }
      setError("")
      setFile(selectedFile)
    }
  }

  const handleRemove = () => {
    setFile(null)
  }

  const handleScan = async () => {
    if (!file) {
      setError("Audio fayl yuklang")
      return
    }

    setError("")
    setIsScanning(true)

    // Simulate API call
    setTimeout(() => {
      const jobId = Math.random().toString(36).substring(7)
      router.push(`/result/${jobId}`)
    }, 4000)
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Audio yuklash</Label>

        {!file ? (
          <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-background p-12 transition-colors hover:border-primary">
            <Music className="mb-4 h-12 w-12 text-muted-foreground" />
            <p className="mb-2 text-sm font-medium text-foreground">Audio yuklash uchun bosing</p>
            <p className="text-xs text-muted-foreground">MP3, OGG, WAV (maks. 25MB)</p>
            <input type="file" className="hidden" accept="audio/*" onChange={handleFileChange} disabled={isScanning} />
          </label>
        ) : (
          <div className="flex items-center justify-between rounded-lg border border-border bg-background p-4">
            <div className="flex items-center gap-3">
              <Music className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium text-foreground">{file.name}</p>
                <p className="text-sm text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={handleRemove} disabled={isScanning}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        <p className="text-sm text-muted-foreground">
          Ovoz xabarlari yoki audio faylni yuklang, speech-to-text va spoof detection bilan tahlil qilamiz
        </p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Button onClick={handleScan} disabled={isScanning || !file} className="w-full" size="lg">
        {isScanning ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Tekshirilmoqda...
          </>
        ) : (
          <>
            <Upload className="mr-2 h-4 w-4" />
            Tekshirish
          </>
        )}
      </Button>
    </div>
  )
}
