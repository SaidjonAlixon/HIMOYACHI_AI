"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, FileText, ImageIcon, Link2, Mic, Smartphone } from "lucide-react"
import Link from "next/link"

interface HistoryTableProps {
  history: any[]
}

export function HistoryTable({ history }: HistoryTableProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "url":
        return Link2
      case "text":
        return FileText
      case "image":
        return ImageIcon
      case "audio":
        return Mic
      case "apk":
        return Smartphone
      default:
        return FileText
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "url":
        return "URL"
      case "text":
        return "Matn"
      case "image":
        return "Rasm"
      case "audio":
        return "Audio"
      case "apk":
        return "APK"
      default:
        return type
    }
  }

  const getLabelBadge = (label: string, score: number) => {
    if (label === "benign") {
      return (
        <Badge variant="outline" className="border-[#00ff41] text-[#00ff41] bg-[rgba(0,255,65,0.08)]">
          Xavfsiz ({score})
        </Badge>
      )
    }
    if (label === "suspicious") {
      return (
        <Badge variant="outline" className="border-amber-400 text-amber-400 bg-amber-500/10">
          Shubhali ({score})
        </Badge>
      )
    }
    return (
      <Badge variant="outline" className="border-red-400 text-red-400 bg-red-500/10">
        Xavfli ({score})
      </Badge>
    )
  }

  if (history.length === 0) {
    return (
      <Card className="border-2 border-[rgba(0,255,65,0.3)] bg-black/40 backdrop-blur-sm">
        <CardContent className="py-12 text-center">
          <p className="text-white/80">Hech qanday tekshiruv topilmadi</p>
          <Button asChild className="mt-4 bg-[#00ff41] text-black hover:bg-[#00ff41]/90">
            <Link href="/scan">Birinchi tekshiruvni boshlang</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-2 border-[rgba(0,255,65,0.3)] bg-black/40 backdrop-blur-sm">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-[rgba(0,255,65,0.25)] bg-black/50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-[#00ff41]">Turi</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-[#00ff41]">Kontent</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-[#00ff41]">Natija</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-[#00ff41]">Sana</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-[#00ff41]">Harakat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(0,255,65,0.15)]">
              {history.map((item) => {
                const Icon = getTypeIcon(item.type)
                return (
                  <tr key={item.id} className="transition-colors hover:bg-[rgba(0,255,65,0.06)]">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-[#00ff41]" />
                        <span className="text-sm font-medium text-white">{getTypeLabel(item.type)}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="max-w-xs">
                        <p className="truncate text-sm text-white">{item.snippet}</p>
                        <p className="text-xs text-white/60">ID: {item.id}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4">{getLabelBadge(item.label, item.score)}</td>
                    <td className="px-4 py-4 text-sm text-white/80">
                      {new Date(item.date).toLocaleDateString("uz-UZ", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <Button variant="outline" size="sm" asChild className="border-[rgba(0,255,65,0.4)] text-[#00ff41] hover:bg-[rgba(0,255,65,0.1)]">
                        <Link href={`/result/${item.id}`}>
                          <Eye className="mr-2 h-4 w-4" />
                          Ko'rish
                        </Link>
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
