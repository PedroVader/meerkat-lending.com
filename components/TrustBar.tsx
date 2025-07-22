import React from "react"
import { Shield, Users, Lock, Award } from "lucide-react"

export default function TrustBar(): React.JSX.Element {
  return (
    <section className="bg-gray-50 py-8 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 text-gray-600">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-emerald-600" />
            <span className="font-medium">256-bit SSL Encryption</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-emerald-600" />
            <span className="font-medium">500,000+ happy customers</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="h-5 w-5 text-emerald-600" />
            <span className="font-medium">Your information is secure</span>
          </div>
        </div>
      </div>
    </section>
  )
}