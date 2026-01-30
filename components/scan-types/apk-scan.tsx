"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Upload, X, Smartphone } from "lucide-react"
import { useRouter } from "next/navigation"

export function ApkScan() {
  const [file, setFile] = useState<File | null>(null)
  const [isScanning, setIsScanning] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (!selectedFile.name.endsWith(".apk")) {
        setError("Faqat APK fayllarini yuklash mumkin")
        return
      }
      if (selectedFile.size > 100 * 1024 * 1024) {
        setError("Fayl hajmi 100MB dan oshmasligi kerak")
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
      setError("APK fayl yuklang")
      return
    }

    setError("")
    setIsScanning(true)

    // Simulate API call
    setTimeout(() => {
      const jobId = Math.random().toString(36).substring(7)
      router.push(`/result/${jobId}`)
    }, 5000)
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>APK yuklash</Label>

        {!file ? (
          <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-background p-12 transition-colors hover:border-primary">
            <Smartphone className="mb-4 h-12 w-12 text-muted-foreground" />
            <p className="mb-2 text-sm font-medium text-foreground">APK yuklash uchun bosing</p>
            <p className="text-xs text-muted-foreground">Android APK fayli (maks. 100MB)</p>
            <input type="file" className="hidden" accept=".apk" onChange={handleFileChange} disabled={isScanning} />
          </label>
        ) : (
          <div className="flex items-center justify-between rounded-lg border border-border bg-background p-4">
            <div className="flex items-center gap-3">
              <Smartphone className="h-8 w-8 text-primary" />
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
          Android ilovani yuklang, statik tahlil qilib xavfli ruxsatlar va kodni tekshiramiz
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
