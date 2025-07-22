"use client"
import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, CheckCircle, DollarSign, Clock, Award, Heart, ArrowRight } from "lucide-react"

interface TestimonialsSectionProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

const activityData = [
  {
    image: "/images/tom.jpg", // asegúrate que esté en /public/images/
    name: "Jennifer M.",
    location: "Seattle, WA",
    message: "Just received $30,000 for home renovation",
    time: "2 minutes ago",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    image: "/images/tom.jpg", // asegúrate que esté en /public/images/
    name: "David K.",
    location: "Chicago, IL",
    message: "Saved $380/month on debt consolidation",
    time: "7 minutes ago",
    color: "bg-blue-100 text-blue-700",
  },
  {
    image: "/images/tom.jpg", // asegúrate que esté en /public/images/
    name: "Sarah R.",
    location: "Phoenix, AZ",
    message: "Approved for $75,000 business expansion loan",
    time: "12 minutes ago",
    color: "bg-purple-100 text-purple-700",
  },
  {
    image: "/images/tom.jpg", // asegúrate que esté en /public/images/
    name: "Anthony L.",
    location: "Austin, TX",
    message: "Used $15,000 to fund his food truck",
    time: "25 minutes ago",
    color: "bg-orange-100 text-orange-700",
  },
  {
    image: "/images/tom.jpg", // asegúrate que esté en /public/images/
    name: "Laura M.",
    location: "Miami, FL",
    message: "Received $20,000 for a new photography studio",
    time: "32 minutes ago",
    color: "bg-pink-100 text-pink-700",
  },
  {
    image: "/images/tom.jpg", // asegúrate que esté en /public/images/
    name: "Ryan B.",
    location: "Denver, CO",
    message: "Got approved for $40,000 debt consolidation loan",
    time: "45 minutes ago",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    image: "/images/tom.jpg", // asegúrate que esté en /public/images/
    name: "Carmen P.",
    location: "Los Angeles, CA",
    message: "Used $10,000 for emergency medical expenses",
    time: "1 hour ago",
    color: "bg-teal-100 text-teal-700",
  },
  {
    image: "/images/tom.jpg", // asegúrate que esté en /public/images/
    name: "Mark T.",
    location: "Boston, MA",
    message: "Refinanced $50K and lowered interest rate to 8.2%",
    time: "1 hour ago",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    image: "/images/tom.jpg", // asegúrate que esté en /public/images/
    name: "Nina G.",
    location: "Nashville, TN",
    message: "Secured $12,000 for her wedding",
    time: "2 hours ago",
    color: "bg-rose-100 text-rose-700",
  },
  {
    image: "/images/tom.jpg", // asegúrate que esté en /public/images/
    name: "Tom C.",
    location: "San Diego, CA",
    message: "Got $8,500 to cover moving costs",
    time: "2 hours ago",
    color: "bg-amber-100 text-amber-700",
  },
  {
    image: "/images/tom.jpg", // asegúrate que esté en /public/images/
    name: "Emma V.",
    location: "Brooklyn, NY",
    message: "Used $22,000 to renovate her salon",
    time: "3 hours ago",
    color: "bg-lime-100 text-lime-700",
  },
  {
    image: "/images/tom.jpg", // asegúrate que esté en /public/images/
    name: "Jake S.",
    location: "Dallas, TX",
    message: "Approved for $18,000 to buy new tools for his workshop",
    time: "4 hours ago",
    color: "bg-emerald-100 text-emerald-700",
  },
]

