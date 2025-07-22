import React from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface HeaderProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

export default function Header({ showForm, setShowForm }: HeaderProps): React.JSX.Element {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-4">
          <a href="/">
            <img
              src="/meerkat.jpeg" // sustituye con la ruta real de tu logo
              alt="Meerkat Lending Logo"
              className="h-10 w-auto"
            />
          </a>
          <div>
            <a href="/">
              <span className="text-2xl font-bold text-gray-900">Meerkat Lending</span>
            </a>
            <p className="text-xs text-gray-600">Your financial future starts here</p>
          </div>
        </div>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 font-medium">How it works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 font-medium">Success stories</a>
            <a href="#FAQ" className="text-gray-700 hover:text-emerald-600 font-medium">FAQ</a>
          </div>
        </div>
      </div>
    </header>
  )
}