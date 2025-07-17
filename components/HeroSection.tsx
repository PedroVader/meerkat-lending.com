import React from "react"
import { Button } from "@/components/ui/button"
import { Star, Phone } from "lucide-react"
import MultistepLoanForm from "../components/form-steps/multiStepLoanForm"

interface HeroSectionProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

export default function HeroSection({ showForm, setShowForm }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, #10b981 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Title + subtitle */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-emerald-100 text-emerald-700 text-sm font-medium px-4 py-2 rounded-full mb-4">
                <Star className="h-4 w-4 mr-1" />
                4.9/5 rating based on 12,847 reviews
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto lg:mx-0 mb-4">
                The loan you need,{" "}
                <span className="text-emerald-600 relative">
                  within your reach
                  <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 200 12">
                    <path d="M0 6 Q50 0 100 6 T200 6" stroke="#10b981" strokeWidth="4" fill="none" />
                  </svg>
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Secure a Loan Today, Build a Better Tomorrow
              </p>
            </div>

            {/* Image card */}
            <div className="relative bg-white rounded-3xl p-6 shadow-2xl max-w-xl mx-auto lg:mx-0">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-4 ring-emerald-100">
                  <img
                    src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop"
                    alt="Happy family celebrating loan approval"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-3 -right-3 bg-emerald-500 text-white rounded-full px-4 py-2 shadow-lg z-10">
                  <span className="text-sm font-bold">✓ Pre-Approved</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { label: "Loan amounts", value: "$1K-100K" },
                  { label: "APR from", value: "5.99%" },
                  { label: "Fast funding", value: "24h" },
                  { label: "Hidden fees", value: "0" },
                ].map((item, i) => (
                  <div className="text-center bg-gray-50 rounded-xl p-4" key={i}>
                    <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                    <p className="text-xs text-gray-600">{item.label}</p>
                  </div>
                ))}
              </div>

              {!showForm && (
                <div className="mt-6">
                  <Button
                    onClick={() => setShowForm(true)}
                    size="lg"
                    className="group w-full bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Get my rate now
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative flex justify-center">
            {/* Progreso decorativo */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-2 text-sm text-emerald-600 font-semibold z-10 border border-gray-100">
              5% Complete
            </div>

            <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl border border-gray-100 p-6">
              {showForm ? (
                <MultistepLoanForm onClose={() => setShowForm(false)} />
              ) : (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Ready to get started?</h2>
                  <p className="text-lg text-gray-600 mb-4">
                    Quick application, instant pre-approval, funds in your account within 24 hours.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => setShowForm(true)}
                      size="lg"
                      className="group bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
                    >
                      Start Application
                      <Star className="ml-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-emerald-300 hover:border-emerald-600 text-emerald-700 hover:text-emerald-800 px-8 py-6 text-lg font-semibold rounded-full bg-emerald-50 hover:bg-emerald-100"
                    >
                      Talk to advisor
                    </Button>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 pt-4">
                    <div className="bg-white rounded-2xl p-4 shadow text-center">
                      <div className="text-2xl font-bold text-emerald-600 mb-1">2.3M+</div>
                      <div className="text-xs text-gray-600">Loans funded</div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow text-center">
                      <div className="text-2xl font-bold text-emerald-600 mb-1">A+</div>
                      <div className="text-xs text-gray-600">BBB Rating</div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow text-center">
                      <div className="text-2xl font-bold text-emerald-600 mb-1">24h</div>
                      <div className="text-xs text-gray-600">Fast funding</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
