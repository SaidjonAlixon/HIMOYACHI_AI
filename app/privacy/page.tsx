import { Shield, Lock, Eye, FileText } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Maxfiylik Siyosati - HIMOYACHI AI",
  description: "HIMOYACHI AI maxfiylik siyosati va ma'lumotlar himoyasi qoidalari",
}

export default function PrivacyPage() {
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
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-bold tracking-tight">Maxfiylik Siyosati</h1>
            <p className="text-muted-foreground">Oxirgi yangilangan: {new Date().toLocaleDateString("uz-UZ")}</p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold">
                <Lock className="h-6 w-6 text-primary" />
                Kirish
              </h2>
              <p className="text-muted-foreground">
                HIMOYACHI AI ("biz", "bizning") sizning maxfiyligingizni himoya qilishga sodiqdir. Ushbu Maxfiylik
                Siyosati biz qanday ma'lumotlarni to'playmiz, ulardan qanday foydalanamiz va himoya qilamiz, shuningdek
                sizning huquqlaringiz haqida ma'lumot beradi.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold">
                <FileText className="h-6 w-6 text-primary" />
                Yig'iladigan Ma'lumotlar
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Shaxsiy Ma'lumotlar</h3>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>Ism va familiya</li>
                    <li>Email manzil</li>
                    <li>Telefon raqami (agar kiritilgan bo'lsa)</li>
                    <li>Kompaniya nomi (korporativ foydalanuvchilar uchun)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Foydalanish Ma'lumotlari</h3>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>Tekshirilgan URL, matn va fayllar</li>
                    <li>Skanerlash tarixi va natijalari</li>
                    <li>IP manzil va brauzer ma'lumotlari</li>
                    <li>Kirish vaqti va faoliyat loglar</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold">
                <Eye className="h-6 w-6 text-primary" />
                Ma'lumotlardan Foydalanish
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p>Biz sizning ma'lumotlaringizni quyidagi maqsadlarda ishlatamiz:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Xizmatlarni taqdim etish va yaxshilash</li>
                  <li>Foydalanuvchi hisobini boshqarish</li>
                  <li>Texnik yordam va qo'llab-quvvatlash</li>
                  <li>Xavfsizlik tahdidlarini aniqlash va oldini olish</li>
                  <li>AI modellarini o'rgatish va takomillashtirish (anonim holda)</li>
                  <li>Qonuniy talablarni bajarish</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Ma'lumotlar Xavfsizligi</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>Biz sizning ma'lumotlaringizni himoya qilish uchun zamonaviy xavfsizlik choralarini qo'llaymiz:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>SSL/TLS shifrlash orqali ma'lumotlar uzatish</li>
                  <li>Kuchli parollar va ikki faktorli autentifikatsiya</li>
                  <li>Ma'lumotlar bazasini shifrlash</li>
                  <li>Muntazam xavfsizlik auditlari</li>
                  <li>Cheklangan kirish huquqlari</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Sizning Huquqlaringiz</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>Siz quyidagi huquqlarga egasiz:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>O'z ma'lumotlaringizga kirish va ularni ko'rish</li>
                  <li>Noto'g'ri ma'lumotlarni tuzatish</li>
                  <li>Ma'lumotlarni o'chirish ("unutilish huquqi")</li>
                  <li>Ma'lumotlar qayta ishlanishini cheklash</li>
                  <li>Ma'lumotlarni ko'chirish (portabillik)</li>
                  <li>Avtomatlashtirilgan qarorlarga qarshi chiqish</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Cookie-fayllar</h2>
              <p className="text-muted-foreground">
                Biz cookie-fayllardan foydalanuvchi tajribasini yaxshilash, sayt faoliyatini tahlil qilish va
                shaxsiylashtirilgan xizmatlar taqdim etish uchun foydalanamiz. Siz brauzer sozlamalarida
                cookie-fayllarni boshqarishingiz mumkin.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Uchinchi Tomon Xizmatlari</h2>
              <p className="text-muted-foreground">
                Xizmatlarimizda uchinchi tomon xizmatlari integratsiya qilingan bo'lishi mumkin. Ularning o'z maxfiylik
                siyosatlari mavjud va biz ularning amaliyotlari uchun javobgar emasmiz.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">O'zgarishlar</h2>
              <p className="text-muted-foreground">
                Biz vaqti-vaqti bilan ushbu Maxfiylik Siyosatini yangilashimiz mumkin. Muhim o'zgarishlar haqida email
                orqali xabardor qilamiz.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Bog'lanish</h2>
              <p className="text-muted-foreground">
                Maxfiylik siyosati yoki ma'lumotlaringiz haqida savollaringiz bo'lsa, biz bilan bog'laning:{" "}
                <a href="mailto:privacy@himoyachi.ai" className="text-primary hover:underline">
                  privacy@himoyachi.ai
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
