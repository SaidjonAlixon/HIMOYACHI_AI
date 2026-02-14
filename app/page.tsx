import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorks } from "@/components/how-it-works"
import { BenefitsSection } from "@/components/benefits-section"
import { FraudCasesSection } from "@/components/fraud-cases-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { BrandsSection } from "@/components/brands-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen page-home-bg">
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <HowItWorks />
          <FraudCasesSection />
          <BenefitsSection />
          <TestimonialsSection />
          {/* Bosh homiylar va Brendlar – yopiq, ko‘rinmaydi, lekin o‘chirilmaydi */}
          <div className="hidden" aria-hidden>
            <SponsorsSection />
            <div aria-hidden className="invisible h-0 overflow-hidden">
              <div className="h-px w-full rotate-45 bg-[#00ff41]" />
            </div>
            <BrandsSection />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
