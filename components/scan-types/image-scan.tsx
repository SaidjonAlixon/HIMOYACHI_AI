"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Upload, X } from "lucide-react"
import { useRouter } from "next/navigation"

export function ImageScan() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isScanning, setIsScanning] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (!selectedFile.type.startsWith("image/")) {
        setError("Faqat rasm fayllarini yuklash mumkin")
        return
      }
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError("Fayl hajmi 10MB dan oshmasligi kerak")
        return
      }
      setError("")
      setFile(selectedFile)
      setPreview(URL.createObjectURL(selectedFile))
    }
  }

  const handleRemove = () => {
    setFile(null)
    setPreview(null)
  }

  const handleScan = async () => {
    if (!file) {
      setError("Rasm yuklang")
      return
    }

    setError("")
    setIsScanning(true)

    // Simulate API call
    setTimeout(() => {
      const jobId = Math.random().toString(36).substring(7)
      router.push(`/result/${jobId}`)
    }, 3000)
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Rasm yuklash</Label>

        {!preview ? (
          <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-background p-12 transition-colors hover:border-primary">
            <Upload className="mb-4 h-12 w-12 text-muted-foreground" />
            <p className="mb-2 text-sm font-medium text-foreground">Rasm yuklash uchun bosing</p>
            <p className="text-xs text-muted-foreground">PNG, JPG yoki JPEG (maks. 10MB)</p>
            <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} disabled={isScanning} />
          </label>
        ) : (
          <div className="relative rounded-lg border border-border bg-background p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2"
              onClick={handleRemove}
              disabled={isScanning}
            >
              <X className="h-4 w-4" />
            </Button>
            <img
              src={preview || "/placeholder.svg"}
              alt="Preview"
              className="mx-auto max-h-64 rounded-lg object-contain"
            />
            <p className="mt-2 text-center text-sm text-muted-foreground">{file?.name}</p>
          </div>
        )}

        <p className="text-sm text-muted-foreground">Screenshot yoki shubhali rasm yuklang, OCR bilan tahlil qilamiz</p>
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
