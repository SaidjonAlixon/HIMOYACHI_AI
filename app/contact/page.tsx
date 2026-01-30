import { Shield, Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export const metadata = {
  title: "Bog'lanish - HIMOYACHI AI",
  description: "HIMOYACHI AI bilan bog'laning. Savollaringizga javob berishga tayyormiz",
}

export default function ContactPage() {
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
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight">Biz Bilan Bog'laning</h1>
            <p className="text-xl text-muted-foreground">Savollaringiz bormi? Biz sizga yordam berishga tayyormiz</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Xabar Yuboring</CardTitle>
                  <CardDescription>Formani to'ldiring va biz tez orada siz bilan bog'lanamiz</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Ism</Label>
                        <Input id="firstName" placeholder="Ismingiz" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Familiya</Label>
                        <Input id="lastName" placeholder="Familiyangiz" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="email@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon (ixtiyoriy)</Label>
                      <Input id="phone" type="tel" placeholder="+998 90 123 45 67" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Mavzu</Label>
                      <Input id="subject" placeholder="Xabar mavzusi" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Xabar</Label>
                      <Textarea id="message" placeholder="Xabaringizni yozing..." rows={6} />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Xabar Yuborish
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Aloqa Ma'lumotlari</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <a
                        href="mailto:support@himoyachi.ai"
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        support@himoyachi.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Telefon</div>
                      <a href="tel:+998712345678" className="text-sm text-muted-foreground hover:text-foreground">
                        +998 71 234 56 78
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Manzil</div>
                      <p className="text-sm text-muted-foreground">
                        Toshkent, O'zbekiston
                        <br />
                        Amir Temur ko'chasi, 108
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-lg">Ish Vaqti</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dushanba - Juma</span>
                    <span className="font-semibold">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shanba</span>
                    <span className="font-semibold">10:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Yakshanba</span>
                    <span className="font-semibold">Dam olish</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
