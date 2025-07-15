import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Star } from "lucide-react"

interface CTASectionProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

export default function CTASection({ showForm, setShowForm }: CTASectionProps): React.JSX.Element {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Real-time stat */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur text-white text-sm font-medium px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
            <span>14 people got approved in the last hour</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Alright, let's do this thing
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Seriously, you're 2 minutes away from knowing exactly how much you can save. What are you waiting for?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={() => setShowForm(true)}
              size="lg"
              className="group bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Yes, check my rate
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white/80 hover:text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-full backdrop-blur"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              I have questions first
            </Button>
          </div>
          
          {/* Trust signals with personality */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center">
              Bank-level secure (the good kind)
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center">
              Rated 4.9/5 by real humans
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center">
              Most people done in 3 mins
            </span>
          </div>
          
          {/* Subtle urgency without being pushy */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm">
              P.S. - Rates change daily. Today's offers expire at midnight EST. 
              <span className="text-emerald-400 font-medium ml-1">Just saying.</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating testimonial */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="bg-white/10 backdrop-blur rounded-lg p-4 max-w-xs transform rotate-3 hover:rotate-0 transition-transform">
          <div className="flex items-start space-x-3">
            <img 
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop" 
              alt="Recent customer"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="flex space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-white/80">"Got my rate in 2 mins, money next day. Why did I wait so long?"</p>
              <p className="text-xs text-white/60 mt-1">- Mike D., 10 mins ago</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}