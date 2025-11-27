"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Flag, Share2 } from "lucide-react"
import Link from "next/link"

interface ActionButtonsProps {
  jobId: string
  label: "benign" | "suspicious" | "malicious"
}

export function ActionButtons({ jobId, label }: ActionButtonsProps) {
  const handleDownload = () => {
    // Simulate download
    alert("Hisobot yuklab olinmoqda...")
  }

  const handleEmail = () => {
    alert("Hisobot emailga yuborilmoqda...")
  }

  const handleReport = () => {
    alert("Xabar yuborildi. Rahmat!")
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "HIMOYACHI AI - Tahlil natijasi",
        text: `Xavf darajasi: ${label}`,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Havola nusxalandi!")
    }
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={handleDownload} variant="outline">
        <Download className="mr-2 h-4 w-4" />
        Hisobotni yuklash
      </Button>
      <Button onClick={handleEmail} variant="outline">
        <Mail className="mr-2 h-4 w-4" />
        Emailga yuborish
      </Button>
      {label !== "benign" && (
        <Button onClick={handleReport} variant="outline">
          <Flag className="mr-2 h-4 w-4" />
          Xabar berish
        </Button>
      )}
      <Button onClick={handleShare} variant="outline">
        <Share2 className="mr-2 h-4 w-4" />
        Ulashish
      </Button>
      <Button asChild>
        <Link href="/scan">Yana tekshirish</Link>
      </Button>
    </div>
  )
}
