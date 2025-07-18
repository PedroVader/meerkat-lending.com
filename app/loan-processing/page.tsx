"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle2, 
  FileSearch,
  TrendingUp,
  Building2,
  Mail,
  Phone,
  ArrowRight,
  Sparkles,
  Building2 as BuildingIcon
} from "lucide-react"

export default function LoanProcessingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [approvalPercentage] = useState(Math.floor(Math.random() * (95 - 75 + 1)) + 75)

  const processingSteps = [
    { text: "Securing your connection", subtext: "256-bit encryption active" },
    { text: "Verifying your information", subtext: "Identity confirmed" },
    { text: "Checking credit profile", subtext: "No impact to your score" },
    { text: "Analyzing financial data", subtext: "Income verified" },
    { text: "Reviewing with lenders", subtext: "Finding best rates" },
    { text: "Finalizing your results", subtext: "Almost complete" }
  ]

  // Progress ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          return 100
        }
        return p + 2
      })
    }, 120)
    return () => clearInterval(interval)
  }, [])

  // Redirect when progress hits 100
  useEffect(() => {
    if (progress === 100) {
      const t = setTimeout(() => router.push("/thank-you"), 800)
      return () => clearTimeout(t)
    }
  }, [progress, router])

  // Update current step
  useEffect(() => {
    const stepProgress = Math.floor((progress / 100) * processingSteps.length)
    setCurrentStep(Math.min(stepProgress, processingSteps.length - 1))
  }, [progress, processingSteps.length])

  // ---------- 1) LOADING VIEW ----------
  if (progress < 100) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardContent className="p-8 text-center">
            <Sparkles className="mx-auto h-12 w-12 text-emerald-500 animate-pulse mb-4" />
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Processing your application
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Please wait while we securely review your information.
            </p>

            <Progress value={progress} className="mb-2" />
            <p className="text-sm font-medium text-emerald-700">
              {processingSteps[currentStep]?.text}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {processingSteps[currentStep]?.subtext}
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  // ---------- 2) FINAL RESULTS VIEW ----------
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      {/* Decorative dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-bounce" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-emerald-500 rounded-full animate-bounce delay-100" />
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-emerald-300 rounded-full animate-bounce delay-200" />
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-emerald-600 rounded-full animate-bounce delay-300" />
      </div>

      <div className="relative flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-2xl shadow-2xl border-0 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-6 text-white text-center">
            <p className="text-emerald-100">Your application has been processed</p>
          </div>

          <CardContent className="p-8">
            {/* Approval score */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center">
                  <div>
                    <p className="text-4xl font-bold text-emerald-600">{approvalPercentage}%</p>
                    <p className="text-xs text-emerald-700 font-medium">Approval Rate</p>
                  </div>
                </div>
                <Badge className="absolute -top-2 -right-2 bg-emerald-600 text-white border-0">
                  High Score!
                </Badge>
              </div>
            </div>

            {/* Main message */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Great News! Your Pre-Qualification Looks Strong
              </h2>
              <div className="bg-emerald-50 rounded-lg p-4 text-sm text-emerald-800">
                <CheckCircle2 className="h-5 w-5 inline mr-2" />
                We've matched you with {Math.floor(Math.random() * 4) + 3} lenders offering competitive rates
              </div>
            </div>

            {/* Next steps */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <FileSearch className="h-5 w-5 mr-2 text-emerald-600" />
                What Happens Next?
              </h3>
              <ol className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="font-bold text-emerald-600 mr-2">1.</span>
                  <div>
                    <p className="font-medium text-gray-900">Review Your Offers</p>
                    <p className="text-gray-600">Our lending partners will review your application within 24-48 hours</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-emerald-600 mr-2">2.</span>
                  <div>
                    <p className="font-medium text-gray-900">Receive Personalized Rates</p>
                    <p className="text-gray-600">You'll get emails with your actual rates and terms</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-emerald-600 mr-2">3.</span>
                  <div>
                    <p className="font-medium text-gray-900">Choose Your Best Option</p>
                    <p className="text-gray-600">Compare offers and select the one that fits your needs</p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Contact info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 text-emerald-600 mr-3" />
                  <div>
                    <p className="text-gray-500">Check your email</p>
                    <p className="font-medium text-gray-900">Confirmation sent</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 text-emerald-600 mr-3" />
                  <div>
                    <p className="text-gray-500">Questions?</p>
                    <p className="font-medium text-gray-900">1-800-MEERKAT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action button */}
            <div className="flex justify-center">
              <Button 
                onClick={() => router.push('/')}
                variant="outline"
                className="border-gray-300"
              >
                Return Home
              </Button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-6">
              This is a soft credit inquiry and won't affect your credit score. 
              Final approval and rates subject to lender verification.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}