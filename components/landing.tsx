"use client"

import React, { useState } from "react"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import TrustBar from "../components/TrustBar"
import UseCasesSection from "../components/useCases"
import TestimonialsSection from "../components/TestimonialsSection"
import ProcessSection from "../components/ProcessSection"
import FAQ from "../components/Faq"
import LegalDisclosures from "../components/Legal-Disclousures"
import CTASection from "../components/CTASection"
import Footer from "../components/Footer"

export default function LandingPage() {
  const [showForm, setShowForm] = useState<boolean>(true)

  return (
    <div className="min-h-screen bg-white">
      <Header showForm={showForm} setShowForm={setShowForm} />
      <HeroSection showForm={showForm} setShowForm={setShowForm} />
      <TrustBar />
      <UseCasesSection />
      <TestimonialsSection showForm={showForm} setShowForm={setShowForm} />
      <ProcessSection />
      <FAQ />
      <LegalDisclosures />
      <CTASection showForm={showForm} setShowForm={setShowForm} />
      <Footer />
    </div>
  )
}