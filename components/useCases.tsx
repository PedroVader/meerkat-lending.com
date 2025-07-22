import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Briefcase, GraduationCap, Heart } from "lucide-react"  
import { useState, useEffect } from "react"


// Componente interno para mostrar número aleatorio de viewers
function RateViewersCounter() {
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    const random = Math.floor(Math.random() * (800 - 300 + 1)) + 300;
    setViewers(random);
  }, []);

  return (
    <span className="text-sm text-gray-600">
      <span className="font-semibold">{viewers}</span> people checking rates now
    </span>
  );
}

export default function UseCasesSection(): React.JSX.Element {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #10b981 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-amber-50 text-amber-700 text-sm font-medium px-4 py-2 rounded-full mb-4">
            <span>1.3M+ loans funded last year</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real people. Real dreams. <span className="text-emerald-600 relative">Real money.
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                <path d="M0 4 Q50 0 100 4 T200 4" stroke="#10b981" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whatever's on your list, we've probably funded it. Here's what everyone's using their loans for:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white">
            <div className="h-48 overflow-hidden relative">
              <img 
                src="/fixing-house.jpg" 
                alt="Family moving into new home"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
              <div className="absolute top-3 left-3">
                <div className="bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full">
                  #1 MOST POPULAR
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Home className="h-8 w-8 text-emerald-600" />
                <div className="text-right">
                  <p className="text-xs text-gray-500">Avg loan</p>
                  <p className="text-sm font-bold text-gray-900">$24,500</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Fix up the house</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Kitchen remodel? New roof? That bathroom from 1972? Yeah, we've funded it all.
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>$5K - $75K available</span>
                <span className="text-emerald-600 font-medium">6.9% APR avg</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white">
            <div className="h-48 overflow-hidden relative">
              <img 
                src="/mechanic-workshop.jpg" 
                alt="Business owner in his shop"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
              <div className="absolute top-3 right-3">
                <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  HOT 🔥
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Briefcase className="h-8 w-8 text-emerald-600" />
                <div className="text-right">
                  <p className="text-xs text-gray-500">Success rate</p>
                  <p className="text-sm font-bold text-gray-900">89%</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Grow the business</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Inventory, equipment, or finally hiring help. Small business owners love us.
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Up to $100K</span>
                <span className="text-emerald-600 font-medium">Next-day funding</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white">
            <div className="h-48 overflow-hidden relative">
              <img 
                src="/bootcamps.jpg" 
                alt="College student"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <GraduationCap className="h-8 w-8 text-emerald-600" />
                <div className="text-right">
                  <p className="text-xs text-gray-500">Starting at</p>
                  <p className="text-sm font-bold text-gray-900">5.99% APR</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Level up skills</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Bootcamp? Certification? Finally finishing that degree? Invest in yourself.
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Special student rates</span>
                <span className="text-emerald-600 font-medium">No degree required</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white">
            <div className="h-48 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop" 
                alt="Couple planning their wedding"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
              <div className="absolute bottom-3 left-3">
                <div className="bg-white/90 backdrop-blur text-xs px-3 py-1 rounded-full">
                  <Heart className="h-3 w-3 inline mr-1 text-red-500" />
                  Life happens
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Heart className="h-8 w-8 text-emerald-600" />
                <div className="text-right">
                  <p className="text-xs text-gray-500">Funded this month</p>
                  <p className="text-sm font-bold text-gray-900">1.000+</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Big life stuff</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Weddings, babies, moves, divorces. When life throws you a curveball, we're here.
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Flexible terms</span>
                <span className="text-emerald-600 font-medium">Skip-a-payment option</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social proof ticker */}
        <div className="mt-12 flex items-center justify-center">
          <div className="bg-gray-50 rounded-full px-6 py-3 flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Sarah K.</span> just got $15,000 for home renovation
              </span>
            </div>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-600">
            <RateViewersCounter />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}