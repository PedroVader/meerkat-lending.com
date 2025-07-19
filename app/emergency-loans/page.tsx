"use client"

import React, { useState } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import MultiStepLoanForm from "../../components/form-steps/multiStepLoanForm"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  AlertCircle,
  Clock,
  DollarSign,
  Shield,
  CheckCircle2,
  Zap
} from "lucide-react"

export default function EmergencyLoansPage() {
  const [showMainForm, setShowMainForm] = useState(false)

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Access to Funds",
      description: "Get the money you need in as little as 24 hours"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Application",
      description: "Apply online anytime, no waiting required"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Flexible Loan Amounts",
      description: "Borrow from $500 to $50,000 based on your needs"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Private",
      description: "Your data is protected with bank-level security"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header showForm={showMainForm} setShowForm={setShowMainForm} />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4">
              Emergency Loans up to $50,000
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Emergency Cash When You <span className="text-emerald-600">Need It Most</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Unexpected expenses? Medical bills? Car repairs? We're here to help with quick and secure loans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                onClick={() => setShowMainForm(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Apply for Emergency Loan
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Checking your rate won’t affect your credit score
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
                Get Help Fast
              </h2>
              <p className="text-gray-600 mb-8 text-center">
                Apply now and receive funds as soon as the next business day.
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
              Why Choose Our Emergency Loans?
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

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Basic Eligibility
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Must be at least 18 years old</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">U.S. citizen or permanent resident</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Monthly income of at least $1,500</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Valid phone number and email address</span>
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
              Don’t Wait — Get Emergency Help Now
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Thousands have already received financial relief. You could be next.
            </p>
            <Button
              onClick={() => setShowMainForm(true)}
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 font-semibold"
            >
              Apply Instantly
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
