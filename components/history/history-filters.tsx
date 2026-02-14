"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface HistoryFiltersProps {
  history: any[]
  onFilterChange: (filtered: any[]) => void
}

export function HistoryFilters({ history, onFilterChange }: HistoryFiltersProps) {
  const [typeFilter, setTypeFilter] = useState("all")
  const [labelFilter, setLabelFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const applyFilters = () => {
    let filtered = [...history]

    if (typeFilter !== "all") {
      filtered = filtered.filter((item) => item.type === typeFilter)
    }

    if (labelFilter !== "all") {
      filtered = filtered.filter((item) => item.label === labelFilter)
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.id.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    onFilterChange(filtered)
  }

  const resetFilters = () => {
    setTypeFilter("all")
    setLabelFilter("all")
    setSearchQuery("")
    onFilterChange(history)
  }

  return (
    <Card className="border-2 border-[rgba(0,255,65,0.3)] bg-black/40 backdrop-blur-sm">
      <CardContent className="pt-6">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="space-y-2">
            <Label htmlFor="type" className="text-white/90">Turi</Label>
            <Select
              value={typeFilter}
              onValueChange={(value) => {
                setTypeFilter(value)
                setTimeout(applyFilters, 0)
              }}
            >
              <SelectTrigger id="type" className="bg-black/40 border-[rgba(0,255,65,0.35)] text-white [&>span]:text-white/90">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="border-[rgba(0,255,65,0.3)] bg-black/95">
                <SelectItem value="all">Barchasi</SelectItem>
                <SelectItem value="url">URL</SelectItem>
                <SelectItem value="text">Matn</SelectItem>
                <SelectItem value="image">Rasm</SelectItem>
                <SelectItem value="audio">Audio</SelectItem>
                <SelectItem value="apk">APK</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="label" className="text-white/90">Xavf darajasi</Label>
            <Select
              value={labelFilter}
              onValueChange={(value) => {
                setLabelFilter(value)
                setTimeout(applyFilters, 0)
              }}
            >
              <SelectTrigger id="label" className="bg-black/40 border-[rgba(0,255,65,0.35)] text-white [&>span]:text-white/90">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="border-[rgba(0,255,65,0.3)] bg-black/95">
                <SelectItem value="all">Barchasi</SelectItem>
                <SelectItem value="benign">Xavfsiz</SelectItem>
                <SelectItem value="suspicious">Shubhali</SelectItem>
                <SelectItem value="malicious">Xavfli</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="search" className="text-white/90">Qidirish</Label>
            <div className="flex gap-2">
              <Input
                id="search"
                placeholder="ID yoki kontent bo'yicha qidirish..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setTimeout(applyFilters, 0)
                }}
                className="bg-black/40 border-[rgba(0,255,65,0.35)] text-white placeholder:text-white/50 focus-visible:ring-[#00ff41] focus-visible:border-[#00ff41]"
              />
              {(typeFilter !== "all" || labelFilter !== "all" || searchQuery) && (
                <Button variant="outline" size="icon" onClick={resetFilters} className="border-[#00ff41] text-[#00ff41] hover:bg-[rgba(0,255,65,0.1)]">
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
