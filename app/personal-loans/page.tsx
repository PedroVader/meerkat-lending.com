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
  Calculator,
  FileText,
  Users
} from "lucide-react"

export default function PersonalLoansPage() {
  const [showForm, setShowForm] = useState(false)
  const [showMainForm, setShowMainForm] = useState(false)

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Competitive Rates",
      description: "Rates starting from 5.99% APR"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Quick Approval",
      description: "Get approved in as little as 24 hours"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "No Hidden Fees",
      description: "Transparent pricing with no surprises"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Flexible Terms",
      description: "Choose from 12 to 84 month terms"
    }
  ]

  const loanPurposes = [
    "Debt Consolidation",
    "Home Improvement", 
    "Medical Expenses",
    "Major Purchase",
    "Emergency Expenses",
    "Vacation",
    "Wedding",
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
                Personal Loans from $1,000 to $50,000
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Get Your Personal Loan in <span className="text-emerald-600">Minutes</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Whether you're consolidating debt, making home improvements, or covering unexpected expenses, 
                we're here to help with fast approvals and competitive rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button 
                  onClick={() => setShowMainForm(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Check Your Rate
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                Checking rates won't affect your credit score
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
                  Start Your Application
                </h2>
                <p className="text-gray-600 mb-8 text-center">
                  It only takes a few minutes to check your personalized rates
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
                Why Choose Meerkat Lending?
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

        {/* Loan Purposes Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Can You Use a Personal Loan For?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Personal loans offer flexibility for various financial needs
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {loanPurposes.map((purpose, index) => (
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

        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Check Your Rate</h3>
                  <p className="text-sm text-gray-600">
                    Fill out our simple form to see your personalized rates without affecting your credit score
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Choose Your Loan</h3>
                  <p className="text-sm text-gray-600">
                    Review your options and select the loan amount and terms that work best for you
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Get Your Funds</h3>
                  <p className="text-sm text-gray-600">
                    Once approved, receive your funds as soon as the next business day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Basic Requirements
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Must be 18 years or older</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Valid U.S. citizenship or residency</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Minimum annual income of $20,000</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Active checking account</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Valid email address and phone number</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Social Security Number for verification</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-emerald-100 mb-8">
                Join thousands of satisfied customers who've achieved their financial goals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setShowMainForm(true)}
                  className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 font-semibold"
                >
                  Check Your Rate Now
                </Button>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-emerald-100">
                <span className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  50,000+ Happy Customers
                </span>
                <span className="flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Bank-Level Security
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  24/7 Support
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