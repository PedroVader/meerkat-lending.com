"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Lock, 
  CheckCircle2, 
  FileSearch,
  CreditCard,
  UserCheck,
  TrendingUp,
  DollarSign,
  Calendar,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  Building2
} from "lucide-react"

export default function LoanProcessingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [approvalPercentage] = useState(Math.floor(Math.random() * (95 - 75 + 1)) + 75) // Random 75-95%
  
  const processingSteps = [
    { 
      text: "Securing your connection", 
      icon: <Lock className="h-4 w-4" />,
      subtext: "256-bit encryption active"
    },
    { 
      text: "Verifying your information", 
      icon: <UserCheck className="h-4 w-4" />,
      subtext: "Identity confirmed"
    },
    { 
      text: "Checking credit profile", 
      icon: <CreditCard className="h-4 w-4" />,
      subtext: "No impact to your score"
    },
    { 
      text: "Analyzing financial data", 
      icon: <TrendingUp className="h-4 w-4" />,
      subtext: "Income verified"
    },
    { 
      text: "Reviewing with lenders", 
      icon: <Building2 className="h-4 w-4" />,
      subtext: "Finding best rates"
    },
    { 
      text: "Finalizing your results", 
      icon: <FileSearch className="h-4 w-4" />,
      subtext: "Almost complete"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsComplete(true), 500)
          return 100
        }
        return prev + 2
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const stepProgress = Math.floor((progress / 100) * processingSteps.length)
    setCurrentStep(Math.min(stepProgress, processingSteps.length - 1))
  }, [progress])

  if (!isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl shadow-xl border-0">
          <CardContent className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Processing Your Application
              </h1>
              <p className="text-gray-600">
                This usually takes less than 60 seconds
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm font-medium text-emerald-600">{progress}%</span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>

            {/* Processing Steps */}
            <div className="space-y-4 mb-8">
              {processingSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-3 transition-all duration-500 ${
                    index <= currentStep ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                    index < currentStep 
                      ? 'bg-emerald-600 text-white' 
                      : index === currentStep
                      ? 'bg-emerald-100 text-emerald-600 animate-pulse'
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {index < currentStep ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium transition-all duration-500 ${
                      index <= currentStep ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      {step.text}
                    </p>
                    {index <= currentStep && (
                      <p className="text-xs text-gray-500 mt-0.5">{step.subtext}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Lock className="h-3 w-3" />
                <span>Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                <span>Your Data is Safe</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Results Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      {/* Confetti-like decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-emerald-500 rounded-full animate-bounce delay-100"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-emerald-300 rounded-full animate-bounce delay-200"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-emerald-600 rounded-full animate-bounce delay-300"></div>
      </div>

      <div className="relative flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-2xl shadow-2xl border-0 overflow-hidden">
          {/* Success Banner */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-6 text-white text-center">
            <Sparkles className="h-12 w-12 mx-auto mb-3 animate-pulse" />
            <h1 className="text-3xl font-bold mb-2">Congratulations, {firstName}!</h1>
            <p className="text-emerald-100">Your application has been processed</p>
          </div>

          <CardContent className="p-8">
            {/* Approval Score */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-emerald-600">{approvalPercentage}%</p>
                    <p className="text-xs text-emerald-700 font-medium">Approval Rate</p>
                  </div>
                </div>
                <Badge className="absolute -top-2 -right-2 bg-emerald-600 text-white border-0">
                  High Score!
                </Badge>
              </div>
            </div>

            {/* Main Message */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Great News! Your Pre-Qualification Looks Strong
              </h2>
              <p className="text-gray-600 mb-4">
                Based on your information, you have a <span className="font-semibold text-emerald-600">{approvalPercentage}% chance</span> of 
                being approved for a loan up to <span className="font-semibold">${loanAmount}</span>.
              </p>
              <div className="bg-emerald-50 rounded-lg p-4 text-sm text-emerald-800">
                <CheckCircle2 className="h-5 w-5 inline mr-2" />
                We've matched you with {Math.floor(Math.random() * 4) + 3} lenders offering competitive rates
              </div>
            </div>

            {/* Next Steps */}
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

            {/* Contact Info */}
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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => router.push('/')}
                variant="outline"
                className="flex-1 border-gray-300"
              >
                Return Home
              </Button>
            </div>

            {/* Fine Print */}
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