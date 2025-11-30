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
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <FraudCasesSection />
        <BenefitsSection />
        <TestimonialsSection />
        <SponsorsSection />
        <BrandsSection />
      </main>
      <Footer />
    </div>
  )
}
