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
    <Card className="border-border bg-card">
      <CardContent className="pt-6">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="space-y-2">
            <Label htmlFor="type">Turi</Label>
            <Select
              value={typeFilter}
              onValueChange={(value) => {
                setTypeFilter(value)
                setTimeout(applyFilters, 0)
              }}
            >
              <SelectTrigger id="type" className="bg-background">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
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
            <Label htmlFor="label">Xavf darajasi</Label>
            <Select
              value={labelFilter}
              onValueChange={(value) => {
                setLabelFilter(value)
                setTimeout(applyFilters, 0)
              }}
            >
              <SelectTrigger id="label" className="bg-background">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barchasi</SelectItem>
                <SelectItem value="benign">Xavfsiz</SelectItem>
                <SelectItem value="suspicious">Shubhali</SelectItem>
                <SelectItem value="malicious">Xavfli</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="search">Qidirish</Label>
            <div className="flex gap-2">
              <Input
                id="search"
                placeholder="ID yoki kontent bo'yicha qidirish..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setTimeout(applyFilters, 0)
                }}
                className="bg-background"
              />
              {(typeFilter !== "all" || labelFilter !== "all" || searchQuery) && (
                <Button variant="outline" size="icon" onClick={resetFilters}>
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
