import React, { useState, useEffect } from 'react';

function RandomApprovedCount() {
  const [approvedCount, setApprovedCount] = useState(15) // Valor fijo inicial
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Marcar que estamos en el cliente
    setIsClient(true)
    
    // Establecer valor inicial aleatorio después del montaje
    setApprovedCount(Math.floor(Math.random() * 18) + 8)
    
    const updateCount = () => {
      // Cambios más pequeños y realistas
      const change = Math.floor(Math.random() * 3) - 1 // -1, 0, or 1
      setApprovedCount(prev => {
        const newCount = prev + change
        // Mantener en rango realista (5-30)
        return Math.max(5, Math.min(30, newCount))
      })
    }

    // Actualizar cada 45-75 segundos (más realista)
    const interval = setInterval(updateCount, Math.random() * 30000 + 45000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="inline-flex items-center bg-white/10 backdrop-blur text-white text-sm font-medium px-4 py-2 rounded-full mb-8">
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
      <span className="transition-all duration-500">
        <span className="inline-block transition-all duration-300 transform">
          {approvedCount}
        </span> people got approved in the last hour
      </span>
    </div>
  )
}

interface CTASectionProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

export default function CTASection({ setShowForm }: CTASectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Real-time stat with random number */}
          <RandomApprovedCount />
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Alright, let's do this thing
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Seriously, you're 2 minutes away from knowing exactly how much you can save. What are you waiting for?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
  onClick={() => {
    setShowForm(true)
    const formSection = document.getElementById("form-container")
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" })
    }
  }}
  className="group bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
>
  Yes, check my rate
  <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</button>

            <a href="#FAQ">
              <button className="text-white/80 hover:text-white hover:bg-white/10 px-8 py-6 text-lg font-medium rounded-full backdrop-blur inline-flex items-center justify-center">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.477 8-9.999 8a9.957 9.957 0 01-4.314-1.074L3 20l1.074-3.686A9.958 9.958 0 013 12c0-5.523 4.477-10 10-10s10 4.477 10 10z" />
                </svg>
                I have questions first
              </button>
            </a>
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
                  <svg key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
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