import { Shield, Key, Code2, BookOpen, Zap, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "API Dokumentatsiyasi - HIMOYACHI AI",
  description: "HIMOYACHI AI API orqali firibgarlikni aniqlash xizmatlarini o'z ilovangizga integratsiya qiling",
}

export default function APIDocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 py-6">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">HIMOYACHI AI</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight">API Dokumentatsiyasi</h1>
            <p className="text-xl text-muted-foreground">
              HIMOYACHI AI xizmatlarini o'z ilovangizga oson integratsiya qiling
            </p>
          </div>

          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                API Kalitini Olish
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">API dan foydalanish uchun avval API kalitini olishingiz kerak:</p>
              <ol className="list-decimal space-y-2 pl-6 text-muted-foreground">
                <li>Hisobingizga kiring yoki ro'yxatdan o'ting</li>
                <li>Sozlamalar bo'limiga o'ting</li>
                <li>"API Kalitlari" bo'limidan yangi kalit yarating</li>
                <li>Kalitni xavfsiz saqlang va hech kimga ko'rsatmang</li>
              </ol>
              <Button asChild className="w-full sm:w-auto">
                <Link href="/pricing">Boshlash</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Asosiy Xususiyatlar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Tez Javob</h4>
                    <p className="text-sm text-muted-foreground">O'rtacha 100ms ichida natija</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Yuqori Aniqlik</h4>
                    <p className="text-sm text-muted-foreground">99.5% aniqlik darajasi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">RESTful API</h4>
                    <p className="text-sm text-muted-foreground">Oddiy va tushunarli</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">24/7 Qo'llab-quvvatlash</h4>
                    <p className="text-sm text-muted-foreground">Doim yordam beramiz</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                Endpointlar
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="mb-2 font-semibold">URL Tekshirish</h4>
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">POST /api/scan/url</code>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Veb-sayt URL manzilini phishing va firibgarlikka tekshiradi
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">Matn Tekshirish</h4>
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">POST /api/scan/text</code>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Matn xabarlarini spam va firibgarlikka tekshiradi</p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">Rasm Tekshirish</h4>
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">POST /api/scan/image</code>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Rasmlarni deepfake va soxta kontentga tekshiradi</p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">Audio Tekshirish</h4>
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">POST /api/scan/audio</code>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Audio fayllarni ovoz klonlash va manipulyatsiyaga tekshiradi
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">APK Tekshirish</h4>
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">POST /api/scan/apk</code>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Android ilovalarini zararli kod va xavfsizlik zaifliklariga tekshiradi
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Misol Kod
              </CardTitle>
              <CardDescription>JavaScript orqali URL tekshirish namunasi</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-muted p-4">
                <pre className="overflow-x-auto text-sm">
                  <code>{`const response = await fetch('https://api.himoyachi.ai/scan/url', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    url: 'https://suspicious-site.com'
  })
});

const data = await response.json();
console.log('Xavf skori:', data.riskScore);`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