function AnimatedCustomerActivity() {
  const [index, setIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % activityData.length)
        setIsVisible(true)
      }, 300)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const current = activityData[index]

  return (
    <div className="relative h-16 overflow-hidden">
      <div 
        className={`absolute inset-0 flex items-center justify-between py-2 border-b border-emerald-100 transition-all duration-300 ease-in-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}
      >
        <div className="flex items-center space-x-3">
        {current.image ? (
  <img 
    src={current.image} 
    alt={current.name} 
    className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-200"
  />
) : (
  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
  </div>
)}

          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900 transition-all duration-300">
              {current.name} from {current.location}
            </p>
            <p className="text-xs text-gray-600 transition-all duration-300">
              {current.message}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500 font-medium">{current.time}</span>
        </div>
      </div>
    </div>
  )
}

function CountUpNumber({ target, duration = 2000 }: { target: number, duration?: number }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(target * easeOutQuart))
      
      if (progress >= 1) {
        clearInterval(timer)
        setCount(target)
      }
    }, 16)
    
    return () => clearInterval(timer)
  }, [target, duration])
  
  return <span>{count.toLocaleString()}</span>
}

export default function TestimonialsSection({ showForm = false, setShowForm = () => {} }: Partial<TestimonialsSectionProps> = {}): React.JSX.Element {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    const element = document.getElementById('testimonials-section')
    if (element) {
      observer.observe(element)
    }
    
    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials-section" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Trust metrics with animation */}
        <div className={`flex flex-wrap justify-center gap-8 mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center group">
            <p className="text-4xl font-bold text-gray-900 mb-1">
              {isVisible ? <CountUpNumber target={4.9} duration={1500} /> : '4.9'}/5
            </p>
            <div className="flex justify-center space-x-1 my-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-5 w-5 fill-yellow-400 text-yellow-400 transition-all duration-300 transform ${
                    isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              +{isVisible ? <CountUpNumber target={1550} /> : '1,550'} reviews
            </p>
          </div>
          
          <div className="text-center border-l border-gray-300 pl-8 group">
            <p className="text-4xl font-bold text-gray-900 mb-1">
              +{isVisible ? <CountUpNumber target={50} /> : '50'}k
            </p>
            <p className="text-sm text-gray-600 mt-1">Happy customers</p>
          </div>
          
          <div className="text-center border-l border-gray-300 pl-8 group">
            <p className="text-4xl font-bold text-gray-900 mb-1">+1M</p>
            <p className="text-sm text-gray-600 mt-1">Funded in 2024</p>
          </div>
        </div>

        <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" id="testimonials">
            Verified reviews from real customers
          </h2>
          <p className="text-xl text-gray-600">See why we're America's most trusted loan marketplace</p>
        </div>

        {/* Testimonials cards with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {/* Testimonial 1 */}
          <Card className={`bg-white shadow-md hover:shadow-xl transition-all duration-500 border-0 relative overflow-hidden group transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '500ms' }}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 transform origin-left transition-all duration-500 group-hover:scale-x-110"></div>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center ring-2 transition-all duration-300 group-hover:ring-emerald-200 overflow-hidden">
                  <img 
                    src="/woman-barbershop.avif" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                  <div>
                    <p className="font-semibold text-gray-900">Emily Carter</p>
                    <p className="text-xs text-gray-600">Barbershop Owner • Austin, TX</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <div className="flex space-x-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">• 2 days ago</span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-green-50 text-green-700 border-green-200 text-xs transition-all duration-300 group-hover:bg-green-100">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
               "Needed working capital to expand my barbershop. Applied Monday morning, had 5 offers by noon, and $50,000 in my account by Wednesday. The 6.8% rate beat anything my bank could offer. I'm already referring other business owners"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4 text-xs text-gray-600">
                  <span className="font-medium">$50,000</span>
                  <span className="flex items-center">
                    48hr funding
                  </span>
                </div>
                <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200">
                  Helpful (47)
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card className={`bg-white shadow-md hover:shadow-xl transition-all duration-500 border-0 relative overflow-hidden group transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '700ms' }}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 transform origin-left transition-all duration-500 group-hover:scale-x-110"></div>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center ring-2 transition-all duration-300 group-hover:ring-emerald-200 overflow-hidden">
                  <img 
                    src="/woman-boutique.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                  <div>
                    <p className="font-semibold text-gray-900">Jessica Morales</p>
                    <p className="text-xs text-gray-600">Clothing boutique • Scottsdale, AZ</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <div className="flex space-x-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">• 1 week ago</span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-green-50 text-green-700 border-green-200 text-xs transition-all duration-300 group-hover:bg-green-100">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "Consolidated $35K in credit card debt from stocking my boutique. My rate dropped from 22% to 9.5%, saving me $450/month! Their support team made sure I understood every step. Finally, lending that actually helps small businesses."
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4 text-xs text-gray-600">
                  <span className="font-medium">Saved $450/mo</span>
                  <span className="flex items-center">
                    9.5% APR
                  </span>
                </div>
                <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200">
                  Helpful (89)
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 3 */}
          <Card className={`bg-white shadow-md hover:shadow-xl transition-all duration-500 border-0 relative overflow-hidden group transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '900ms' }}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 transform origin-left transition-all duration-500 group-hover:scale-x-110"></div>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center ring-2 transition-all duration-300 group-hover:ring-emerald-200 overflow-hidden">
                  <img 
                    src="/wedding.jpeg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                  <div>
                    <p className="font-semibold text-gray-900">Brandon Mitchell</p>
                    <p className="text-xs text-gray-600">Wedding • Savannah, GA</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <div className="flex space-x-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">• 3 weeks ago</span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-green-50 text-green-700 border-green-200 text-xs transition-all duration-300 group-hover:bg-green-100">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "Used $15K for our wedding. The fixed monthly payments were easy to manage, and we paid it off 6 months early with no prepayment penalty. The online portal made everything smooth. Honestly, it took a lot of stress off our big day."
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4 text-xs text-gray-600">
                  <span className="flex items-center font-medium">
                    <Heart className="h-3 w-3 mr-1" />
                    Life event
                  </span>
                </div>
                <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200">
                  Helpful (62)
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Animated Social proof */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 shadow-inner border border-emerald-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Latest customer activity</h3>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-sm text-gray-600">Live updates</span>
              </div>
            </div>
            <AnimatedCustomerActivity />
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-600 mb-6">Join over half a million Americans who chose smarter lending</p>
          <a
          href="/"
          className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
        >
          Check your rate in 2 minutes
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
          <p className="text-xs text-gray-500 mt-4">No impact to credit score • No obligations</p>
        </div>
      </div>
    </section>
  )
}