import React from "react"
import { Clock, Users, Award, DollarSign, CheckCircle } from "lucide-react"

export default function ProcessSection(): React.JSX.Element {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 rounded-full mb-4">
            <Clock className="h-4 w-4 mr-2" />
            Average time to funding: 36 hours
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" id="how-it-works">
            Here's exactly what happens next
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No surprises, no fine print. Just a straightforward path to your funds.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-200 hidden md:block"></div>
            
            {/* Timeline items */}
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-white border-4 border-emerald-500 text-emerald-600 rounded-full text-xl font-bold shadow-md group-hover:shadow-lg transition-shadow">
                    1
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-100 group-hover:border-emerald-100 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Tell us what you need</h3>
                      <p className="text-gray-600 mb-4">
                        Quick form - seriously, it's just the basics. How much you need, what it's for, and a bit about you. No essay questions, we promise.
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center text-emerald-600">
                          2 min average
                        </span>
                        <span className="text-gray-500">• Quick form with no credit check</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-white border-4 border-emerald-500 text-emerald-600 rounded-full text-xl font-bold shadow-md group-hover:shadow-lg transition-shadow">
                    2
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-100 group-hover:border-emerald-100 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Watch the magic happen</h3>
                      <p className="text-gray-600 mb-4">
                        Our system talks to 50+ lenders at once (yeah, it's pretty cool).
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center text-emerald-600">
                          50+ lenders compete
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-white border-4 border-emerald-500 text-emerald-600 rounded-full text-xl font-bold shadow-md group-hover:shadow-lg transition-shadow">
                    3
                  </div>
                </div>
                  <div className="flex-1 bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-100 group-hover:border-emerald-100 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">GoQualifi will call you</h3>
                      <p className="text-gray-600 mb-4">
                      All your offers are clearly laid out — APR, monthly payment, total cost. GoQualifi will call you to walk you through the details and present your best match. Take your time, ask questions, and accept only if it works for you. No pressure, ever.</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center text-emerald-600">
                          Side-by-side comparison
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full text-xl font-bold shadow-md group-hover:shadow-lg transition-shadow">
                    4
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-r from-emerald-50 to-white rounded-xl p-6 border border-emerald-200 group-hover:border-emerald-300 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Money hits your account</h3>
                      <p className="text-gray-600 mb-4">
                        Direct deposit, straight to your bank. Most folks see funds next business day. We'll text you updates so you're never wondering "where's my money?"
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center text-emerald-600">
                          Next-day typical
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ teaser */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-6 text-sm text-gray-600">
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-emerald-600" />
                No origination fees
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-emerald-600" />
                Prepay anytime
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1 text-emerald-600" />
                Rate locked for 30 days
              </span>
            </div>
            <p className="mt-6 text-gray-500">
              Still have questions? <a href="#FAQ" className="text-emerald-600 hover:text-emerald-700 font-medium">Check our FAQ</a> 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}