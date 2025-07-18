import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, CheckCircle, DollarSign, Clock, Award, Heart, ArrowRight } from "lucide-react"

interface TestimonialsSectionProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

export default function TestimonialsSection({ showForm, setShowForm }: TestimonialsSectionProps): React.JSX.Element {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative">
      <div className="container mx-auto px-4">
        {/* Trust metrics bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900">4.9/5</p>
            <div className="flex justify-center space-x-1 my-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-gray-600">12,847 reviews</p>
          </div>
          <div className="text-center border-l border-gray-300 pl-8">
            <p className="text-4xl font-bold text-gray-900">A+</p>
            <p className="text-sm text-gray-600 mt-1">BBB Rating</p>
          </div>
          <div className="text-center border-l border-gray-300 pl-8">
            <p className="text-4xl font-bold text-gray-900">500K+</p>
            <p className="text-sm text-gray-600 mt-1">Happy customers</p>
          </div>
          <div className="text-center border-l border-gray-300 pl-8">
            <p className="text-4xl font-bold text-gray-900">$2.3B</p>
            <p className="text-sm text-gray-600 mt-1">Funded in 2023</p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" id="testimonials">
            Verified reviews from real customers
          </h2>
          <p className="text-xl text-gray-600">See why we're America's most trusted loan marketplace</p>
        </div>

        {/* Main testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          <Card className="bg-white shadow-md hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop" 
                    alt="Amanda Rodriguez"
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-emerald-100"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Amanda Rodriguez</p>
                    <p className="text-xs text-gray-600">Restaurant Owner • Miami, FL</p>
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
                <Badge className="bg-green-50 text-green-700 border-green-200 text-xs">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "Needed working capital for my restaurant expansion. Applied Monday morning, had 5 offers by noon, and $50,000 in my account by Wednesday. The 6.8% rate beats anything my bank offered. Already referring other business owners!"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4 text-xs text-gray-600">
                  <span className="flex items-center">
                    <DollarSign className="h-3 w-3 mr-1" />
                    $50,000
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    48hr funding
                  </span>
                </div>
                <button className="text-xs text-gray-500 hover:text-gray-700">
                  Helpful (47)
                </button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop" 
                    alt="Robert Martinez"
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-emerald-100"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Robert Martinez</p>
                    <p className="text-xs text-gray-600">Software Engineer • Austin, TX</p>
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
                <Badge className="bg-green-50 text-green-700 border-green-200 text-xs">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "Consolidated $35K in credit card debt. My rate dropped from 22% to 9.5% - saving me $450/month! The calculator showed exact savings before I applied. Customer service called to ensure I understood everything. This is how lending should work."
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4 text-xs text-gray-600">
                  <span className="flex items-center">
                    <DollarSign className="h-3 w-3 mr-1" />
                    Saved $450/mo
                  </span>
                  <span className="flex items-center">
                    <Award className="h-3 w-3 mr-1" />
                    9.5% APR
                  </span>
                </div>
                <button className="text-xs text-gray-500 hover:text-gray-700">
                  Helpful (89)
                </button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop" 
                    alt="Lisa Thompson"
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-emerald-100"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Lisa Thompson</p>
                    <p className="text-xs text-gray-600">Teacher • Denver, CO</p>
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
                <Badge className="bg-green-50 text-green-700 border-green-200 text-xs">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "Used $15K for my daughter's wedding. The fixed payments fit perfectly in our budget, and we paid it off 6 months early with NO penalties. The online portal makes payments easy. Couldn't be happier with the experience!"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4 text-xs text-gray-600">
                  <span className="flex items-center">
                    <Heart className="h-3 w-3 mr-1" />
                    Life event
                  </span>
                  <span className="flex items-center">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Paid early
                  </span>
                </div>
                <button className="text-xs text-gray-500 hover:text-gray-700">
                  Helpful (62)
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social proof carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Latest customer activity</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Live updates</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-emerald-100 last:border-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-emerald-700">JM</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Jennifer M. from Seattle, WA</p>
                    <p className="text-xs text-gray-600">Just received $30,000 for home renovation</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">2 minutes ago</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-emerald-100 last:border-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-emerald-700">DK</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">David K. from Chicago, IL</p>
                    <p className="text-xs text-gray-600">Saved $380/month on debt consolidation</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">7 minutes ago</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-emerald-100 last:border-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-emerald-700">SR</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Sarah R. from Phoenix, AZ</p>
                    <p className="text-xs text-gray-600">Approved for $75,000 business expansion loan</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">12 minutes ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Join over half a million Americans who chose smarter lending</p>
          <Button
            onClick={() => setShowForm(true)}
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            Check your rate in 2 minutes
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-xs text-gray-500 mt-3">No impact to credit score • No obligations</p>
        </div>
      </div>
    </section>
  )
}