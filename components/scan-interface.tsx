"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UrlScan } from "@/components/scan-types/url-scan"
import { TextScan } from "@/components/scan-types/text-scan"
import { ImageScan } from "@/components/scan-types/image-scan"
import { AudioScan } from "@/components/scan-types/audio-scan"
import { ApkScan } from "@/components/scan-types/apk-scan"
import { Link2, FileText, ImageIcon, Mic, Smartphone } from "lucide-react"

export function ScanInterface() {
  const [activeTab, setActiveTab] = useState("url")

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-card-foreground">Tekshirish turi</CardTitle>
        <CardDescription className="text-muted-foreground">
          Tekshirmoqchi bo'lgan kontent turini tanlang
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 gap-3 bg-muted/30 pt-2 pb-4 px-4 backdrop-blur-md border border-border/50 rounded-xl min-h-[60px] items-start place-items-start -mt-4 transition-all duration-300">
            <TabsTrigger 
              value="url" 
              className="group flex items-center justify-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-500 ease-in-out border-2 border-transparent data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:shadow-lg data-[state=active]:shadow-primary/30 data-[state=active]:backdrop-blur-sm data-[state=active]:scale-105 hover:bg-primary/10 hover:text-foreground hover:scale-[1.02] hover:border-primary/50 active:scale-95 self-start"
            >
              <Link2 className="h-4 w-4 transition-all duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-12" />
              <span className="hidden sm:inline">URL</span>
            </TabsTrigger>
            <TabsTrigger 
              value="text" 
              className="group flex items-center justify-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-500 ease-in-out border-2 border-transparent data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:shadow-lg data-[state=active]:shadow-primary/30 data-[state=active]:backdrop-blur-sm data-[state=active]:scale-105 hover:bg-primary/10 hover:text-foreground hover:scale-[1.02] hover:border-primary/50 active:scale-95 self-start"
            >
              <FileText className="h-4 w-4 transition-all duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-12" />
              <span className="hidden sm:inline">Matn</span>
            </TabsTrigger>
            <TabsTrigger 
              value="image" 
              className="group flex items-center justify-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-500 ease-in-out border-2 border-transparent data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:shadow-lg data-[state=active]:shadow-primary/30 data-[state=active]:backdrop-blur-sm data-[state=active]:scale-105 hover:bg-primary/10 hover:text-foreground hover:scale-[1.02] hover:border-primary/50 active:scale-95 self-start"
            >
              <ImageIcon className="h-4 w-4 transition-all duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-12" />
              <span className="hidden sm:inline">Rasm</span>
            </TabsTrigger>
            <TabsTrigger 
              value="audio" 
              className="group flex items-center justify-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-500 ease-in-out border-2 border-transparent data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:shadow-lg data-[state=active]:shadow-primary/30 data-[state=active]:backdrop-blur-sm data-[state=active]:scale-105 hover:bg-primary/10 hover:text-foreground hover:scale-[1.02] hover:border-primary/50 active:scale-95 self-start"
            >
              <Mic className="h-4 w-4 transition-all duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-12" />
              <span className="hidden sm:inline">Audio</span>
            </TabsTrigger>
            <TabsTrigger 
              value="apk" 
              className="group flex items-center justify-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-500 ease-in-out border-2 border-transparent data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:shadow-lg data-[state=active]:shadow-primary/30 data-[state=active]:backdrop-blur-sm data-[state=active]:scale-105 hover:bg-primary/10 hover:text-foreground hover:scale-[1.02] hover:border-primary/50 active:scale-95 self-start"
            >
              <Smartphone className="h-4 w-4 transition-all duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-12" />
              <span className="hidden sm:inline">APK</span>
            </TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <TabsContent value="url" className="mt-0">
              <UrlScan />
            </TabsContent>
            <TabsContent value="text" className="mt-0">
              <TextScan />
            </TabsContent>
            <TabsContent value="image" className="mt-0">
              <ImageScan />
            </TabsContent>
            <TabsContent value="audio" className="mt-0">
              <AudioScan />
            </TabsContent>
            <TabsContent value="apk" className="mt-0">
              <ApkScan />
            </TabsContent>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}
