import React from "react"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, MessageCircle } from "lucide-react"

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div>
                <span className="text-2xl font-bold">Meerkat Lending</span>
                <p className="text-xs text-gray-400">Your financial future starts here</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We connect people like you with the best loans in the market. 
              Our mission is to make credit access simple, transparent, and fair.
            </p>
            <div className="flex space-x-4">
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                <Shield className="h-3 w-3 mr-1" />
                SSL 256-bit
              </Badge>
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                <Award className="h-3 w-3 mr-1" />
                A+ BBB
              </Badge>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">Products</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Personal loans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Debt consolidation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business loans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Home improvement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emergency loans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help center</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Financial blog</a></li> {/* Enlace al blog */}
              <li><a href="#" className="hover:text-white transition-colors">Loan calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Glossary</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>24/7 Live chat</span>
              </li>
              <li className="text-sm">
                Monday - Friday: 8am - 8pm EST<br />
                Saturday - Sunday: 9am - 5pm EST
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h5 className="font-semibold text-emerald-400">Important Legal Information</h5>
              <p className="text-sm text-gray-400 leading-relaxed">
                <strong className="text-gray-300">APR Disclosure:</strong> Annual percentage rates (APR) range from 5.99% to 35.99%. 
                The actual APR will depend on factors such as credit score, credit history, income, and debt-to-income ratio.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                <strong className="text-gray-300">Representative Example:</strong> A $10,000 loan with an APR of 11.99% and a 
                5-year term would result in 60 monthly payments of $222.44 and a total repayment amount of $13,346.40.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="font-semibold text-emerald-400">Terms & Conditions</h5>
              <p className="text-sm text-gray-400 leading-relaxed">
                <strong className="text-gray-300">Eligibility:</strong> You must be at least 18 years old, a U.S. citizen or permanent resident, 
                have a valid bank account, and regular income. Approval is not guaranteed and is subject to verification.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                <strong className="text-gray-300">Privacy:</strong> We protect your personal information with bank-level encryption. 
                We never sell your data. Read our full <a href="#" className="text-emerald-400 hover:text-emerald-300">Privacy Policy</a>.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Meerkat Lending, LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">CCPA Notice</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Do Not Sell My Info</a>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
            <p className="text-xs text-gray-500 text-center">
              Meerkat Lending is not a direct lender. We connect consumers with participating lenders based on the information provided. 
              Not all applicants will be approved. Credit verification may be required. California: Loans are subject to 
              regulations by the California Department of Financial Protection and Innovation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
