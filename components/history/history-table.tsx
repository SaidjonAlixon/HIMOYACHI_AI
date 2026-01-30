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
        <Badge variant="outline" className="border-green-500 text-green-500">
          Xavfsiz ({score})
        </Badge>
      )
    }
    if (label === "suspicious") {
      return (
        <Badge variant="outline" className="border-yellow-500 text-yellow-500">
          Shubhali ({score})
        </Badge>
      )
    }
    return (
      <Badge variant="outline" className="border-red-500 text-red-500">
        Xavfli ({score})
      </Badge>
    )
  }

  if (history.length === 0) {
    return (
      <Card className="border-border bg-card">
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground">Hech qanday tekshiruv topilmadi</p>
          <Button asChild className="mt-4">
            <Link href="/scan">Birinchi tekshiruvni boshlang</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border bg-card">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Turi</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Kontent</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Natija</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Sana</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Harakat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {history.map((item) => {
                const Icon = getTypeIcon(item.type)
                return (
                  <tr key={item.id} className="transition-colors hover:bg-muted/30">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-foreground">{getTypeLabel(item.type)}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="max-w-xs">
                        <p className="truncate text-sm text-foreground">{item.snippet}</p>
                        <p className="text-xs text-muted-foreground">ID: {item.id}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4">{getLabelBadge(item.label, item.score)}</td>
                    <td className="px-4 py-4 text-sm text-muted-foreground">
                      {new Date(item.date).toLocaleDateString("uz-UZ", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <Button variant="ghost" size="sm" asChild>
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
