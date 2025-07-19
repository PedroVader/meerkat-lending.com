"use client"

import React, { useState } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import MultiStepLoanForm from "../../components/form-steps/multiStepLoanForm"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle2, 
  DollarSign, 
  Clock, 
  Shield,
  TrendingUp,
  Briefcase,
  Users
} from "lucide-react"

export default function BusinessLoansPage() {
  const [showForm, setShowForm] = useState(false)
  const [showMainForm, setShowMainForm] = useState(false)

  const benefits = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Business Growth",
      description: "Loans tailored to boost your operations"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Processing",
      description: "Quick application and approval process"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Reliable Support",
      description: "Dedicated support team for your business"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Flexible Funding",
      description: "Loan options from $5,000 to $500,000"
    }
  ]

  const businessPurposes = [
    "Working Capital",
    "Equipment Purchase", 
    "Inventory Financing",
    "Marketing",
    "Business Expansion",
    "Debt Refinance",
    "Other"
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header showForm={showForm} setShowForm={setShowForm} />

      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Hero Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4">
                Business Loans from $5,000 to $500,000
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Fuel Your Business Growth in <span className="text-emerald-600">Minutes</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Secure funding to take your business to the next level with our fast and flexible business loan options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button 
                  onClick={() => setShowMainForm(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Check Your Business Rate
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                Checking your eligibility won't affect your credit score
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        {showMainForm && (
          <section className="py-12 bg-white border-t border-b border-gray-200">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  Start Your Business Application
                </h2>
                <p className="text-gray-600 mb-8 text-center">
                  A few simple steps to check your personalized loan offers
                </p>
                <MultiStepLoanForm onClose={() => setShowMainForm(false)} />
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Why Choose Meerkat Lending for Business?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        {benefit.icon}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Business Loan Purposes */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Can You Use a Business Loan For?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Flexible financing for every stage of your business
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {businessPurposes.map((purpose, index) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className="px-4 py-2 text-sm border-emerald-200 text-emerald-700 hover:bg-emerald-50 cursor-pointer transition-colors"
                  >
                    {purpose}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Elevate Your Business?
              </h2>
              <p className="text-xl text-emerald-100 mb-8">
                Join thousands of businesses that have secured funding with Meerkat
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setShowMainForm(true)}
                  className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 font-semibold"
                >
                  Start Application
                </Button>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-emerald-100">
                <span className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  10,000+ Funded Businesses
                </span>
                <span className="flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Bank-Level Security
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  24/7 Dedicated Support
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}