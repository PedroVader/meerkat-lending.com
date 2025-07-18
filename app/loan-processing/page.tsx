"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Shield, 
  Lock, 
  CheckCircle2, 
  FileSearch,
  CreditCard,
  UserCheck,
  TrendingUp,
  Building2
} from "lucide-react"

export default function LoanProcessingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

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
          // Redirigir a thank-you cuando termine
          setTimeout(() => {
            router.push('/thank-you')
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 100)

    return () => clearInterval(interval)
  }, [router])

  useEffect(() => {
    const stepProgress = Math.floor((progress / 100) * processingSteps.length)
    setCurrentStep(Math.min(stepProgress, processingSteps.length - 1))
  }, [progress, processingSteps.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-xl border-0">
        <CardContent className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
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