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
  CreditCard,
  TrendingDown,
  Shield,
  Clock,
  Users
} from "lucide-react"

export default function DebtConsolidationPage() {
  const [showMainForm, setShowMainForm] = useState(false)

  const benefits = [
    {
      icon: <CreditCard className="h-6 w-6" />, 
      title: "Lower Monthly Payments",
      description: "Combine multiple debts into one manageable payment"
    },
    {
      icon: <TrendingDown className="h-6 w-6" />, 
      title: "Reduce Interest Rates",
      description: "Save money by lowering your overall interest rate"
    },
    {
      icon: <Shield className="h-6 w-6" />, 
      title: "No Hidden Fees",
      description: "Transparent and simple process without surprises"
    },
    {
      icon: <Clock className="h-6 w-6" />, 
      title: "Quick Approvals",
      description: "Get approved and consolidate your debt in 24-48h"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header showForm={showMainForm} setShowForm={setShowMainForm} />

      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Hero Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4">
                Consolidate Your Debt into One Easy Payment
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Take Control of Your <span className="text-emerald-600">Debt</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Simplify your finances, lower your payments, and regain peace of mind.
              </p>
              <div className="flex justify-center mb-6">
                <Button 
                  onClick={() => setShowMainForm(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Start Your Consolidation
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                Checking your rates won't affect your credit score
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
                  Debt Consolidation Application
                </h2>
                <p className="text-gray-600 mb-8 text-center">
                  Take the first step towards financial freedom
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
                Why Consolidate With Us?
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

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Simplify Your Debt?
              </h2>
              <p className="text-xl text-emerald-100 mb-8">
                Join thousands who’ve regained financial control
              </p>
              <div className="flex justify-center">
                <Button 
                  onClick={() => setShowMainForm(true)}
                  className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 font-semibold"
                >
                  Consolidate Now
                </Button>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-emerald-100">
                <span className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  40,000+ Satisfied Clients
                </span>
                <span className="flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Secure & Private
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Fast Processing
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