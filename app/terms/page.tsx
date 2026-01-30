import { Shield, FileText, AlertCircle, Scale } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Foydalanish Shartlari - HIMOYACHI AI",
  description: "HIMOYACHI AI xizmatlaridan foydalanish shartlari va qoidalari",
}

export default function TermsPage() {
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
            <h1 className="mb-4 text-4xl font-bold tracking-tight">Foydalanish Shartlari</h1>
            <p className="text-muted-foreground">Oxirgi yangilangan: {new Date().toLocaleDateString("uz-UZ")}</p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold">
                <FileText className="h-6 w-6 text-primary" />
                Umumiy Qoidalar
              </h2>
              <p className="text-muted-foreground">
                HIMOYACHI AI xizmatlaridan foydalanish orqali siz ushbu Foydalanish Shartlariga rozilik bildirasiz. Agar
                siz bu shartlarga rozi bo'lmasangiz, xizmatlardan foydalanmang.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold">
                <Scale className="h-6 w-6 text-primary" />
                Xizmatlar
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>HIMOYACHI AI quyidagi xizmatlarni taqdim etadi:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>URL manzillarini phishing va firibgarlikka tekshirish</li>
                  <li>Matn xabarlarini spam va firibgarlikka tahlil qilish</li>
                  <li>Rasmlarni deepfake va soxtalikka tekshirish</li>
                  <li>Audio fayllarni manipulyatsiyaga tekshirish</li>
                  <li>APK fayllarni zararli kod va zaifliklarni aniqlash</li>
                  <li>API orqali integratsiya imkoniyatlari</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Foydalanuvchi Mas'uliyati</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>Foydalanuvchi sifatida siz quyidagilarni qilishga majbursiz:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Hisob ma'lumotlarini xavfsiz saqlash</li>
                  <li>Xizmatlardan qonuniy maqsadlarda foydalanish</li>
                  <li>Boshqa foydalanuvchilarning huquqlarini hurmat qilish</li>
                  <li>Noto'g'ri yoki soxta ma'lumot bermaslik</li>
                  <li>Xizmat tizimlarini buzishga urinmaslik</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold">
                <AlertCircle className="h-6 w-6 text-primary" />
                Taqiqlangan Harakatlar
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p>Quyidagi harakatlar qat'iyan man etiladi:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Xizmatlarni noto'g'ri yoki noqonuniy maqsadlarda ishlatish</li>
                  <li>API limitlarini aylanib o'tishga urinish</li>
                  <li>Boshqa foydalanuvchi hisobiga ruxsatsiz kirish</li>
                  <li>Zararli dasturlar yoki virus yuklash</li>
                  <li>Xizmat ishlashiga xalaqit berish (DDoS va boshqalar)</li>
                  <li>Intellektual mulk huquqlarini buzish</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Intellektual Mulk</h2>
              <p className="text-muted-foreground">
                Barcha xizmat, dasturiy ta'minot, dizayn va kontent HIMOYACHI AI ning intellektual mulkidir. Ularni
                nusxalash, tarqatish yoki modifikatsiya qilish uchun yozma ruxsat talab qilinadi.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">To'lovlar va Qaytarish</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">To'lovlar</h3>
                  <p>
                    Pullik rejalar uchun to'lovlar oldindan amalga oshiriladi. Tariflar veb-saytda ko'rsatilgan va
                    vaqti-vaqti bilan o'zgarishi mumkin.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Qaytarish</h3>
                  <p>
                    Xizmat sifatidan norozi bo'lsangiz, 14 kun ichida to'liq qaytarib olishingiz mumkin. API orqali
                    foydalanilgan xizmatlar uchun qaytarish mumkin emas.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Mas'uliyat Cheklovi</h2>
              <p className="text-muted-foreground">
                HIMOYACHI AI xizmatlaridan foydalanish natijasida yuzaga kelgan har qanday to'g'ridan-to'g'ri yoki
                bilvosita zarar uchun javobgar emas. Xizmatlar "bor holda" taqdim etiladi va 100% aniqlik
                kafolatlanmaydi.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Hisobni Yopish</h2>
              <p className="text-muted-foreground">
                Biz ushbu shartlarni buzgan foydalanuvchilarning hisobini ogohlantirmasdan yopish huquqini o'zida
                saqlaymiz. Siz istalgan vaqtda o'z hisobingizni yopishingiz mumkin.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Shartlarga O'zgartirishlar</h2>
              <p className="text-muted-foreground">
                Biz ushbu Foydalanish Shartlarini istalgan vaqtda o'zgartirish huquqini saqlab qolamiz. Muhim
                o'zgarishlar haqida email orqali xabardor qilamiz. O'zgarishlardan keyin xizmatdan foydalanishda davom
                etish yangi shartlarni qabul qilganligingizni bildiradi.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-semibold">Qonun va Yurisdiktsiya</h2>
              <p className="text-muted-foreground">
                Ushbu Shartlar O'zbekiston Respublikasi qonunlariga muvofiq tartibga solinadi. Har qanday nizolar
                O'zbekiston Respublikasi sudlarida hal qilinadi.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Bog'lanish</h2>
              <p className="text-muted-foreground">
                Foydalanish Shartlari haqida savollar bo'lsa, biz bilan bog'laning:{" "}
                <a href="mailto:legal@himoyachi.ai" className="text-primary hover:underline">
                  legal@himoyachi.ai
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
