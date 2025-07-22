"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Phone, User, Building2, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ThankYouPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl border-0 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-6 text-white text-center">
          <CheckCircle2 className="h-12 w-12 mx-auto mb-3 animate-pulse" />
          <h1 className="text-3xl font-bold mb-1">Thank you</h1>
          <p className="text-emerald-100">
            Hi, thanks for the information. Experts from GoQualifi will call you shortly.
          </p>
        </div>

        <CardContent className="p-8 space-y-8">
          {/* What's next section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">What's next:</h2>
            <ol className="space-y-6">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-4">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Initial Review</p>
                  <p className="text-gray-600 text-sm">
                    We'll review your information to identify which lenders might be interested in your profile (1–2 hours).
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Casual Call</p>
                  <p className="text-gray-600 text-sm">
                    We'll give you a call to get to know you better and understand what type of funding you need. Just a relaxed conversation.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-4">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Lender Connection</p>
                  <p className="text-gray-600 text-sm">
                    We'll introduce you to the most suitable lenders so you can speak with them directly about your options.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Blog redirect button */}
          <div className="text-center pt-4">
            <Button
              onClick={() => router.push("/blog")}
              variant="outline"
              size="lg"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
            >
              Visit Our Blog
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Footer note */}
          <p className="text-xs text-gray-500 text-center pt-4">
            You're one step closer to securing the funding you need.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}