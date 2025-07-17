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
            <div>
              <a href="/"><span className="text-2xl font-bold text-gray-900">Meerkat Lending</span></a>
              <p className="text-xs text-gray-600">Your financial future starts here</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">How it works</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">Success stories</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium">FAQ</a>
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              <MessageCircle className="h-4 w-4 mr-2" />
              Live chat
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}